import * as serviceWorker from './serviceWorker';
import state from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {updatePostText} from './redux/state.js';
import {addPost} from './redux/state.js';
import { render_ } from './redux/state';



let tree = () =>{
  ReactDOM.render(
    <React.StrictMode>
      <App appState = {state} addPost={addPost} updatePostText={updatePostText}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
};
tree();
render_(tree);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
