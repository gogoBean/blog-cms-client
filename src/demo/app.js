import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class App extends Component{
    render(){
        return(
        <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/content'>Content</Link></li>
                <li>
                    <Link to='/hello'>hello</Link>
                </li>
            </ul>
            {
                this.props.children
            }
        </div>)
    }
}
export default App;