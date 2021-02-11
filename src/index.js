import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';




  ReactDOM.render(
    <BrowserRouter>
      
        <React.StrictMode>
          <App store={store}/>
        </React.StrictMode>
      
    </BrowserRouter>,
    document.getElementById('root')

  );


window.store = store;
  /*
  let tree = (state) =>{
    ReactDOM.render(
      <React.StrictMode>
        <App appState = {state} dispatch={store.dispatch.bind(store)}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
  };
  tree(store.getState());
  store.subscribe(()=>{
    let state = store.getState();
    tree(state);
  });
*/
/*
let tree = () =>{
  ReactDOM.render(
    <React.StrictMode>
      <App appState = {store.getState()} dispatch={store.dispatch.bind(store)}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
};
tree();
store.subscribe(tree);
*/
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
