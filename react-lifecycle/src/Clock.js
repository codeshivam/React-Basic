import React, { Component } from 'react'

export class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {
            date : this.props.date
        }
    }

    componentDidMount(){
        console.log("Mounted");
        this.timerID = setInterval(()=>this.tick(), 1000)
    }

    componentWillUnmount(){

    }

    tick(){
        this.setState({
            date : new Date()
        });
    }

    render(){
        return(
            <div className='Clock'>
                <h1>{this.state.date.toLocaleTimeString()}</h1>
            </div>
        );
    }
}