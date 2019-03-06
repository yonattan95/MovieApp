import tipos from '../tipos';

export default  ()=>{
    return {
        type : tipos.CARGAR_TEST,
        payload: new Date().toLocaleString()
    }
}