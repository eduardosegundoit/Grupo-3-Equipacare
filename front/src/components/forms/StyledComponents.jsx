import styled from "styled-components"

const Container = styled.div`
  padding: 60px 0;
  background: linear-gradient(280deg, #466385 0%, #011329 100%);
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
  background: rgba(0, 0, 0, 0.25);
  color: #fafafa;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 25px;

  @media (max-width: 425px) {
    width: 100%;
    background: none;
    box-shadow: none;
  }
`
const Row = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 550px) {
    display: block;
  }
`
const ContentTabela = styled.div`
  width: 80%;
  max-width: 600px;
  box-shadow: 0 1px 2px;
  padding: 30px 0;
  background: rgba(0, 0, 0, 0.25);
  color: #fafafa;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 25px;
  h1,h2 {
    padding-left: 25px;
  }

  p {
    padding-left: 60px;
  }

  @media (max-width: 425px) {
    width: 100%;
    background: none;
    box-shadow: none;
  }
`
const Footer = styled.div`
  text-align: end;
`

const Button = styled.button`
  padding: 10px;
  margin:10px;
  font-size: 20px;
  cursor: pointer;
  background-color: #A4BA25;
  color: white;
  border: none;
  border-radius: 8px;
  transition: all 0.3s ease; /* Transição suave de 0.3 segundos */

  &:hover {
    background-color: #A4BA25; /* Cor alterada ao passar o mouse */
    transform: translateY(-2px); /* Efeito de levantar um pouco */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra sutil */
  }
`
export {Container, Content, ContentTabela, Row, Footer, Button }
