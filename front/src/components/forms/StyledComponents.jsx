import styled from "styled-components"

const Container = styled.div`
  padding: 60px 0;
  display: flex;
  justify-content: center;
`

const Content = styled.div`
  width: 80%;
  max-width: 600px;
  display: flex;
  justify-content: center;
  box-shadow: 0 1px 2px;
  padding: 30px 0;
  background-color: #171717;
  border-radius: 10px;
`
const Row = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 550px) {
    display: block;
  }
`
const Footer = styled.div`
  text-align: end;
`

const Button = styled.button`
  padding: 8px;
  font-size: 20px;
  cursor: pointer;
  background-color: #0081cf;
  color: white;
  border: none;
  border-radius: 5px;
  transition: all 0.3s ease; /* Transição suave de 0.3 segundos */

  &:hover {
    background-color: #005fa3; /* Cor alterada ao passar o mouse */
    transform: translateY(-2px); /* Efeito de levantar um pouco */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra sutil */
  }
`
export { Container, Content, Row, Footer, Button }
