import React, { Component } from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Empty from './pages/Empty'
import Login from './pages/Login'
import UserMgr from '@/pages/UserMgr'
import ArticleList from '@/pages/Article'
import ArticleAdd from '@/pages/Article/Add'
import Layout from '@/components/Layout'
import './App.css';

class App extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path='/' render={(props) => (<Redirect to='/usermgr' />)}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/usermgr' render={(props) => (<Layout {...props}><UserMgr /></Layout>)}></Route>

          <Route path='/article' render={(props) => (
            <Switch>
              <Layout {...props}>
                <Route path="/article" exact component={ArticleList} />
                <Route path="/article/add" component={ArticleAdd} />
              </Layout>
            </Switch>
          )}></Route>
          <Route component={Empty}></Route>
          {/* <Route path='*' exact={true} component={My404Component} /> */}
        </Switch>
      </Router>
    );
  }
}
export default App;