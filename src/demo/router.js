import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './home'
import About from './about'
import App from './app'
import Content from './content'
import Item from './item'
import NotFound from './notfound'
class IRouter extends Component{
    render(){
        return (
            <Router>
                  <App>
                      <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/about" exact component={About} />
                            <Route path='/content' render={()=>
                                    <Content>
                                        <Route path='/content' exact component={Item}></Route>
                                        <Route path='/content/:itemid' component={Item}></Route>
                                    </Content>
                            
                            
                                } ></Route>
                            <Route component={NotFound}></Route>
                       </Switch>
                  </App>  
            </Router>
        )
    }
}
export default IRouter