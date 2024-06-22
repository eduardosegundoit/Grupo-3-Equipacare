import { Form, Formik } from "formik"
import { Input } from "./../input"
import { Calculo } from "./../forms/axios"
import * as Yup from"yup"
import { Container, Content, Row, Footer, Button } from './StyledComponents'

const segundosDadosDoHospital = () => {
  const initialValues = {
    nomeDoHospital: "",
    cnpj: "",
    email: "",
    telefone: "",
    nome: "",
    cargo: "",
    cep: "",
    cidade: "",
    uf: "",
  }

  const validationSchema = Yup.object({
    nome: Yup.string().min(3, "O campo deve ter no mínimo 3 caracteres").required("Campo obrigatório"),

    email: Yup.string().email("E-mail inválido").required("Campo obrigatório"),

    telefone: Yup.string().max(13, "O campo deve ter no máximo 13 caracteres").required("Campo obrigatório"),
  })

  const handleSubmit = (values,{setSubmitting}) => {
    console.log(values)
    setSubmitting(false)
  }

  return (
    <Container>
      <Content>
        <Formik
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
                <Button type="submit" disabled={isSubmitting} onClick={Calculo}>
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

export default segundosDadosDoHospital
