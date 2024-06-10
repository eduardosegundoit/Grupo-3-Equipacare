const express = require('express')
const cors = require('cors')

const PORT = process.env.PORT || 3000

const livroModel = require('./src/models/livro.model')

const app = express()
app.use(express.json())
app.use(cors())


/*[Rota para retornar produto]*/
app.get('/produto/:id', async (req, res) => {
  try {
    const livro = await livroModel.findOne({ id: req.params.id })
    if (!livro) {
      return res.status(404).json({ message: 'Erro' })
    }
    return res.status(200).json(livro)
  } catch (error) {
    return res.status(500).json({ error: 'Erro' })
  }
})

/* [Inicie o servidor] */
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})
