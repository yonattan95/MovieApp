import tipos from '../tipos';



export default (oldState = {cast:[]}, action) => {
    switch (action.type) {
        case tipos.GET_ESTRENOS_FULFILLED:
            const peliculas = action.payload.data.results;
            const destacado = peliculas[Math.floor(Math.random() * peliculas.length)];
            return {
                ...oldState,
                //estrenos: action.data
                estrenos: peliculas,
                destacado
            };
        case tipos.GET_PROXIMOS_ESTRENOS_FULFILLED:
            return {
                ...oldState,
                proximos_estrenos: action.payload.data.results
            }
        case tipos.GET_CAST_PELICULA_FULFILLED:
            return {
                ...oldState,
                cast: action.payload.data.cast
            }
        case tipos.GET_PELICULA_FULFILLED:
            return {
                ...oldState,
                pelicula: action.payload.data
            }
        default:
            return oldState;
    }
}