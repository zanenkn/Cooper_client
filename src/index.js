import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import InputFields from '../Components/InputFields'
import DisplayPerformanceData from '../Components/DisplayPerformanceData'

const Application = () => {
  return (
    <>
    <Header />
      <Switch>
        <Route exact path='/' component={InputFields}></Route>
        <Route exact path='/history' component={DisplayPerformanceData}></Route>
      </Switch>
    </>
  )
}


ReactDOM.render( 
  <BrowserRouter>
    <Application />
  </BrowserRouter>
), document.getElementById('root'));
serviceWorker.unregister();