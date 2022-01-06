import React, { Component } from 'react'

export class Student extends Component{

    state = {
        name : "Shivam",
        roll : "12"
    }

    handleClick = (name,e) =>{
        e.preventDefault();
        console.log(name);
    }
//pass argument as arrow function in react event
    clickedEvent = (e) => this.handleClick(this.state.name,e)
    render(){
        return(
            <div className='Student'>
                <button onClick={this.clickedEvent}>Click Me</button>
                <button onClick={this.handleClick.bind(this,this.state.roll)}></button>
            </div>
        );
    }
}