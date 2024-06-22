import React from 'react'
import { Form, Formik } from 'formik'
import { Input } from './../input'
import { DiasDaSemana } from './../diasDaSemana'
import * as Yup from 'yup'
import { Container, Content, Row, Footer, Button } from './StyledComponents'
import { useNavigate } from 'react-router-dom'

const PrimeirosDadosDoHospital = () => {
  const navigate = useNavigate()

  const initialValues = {
    possui: false,
    ampliacao: false,
    nomeDoHospital: '',
    cnpj: '',
    email: '',
    telefone: '',
    nome: '',
    cargo: '',
    cep: '',
    cidade: '',
    uf: '',
    salasDeCirugias: '',
    numeroDeCirugias: '',
    processamentoDeTecidos: false,
    intervaloCme: '',
    diasDaSemana: []
  }

  const validationSchema = Yup.object({
    nome: Yup.string().min(3, 'O campo deve ter no mínimo 3 caracteres').required('Campo obrigatório'),
    possui: Yup.boolean().oneOf([true, false], 'Selecione uma opção').required('Selecione uma opção'),
    ampliacao: Yup.boolean().oneOf([true, false], 'Selecione uma opção').required('Selecione uma opção'),
    email: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
    telefone: Yup.string().max(13, 'O campo deve ter no máximo 13 caracteres').required('Campo obrigatório')
  })

  const handleSaveToLocalStorage = (values) => {
    localStorage.setItem('formulario1', JSON.stringify(values))
  }

  const handleSubmit = (values, { setSubmitting }) => {
    handleSaveToLocalStorage(values)
    setSubmitting(false)
    navigate('/hospital2')
  }

  return (
    <Container>
      <Content>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, isSubmitting }) => (
            <Form style={{ width: '90%' }}>
              <Row>
                <Input
                  type="checkbox"
                  nameIdSim="possui"
                  nameIdNao="naoPossui"
                  name="possui"
                  label="Hospital irá implementar uma nova CME ou já possui CME?"
                  labelSim="possui"
                  labelNao="não possui"
                />
              </Row>

              <Row>
                <Input
                  type="checkbox"
                  nameIdSim="substituicao"
                  nameIdNao="ampliacao"
                  name="ampliacao"
                  label="Se já possui CME, será substituição ou ampliação?"
                  labelSim="substituição"
                  labelNao="ampliação"
                  disabled={!values.possui}
                />
              </Row>

              <Row>
                <Input name="salasDeCirugias" label="Salas de cirurgia" type="number" required />
                <Input name="numeroDeCirugias" label="Número de cirurgias" type="number" required />
              </Row>

              <Row>
                <Input
                  type="checkbox"
                  nameIdSim="processamentoDeTecidos"
                  nameIdNao="instrumental"
                  name="processamentoDeTecidos"
                  label="Processamento de tecidos ou apenas instrumental?"
                  labelSim="tecidos"
                  labelNao="instrumental"
                  disabled={!values.possui}
                />
              </Row>

              <Row>
                <DiasDaSemana />
              </Row>

              <Row>
                <Input name="intervaloCme" type="number" label="Qual o intervalo de pico de funcionamento da CME?" required />
              </Row>

              <Footer>
                <Button type="submit" disabled={isSubmitting}>
                  Salvar
                </Button>
              </Footer>
            </Form>
          )}
        </Formik>
      </Content>
    </Container>
  )
}

export default PrimeirosDadosDoHospital
