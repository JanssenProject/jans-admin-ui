import React from 'react'
import { Container, FormGroup, Input, Col } from '../../../../app/components'
import GluuBooleanSelectBox from '../../../../app/routes/Apps/Gluu/GluuBooleanSelectBox'
import GluuLabel from '../../../../app/routes/Apps/Gluu/GluuLabel'
import GluuTypeAheadWithAdd from '../../../../app/routes/Apps/Gluu/GluuTypeAheadWithAdd'

function ClientAttributesPanel({ client, formik }) {
  const backchannel_uri_id = 'backchannel_uri_id'
  const audience_id = 'audience_id'

  const backchannelLogoutUris = []
  const additionalAudiences = []
  function uriValidator(uri) {
    return uri.startsWith('https://')
  }

  function audienceValidator(aud) {
    return aud != null
  }
  return (
    <Container>
      <FormGroup row>
        <GluuLabel label="Tls Client Auth Subject Dn" />
        <Col sm={9}>
          <Input
            id="tlsClientAuthSubjectDn"
            name="tlsClientAuthSubjectDn"
            defaultValue={client.attributes.tlsClientAuthSubjectDn}
            onChange={formik.handleChange}
          />
        </Col>
      </FormGroup>
      <GluuBooleanSelectBox
        name="runIntrospectionScriptBeforeAccessTokenAsJwtCreationAndIncludeClaims"
        label="Run Introspection Script Before AccessToken As Jwt Creation And Include Claims"
        value={
          client.attributes
            .runIntrospectionScriptBeforeAccessTokenAsJwtCreationAndIncludeClaims
        }
        formik={formik}
        lsize={8}
        rsize={4}
      />
      <GluuBooleanSelectBox
        name="keepClientAuthorizationAfterExpiration"
        label="Keep Client Authorization After Expiration"
        value={client.attributes.keepClientAuthorizationAfterExpiration}
        formik={formik}
        lsize={8}
        rsize={4}
      />
      <GluuBooleanSelectBox
        name="allowSpontaneousScopes"
        label="Allow Spontaneous Scopes"
        value={client.attributes.allowSpontaneousScopes}
        formik={formik}
        lsize={8}
        rsize={4}
      />
      <GluuBooleanSelectBox
        name="backchannelLogoutSessionRequired"
        label="Back Channel Logout Session Required"
        value={client.attributes.backchannelLogoutSessionRequired}
        formik={formik}
        lsize={8}
        rsize={4}
      />
      <GluuTypeAheadWithAdd
        name="backchannelLogoutUri"
        label="Back Channel Logout Uri"
        formik={formik}
        placeholder="Enter a valid uri with pattern https://"
        value={client.attributes.backchannelLogoutUri || []}
        options={backchannelLogoutUris}
        validator={uriValidator}
        inputId={backchannel_uri_id}
      ></GluuTypeAheadWithAdd>
      <GluuTypeAheadWithAdd
        name="additionalAudience"
        label="Additional Audience"
        formik={formik}
        value={client.attributes.additionalAudience || []}
        options={additionalAudiences}
        validator={audienceValidator}
        inputId={audience_id}
      ></GluuTypeAheadWithAdd>
    </Container>
  )
}

export default ClientAttributesPanel
