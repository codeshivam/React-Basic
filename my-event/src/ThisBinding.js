// Binding this to normal function
// will use constructor

import { render } from '@testing-library/react';
import React, { Component } from 'react'

export class ThisBinding extends Component{

    constructor(props){
        super(props);

        this.clickEvent = this.clickEvent.bind(this);

    }

    clickEvent(){
        console.log("Clicked", this);
    }

    render(){
        return(<div>
            <h2>This is Normal function</h2>
            <button onClick={this.clickEvent}>Click me</button>
        </div>)
    }
}