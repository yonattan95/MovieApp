import tipos from '../tipos';

export default (oldState = { movies: [] }, action) => {
    switch (action.type) {
        case tipos.SEARCH_MOVIES_FULFILLED:
            return {
                ...oldState,
                movies: action.payload.data.results
            }
        case tipos.CLEAN_SEARCH:
            return {
                ...oldState,
                movies: []
            }
        default:
            return oldState;
    }
}