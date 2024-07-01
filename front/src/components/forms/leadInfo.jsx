import React from "react"
import { Form, Formik} from "formik"
import { Input } from "./../input"
import * as Yup from"yup"
import { Container, Content, Row, Footer, Button } from './StyledComponents'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Lead = () => {
  const navigate = useNavigate()
  const json =  JSON.parse(localStorage.getItem('formulario1'))

  const initialValues = {
    nomeDoHospital: json?.nomeDoHospital ?? '',
    cnpj: json?.cnpj ?? '',
    email: json?.email ?? '',
    telefone: json?.telefone ?? '',
    nome: json?.nome ?? '',
    cargo: json?.cargo ?? '',
    cep: json?.cep ?? '',
    cidade: json?.cidade ?? '',
    uf: json?.uf ?? '',
  }


  const validationSchema = Yup.object({
    nomeDoHospital: Yup.string().min(3, 'O campo deve ter no mínimo 3 caracteres').required('Campo obrigatório'),
    cnpj: Yup.string().matches(/^\d{14}$/, 'CNPJ deve ter 14 dígitos').required('Campo obrigatório'),
    email: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
    telefone: Yup.string().matches(/^\d{10,13}$/, 'O telefone deve ter entre 10 e 13 dígitos').required('Campo obrigatório'),
    nome: Yup.string().min(3, 'O campo deve ter no mínimo 3 caracteres').required('Campo obrigatório'),
    cargo: Yup.string().min(2, 'O campo deve ter no mínimo 2 caracteres').required('Campo obrigatório'),
    cep: Yup.string().matches(/^\d{5}-?\d{3}$/, 'CEP deve ter 8 dígitos').required('Campo obrigatório'),
    cidade: Yup.string().required('Campo obrigatório'),
    uf: Yup.string().matches(/^[A-Z]{2}$/, 'UF deve ter 2 letras').required('Campo obrigatório'),
  })


  const handleSaveToLocalStorage = () => {
    const existingValues = JSON.parse(localStorage.getItem('formulario1')) || {}
    const newValues = {
      nomeDoHospital: document.querySelector('input[name="nomeDoHospital"]').value,
      cnpj: document.querySelector('input[name="cnpj"]').value,
      email: document.querySelector('input[name="email"]').value,
      telefone: document.querySelector('input[name="telefone"]').value,
      nome: document.querySelector('input[name="nome"]').value,
      cargo: document.querySelector('input[name="cargo"]').value,
      cep: document.querySelector('input[name="cep"]').value,
      cidade: document.querySelector('input[name="cidade"]').value,
      uf: document.querySelector('input[name="uf"]').value,
    }
    const updatedValues = { ...existingValues, ...newValues }
    localStorage.setItem('formulario1', JSON.stringify(updatedValues))
  }

  const viaCep = async (cepValue, setFieldValue) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cepValue}/json/`)
      const data = response.data

      setFieldValue("cidade", data.localidade)
      setFieldValue("uf", data.uf)
    } catch (error) {
      console.error("Erro ao buscar o CEP:", error.message)
    }
  }


  const handleSubmit = ( values, {setSubmitting}) => {
    handleSaveToLocalStorage()
    setSubmitting(false)
    navigate('/hospital1')
  }


  return (
    <Container>
      <Content>
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {({ values, isSubmitting, setFieldValue }) => (
            <Form style={{width: "90%"}}>
              <Row>
                <Input name="nomeDoHospital" label="nome do hospital" required />
                <Input name="cnpj" label="Cnpj do hospital" required />
              </Row>

              <Row>
                <Input name="email" type="email" required />
                <Input name="telefone" required />
              </Row>

              <Row>
                <Input name="nome" required />
                <Input name="cargo" required />
              </Row>

              <Row>
                <Input
                  name="cep"
                  required
                  onChange={(e) => {
                    const cepValue = e.target.value
                    if (/^\d{5}-?\d{3}$/.test(cepValue)) {
                      viaCep(cepValue, setFieldValue)
                    }
                    setFieldValue("cep", cepValue)
                  }}
                />
              </Row>

              <Row>
                <Input name="cidade" disabled = {!values.cep} required />
                <Input name="uf" disabled = {!values.cep} required />
              </Row>

              <Footer>
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

export default Lead
