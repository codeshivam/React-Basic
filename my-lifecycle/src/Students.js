import React, { Component } from 'react'

export class Students extends Component{
    constructor(props){
    //3. Student constructor called
        super(props);
        this.state = {
            name : this.props.name
        }
        console.log("Constructor called");
    }
    //5. Student didMount will be called
    componentDidMount(){
        console.log("Student mounted");
    }
    // 4. Student rendered called
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