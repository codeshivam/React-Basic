import React, { Component } from 'react'
import Marks from './Marks';

export default class Student extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : this.props.name,
            roll : 104
        }
        console.log("Students Constructor");
    }
    componentDidMount(){
        console.log("Student mounted");
    }
    clickHandle = () =>{
        console.log("button clicked");
        this.setState({roll:110});
    }
    render() {
        
        console.log("Student rendered");
        return (
            <div>
              <h1>Hello {this.state.name}</h1>
              <Marks roll = {this.state.roll}/>
              <button onClick={this.clickHandle}>change</button>  
            </div>
        )
    }
}
