import React, {Component} from "react";

class Textbox extends Component {
    constructor(props){
        super(props)
    }
    onChangeInput=(e)=>{
        this.props.handleInput(e.target.id, e.target.value)
    }
    render(){
        return(
        
        <input id={this.props.txtId} type="text" onChange={this.onChangeInput} />
     )
}
}

export default Textbox;