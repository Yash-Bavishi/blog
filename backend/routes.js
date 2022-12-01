const express = require("express")
const router = express.Router()
const blog = require('./models/blog')
const notes = require("./models/notes")
const users = require("./models/user")

// Blog

router.get('/blogs', async (req, res) => {
  const blogs = await blog.find()
  res.send(blogs)
})

// Save Blogs on the internet
router.post('/blogs', async (req, res) => {
  const sendBlogs = new blog({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    url: req.body.url,
    urlToImage: req.body.urlToImage,
  })
  await sendBlogs.save()
  console.log(sendBlogs)
  res.send(sendBlogs)
})

// Get notes based on user id

router.get('/notes/:id', async (req, res) => {
  const user_id = req.params.id;
  const note = await notes.find({ uid: user_id })
  note ? res.send(note) : res.send({ msg: 'no user found' })
  console.log(note[0].blogId)
  const blogs = await blog.find({ _id: note[0].blogId })
  console.log(user_id)
  console.log(blogs)
})


/*

router.get('/notes', async (req, res) => {
  const note = await notes.find()
  const blogs = await blog.findOne({ _id: note[1].blogId })
  console.log(note[1].blogId)
  console.log(blogs)
  res.send(blogs)
})


*/

// Save notes on the database will be used when user click to save database on /blogs
router.post('/notes', async (req, res) => {
  const sendBlogs = new blog({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    url: req.body.url,
    urlToImage: req.body.urlToImage,
  })
  await sendBlogs.save()
  console.log(sendBlogs)
  const sendNotes = new notes({
    uid: req.body.uid,
    notes: req.body.notes,
    blogId: sendBlogs._id
  })
  await sendNotes.save()
  console.log(sendNotes)
  res.send(sendNotes)
})

// user

// Get all the users (It won't be used probably)
router.get('/user', async (req, res) => {
  const user = await users.find();
  res.send(user)
})

// Create new user
router.post('/user', async (req, res) => {

  if (!req.body.name || !req.body.email || !req.body.password) {
    res.status(400).json({
      "msg": "Not all parameters found"
    })
  } else {
    const sendUser = new users({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })
    await sendUser.save()
    console.log(sendUser)
    // res.status(200).json({
    // "msg": "data added"
    // })
    res.status(200).json({
      "uid": `${sendUser._id}`
    })
  }

})

module.exports = router


