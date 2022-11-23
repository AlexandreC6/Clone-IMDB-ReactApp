import React, { useEffect, useState } from 'react'
import "./home.css"
import axios from "axios";

function Home() {

  const [popularMovie, setPopularMovie] = useState([]);

  useEffect(() => {
    const response = axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`)
      .then(function (response) {
        // handle success
        console.log(response.data.results);
        setPopularMovie(response.data.results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  })

  return (
    <>
      <p>Homepage</p>
    </>
  )
}

export default Home
