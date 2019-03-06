import axios from 'axios';
import tipos from '../tipos';


const basicURL = 'https://api.themoviedb.org/3';
const api_key = 'api_key=c2066d8d9ae9a429e4bfdc6524447f53';
const language = 'language=es';


export const searchMovies = (name)=>{
    return dispatch => dispatch({
        type: tipos.SEARCH_MOVIES,
        payload: axios.get(`${basicURL}/search/movie?query=${name}&${api_key}&${language}`)
    });
}

export const cleanSearch = ()=> {
    return {
        type: tipos.CLEAN_SEARCH
    };
}