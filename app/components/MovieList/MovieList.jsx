import React, { Component } from 'react';
import MovieCard from '../MovieCard/MovieCard'
import apiKey from '../../APIkey'

class MovieList extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.getMovieData(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`);

    fetch('api/users/new',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'evan',
        password: '12345',
        email: 'thisislyfe@gmail.com'
      })

    })
    .then((res) => res.json())
    .then((formData) => console.log(formData))

  }

  render() {
    const movieCardArray = this.props.movieData.map((movie) => {
      return <MovieCard movieData={ movie } key={movie.id}/>
    })

    return (
      <section className="movie-list">
        {movieCardArray}
      </section>
    )
  }
}

export default MovieList;
