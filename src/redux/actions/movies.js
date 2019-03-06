import axios from 'axios';
import tipos from '../tipos';

const basicURL = 'https://api.themoviedb.org/3';
const api_key = 'api_key=c2066d8d9ae9a429e4bfdc6524447f53';
const language = 'language=es';

export const getEstrenos = () => {
    const url = `${basicURL}/movie/now_playing?${api_key}&${language}`;
    return dispatch => dispatch({
        type: tipos.GET_ESTRENOS,
        payload: axios.get(url)
    })
}


export const getProximosEstrenos = () => {
    const url = `${basicURL}/movie/upcoming?${api_key}&${language}`;
    return dispatch => dispatch({
        type: tipos.GET_PROXIMOS_ESTRENOS,
        payload: axios.get(url)
    })
}

export const getPelicula = (idPelicula) => {
    const url = `${basicURL}/movie/${idPelicula}?${api_key}&${language}`;
    return dispatch => dispatch({
        type: tipos.GET_PELICULA,
        payload: axios.get(url)
    });


}
export const getCastPelicula = (idPelicula) => {
    const url = `${basicURL}/movie/${idPelicula}/credits?${api_key}&${language}`;
    return dispatch => dispatch({
        type: tipos.GET_CAST_PELICULA,
        payload: axios.get(url)
    });
}