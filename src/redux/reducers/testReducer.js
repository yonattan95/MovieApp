import tipos from '../tipos';

const initState = {
    test: ':v x2'
}

export default (oldState= initState, action) => {
    switch (action.type) {
        case tipos.CARGAR_TEST : 
            return {
                ...oldState,
                fecha : action.payload
            }
        default:
            return oldState;
    }
}