import React from 'react';
import './App.css';
import Header from './components/Header';
import MainSection from './components/MainSection';
import './styles/Aside.css';
import './styles/Header.css';
import './styles/Profile.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <MainSection/>
    </div>
  );
}

export default App;
