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

export  {
  FieldStyled,
  ErrorStyled,
  ContainerRow,
  Container,
  Label,
  RequiredLabel,
  CheckboxContainer,
  CheckboxLabel
}
