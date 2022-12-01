import React, { useEffect } from 'react'

function Login() {

  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: '{"name":"Test user","email":"test@gmail.com","password":"Pass@1234"}'
  };



  const authenticate = async () => {
    fetch('http://localhost:5000/api/user', options)
      .then(response => console.log("Hello" + response.status()))
      .then(response => response.json())
      .then(response => console.log("Hello" + response))
      .catch(err => console.error(err));
  }



  return (
    <div className="login-page">
      <form action="http://localhost:5000/api/user" method="POST" className="sign-up" >
        <label htmlFor="Name">Name</label>
        <input type="text" name="name" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
        <button onClick={authenticate}>Submit</button>
      </form>
    </div>
  )
}

export default Login
