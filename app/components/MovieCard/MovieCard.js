import React from 'react';

const MovieCard = ({ movieData }) => {
  return(
    <div className='movie-card container'>
      <img classname='movie-poster' src={movieData.poster_path} alt='Movie poster'/>
      <button classname='favorite'>Favorite</button>
      <h2 classname='title'>{movieData.title}</h2>
    </div>
  )
}

export default MovieCard;
