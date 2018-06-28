import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom';
import './app.css';
import reducers from './reducers'
import {createStore,applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import { Provider } from 'react-redux';
import Car from './components/car';

 const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

//const store = createStore(
  //  reducers,
   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  //);
ReactDOM.render(
    <Provider store = {createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <div>
        <Route exact path ="/" component = {App}></Route>
        <Route path ="/car/:id" component = {Car}></Route>
        </div>
    </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
