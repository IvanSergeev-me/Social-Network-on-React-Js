import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import MainSection from './components/MainSection.jsx';
import {BrowserRouter} from "react-router-dom";




function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <MainSection profilePage={props.appState.profilePage} messagesPage={props.appState.messagesPage} addPost={props.addPost}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
