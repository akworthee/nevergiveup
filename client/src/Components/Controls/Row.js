import React, {Component}from "react"
import Texbox from "./Textbox";
import File from "./File";
import Button from "./Button/Button";
import Lable from "./Lable";
import { setUserAction } from "../../actions/userAction";
import { connect } from "react-redux";

class Row extends Component{
    constructor(props){
        super(props)
        
        this.state={
            recordValues:{

            }
            // recordValues: {
            //     [this.props.stateName]: []
            // }
        }
    }

     getHorizonRows=(users)=>{
        /*const users= [{
            username: String,
            password: String,
            email: String,
            Avatar: ImageBitmap,
            //"button": Button
        }]*/
        //console.log(users)
        var headers, contents;
        //console.log("arr",Object.keys(users[0]));
        //Object.assign({},Object.keys(users[0]));
        //console.log(Object.keys(users));
        users.forEach(user=>{

            headers = Object.keys(user).map(title=>{
                return(
                    <td><Lable lableName={title}/></td>
                )
            })

            contents = Object.entries(user).map(([key,value])=>{
                return(
                    <td>{this.getComponentByType(value,key)}</td>
                )
            })
            
        })
        var newArray = contents.map((e, i) => {return (<tr key={i}>{headers[i]}{e}</tr>) });
        
        return newArray;
 
    }   
handleTextInput=(Id,val)=>{

    let newState = Object.assign({},this.state)
    //newState.recordValues[this.props.stateName][Id.toLowerCase()]=val;
    newState.recordValues[Id.toLowerCase()]=val;
    this.setState( newState);
    console.log("Checking statename",newState);
    //console.log("checking State", this.state)
    
    this.props.setUserAction(this.state.recordValues);
}
insertUser = () =>{
    this.props.insertAction();
}
    getComponentByType = (Type,name) =>{
        var comp="";
        switch(Type){
            case String:
                comp = (<Texbox txtId={name} handleInput={this.handleTextInput}/>)
                break;
            case ImageBitmap:
                comp = (<File fileId={name} handleInput={this.handleTextInput}/>)
                break;
            case Button:
                comp = (<Button />)
                break;  
        }
        
        return comp;
    }

    render(){
        return(
            <>
            {this.getHorizonRows(this.props.arr)}
            
            </>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        recordValues: state.recordValues
    }
}

const mapDispathToProps = (dispath) =>{
    return{
        setUserAction: (users)=> dispath(setUserAction(users))
    }

}

export default connect(mapStateToProps,mapDispathToProps)(Row);