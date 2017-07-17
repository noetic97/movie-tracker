import React from 'react';
import { shallow, mount  } from 'enzyme';
import MovieList from './MovieList';


describe('MovieList.js', () => {

  const movieData = [{
    'vote_count': 500,
    'id': 324852,
    'video': false,
    'vote_average': 6.1,
    'title': 'Despicable Me 3',
    'popularity': 308.098611,
    'poster_path': 'https://image.tmdb.org/t/p/w500/5qcUGqWoWhEsoQwNUrtf3y3fcWn.jpg',
    'original_language': 'en',
    'original_title': 'Despicable Me 3',
    'genre_ids': [
      'Adventure',
      'Animation',
      'Comedy',
      'Family'
    ],
    'backdrop_path': '/puV2PFq42VQPItaygizgag8jrXa.jpg',
    'adult': false,
    'overview': 'The mischievous Minions hope that Gru will return to a life of crime after the new boss of the Anti-Villain League fires him. Instead, Gru decides to remain retired and travel to Freedonia to meet his long-lost twin brother for the first time. The reunited siblings soon find themselves in an uneasy alliance to take down the elusive Balthazar Bratt, a former 1980s child star who seeks revenge against the world.',
    'release_date': '2017-06-29',
    'movie_id': 324852
  }];

  const component = shallow(<MovieList movieData={movieData} />);

  it('should render the proper component', () => {
    expect(component.find('.movie-list-component').length).toEqual(1);
  });
});
