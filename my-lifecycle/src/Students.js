import React, { Component } from 'react'

export class Students extends Component{
    constructor(props){
        super(props);
        this.state = {
            name : this.props.name
        }
        console.log("Constructor called");
    }

    componentDidMount(){
        console.log("Student mounted");
    }

    render(){
        console.log("Student render called")
        return(
            <div>
                <h1>Hi</h1>
                <p>This is {this.state.name}</p>
            </div>
        );
    }
}