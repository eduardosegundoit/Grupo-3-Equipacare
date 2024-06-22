import axios from 'axios'

const Calculo = () => {
  const formulario1Values = JSON.parse(localStorage.getItem('formulario1'))
  if (!formulario1Values) {
    console.error('No values found in local storage')
    return
  }
  const dados = {
    // salaCirugia:  document.querySelector('#salasDeCirugias').value,
    // cirugiasPorSala:  document.querySelector('#numeroDeCirugias').value,
    // processamentoDeTecidos:   document.querySelector('input[name="processamentoDeTecidos"]').checked,
    // dia: values.diasDaSemana.length,
    ...formulario1Values,
    cme:  document.querySelector('#intervaloCme').value,
    leitoUTI: document.querySelector('#leitoUti').value,
    leitoInternacaoRPA:  document.querySelector('#leitoRpa').value,
    totalDeAutoclaves:  document.querySelector('#totalDeAutoclaves').value,
    totalDeLavadorasTermo:  document.querySelector('#totalDeLavadorasTermo').value,
  }

  const queryString = Object.keys(dados)
  .map(key => `${key}=${encodeURIComponent(params[key])}`)
  .join('&')

  const url = `http://localhost:8080/produto/?${queryString}`

  return axios.get(url)
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {
      console.error('There was an error!', error)
    })
}

export { Calculo }
