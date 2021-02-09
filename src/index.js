import * as serviceWorker from './serviceWorker';
import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';




let tree = () =>{
  ReactDOM.render(
    <React.StrictMode>
      <App appState = {store.getState()} addPost={store.addPost.bind(store)} updatePostText={store.updatePostText.bind(store)}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
};
tree();
store.render_(tree);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
