import React, { useEffect } from "react"
import { Field, ErrorMessage, useFormikContext } from "formik"
import styled from "styled-components"

const Label = styled.label`
  text-transform: capitalize;
`

const ErrorStyled = styled.span`
  color: red;
  font-size: 14px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-bottom: 15px;
  width: 100%;
`

export const DiasDaSemana = () => {
  const { values, setFieldValue } = useFormikContext()

  useEffect(() => {
    const allChecked =
      values.diasDaSemana &&
      values.diasDaSemana.length === 7 &&
      !values.diasDaSemana.includes("todos")

    if (allChecked) {
      setFieldValue("diasDaSemana", [
        "todos",
        "seg",
        "ter",
        "qua",
        "qui",
        "sex",
        "sab",
        "dom"
      ])
    }
  }, [values.diasDaSemana, setFieldValue])

  const handleChange = (e) => {
    const { value, checked } = e.target
    let updatedValues = [...(values.diasDaSemana || [])]

    if (value === "todos") {
      if (checked) {
        updatedValues = ["todos", "seg", "ter", "qua", "qui", "sex", "sab", "dom"]
      } else {
        updatedValues = []
      }
    } else {
      if (checked) {
        updatedValues = [...updatedValues, value]
      } else {
        updatedValues = updatedValues.filter((day) => day !== value)
      }

      if (updatedValues.length === 7 && !updatedValues.includes("todos")) {
        updatedValues.push("todos")
      } else if (updatedValues.length < 8) {
        updatedValues = updatedValues.filter((day) => day !== "todos")
      }
    }

    setFieldValue("diasDaSemana", updatedValues)
  }

  return (
    <div>
      <p>As cirurgias serão realizadas em quais dias da semana? {values.diasDaSemana.length >= 8? 7:values.diasDaSemana.length}</p>

      <Container>
        <div>
          <Field
            type="checkbox"
            id="todos"
            name="diasDaSemana"
            value="todos"
            checked={values.diasDaSemana?.includes("todos")}
            onChange={handleChange}
          />
          <Label htmlFor="todos">Todos os dias</Label>
        </div>
        <div>
          <Field
            type="checkbox"
            id="seg"
            name="diasDaSemana"
            value="seg"
            checked={values.diasDaSemana?.includes("seg")}
            onChange={handleChange}
          />
          <Label htmlFor="seg">Segunda</Label>
        </div>
        <div>
          <Field
            type="checkbox"
            id="ter"
            name="diasDaSemana"
            value="ter"
            checked={values.diasDaSemana?.includes("ter")}
            onChange={handleChange}
          />
          <Label htmlFor="ter">Terça</Label>
        </div>
        <div>
          <Field
            type="checkbox"
            id="qua"
            name="diasDaSemana"
            value="qua"
            checked={values.diasDaSemana?.includes("qua")}
            onChange={handleChange}
          />
          <Label htmlFor="qua">Quarta</Label>
        </div>
        <div>
          <Field
            type="checkbox"
            id="qui"
            name="diasDaSemana"
            value="qui"
            checked={values.diasDaSemana?.includes("qui")}
            onChange={handleChange}
          />
          <Label htmlFor="qui">Quinta</Label>
        </div>
        <div>
          <Field
            type="checkbox"
            id="sex"
            name="diasDaSemana"
            value="sex"
            checked={values.diasDaSemana?.includes("sex")}
            onChange={handleChange}
          />
          <Label htmlFor="sex">Sexta</Label>
        </div>
        <div>
          <Field
            type="checkbox"
            id="sab"
            name="diasDaSemana"
            value="sab"
            checked={values.diasDaSemana?.includes("sab")}
            onChange={handleChange}
          />
          <Label htmlFor="sab">Sábado</Label>
        </div>
        <div>
          <Field
            type="checkbox"
            id="dom"
            name="diasDaSemana"
            value="dom"
            checked={values.diasDaSemana?.includes("dom")}
            onChange={handleChange}
          />
          <Label htmlFor="dom">Domingo</Label>
        </div>
        <ErrorMessage name="diasDaSemana" component={ErrorStyled} />
      </Container>
    </div>
  )
}
