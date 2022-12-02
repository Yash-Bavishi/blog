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

  /*
  
      <div >
        <Link to="/blogs" className="test" state={{ from: props }}> <h1>Link</h1> </Link>
        <h1>{props.blog.title}</h1>
        <div className="card">
          <h3>{props.blog.author}</h3>
          <div>
            <p>{props.blog.description}</p>
          </div>
          <p>{props.blog.url}</p>
        </div>
      </div >
  */

  console.log(props.blog)


  return (

    <Link to="/blogs" className="test" state={{ from: props }}>
      <div className="blog_container">
        <div className="content-pad">
          <h1 className="b1">{props.blog.title}</h1>
          <hr />
          <ul>
            <li>
              <p className="blogger">{props.blog.description}</p>
            </li>
          </ul>
        </div>
      </div>
    </Link>
  )
}

export default Blog

