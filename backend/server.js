const mongoose = require("mongoose")
const express = require("express");
const app = express();
const routes = require("./routes");
const PORT = process.env.PORT || 5000;
const connectionString = 'mongodb+srv://admin:admin@blog.yku72j1.mongodb.net/blog?retryWrites=true&w=majority'
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    const app = express();
    app.use(express.urlencoded({ extended: true }))
    app.use(express.json())
    app.use('/api', routes)
    app.listen(PORT, () => {
      console.log("Server has started" + PORT);
    })
  })



console.log("sad")

