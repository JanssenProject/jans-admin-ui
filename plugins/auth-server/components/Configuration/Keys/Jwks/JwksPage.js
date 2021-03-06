import React, { useEffect } from 'react'
import { Card, CardBody } from '../../../../../../app/components'
import { getJwks } from '../../../../redux/actions/JwksActions'
import GluuFooter from '../../../../../../app/routes/Apps/Gluu/GluuFooter'
import GluuLabel from '../../../../../../app/routes/Apps/Gluu/GluuLabel'
import GluuLoader from '../../../../../../app/routes/Apps/Gluu/GluuLoader'
import { connect } from 'react-redux'
import JwkItem from './JwkItem'
import { useTranslation } from 'react-i18next'

function JwksPage({ jwks, loading, dispatch }) {
  const { t } = useTranslation()
  useEffect(() => {
    dispatch(getJwks())
  }, [])

  return (
    <GluuLoader blocking={loading}>
      <GluuLabel label="fields.json_web_keys" size={3} />
      <Card>
        <CardBody>
          {Object.keys(jwks).length
            ? Array.from(jwks['keys']).map((item, index) => (
                <JwkItem key={index} item={item} index={index}></JwkItem>
              ))
            : ''}
        </CardBody>
      </Card>
      <GluuFooter hideButtons={{ save: true }} />
    </GluuLoader>
  )
}

const mapStateToProps = (state) => {
  return {
    jwks: state.jwksReducer.jwks,
    loading: state.jwksReducer.loading,
  }
}
export default connect(mapStateToProps)(JwksPage)
