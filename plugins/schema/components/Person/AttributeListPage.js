import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { Badge } from 'reactstrap'
import GluuDialog from '../../../../app/routes/Apps/Gluu/GluuDialog'
import AttributeDetailPage from './AttributeDetailPage'
import GluuAdvancedSearch from '../../../../app/routes/Apps/Gluu/GluuAdvancedSearch'
import {
  hasPermission,
  ATTRIBUTE_WRITE,
  ATTRIBUTE_READ,
  ATTRIBUTE_DELETE,
} from '../../../../app/utils/PermChecker'
import {
  getAttributes,
  searchAttributes,
  setCurrentItem,
  deleteAttribute,
} from '../../redux/actions/AttributeActions'
import { useTranslation } from 'react-i18next'

function AttributeListPage({ attributes, permissions, loading, dispatch }) {
  const { t } = useTranslation()
  const options = {}
  const [limit, setLimit] = useState(10)
  const [pattern, setPattern] = useState(null)
  useEffect(() => {
    makeOptions()
    dispatch(getAttributes(options))
  }, [])
  const limitId = 'searchLimit'
  const patternId = 'searchPattern'
  const myActions = []

  const history = useHistory()
  const [item, setItem] = useState({})
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)
  function makeOptions() {
    options['limit'] = parseInt(limit)
    if (pattern) {
      options['pattern'] = pattern
    }
  }
  function handleOptionsChange(i) {
    setLimit(document.getElementById(limitId).value)
    setPattern(document.getElementById(patternId).value)
  }
  function handleGoToAttributeEditPage(row) {
    dispatch(setCurrentItem(row))
    return history.push(`/attribute/edit:` + row.inum)
  }
  function handleGoToAttributeViewPage(row) {
    dispatch(setCurrentItem(row))
    return history.push(`/attribute/view:` + row.inum)
  }
  function handleAttribueDelete(row) {
    setItem(row)
    toggle()
  }
  function handleGoToAttributeAddPage() {
    return history.push('/attribute/new')
  }

  if (hasPermission(permissions, ATTRIBUTE_WRITE)) {
    myActions.push((rowData) => ({
      icon: 'edit',
      iconProps: {
        color: 'primary',
        id: 'editAttribute' + rowData.inum,
      },
      tooltip: `${t("Edit Attribute")}`,
      onClick: (event, rowData) => handleGoToAttributeEditPage(rowData),
      disabled: !hasPermission(permissions, ATTRIBUTE_WRITE),
    }))
  }
  if (hasPermission(permissions, ATTRIBUTE_READ)) {
    myActions.push((rowData) => ({
      icon: 'visibility',
      iconProps: {
        color: 'primary',
        id: 'viewAttribute' + rowData.inum,
      },
      tooltip: `${t("View Attribute")}`,
      onClick: (event, rowData) => handleGoToAttributeViewPage(rowData),
      disabled: false,
    }))
  }
  if (hasPermission(permissions, ATTRIBUTE_READ)) {
    myActions.push({
      icon: () => (
        <GluuAdvancedSearch
          limitId={limitId}
          limit={limit}
          patternId={patternId}
          handler={handleOptionsChange}
        />
      ),
      tooltip: `${t("Advanced search options")}`,
      iconProps: { color: 'primary' },
      isFreeAction: true,
      onClick: () => {},
    })
  }
  if (hasPermission(permissions, ATTRIBUTE_READ)) {
    myActions.push({
      icon: 'refresh',
      tooltip: `${t("Refresh Data")}`,
      iconProps: { color: 'primary' },
      isFreeAction: true,
      onClick: () => {
        makeOptions()
        dispatch(searchAttributes(options))
      },
    })
  }
  if (hasPermission(permissions, ATTRIBUTE_DELETE)) {
    myActions.push((rowData) => ({
      icon: 'delete',
      iconProps: {
        color: 'secondary',
        id: 'deleteAttribute' + rowData.inum,
      },
      tooltip: `${t("Delete Attribute")}`,
      onClick: (event, rowData) => handleAttribueDelete(rowData),
      disabled: !hasPermission(permissions, ATTRIBUTE_DELETE),
    }))
  }
  if (hasPermission(permissions, ATTRIBUTE_WRITE)) {
    myActions.push({
      icon: 'add',
      tooltip: `${t("Add Attribute")}`,
      iconProps: { color: 'primary' },
      isFreeAction: true,
      onClick: () => handleGoToAttributeAddPage(),
      disabled: !hasPermission(permissions, ATTRIBUTE_WRITE),
    })
  }

  function getBadgeTheme(status) {
    if (status === 'ACTIVE') {
      return 'primary'
    } else {
      return 'warning'
    }
  }
  function onDeletionConfirmed() {
    dispatch(deleteAttribute(item.inum))
    history.push('/attributes')
    toggle()
  }
  return (
    <React.Fragment>
      {/* START Content */}
      <MaterialTable
        columns={[
          { title: `${t("Inum")}`, field: 'inum' },
          { title: `${t("Display Name")}`, field: 'displayName' },
          {
            title: `${t("Status")}`,
            field: 'status',
            type: 'boolean',
            render: (rowData) => (
              <Badge color={getBadgeTheme(rowData.status)}>
                {rowData.status}
              </Badge>
            ),
          },
        ]}
        data={attributes}
        isLoading={loading}
        title={t("Attributes")}
        actions={myActions}
        options={{
          search: true,
          selection: false,
          searchFieldAlignment: 'left',
          pageSize: 10,
          headerStyle: {
            backgroundColor: '#03a96d',
            color: '#FFF',
            padding: '2px',
            textTransform: 'uppercase',
            fontSize: '18px',
          },
          actionsColumnIndex: -1,
        }}
        detailPanel={(rowData) => {
          return <AttributeDetailPage row={rowData} />
        }}
      />
      {/* END Content */}
      <GluuDialog
        row={item}
        handler={toggle}
        modal={modal}
        subject="attribute"
        onAccept={onDeletionConfirmed}
      />
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    attributes: state.attributeReducer.items,
    loading: state.attributeReducer.loading,
    permissions: state.authReducer.permissions,
  }
}
export default connect(mapStateToProps)(AttributeListPage)
