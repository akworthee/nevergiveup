import React, {Component} from "react";
import Table from "../Controls/Table";
import {connect} from "react-redux";
import { getUserAction, insertAction } from "../../actions/userAction";
import Button from "../Controls/Button/Button";
class Registration extends Component{
    constructor(props){
        super(props)
        
    }
    saveUser = () =>{
        //console.log("user",this.props.userRecords.userReducers[0])
        const {username, password,email,avatar} = this.props.userRecords.userDetails.users[0];
        console.log("userComp",username);
        console.log("userComp",this.props.userRecords.userDetails.users[0].username);
        let formData = new FormData();
        formData.append('username',username);
        formData.append('password',password);
        formData.append('email',email);
        formData.append('avatar',avatar);
        // formData.append('username',this.props.userRecords.userDetails.users[0].username);
        // formData.append('password',this.props.userRecords.userDetails.users[0].password);
        // formData.append('email',this.props.userRecords.userDetails.users[0].email);
        // formData.append('avatar',this.props.userRecords.userDetails.users[0].avatar);
        console.log("dfdffd",formData);
        this.props.insertUser(formData)
    }
    getUser=() =>{
        this.props.getUser();
    }
    render(){
        return(
            <div id="myModal" className={this.props.styles.modal}>
                <div className={this.props.styles["modal-content"]}>
                <span>Register</span>
                <span className={this.props.styles.close} onClick={(e)=>{this.props.handleClick(e)}}>&times;</span>
                    <Table arr={this.props.arr}/>
                    <Button handleClick={this.saveUser} buttonName="Submit"></Button>
                    <Button handleClick={this.getUser} buttonName="Get Users"></Button>
                    {/* <button onClick={this.saveUser}>Submit</button>
                    <button onClick={this.getUser}>Get Users</button> */}
                </div>
            </div>
        )
    }
}
Registration.defaultProps = {
    arr: [{
        "UserName": String,
        "Password": String,
        "Email": String,
        "Avatar": ImageBitmap
    }]
}

/*User.PropTypes = {
    user: PropTypes.arrayOf({
        username: PropTypes.string,
        password: PropTypes.string,
        email: PropTypes.string,
        avatar: PropTypes.image
    })

}*/

const mapStateToProps = (state) =>{
    return{
        userRecords: state
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        insertUser: (users)=>{dispatch(insertAction(users))},
        getUser: ()=>{dispatch(getUserAction())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Registration);