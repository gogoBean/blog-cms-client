import React, { Component } from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Empty from './pages/Empty'
import Login from './pages/Login'
import Home from './pages/Home'
import './App.css';
class App extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route path='/' exact render={(props) => {
            return <Redirect to="/home"></Redirect>
          }}></Route>
          <Route path='/home' render={(props) => {
            return <Home {...props}></Home>
          }}></Route>
          <Route path='/login' component={Login}></Route>
          <Route component={Empty}></Route>
        </Switch>
      </Router>
    );
  }
}
export default App;