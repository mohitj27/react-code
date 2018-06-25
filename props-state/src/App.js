import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">components life cycle</h1>
        </header>
           <Body />
        <p><Parent /> </p>
      </div>
    );
  }
}
class Parent extends Component {
  constructor(props){
    super(props);
    this.state = {
     cars :['s-BMW','s-Merc','s-City']
    };
  }
  render() {
    return (
          <div>
            <h2>Just some info</h2>
            </div>
    );
  }
}
class Body extends Component {
  constructor(props){
  super(props);
  this.state  = {};
  this.getRandomNumber = this.getRandomNumber.bind(this);
  }
  getRandomNumber(){
    console.log("Random Number Called");
  }
  render() {
     return (
       <div>
      <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>   
    <button onClick = {this.getRandomNumber} >Random Number </button>
      </div>
     );
  }
}
export default App;
