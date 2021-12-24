import React, { Component } from 'react'

export class Student extends Component{
    // when you have to use this in eventhadler function use arrow function
    clickEvent = () => {
        console.log("Clicked",this);
    }
    render(){
        return(
        <div>
            <button onClick={this.clickEvent}>Click me</button>
        </div>
        );
    }
}