import React from 'react';

const MovieCard = ({ movieData }) => {
  return(
    <div className='movie-card'>
      <img className='movie-poster' src={movieData.poster_path} alt='Movie poster'/>
      <div className="sub-header">
        <h2 className='title'>{movieData.title}</h2>
        <span className="rating">{movieData.vote_average}</span>
      </div>
      {/* <button classname='favorite'>Favorite</button> */}
    </div>
  )
}

export default MovieCard;
