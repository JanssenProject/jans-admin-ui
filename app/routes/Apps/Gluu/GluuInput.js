import React from 'react'
import { Col, FormGroup, Input } from '../../../components'
import GluuLabel from './GluuLabel'
function GluuInput({ label, name, type, value, required, lsize, rsize }) {
  return (
    <FormGroup row>
      <GluuLabel label={label} size={lsize} required={required} />
      <Col sm={rsize}>
        <Input id={name} type={type} defaultValue={value} />
      </Col>
    </FormGroup>
  )
}

GluuInput.defaultProps = {
  type: 'text',
  lsize: 3,
  rsize: 9,
  required: false,
}

export default GluuInput
