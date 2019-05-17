import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import CooperCalculator from './Components/InputFields'
import DisplayPerformanceData from './Components/DisplayPerformanceData'
import Header from './Components/Header'

const Application = () => {
  return (
    <>
    <Header />
    <Switch>
      <Route exact path='/' component={CooperCalculator}></Route>
      <Route exact path='/history' component={DisplayPerformanceData}></Route>
    </Switch>
    </>
  )
}


ReactDOM.render((
  <BrowserRouter>
    <Application />
  </BrowserRouter>
), document.getElementById('root'));
serviceWorker.unregister();