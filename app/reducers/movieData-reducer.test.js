import { movies } from './movieData-reducer';

describe('movieData reducer', () => {
  it('Should return an initial state', () => {
    expect(movies(undefined, {})).toEqual([])
  })

  it('Should return an updated state if given an action', () => {
    const movieArray = {movies: {movies: {results: [
      {
        title: 'SpiderMan',
        poster_path: 'spider.jpg',
        genre_ids: '28'
      },
      {
        title: 'Batman',
        poster_path: 'bats.jpg',
        genre_ids: '28'
      },
      {
        title: 'Avengers',
        poster_path: 'avengers.jpg',
        genre_ids: '28'
      }]}}}

    const getMovies = movies(undefined, {type: 'MOVIES_FETCH_DATA_SUCCESS'})

    expect(getMovies).toEqual(movieArray)
  })
})
