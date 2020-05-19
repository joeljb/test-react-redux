import React,{useState,useEffect, Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import logo from './logo.svg';
import './App.css';

import {
  getLibros,
  getLibrosSuccess,
  getLibrosError,
} from './libros/actions';
import { render } from '@testing-library/react';
import Libro from './libros/libros'

const api = (url)=>{
  return fetch(url).then((response) => {
    return response.json()
  }, error => {
    console.log(error)
  })
}

class App  extends Component {

  constructor(props) {
    super(props);
    // No llames this.setState() aquí!
    this.state = { libros: [] };
  }

  async componentDidMount(){
    this.props.getLibros()
    
    const urlAutor = "http://www.mocky.io/v2/5e1684a93000002c00d5608e";
    const urlLibro = "http://www.mocky.io/v2/5e1683a23000004d00d56089";

    const dataLibro = await api(urlLibro);
    const dataAutor = await api(urlAutor);

    const libroAutor = dataLibro.map((item=>{
      const autor = dataAutor.find(l => l.id===item.authorId)
      if (autor){
        item.autor = autor
      }
      return item;
    }))
    setTimeout(() => {
      this.props.getLibrosSuccess(libroAutor)
    }, 2000);
    
  }

  

  render(){
    if(this.props.buscando){
      return <h1 style={{textAlign:'center'}}>Buscando.......</h1>
    }
    return (
      <Libro libros={this.props.libros}/>
    );
  }
}


const mapStateToProps = (state) => {
  const { libros,buscando } = state;
  return {
    libros,
    buscando 
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return bindActionCreators(
    {
      getLibros,
      getLibrosSuccess,
      getLibrosError,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
