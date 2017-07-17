import React from 'react';
import { mount, shallow  } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import FavoriteListContainer from '../../containers/FavoriteListContainer';
import FavoriteList from './FavoriteList';
import thunk from 'redux-thunk';

function setup() {
  const props = {
    loggedIn: true,
    favMovies: [
      {
        "id": 5,
        "movie_id": 324852,
        "user_id": 1,
        "title": "Despicable Me 3",
        "poster_path": "https://image.tmdb.org/t/p/w500/5qcUGqWoWhEsoQwNUrtf3y3fcWn.jpg",
        "release_date": "2017-06-29",
        "vote_average": "6.1",
        "overview": "Gru and his wife Lucy must stop former '80s child star Balthazar Bratt from achieving world domination."
      },
      {
        "id": 7,
        "movie_id": 315635,
        "user_id": 1,
        "title": "Spider-Man: Homecoming",
        "poster_path": "https://image.tmdb.org/t/p/w500/ApYhuwBWzl29Oxe9JJsgL7qILbD.jpg",
        "release_date": "2017-07-05",
        "vote_average": "7.5",
        "overview": "Following the events of Captain America: Civil War, Peter Parker, with the help of his mentor Tony Stark, tries to balance his life as an ordinary high school student in Queens, New York City, with fighting crime as his superhero alter ego Spider-Man as a new threat, the Vulture, emerges."
      }
    ]
  }
  const wrapper = mount(<FavoriteList favMovies={props.favMovies}/>)

  return {
    props,
    wrapper
  }
}


describe('FavoriteList', () => {
  it('should have a class', () => {
    const { wrapper, props } = setup()
    expect(wrapper.find('.favorite-list-component').length).toEqual(1)
  })

  it.skip('should render two movies', () => {

  })
})
