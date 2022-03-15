import { connect } from 'react-redux';
import {initialize} from './redux/app-reducer.js';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import React from 'react';
import './App.css';
import HeaderContainerComponent from './components/Header/HeaderContainerComponent';
import MainSection from './components/MainSection.jsx';
import Preloader from './components/common/Preloader/Preloader.jsx';
import store from './redux/redux-store';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

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

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {initialize}))(App);

const AppMain = (props) =>{
  return <BrowserRouter>
        <Provider store={store}>
          <AppContainer />
        </Provider>
    </BrowserRouter>
}

export default AppMain;
window.store = store;
