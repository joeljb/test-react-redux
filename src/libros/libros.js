import React from 'react'
import PropTypes from 'prop-types';


const Libros = ({libros})=> {

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', flexDirection: 'column',
      alignItems: 'center',
    }}>
      <h1>Best seller al times </h1>
      {
        libros.length>0 && (libros.map((item, key) => {
          return (
            <div key={key} style={{ border: '1px solid', textAlign: 'left', margin: '30px', width: '50%', padding: '10px' }}>
              <h2>{item.title}</h2>
              <h3>{item.autor.name}</h3>
              <p>{item.description}</p>
            </div>
          )
        })
        )
      }
    </div>
  )
}

Libros.propTypes = {
  libros: PropTypes.array
};

Libros.defaultProps = {
  libros: [],
};

export default Libros;