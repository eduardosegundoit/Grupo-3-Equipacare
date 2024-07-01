import React from 'react'
import { Form, Formik } from 'formik'
import { Input } from './../input'
import { DiasDaSemana } from './../diasDaSemana'
import * as Yup from 'yup'
import { Container, Content, Row, Footer, Button } from './StyledComponents'
import { useNavigate } from 'react-router-dom'

const PrimeirosDadosDoHospital = () => {
  const navigate = useNavigate()
  const json =  JSON.parse(localStorage.getItem('formulario1'))

  const initialValues = {
    possui: json?.possui ?? false,
    ampliacao:  json?.ampliacao ?? false,
    salasDeCirugias: json?.salaCirugia ?? 0,
    numeroDeCirugias: json?.cirugiasPorSala ?? 0,
    processamentoDeTecidos: json?.processamentoDeTecidos ?? false,
    intervaloCme: json?.cme ?? 0,
    diasDaSemana: json?.diasDaSemana ?? []
  }

  const validationSchema = Yup.object({
    possui: Yup.boolean().required('Selecione uma opção'),
    ampliacao: Yup.boolean().required('Selecione uma opção'),
    salasDeCirugias: Yup.number().min(1, 'Deve ser maior que 0').required('Campo obrigatório'),
    numeroDeCirugias: Yup.number().min(1, 'Deve ser maior que 0').required('Campo obrigatório'),
    processamentoDeTecidos: Yup.boolean().required('Selecione uma opção'),
    intervaloCme: Yup.number().min(1, 'Deve ser maior que 0').required('Campo obrigatório'),
    diasDaSemana: Yup.array().min(1, 'Selecione pelo menos um dia da semana').required('Campo obrigatório')
  })

  const handleSaveToLocalStorage = (values) => {
    const existingValues = JSON.parse(localStorage.getItem('formulario1')) || {}
    const newValues = {
      possui: document.querySelector('input[name="possui"]').checked,
      ampliacao: document.querySelector('input[name="ampliacao"]').checked,
      salaCirugia:  document.querySelector('#salasDeCirugias').value,
      cirugiasPorSala:  document.querySelector('#numeroDeCirugias').value,
      processamentoDeTecidos:   document.querySelector('input[name="processamentoDeTecidos"]').checked,
      cme: document.querySelector('#intervaloCme').value,
      diasDaSemana: values.diasDaSemana
    }
    const updatedValues = { ...existingValues, ...newValues }
    localStorage.setItem('formulario1', JSON.stringify(updatedValues))
  }

  const handleSubmit = (values, { setSubmitting }) => {
    values.salasDeCirugias = parseInt(values.salasDeCirugias)
    values.numeroDeCirugias = parseInt(values.numeroDeCirugias)
    values.intervaloCme = parseInt(values.intervaloCme)

    handleSaveToLocalStorage(values)
    setSubmitting(false)
    navigate('/hospital2')
  }

  return (
    <Container>
      <Content>
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
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
                <Input
                  name="salasDeCirugias" 
                  label="Salas de cirurgia" 
                  type="number"
                  required
                />
                <Input 
                  name="numeroDeCirugias"
                  label="Número de cirurgias"
                  type="number"
                  required
                />
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
                <Input 
                  name="intervaloCme" 
                  type="number" 
                  label="Qual o intervalo de pico de funcionamento da CME?" 
                  required
                />
              </Row>
              <Footer>
                <Button type='button' onClick={() => navigate('/')}>
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

export default PrimeirosDadosDoHospital
