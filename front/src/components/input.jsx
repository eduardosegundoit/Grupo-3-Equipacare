import React from "react"
import { Field, ErrorMessage, useFormikContext  } from "formik"
import styled from "styled-components"

const FieldStyled = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid;
  outline:none;
  font-size:18px;
  width: 90%
`
const ErrorStyled = styled.span`
  color:red;
  font-size:14px;
`

const ContainerRow = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 15px;
  margin-top: 3px;
  margin-left: 5px;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-bottom: 15px;
  width: 100%;
`
const Label = styled.label`
  text-transform: capitalize;
`
const RequiredLabel = styled.span`
  color:red;
`
const CheckboxContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`
const CheckboxLabel = styled.label`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  text-transform: capitalize;
`

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
