import React, {Component} from "react";
import { getUserAction } from "../../actions/userAction";
import {connect} from "react-redux";
import {Buffer} from "buffer";


class UserDetails extends Component{
    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }

    componentDidMount=async ()=>{
        const getUser = await this.props.getUsers();
        
        this.setState({users: getUser.payload.data})
        
    }

    displayImage=()=>{
        
        const test = this.state.users
        .filter(user=>user.avatar != null)
        .map(user=>{
            const b64 = new Buffer.from(user.avatar).toString('base64')
           return <img src={`data:image/png;base64,${b64}`} />
        })
        console.log(test);
        return test;
    }

    render(){
        return(
            <div>
                {this.displayImage()}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        getUsers: ()=>{return dispatch(getUserAction())}
    }
}

export default connect(null,mapDispatchToProps)(UserDetails);