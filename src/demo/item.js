import React,{Component} from 'react';
class Item extends Component{
    render(){
        return (
            <div>
                <h3>
                    {this.props.match.params.itemid?this.props.match.params.itemid:'请单击选择列表标题'}
                </h3>
            </div>
        )
    }
}
export default Item