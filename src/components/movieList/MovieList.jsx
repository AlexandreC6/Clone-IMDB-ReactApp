import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Card from "../card/Card.jsx"
import "./movieList.css"


function MovieList() {
  const [movieList, setMovieList] = useState([])
  const {type} = useParams()

  const getData = () => {
    const response = axios.get(`https://api.themoviedb.org/3/movie/${type ? type : 'popular'}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`)
      .then(function (response) {
        setMovieList(response.data.results);
      })
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    getData()
  }, [type])

  return (
    <>
      <div className="movie__list">
        <h2 className="list__title">{(type ? type : 'POPULAR').toUpperCase()}</h2>
        <div className="list__cards">
          {
            movieList.map(movie => (
              <Card movie={movie} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default MovieList
