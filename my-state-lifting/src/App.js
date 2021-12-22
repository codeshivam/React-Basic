import './App.css';
import React, { Component } from 'react';
import { User } from './User';

class App extends Component{
    state = {
        name : "Shivam",
        work : "Full Stack",
        num : 10
    }
    render(){
        return(
        <div className='App'>
            <h1>Hi I am {this.state.name}</h1>
            <h1>I work as a {this.state.work}</h1>
            //lifting state.num in user as probs
            <User id = {this.state.num}/>
        </div>);
    }
}
export default App;
