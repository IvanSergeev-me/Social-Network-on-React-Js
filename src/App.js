import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import MainSection from './components/MainSection.jsx';





function App(props) {
  return (
    
      <div className="App">
        <Header/>
        <MainSection store={props.store}/>
      </div>
    
  );
}

export default App;
