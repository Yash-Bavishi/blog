const express = require("express")
const app = express();
const mongoose = require("mongoose")
const port = 8000
let connectionString = 'mongodb+srv://admin:admin@blog.yku72j1.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, (err) => {
  if (err) {
    console.log("error has occured" + err)
  } else {
    console.log("mongodb connected boss")
  }
})


app.listen(port, () => {
  console.log("The server has started")
})
