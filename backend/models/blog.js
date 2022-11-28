const mongoose = require("mongoose")
const schema = mongoose.Schema({
  title: String,
  content: String,
  url: {
    type: String,
    unique: true,
  },
  urlToImage: String,
  author: String
})

let blog = mongoose.model('blog', schema)
module.exports = blog
