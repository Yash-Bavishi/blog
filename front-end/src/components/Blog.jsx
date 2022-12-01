import React from 'react'
import { Routes, Route, useNavigate, Link } from 'react-router-dom'
function Blog(props) {
  /*
      <div>
        <h1>{props.title}</h1>
        <div className="card">
          <h3>{props.author}</h3>
          <div>
            <p>{props.description}</p>
          </div>
          <p>{props.url}</p>
        </div>
      </div>
        */
  console.log(props.blog)


  return (
    <div >
      <Link to="/blogs" className="test" state={{ from: props }}> Link to page </Link>
      <h1>{props.blog.title}</h1>
      <div className="card">
        <h3>{props.blog.author}</h3>
        <div>
          <p>{props.blog.description}</p>
        </div>
        <p>{props.blog.url}</p>
      </div>
    </div >
  )
}

export default Blog

