import axios from 'axios'

const Calculo = async () => {

  const formulario1Values = JSON.parse(localStorage.getItem('formulario1'))
  if (!formulario1Values) {
    console.error('No values found in local storage')
    return Promise.reject(new Error('No values found in local storage'))
  }


  const dados = {
    salaCirugia: formulario1Values.salaCirugia,
    cirugiasPorSala: formulario1Values.cirugiasPorSala,
    processamentoDeTecidos: formulario1Values.processamentoDeTecidos,
    cme: formulario1Values.cme,
    leitoUti: formulario1Values.leitoUti,
    leitoRpa: formulario1Values.leitoRpa,
    totalDeAutoclaves: formulario1Values.totalDeAutoclaves,
    totalDeLavadorasTermo: formulario1Values.totalDeLavadorasTermo
  }

  try {
    const queryString = Object.keys(dados)
    .map(key => `${key}=${encodeURIComponent(dados[key])}`)
    .join('&')

    const url = `http://localhost:8080/produto/?${queryString}`
    const response = await axios.get(url)
    const { autoclave, lavadora } = response.data

    if (!autoclave || !lavadora) {
      throw new Error('autoclave or lavadora is undefined')
    }

    return {autoclave, lavadora}

  } catch (error) {
    console.error("Erro ao solicitar o calculo:", error.message)
  }
}


const Macaco = async () => {
  const formulario1Values = JSON.parse(localStorage.getItem('formulario1'))
  if (!formulario1Values) {
    console.error('No values found in local storage')
    return Promise.reject(new Error('No values found in local storage'))
  }

  const data = {
    nomeDoHospital: formulario1Values.nomeDoHospital,
    cnpj: formulario1Values.cnpj,
    email: formulario1Values.email,
    telefone: formulario1Values.telefone,
    nome: formulario1Values.nome,
    cargo: formulario1Values.cargo,
    cep: formulario1Values.cep,
    cidade: formulario1Values.cidade,
    uf: formulario1Values.uf,

    possui: formulario1Values.possui,
    ampliacao:  formulario1Values.ampliacao,
    salaCirugia: formulario1Values.salaCirugia,
    cirugiasPorSala: formulario1Values.cirugiasPorSala,
    processamentoDeTecidos: formulario1Values.processamentoDeTecidos,
    dia:formulario1Values.diasDaSemana.length >= 8 ? 7 :formulario1Values.diasDaSemana.length,
    cme: formulario1Values.cme,

    leitoUti: formulario1Values.leitoUti,
    leitoInternacao: formulario1Values.leitoUti,
    leitoRpa: formulario1Values.leitoRpa,
    leitoobservacao: formulario1Values.leitoUti,
    leitoHospitalDia: formulario1Values.leitoUti,
    totalDeAutoclaves: formulario1Values.totalDeAutoclaves,
    totalDeLavadorasTermo: formulario1Values.totalDeLavadorasTermo
  }

  try {
    axios.post('https://api.sheetmonkey.io/form/f5ruNmtgUkGwmdC9sMmWHN',  data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error("Erro ao enviar os dados:", error.message)
  }
}


export { Calculo, Macaco }
