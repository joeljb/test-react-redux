
const incialState ={
  libros: [],
  buscando:false
}

const libros = (state = incialState,action) =>{
  switch (action.type) {
    case 'GET_LIBROS':
      return{
      ...state,
        libros: [],
        buscando: true
    }
    case 'GET_LIBROS_SUCCESS':
      return{
      ...state,
        libros: action.data,
        buscando: false
    }
    case 'GET_LIBROS_ERROR':
      return{
      ...state,
        libros: action.error,
        buscando: false
    }
    default:
      return {
        ...state
      }
  }
}
export default libros;