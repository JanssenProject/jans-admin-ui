import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Container, CardBody, Card } from '../../../../app/components'
import AttributeForm from './AttributeForm'
import BlockUi from 'react-block-ui'
import { editAttribute } from '../../redux/actions/AttributeActions'
import { useTranslation } from 'react-i18next'

function AttributeEditPage({ item, loading, dispatch }) {
  const { t } = useTranslation()
  if (!item.attributeValidation) {
    item.attributeValidation = {
      maxLength: null,
      regexp: null,
      minLength: null,
    }
  }
  const history = useHistory()
  function customHandleSubmit(data) {
    if (data) {
      dispatch(editAttribute(data))
      history.push('/attributes')
    }
  }
  return (
    <React.Fragment>
      <Container>
        <BlockUi
          tag="div"
          blocking={loading}
          keepInView={true}
          renderChildren={true}
          message={t("Performing the request, please wait!")}
        >
          <Card className="mb-3">
            <CardBody>
              <AttributeForm item={item} customOnSubmit={customHandleSubmit} />
            </CardBody>
          </Card>
        </BlockUi>
      </Container>
    </React.Fragment>
  )
}
const mapStateToProps = (state) => {
  return {
    item: state.attributeReducer.item,
    loading: state.attributeReducer.loading,
    permissions: state.authReducer.permissions,
  }
}
export default connect(mapStateToProps)(AttributeEditPage)
