import React, { Component } from 'react'

export default class Marks extends Component {
    constructor(props){
        console.log("Marks constructor");
        super(props);
        this.state = {
            mroll : this.props.roll
        }
    }
    static getDerivedStateFromProps(props,state){
        console.log("get derived method called");
        if(state.mroll !== props.roll){
            return {mroll : props.roll}
        }
        else
        return null;
    }

    componentDidMount(){
        console.log("Marks Mounted");
    }

    render() {
        console.log("Marks render called");
        return (
            <div>
                <h1>{this.state.mroll}</h1>
            </div>
        )
    }
}
