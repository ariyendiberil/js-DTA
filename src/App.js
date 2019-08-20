import React, { Component, createContext } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'
import AllRoutes from './routes';
import './App.css';
import {connect} from 'react-redux';
import {result} from 'lodash';  
// import { wrapComponentInFunction, isEmptyOrNull } from './util/common.util';
// import language, { getDictionary } from './util/language';
// import {LanguageContext, SessionsContext} from './context/';
// import { getTemp, get, set } from './util/storage.util';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fade from '@material-ui/core/Fade';
import { getStates } from './api.util';

class App extends Component {  
  componentWillMount = (props) => {
    getStates().then((res) => console.log('res', res));
  }
  render() {
    const {sessionId, isLoading} = this.props;
    return (
      <div>
        <Fade
          in={isLoading}
          unmountOnExit
        >
          <section className="centered"><CircularProgress /></section>
        </Fade>
            <div className={`${sessionId ? 'drawer' : 'banner'}`}>        
            <main className={`mainBody`}>
              <section className={`margin ${sessionId ? 'conditionalDashboard' : ''}`}/>
              <AllRoutes/>
            </main>
            </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
})}

const mapDispatchToProps = (dispatch) => ({
})
export default connect(mapStateToProps, mapDispatchToProps)(App);