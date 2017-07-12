import React from 'react';


const MovieCard = ({ movieData }) => {
  return(
    <div>
      <h2>{movieData.title}</h2>
      <img src={movieData.poster_path} alt='Movie poster'/>
      <button>Favorite</button>
    </div>
  )
}

export default MovieCard;
