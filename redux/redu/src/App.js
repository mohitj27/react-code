import React, { Component } from 'react';
import logo from './logo.svg';
import {connect } from 'react-redux';
import * as actions from './actions';
import './App.css';
import { bindActionCreators } from 'C:/Users/mohit/AppData/Local/Microsoft/TypeScript/2.9/node_modules/redux';

class App extends Component {

  componentWillMount(){
    this.props.moviesList();
  }
  renderList = (movies) =>{
    if(movies){
       return movies.map((movie)=>{
         return (
           <div>{movie.name}</div>
         )
       })
  } }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
         {this.renderList(this.props.movies)}
      </div>
    );
  }
}

function mapStateToProps(state){
  console.log(state);
  return{
    movies:state.movies
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(
    {moviesList:actions.moviesList  },dispatch
  );
}
export default connect(mapStateToProps,actions)(App);
