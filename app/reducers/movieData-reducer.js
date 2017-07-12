export const fetchHasErrored = (state = false, action) => {
    switch (action.type) {
        case 'FETCH_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export const fetchIsLoading = (state = false, action) => {
    switch (action.type) {
        case 'FETCH_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export const movies = (state = [], action) => {
    switch (action.type) {
        case 'MOVIES_FETCH_DATA_SUCCESS':
            console.log(action.movies.results);
            return action.movies.results.map(movie => {
              return Object.assign(movie, {poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`})
            });

        default:
            return state;
    }
}
