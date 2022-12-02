import React from 'react'

function Article(props) {

  const blog = props.blog

  let notes = null;

  console.log(props.blog.uid)
  const title = blog.blog.title

  /*
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: `{
        "title":"${blog.blog.title}",
        "content":"${blog.blog.content}",
        "author":"${blog.blog.author}",
        "url":"${blog.blog.url}",
        "urlToImage":"${blog.blog.urlToImage}",
        "uid":"${props.uid}",
        "notes":"${notes}"}`
    };
  */



  const work_str = blog.blog.content
  const new_str = work_str.replace(/\r?\n|\r/g, "")
  console.log("LUA DIA ->>>> " + new_str)
  console.log(work_str)



  const note = "hello"
  console.log("Look here blog" + blog.blog.title)

  const content = blog.blog.content
  const str_content = content.toString()
  console.log(str_content)



  const postData = async () => {
    console.log("Starting")
    notes = document.getElementById('notes').value
    console.log(notes)
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: `{
        "title":"${blog.blog.title}",
        "content":"${blog.blog.content.replace(/\r?\n|\r/g, "")}",
        "author":"${blog.blog.author}",
        "url":"${blog.blog.url}",
        "urlToImage":"${blog.blog.urlToImage}",
        "uid":"${props.blog.uid}",
        "notes":"${notes}"}`
    };
    if (notes == '') {
      { alert("Write some notes") }
    } else {
      fetch('http://localhost:5000/api/notes/', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    }
  }

  return (
    <div className="content" >
      <div className="blog">
        <h1>{blog.blog.title}</h1>
        <h3>{blog.blog.description}</h3>
        <h4>Author: {blog.blog.author}</h4>
        <h5>Original url for blog {blog.blog.url}</h5>
        <p>{blog.blog.content}</p>
      </div>
      <div className="notes">
        <form action="">
          <textarea id="notes" name="notes" cols="30" rows="10" placeholder="Notes section"></textarea>
        </form>
        <button onClick={postData}>Save to database</button>
      </div>
    </div >
  )
}

export default Article
