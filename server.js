const express = require("express")
const app = express();

const mongoose = require("mongoose")

const port = 8000


const connectionString = 'mongodb+srv://admin:admin@blog.yku72j1.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log("connection established")
  }
})

app.listen(port, () => {
  console.log("starting the server ")
})
