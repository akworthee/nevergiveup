import React, {Component} from "react";
import { browserHistory } from "react-router";
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from "react-router-dom";
import Table from "./Controls/Table";
import Home from "./Forms/Home";
import Registration from "./Forms/Registration";
import UserDetails from "./Forms/UserDetails";
import { container } from "webpack";
import styles from "./index.module.scss";
import GetLocation from "./Forms/google";
import googleMapReact from "google-map-react";
import Product from "./Forms/Product";




class App extends Component{
    constructor(props){
        super(props)
    }

    render() {
        console.log("App", styles);
        return ( 
            <div className={styles.parentDiv}>
            <Router>
                <Home styles={styles}/>
                <Product></Product>
                <Route  path="/home" component={Home}></Route>
                {console.log("google Route")}   
                <Route history={BrowserRouter}  path="/google" >
                <GetLocation styles = {styles} />    
                </Route>
                 
      {/* <GetLocation /> */}
        {/* <UserDetails /> */}
        
            </Router>
            </div>
        
     
        )
    }
}

export default App;