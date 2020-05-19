
const getLibros = () => {
  return {
    type: 'GET_LIBROS',
  };
};
const getLibrosSuccess = (data) => {
  return {
    type: 'GET_LIBROS_SUCCESS',
    data
  };
};
const getLibrosError = (error) => {
  return {
    type: 'GET_LIBROS_ERROR',
    error
  };
};

export {
  getLibros,
  getLibrosSuccess,
  getLibrosError,
}