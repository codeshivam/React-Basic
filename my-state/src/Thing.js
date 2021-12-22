import React, { Component } from 'react'

export class Things extends Component{

    constructor(props){

        super(props);

        this.state = {
            id :1,
            name : "sugar",
            weight : "2 Kg",
            make : this.props.make
        }

    }

    render(){
        return(
            <div>
                <h1>Thing is {this.state.name}</h1>
                <h1>Thing is {this.state.id}</h1>
                <h1>Thing is {this.state.weight}</h1>
                <h1>Thing is {this.state.make}</h1>
            </div>
        );
    }
}