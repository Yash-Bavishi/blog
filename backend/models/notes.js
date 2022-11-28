const mongoose = require("mongoose")
const schema = mongoose.Schema({
  uid: String,
  notes: String,
  blogId: String
})

let notes = mongoose.model('notes', schema)
module.exports = notes
