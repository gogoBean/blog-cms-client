import React,{Component} from 'react';
import {Route,Link} from 'react-router-dom';
class Content extends Component{
   render(){
       return (
           <div>
               <h2>主题列表</h2>
               <ul>
                   <li>
                       <Link to='/content/vue'>Vue内容</Link>
                   </li>
                   <li>
                       <Link to='/content/react'>React内容</Link>
                   </li>
                   <li>
                       <Link to='/content/js'>Js内容</Link>
                   </li>
               </ul>
               {
                   this.props.children
               }
           </div>
       )
   }
}
export default Content;
