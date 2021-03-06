import React from 'react'
import Toggle from 'react-toggle'
function GluuToogle({ name, formik, value }) {
  return (
    <Toggle
      name={name}
      value={value}
      defaultChecked={value}
      onChange={formik.handleChange}
    />
  )
}

export default GluuToogle
