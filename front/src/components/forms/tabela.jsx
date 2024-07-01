import { Container, ContentTabela} from './StyledComponents'
import { useLocation } from 'react-router-dom'

const Tabela = () => {
  const location = useLocation()
  const { autoclave, lavadora } = location.state || { autoclave: [], lavadora: [] }

  return (
    <Container>
      <ContentTabela>
        <h1>Tabela de Autoclaves e Lavadoras</h1>
        <div id="autoclave">
          <h2>Autoclaves</h2>
          {autoclave.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <div id="lavadora">
          <h2>Lavadoras</h2>
          {lavadora.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </ContentTabela>
    </Container>
  )
}

export default Tabela
