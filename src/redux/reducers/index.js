import testReducer from './testReducer';
import {combineReducers} from 'redux';
import moviesReducer from './moviesReducer';
import searchReducer from './searchReducer';

export default combineReducers({
    test : testReducer,
    movies: moviesReducer,
    search: searchReducer
});