import React from 'react';
import { useState, useEffect } from 'react'
import Blog from './Blog'
//const mongoose = require("mongoose")
let connectionString = 'mongodb+srv://admin:admin@blog.yku72j1.mongodb.net/?retryWrites=true&w=majority'




function traverse(item, index) {
  return index + ": " + item.title
}

function Main() {
  const [item, setItem] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null)
  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=cars&from=2022-11-26&pageSize=10&sortBy=publishedAt&apiKey=d098bd1c8b71425fa640061e0158648c&language=en')
      .then(res => res.json())
      .then(
        (result) => {
          setItem(result);
          setIsLoaded(true)
        },
        (error) => {
          setIsLoaded(false)
          setError(error);
        }
      )
  }, [])


  let arr = null

  if (isLoaded) {
    arr = item.articles
  }



  return (
    <div className="main">
      <div className="blogs">
        {
          isLoaded ? arr.map((article, index) => <Blog blog={article} key={index} />) : console.log("error")
        }
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

export default Main
