import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Col,
  InputGroup,
  CustomInput,
  Form,
  FormGroup,
  Label,
  Input
} from "./../../../components";
import GluuFooter from "../Gluu/GluuFooter";
import GluuLabel from "../Gluu/GluuLabel";
import TextField from '@material-ui/core/TextField';
import Counter from '../../../components/Widgets/GroupedButtons/Counter'
function CustomScriptForm({ item, scripts, handleSubmit }) {
  const [init, setInit] = useState(false);
  const scriptTypes = [...(new Set(scripts.map(item => item.scriptType)))];
  function toogle() {
    if (!init) {
      setInit(true);
    }
  }
  const formik = useFormik({
    initialValues: {
      name: item.name,
      description: item.description,
      scriptType: item.scriptType,
      programmingLanguage: item.programmingLanguage,
      level: item.level
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Mininum 2 characters")
        .required("Required!"),
      description: Yup.string(),
      scriptType: Yup.string()
        .min(2, "Mininum 2 characters")
        .required("Required!"),
      programmingLanguage: Yup.string()
        .min(3, "This value is required")
        .required("Required!")
    }),
    onSubmit: values => {
      if (typeof values.enabled == 'object') {
        if (values.enabled.length > 0) {
          values.enabled = true;
        } else {
          values.enabled = false;
        }
      }
      values.level = item.level;
      const result = Object.assign(item, values);
      const reqBody = { customScript: result };

      handleSubmit(reqBody);
    }
  });
  function onLevelChange(level) {
    item.level = level;
  }

  return (
    <Form onSubmit={formik.handleSubmit}>
      {/* START Input */}
      {item.inum && (
        <FormGroup row>
          <Label for="name" sm={3}>
            Inum
          </Label>
          <Col sm={9}>
            <Input
              style={{ backgroundColor: "#F5F5F5" }}
              placeholder="Enter the script inum"
              id="inum"
              name="inum"
              disabled
              value={item.inum}
            />
          </Col>
        </FormGroup>
      )}
      <FormGroup row>
        <GluuLabel label="Name" required />
        <Col sm={9}>
          <Input
            placeholder="Enter the script name"
            id="name"
            valid={!formik.errors.name && !formik.touched.name && init}
            name="name"
            defaultValue={item.name}
            onKeyUp={toogle}
            onChange={formik.handleChange}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <GluuLabel label="Description" />
        <Col sm={9}>
          <InputGroup>
            <Input
              placeholder="Enter script description"
              valid={
                !formik.errors.description &&
                !formik.touched.description &&
                init
              }
              id="description"
              defaultValue={item.description}
              onChange={formik.handleChange}
            />
          </InputGroup>
        </Col>
      </FormGroup>

      <FormGroup row>
        <GluuLabel label="Script Type" />
        <Col sm={9}>
          <InputGroup>
            <CustomInput
              type="select"
              id="scriptType"
              name="scriptType"
              defaultValue={item.scriptType}
              onChange={formik.handleChange}
            >
              <option value="">Choose...</option>
              {scriptTypes.map((item, index) => (<option key={index}>{item}</option>))}
            </CustomInput>
          </InputGroup>
        </Col>
      </FormGroup>

      <FormGroup row>
        <GluuLabel label="Programming Language" />
        <Col sm={9}>
          <InputGroup>
            <CustomInput
              type="select"
              id="programmingLanguage"
              name="programmingLanguage"
              disabled
              defaultValue={item.programmingLanguage}
              onChange={formik.handleChange}
            >
              <option value="">Choose...</option>
              <option>PYTHON</option>
              <option>JAVASCRIPT</option>
            </CustomInput>
          </InputGroup>
        </Col>
      </FormGroup>

      <FormGroup row>
        <GluuLabel label="Level" />
        <Col sm={9}>
          <Counter counter={item.level} onCounterChange={(level) => onLevelChange(level)} />
          <Input
            type="hidden"
            id="level"
            defaultValue={item.level}
          />
        </Col>
      </FormGroup>

      <FormGroup row>
        <GluuLabel label="Script" size={3} />
        <Col sm={10}>
          <Input
            placeholder="Script"
            valid={
              !formik.errors.script &&
              !formik.touched.script &&
              init
            }
            type="textarea"
            rows={20}
            id="script"
            name="script"
            defaultValue={item.script}
            onChange={formik.handleChange}
          />
        </Col>
      </FormGroup>

      <FormGroup row>
        <GluuLabel label="Enabled" size={3} />
        <Col sm={1}>
          <Input
            id="enabled"
            name="enabled"
            onChange={formik.handleChange}
            type="checkbox"
            defaultChecked={item.enabled}
          />
        </Col>
      </FormGroup>

      <FormGroup row> <Input
        type="hidden"
        id="configurationProperties"
        defaultValue={item.configurationProperties}
      /></FormGroup>
      <GluuFooter />
    </Form>
  );
}

export default CustomScriptForm;
