const express = require('express')
const cors = require('cors')

const { calcularValores } = require('./Fcalc')

const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use(cors())


/*[Rota para retornar produto]*/
app.get('/produto/', async (req, res) => {
  const {
    salaCirugia,
    cirugiasPorSala,
    processamentoDeTecidos,
    dia,
    cme,
    leitoUTI,
    leitoInternacaoRPA,
    totalDeAutoclaves,
    totalDeLavadorasTermo
  } = req.query

const resultado = calcularValores(
    parseFloat(salaCirugia),
    parseFloat(cirugiasPorSala),
    processamentoDeTecidos === 'true',
    parseFloat(dia),
    parseFloat(cme),
    parseFloat(leitoUTI),
    parseFloat(leitoInternacaoRPA),
    parseFloat(totalDeAutoclaves),
    parseFloat(totalDeLavadorasTermo)
  );
  return res.status(200).json(resultado)
})

/* [Inicie o servidor] */
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})
