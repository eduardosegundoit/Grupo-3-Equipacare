import express from 'express'
import cors from 'cors'

import { calcularValores } from './calculos/calcularValores.mjs';

const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use(cors())


/*[Rota para retornar produto]*/
app.get('/produto/', async (req, res) => {
  // const {
  //   salaCirugia,
  //   cirugiasPorSala,
  //   processamentoDeTecidos,
  //   dia,
  //   cme,
  //   leitoUTI,
  //   leitoInternacaoRPA,
  //   totalDeAutoclaves,
  //   totalDeLavadorasTermo
  // } = req.query
  const salaCirugia = 12;
  const cirugiasPorSala = 6;
  const processamentoDeTecidos = true;
  const dia = 7;
  const cme = 12;
  const leitoUTI = 30;
  const leitoInternacaoRPA = 149;
  const totalDeAutoclaves = 3;
  const totalDeLavadorasTermo = 2;

  const resultado = calcularValores(
    parseFloat(salaCirugia),
    parseFloat(cirugiasPorSala),
    processamentoDeTecidos,
    parseFloat(dia),
    parseFloat(cme),
    parseFloat(leitoUTI),
    parseFloat(leitoInternacaoRPA),
    parseFloat(totalDeAutoclaves),
    parseFloat(totalDeLavadorasTermo)
  )

  return res.status(200).json(resultado)
})

/* [Inicie o servidor] */
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})