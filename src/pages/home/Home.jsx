import React, { useEffect, useState } from 'react'
import axios from "axios";
import "./home.css"
// react-responsive-carousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

function Home() {

  const [popularMovie, setPopularMovie] = useState([]);

  useEffect(() => {
    const response = axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`)
      .then(function (response) {
        // handle success
        setPopularMovie(response.data.results);
      })
    })

  return (
    <>
      <div className='poster'>
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {
            popularMovie.map(movie => (
              <Link className='posterImage__link' to={`/movie/${movie.id}`}>
                <div className='posterImage'>
                  {/* https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg */}
                  <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="picture of movie" />
                </div>
                <div className='posterImage__overlay'>
                  <div className="posterImage__title">
                    {movie ? movie.original_title : ""}
                  </div>
                  <div className="posterImage__runtime">
                    {movie ? movie.relase_date : ""}
                  </div>
                  <div className="posterImage__rating">
                    <span>
                      {movie ? movie.vote_average : ""}
                      <i className='fas fa-star' /> {" "}
                    </span>
                  </div>
                  <div className="posterImage__description">
                    {movie ? movie.overview : ""}
                  </div>
                </div>
              </Link>
            ))
          }
        </Carousel>
      </div>
    </>
  )
}

export default Home
