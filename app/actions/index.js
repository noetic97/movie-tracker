export const fetchMovieData = (url) => {
  return (dispatch) => {
    dispatch(fetchIsLoading(true));
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          dispatch(fetchIsLoading(false));
          return response;
        })
        .then((response) => response.json())
        .then((items) => dispatch(moviesFetchDataSuccess(items)))
        .catch(() => dispatch(fetchHasErrored(true)));
  };
}

export const fetchHasErrored = (bool) => {
  return {
    type: 'FETCH_HAS_ERRORED',
    hasErrored: bool
  };
}

export const fetchIsLoading = (bool) => {
  return {
    type: 'FETCH_IS_LOADING',
    isLoading: bool
  };
}

export const moviesFetchDataSuccess = (movies) => {
  console.log(movies);
  return {
    type: 'MOVIES_FETCH_DATA_SUCCESS',
    movies
  };
}

export const fetchCreateUser = (data) => {
  return (dispatch) => {
    fetch('api/users/new',
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      password: data.password,
    })
  })
  .then((response) => {
    if(!response.ok) {
      throw Error(response.statusText);
    }
    dispatch(fetchIsLoading(false))
    return response;
  })
  .then((response) => response.json())
  .then((formData) => {
    dispatch(fetchHasErrored(false))
    dispatch(createUser(formData))
  })
  .catch(() => dispatch(fetchHasErrored(true)))
  }
}

export const createUser = (userCreds) => {
  return {
    type: 'CREATE_USER',
    userCreds
  }
}

export const fetchLoginUser = (data) => {
  console.log(data);
  return (dispatch) => {
    fetch('api/users/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password
      })
    })
    .then((response) => {
      if(!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(fetchIsLoading(false))
      return response;
    })
    .then((response) => response.json())
    .then((formData) => {
      dispatch(fetchHasErrored(false))
      dispatch(loginUser(formData))
      dispatch(fetchUserFavorites(formData.data.id))
    })
    .catch(() => dispatch(fetchHasErrored(true)))
    }
  }

  export const loginUser = (userCreds) => {
    console.log(userCreds, 'user');
    return {
      type: 'LOGIN_USER',
      userCreds
    }
  }

  export const logOutUser = () => {
    return {
      type: 'LOGGED_OUT_USER',
    }
  }

  export const fetchAddFavorites = (movieData, userCreds) => {

    return (dispatch) => {
      fetch('api/users/favorites/new/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          movie_id: movieData.id,
          user_id: userCreds.data.id,
          title: movieData.title,
          poster_path: movieData.poster_path,
          release_date: movieData.release_date,
          vote_average: movieData.vote_average,
          overview: movieData.overview
        })
      })
      .then((response) => {
        if(!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(fetchIsLoading(false))
        return response;
      })
      .then((response) => response.json())
      .then((formData) => {
        dispatch(fetchHasErrored(false))
        dispatch(fetchUserFavorites(userCreds.data.id))
      })
      .catch(() => dispatch(fetchHasErrored(true)))
      }
    }

    export const fetchUserFavorites = (userId) => {

      return (dispatch, getState) => {

      let state = getState()
      state.userFavorites

        fetch(`api/users/${userId}/favorites`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        })
        .then((response) => {
          if(!response.ok) {
            throw Error(response.statusText);
          }
          dispatch(fetchIsLoading(false))
          return response;
        })
        .then((response) => response.json())
        .then((formData) => {
          dispatch(fetchHasErrored(false))
          dispatch(userFavorites(formData))
        })
        .catch(() => dispatch(fetchHasErrored(true)))
        }
      }
      export const userFavorites = (data) => {
        return {
          type: 'USER_FAVORITES',
          userFavorites: data
        }
      }
