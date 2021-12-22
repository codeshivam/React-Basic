import React, { Component } from 'react'

export class Employee extends Component{

    state = {
        EmpName : "Rahul",
        id : 24,
        email : "ANything"
    }

    render(){
        return(
           <div className=' Employee'>
               <h1>My name is {this.state.EmpName}</h1>
               <h2>Employee id is {this.state.id}</h2>
               <h2>Email id is {this.state.email}</h2>
           </div>
        );
    }
}