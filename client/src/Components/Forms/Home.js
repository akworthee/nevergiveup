import React, { Component } from "react";
import Button from "../Controls/Button/Button";
import Login from "./Login";
import Registration from "./Registration";
import styles from "../index.module.scss";
import img from "../../public/Trans (2).jpg"
import { Link } from "react-router-dom";

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            signUp: false,
            signIn: false
        }
    }

    getSingUp =(e)=>{
    this.setState({signUp: true})
    console.log("ssssss")
    }

    getSignIn = (e) =>{
        this.setState({signIn: true})
    }
    closeModal = (e) =>{
        console.log("Home",e.target);
        this.state.signIn? this.setState({signIn: false}): null;
        this.state.signUp? this.setState({signUp: false}): null;
    }
    render(){
        return(
            <>
            <div className={styles.container}>
                <div className={styles["navigation-bar"]}>
                <div id="navigation">
                <img src={img}/>
                <label className={styles.header}>Near</label>
      
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/google">google</Link></li>
            <li><a onClick={this.getSingUp}>Sing Up</a></li>
            <li><a onClick={this.getSignIn}>Sing In</a></li>
        </ul>
    </div>
    </div>
    </div>
        {this.state.signUp?<Registration styles={this.props.styles} handleClick={this.closeModal}/>:null}
        {this.state.signIn?<Login styles={this.props.styles} handleClick={this.closeModal}/>:null}
            {/* <Button handleClick={this.getSingUp} buttonName="Sing Up"/>
            <Button handleClick={this.getSignIn} buttonName="Sign In"/> */}
           </>)
    }
    }
  


export default Home;