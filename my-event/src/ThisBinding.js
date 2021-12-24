// Binding this to normal function
// will use constructor

import { render } from '@testing-library/react';
import React, { Component } from 'react'

export class ThisBinding extends Component{

    constructor(props){
        super(props);

        this.state ={
            name : "Shivam",
            job : " SD1",
            id : this.props.id
        }

        this.clickEvent = this.clickEvent.bind(this);

    }

    clickEvent(){
        console.log("Clicked", this);
    }

    render(){
        return(<div>
            <h2>This is Normal function</h2>
            <h2>Name {this.state.name}</h2>
            <h2>job {this.state.job}</h2>
            <h2>Id {this.state.id}</h2>
            <button onClick={this.clickEvent}>Click me</button>
        </div>)
    }
}