import './App.css';
import React, { Component } from 'react'
import { Students } from './Students';

class App extends Component{
  constructor(props){
    super(props);
   console.log("App constructor called");
  }

  componentDidMount(){
    console.log("App Mounted");
  }
  
  render(){
    const name = "Shivam";
    console.log("App endered");
  return (
    <div className="App">
      <h1>Hey</h1>
      <Students name = {name}/>
    </div>
  );
}
}

export default App;
