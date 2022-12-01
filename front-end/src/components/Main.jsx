import React from 'react';
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import Blog from './Blog'
//const mongoose = require("mongoose")
let connectionString = 'mongodb+srv://admin:admin@blog.yku72j1.mongodb.net/?retryWrites=true&w=majority'




function traverse(item, index) {
  return index + ": " + item.title
}

function Main(route, navigation) {
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


  const location = useLocation();

  console.log(location.state.uid)


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
    </div>
  )
}

export default Main
