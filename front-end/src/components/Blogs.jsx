import React from 'react'
import { useLocation } from 'react-router-dom'

function Blogs(props) {
  const location = useLocation();
  const blog = location.state.from
  console.log(blog)

  return (
    <div className="content">
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
        <button>Save to database</button>
      </div>
    </div>
  )
}

export default Blogs
