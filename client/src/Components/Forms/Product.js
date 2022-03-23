import React, { Component } from "react"
import Table from "../Controls/Table";

class Product extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Table arr={this.props.arr} stateName={"Product"}></Table>
                
            </div>
        )
    }
}

Product.defaultProps = {
    arr:[{
        "Name": String,
        "Brand": String,
        "Model": String,
        "Price": String
    }]
}

export default Product;

