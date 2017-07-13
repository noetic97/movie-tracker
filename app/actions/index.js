export const logBang = (text) => {
  console.log('action fired!');
  return {
    type: 'LOG_BANG',
    text
  }
}

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
