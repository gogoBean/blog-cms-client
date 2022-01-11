import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import ArticleList from './List'
import ArticleAdd from './Add'

class index extends Component {
  render () {
    const {match}= this.props
    // console.log('this.props', this.props)
    return (
      <div>
        <Switch>
          <Route path={`${match.path}`} exact component={ArticleList}></Route>
          <Route path={`${match.path}/add`} component={ArticleAdd}></Route>
        </Switch>
      </div>
    );
  }
}

export default index;