import express from 'express'
import cors from 'cors'

import { calcularValores } from './src/calculos/calcularValores.mjs'

const PORT = process.env.PORT || 8080

const app = express()
app.use(express.json())
app.use(cors())


/*[Rota para retornar produto]*/
app.get('/produto', async (req, res) => {
  try {
    const {
      salaCirugia,
      cirugiasPorSala,
      processamentoDeTecidos,
      cme,
      leitoUti,
      leitoRpa,
      totalDeAutoclaves,
      totalDeLavadorasTermo
    } = req.query

    const resultado = calcularValores(
      parseInt(salaCirugia),
      parseInt(cirugiasPorSala),
      processamentoDeTecidos,
      parseInt(cme),
      parseInt(leitoUti),
      parseInt(leitoRpa),
      parseInt(totalDeAutoclaves),
      parseInt(totalDeLavadorasTermo)
    )

    return res.status(200).json(resultado)
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao solicitar o calculo' })
  }
})


/* [Inicie o servidor] */
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})
