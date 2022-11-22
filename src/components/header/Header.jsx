import React from 'react'
import './header.css'
import { Link } from "react-router-dom"

function Header() {
  return (
    <>
      <div className="header">
        <div className="headerLeft">
          <Link className='link' to="/"><img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="logo" /></Link>
          <Link className='link' to="/movies/popular"><span>Popular</span></Link>
          <Link className='link' to="/movies/top_rated"><span>Top Rated</span></Link>
          <Link className='link' to="/movies/upcoming"><span>Upcoming</span></Link>
        </div>
      </div>
    </>
  )
}

export default Header
