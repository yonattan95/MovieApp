import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Home from './paginas/Home';
import Detalle from './paginas/Detalle';
import { connect } from 'react-redux';
import testAction from './redux/actions/test';

const Global = createGlobalStyle`
    body{
        margin:0;
    }

    p{
      margin:0;
    }
`;



const Footer = styled.div`
    background: rgba(0,0,0,1);
    display: flex;
    align-items: center;
    padding-left: 1rem;
    height: 3rem;
    color: white;
`;
class App extends Component {

  componentDidMount(){
    setInterval(()=>{
      this.props.testA();
    },1000);    
  }

  render() {
    return (
      <Router>
        <div>
          <Global basicStyle />      
          <Route path='/' exact component={Home} />
          <Route path='/detalle/:idPelicula' component={Detalle} />
          <Footer>Pie de pagina</Footer>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(store) {
  return { 
    test: store.test
  }
}

export default connect(mapStateToProps,{testA:testAction})(App);
