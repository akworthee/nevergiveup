import React from "react"
import { connect } from "react-redux"
import { getUserAction } from "../../actions/userAction";

const { default: Button } = require("../Controls/Button/Button")
const { default: Table } = require("../Controls/Table")

const Login = (props) =>{
    // const closeModal = (e) =>{
    //    props.handleClick(e);
    // }
   
    
    return(
        <div id="myModal" className={props.styles.modal}>
            
            <div className={props.styles["modal-content"]}>
            <span>Login</span>
            <span className={props.styles.close} onClick={(e)=>{props.handleClick(e)}}>&times;</span>
            <Table arr={props.arr} stateName="login"/>
            {/* <Button buttonName="LogIn"  onClick={(e)=>{login(e)}}/> */}
            <Button handleClick={props.getUserAction} buttonName="LogIn"></Button>
            {/* <button onClick={props.getUserAction}>LogIn</button> */}
            
            </div>
        </div>
    )
}

Login.defaultProps = {
    arr: [{
        UserName: String,
        Password: String
    }]
}

const mapDispatchToProps = (dispatch) =>{
    return { getUserAction: () => dispatch(getUserAction())}
}

export default connect(null,mapDispatchToProps)(Login);