import React from "react";
import Row from "./Row";

const Table = (props)=>{
    //console.log(props)
    return(
        <table >
            <tbody>
            <Row arr={props.arr} stateName={props.stateName}/>
            </tbody>
        </table>
    )
}

export default Table;