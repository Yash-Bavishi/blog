import React from 'react'
import { useLocation } from 'react-router-dom'
import Article from './Article'

function Blogs(props) {
  const location = useLocation();
  let blog = null
  if (location.state) {
    blog = location.state.from.blog
  }

  /*
      < div className = "content" >
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
      </div >
      */


  return (
    <div>
      {
        location.state ? <Article blog={location.state.from} /> : <h1>No user found</h1>
      }
    </div>
  )
}

export default Blogs
