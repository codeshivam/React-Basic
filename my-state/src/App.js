import './App.css';
import React, {Component} from 'react';
import { Employee } from './Employee';

export class App extends Component{
  state ={
    name :"Shivam",
    roll : "102",
    batch : this.props.Batch
  }

  render(){
    return(
      <div className='App'>
        <h1>Hi {this.state.name}, your roll no is 
        {this.state.roll}
        <h2>Your batch is {this.state.batch}</h2>
        </h1>

        <Employee />
      </div>
    );
  }
}
