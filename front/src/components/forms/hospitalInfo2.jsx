import React from 'react'
import { Form, Formik } from "formik"
import { Input } from "./../input"
import { Calculo, Macaco } from "./../forms/axios"
import * as Yup from"yup"
import { Container, Content, Row, Footer, Button } from './StyledComponents'
import { useNavigate } from 'react-router-dom'

const segundosDadosDoHospital = () => {
  const navigate = useNavigate()
  const json =  JSON.parse(localStorage.getItem('formulario1'))

  const initialValues = {
    leitoUti: json?.leitoUti ?? 0,
    leitoInternacao: json?.leitoUti ?? 0,
    leitoRpa: json?.leitoUti ?? 0,
    leitoobservacao: json?.leitoUti ?? 0,
    leitoHospitalDia: json?.leitoUti ?? 0,
    totalDeAutoclaves: json?.leitoUti ?? 0,
    totalDeLavadorasTermo: json?.leitoUti ?? 0
  }

  const validationSchema = Yup.object({
    leitoUti: Yup.number().required("Campo obrigatório").min(1, "Deve ser maior que 0"),
    leitoInternacao: Yup.number().required("Campo obrigatório").min(1, "Deve ser maior que 0"),
    leitoRpa: Yup.number().required("Campo obrigatório").min(1, "Deve ser maior que 0"),
    leitoobservacao: Yup.number().required("Campo obrigatório").min(1, "Deve ser maior que 0"),
    leitoHospitalDia: Yup.number().required("Campo obrigatório").min(1, "Deve ser maior que 0"),
    totalDeAutoclaves: Yup.number().required("Campo obrigatório").min(1, "Deve ser maior que 0"),
    totalDeLavadorasTermo: Yup.number().required("Campo obrigatório").min(1, "Deve ser maior que 0"),
  })


  const handleSaveToLocalStorage = () => {
    const existingValues = JSON.parse(localStorage.getItem('formulario1')) || {}
    const newValues = {
      leitoUti: document.querySelector('#leitoUti').value,
      leitoInternacao: document.querySelector('#leitoInternacao').value,
      leitoRpa: document.querySelector('#leitoRpa').value,
      leitoobservacao: document.querySelector('#leitoobservacao').value,
      leitoHospitalDia: document.querySelector('#leitoHospitalDia').value,
      totalDeAutoclaves: document.querySelector('#totalDeAutoclaves').value,
      totalDeLavadorasTermo: document.querySelector('#totalDeLavadorasTermo').value,
    }
    const updatedValues = { ...existingValues, ...newValues }
    localStorage.setItem('formulario1', JSON.stringify(updatedValues))
  }


  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      handleSaveToLocalStorage()

      await Macaco()
      const calculoResult = await Calculo()
      const { autoclave, lavadora } = calculoResult
      navigate('/tabela', { state: { autoclave, lavadora } })

      setSubmitting(false)

    } catch (error) {
      console.error('Error during calculation:', error)
      setSubmitting(false)
    }
  }

  return (
    <Container>
      <Content>
        <Formik
          id='form'
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {({ isSubmitting}) => (
            <Form style={{width: "90%"}}>
              <Row>
                <Input name="leitoUti" label="leitos de UTI" type="number" required />
                <Input name="leitoInternacao" label="leito de internação" type="number" required />
              </Row>

              <Row>
                <Input name="leitoRpa" label="leitos de RPA" type="number" required />
              </Row>

              <Row>
                <Input name="leitoobservacao" label="leitos de observação" type="number" required />
                <Input name="leitoHospitalDia" label="leitos de hospital dia" type="number" required />
              </Row>
              <Row>
                <Input name="totalDeAutoclaves" label="total de autoclaves" type="number" required />
                <Input name="totalDeLavadorasTermo" label="total de lavadoras termo" type="number" required />
              </Row>
              <Footer>
                <Button type='button' onClick={() => navigate('/hospital1') }>
                  voltar
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  proximo
                </Button>
              </Footer>
            </Form>
          )}
        </Formik>
      </Content>
    </Container>
  )
}

export default segundosDadosDoHospital
