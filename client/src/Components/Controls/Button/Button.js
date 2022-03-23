import React from "react";
import styles from "./index.module.scss";

const Button = (props)=>{
    const handleClick = (e) =>{
        props.handleClick(e)        
    }
    return(
        <button className={styles.button} onClick={handleClick}>{props.buttonName}</button>
 )
}

export default Button;