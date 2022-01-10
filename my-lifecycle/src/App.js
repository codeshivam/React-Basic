import './App.css';
import React, { Component } from 'react'
import { Students } from './Students';

class App extends Component{
  //1.App constructor called first
  constructor(props){
    super(props);
   console.log("App constructor called");
  }
//6. Last Student didMount will be called
  componentDidMount(){
    console.log("App Mounted");
  }
//2. App rendered method called 
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
