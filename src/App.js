import React from 'react';
import './App.css';
import HeaderContainerComponent from './components/Header/HeaderContainerComponent';
import MainSection from './components/MainSection.jsx';





function App(props) {
  return (
    
      <div className="App">
        <HeaderContainerComponent store={props.store}/>
        <MainSection store={props.store}/>
      </div>
    
  );
}

export default App;
