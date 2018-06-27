import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Artist from './components/Artist';
import { BrowserRouter,Route} from 'react-router-dom';

class App extends Component {
  render() {
    
return( 
  <BrowserRouter>
    <div>
        <Route exact path = "/" component ={Home}/>
        <Route path = "/artist/:artistid" component ={Artist}/>
        </div>
  </BrowserRouter>

)
  }
}

export default App;
