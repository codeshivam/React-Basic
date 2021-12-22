import React, { Component } from 'react'

export class User extends Component{

    state = {
        name : "Gyani",
        status : "Student",
        id : this.props.id
    }

    render(){
        return(
            <div className='User'>
                <h3>Hey {this.state.name} here.</h3>
                <h3>I am a {this.state.status}</h3>
                <h3>My id is {this.state.id} here.</h3>
            </div>
        );
    }
}