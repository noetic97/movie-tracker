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
  return {
    type: 'MOVIES_FETCH_DATA_SUCCESS',
    movies
  };
}

export const createUser = (userCreds) => {
  console.log(userCreds);
  return {
    type: 'CREATE_USER',
    userCreds
  }
}

export const fetchLoginUser = (data) => {
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
        console.log(response.statusText);
        throw Error(response.statusText);
      }
      dispatch(fetchIsLoading(false))
      return response;
    })
    .then((response) => response.json())
    .then((formData) => {
      dispatch(fetchHasErrored(false))
      dispatch(loginUser(formData))
    })
    .catch(() => dispatch(fetchHasErrored(true)))
    }
  }

  export const loginUser = (userCreds) => {
    console.log(userCreds);
    return {
      type: 'LOGIN_USER',
      userCreds
    }
  }
