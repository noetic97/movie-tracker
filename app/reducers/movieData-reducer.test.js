import { movies, fetchHasErrored, fetchIsLoading, userFavorites } from './movieData-reducer';

describe('movieData reducer', () => {
  it('Movies should return an initial state of an empty array', () => {
    expect(movies(undefined, {})).toEqual([])
  })

  it.skip('Should return an updated state if given an action', () => {
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

  it('fetchHasErrored should return an initial state of false', () => {
    expect(fetchHasErrored(undefined, {})).toEqual(false)
  })

  it('fetchIsLoading should return an initial state of false', () => {
    expect(fetchIsLoading(undefined, {})).toEqual(false)
  })

  it('userFavorites should return an initial state of an empty array', () => {
    expect(userFavorites(undefined, {})).toEqual([])
  })
})
