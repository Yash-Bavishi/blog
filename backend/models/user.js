const mongoose = require("mongoose")
const schema = mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String
  }
})

let user = mongoose.model('user', schema)
module.exports = user
