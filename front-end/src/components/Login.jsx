import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {



  const navigate = useNavigate();
  const authenticate = async () => {

    const test = "reddit@gmail.com"


    if (document.getElementById('name').value == '') {
      document.getElementById('name').style.border = "2px solid red"
    } else {
      const options = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: `{
          "name":"${document.getElementById('name').value}",
          "email":"${document.getElementById('email').value}",
          "password":"${document.getElementById('password').value}"}`
      };
      const response = await fetch('http://localhost:5000/api/user', options)
      const data = await response.json()
      const uid = data.uid
      const test = "test"
      navigate('/main', { state: { uid: uid } })
    }




  }

  //<form action="http://localhost:5000/api/user" method="POST" className="sign-up" >


  return (
    <div className="login-page">
      <form action="" className="sign-up">
        <label htmlFor="Name">Name</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </form>
      <button onClick={authenticate}>Submit</button>
    </div >
  )
}

export default Login
