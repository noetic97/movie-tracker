import React from 'react';
// import './MovieCard.css';

const MovieCard = ({ movieData, addToFavorites, userData, retrieveFavorites, userFavorites }) => {
  const movieGenres = movieData.genre_ids.map(genre => <li key={genre} className="genre">{genre}</li>)

  const addFavorite = (movieData, userData) => {
    const favMovieIds = userFavorites.map((movie) => movie.movie_id)
    const currentFavorite =  favMovieIds.includes(movieData.id)
    if(!currentFavorite) {
      addToFavorites(movieData, userData)
    }
  }

  return(
    <div className='movie-card'>
      <img className='movie-poster'
        src={movieData.poster_path}
      alt='Movie poster'/>
      <div className="sub-header">
        <h2 className='title'>{movieData.title}</h2>
        <span className="rating">{movieData.vote_average}</span>
      </div>
      <h3 className="genre-heading">Genres:</h3>
      <ul className="genre-list">
        {movieGenres}
      </ul>
      <button onClick={() => addFavorite(movieData, userData)} className='favorite-btn'>Favorite</button>
    </div>
  )
}

export default MovieCard;
