const mongoose = require('./../config/mongo')
const {Schema} = mongoose

const livroSchema = new Schema({
  id: Number,
  titulo: String,
  paginas: Number,
  ISBN: String,
  editora: String,
},
  {timestamps: true}
)

const LivroModel = mongoose.model('livros', livroSchema)
module.exports = LivroModel
