import React from "react"
import { Field, ErrorMessage, useFormikContext  } from "formik"
import  {
  FieldStyled,
  ErrorStyled,
  ContainerRow,
  Container,
  Label,
  RequiredLabel,
  CheckboxContainer,
  CheckboxLabel
} from "./StyledInput"

export const Input = ({name,labelSim,nameIdSim , labelNao, nameIdNao, type = "", label, required, ...props}) => {
  const { values, setFieldValue } = useFormikContext()

  const handleCheckboxChangeSim = (event) => {
    const { checked } = event.target
    setFieldValue(name, checked ? true : values[name] === nameIdNao ? false : undefined)
  }

  const handleCheckboxChangeNao = (event) => {
    const { checked } = event.target
    setFieldValue(name, checked ? false: values[name] === nameIdSim ? true : undefined)
  }

  if (type === "checkbox") {
    return (
      <Container>
        <CheckboxContainer>
          <CheckboxLabel htmlFor={name}>
            {label || name}
            {required && <RequiredLabel>*</RequiredLabel>}
          </CheckboxLabel>

          <ContainerRow>
            <ContainerRow>
              <Label htmlFor={name}> {labelSim || nameIdSim} </Label>
              <Field 
                type="checkbox" 
                id={nameIdSim} 
                name={name} 
                checked={values[name] === true}
                onChange={handleCheckboxChangeSim}
              />
            </ContainerRow>

            <ContainerRow>
              <Label htmlFor={name}> {labelNao || nameIdNao} </Label>
              <Field 
                type="checkbox" 
                id={nameIdNao}
                name={name}
                checked={values[name] === false}
                onChange={handleCheckboxChangeNao}
              />
            </ContainerRow>
          </ContainerRow>
        </CheckboxContainer>
        <ErrorMessage name={name} component={ErrorStyled} />
      </Container>
    )
  } return (
    <Container>
      <Label htmlFor={name}>
        {label || name}
        {required && <RequiredLabel>*</RequiredLabel>}
      </Label>
      <Field as={FieldStyled} name={name} id={name} type={type} {...props}/>
      <ErrorMessage name={name} component={ErrorStyled}/>
    </Container>
  )
}
