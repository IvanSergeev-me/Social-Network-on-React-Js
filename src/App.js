import { connect } from 'react-redux';
import {initialize} from './redux/app-reducer.js';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import React from 'react';
import './App.css';
import HeaderContainerComponent from './components/Header/HeaderContainerComponent';
import MainSection from './components/MainSection.jsx';
import Preloader from './components/common/Preloader/Preloader.jsx';

class App extends React.Component{
  componentDidMount() {
    this.props.initialize(); 
  };
  render(){
    if(this.props.initialised){
      return (
        <div className="App">
          <HeaderContainerComponent />
          <MainSection />
        </div>
      );
    }
    else return <Preloader/>
      
  }
  
}
let mapStateToProps = (state) => ({
  initialised: state.appInit.initialised
});
export default compose(
  withRouter,
  connect(mapStateToProps, {initialize}))(App);

