import { Form, Formik } from "formik"
import { Input } from "./../input"
import * as Yup from"yup"
import { Container, Content, Row, Footer, Button } from './StyledComponents'

const Lead = () => {
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
          {({ values, isSubmitting}) => (
            <Form style={{width: "90%"}}>
              <Row>
                <Input name="nomeDoHospital" label="nome do hospital" required />
                <Input name="cnpj" label="Cnpj do hospital" type="number" required />
              </Row>

              <Row>
                <Input name="email" type="email" required />
                <Input name="telefone" type="number" required />
              </Row>

              <Row>
                <Input name="nome" required />
                <Input name="cargo" required />
              </Row>

              <Row>
                <Input name="cep" type="number" required />
              </Row>

              <Row>
                <Input name="cidade" disabled = {!values.cep} required />
                <Input name="uf" disabled = {!values.cep} required />
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

export default Lead
