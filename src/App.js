import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import MainSection from './components/MainSection.jsx';
import {BrowserRouter} from "react-router-dom";




function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <MainSection/>
      </div>
    </BrowserRouter>
  );
}

export default App;
