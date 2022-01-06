import React, { Component } from 'react'
import './App.css';

export class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      name : "Shivam",
      id : 20,
      year : 2022,
      job : this.props.job
    }
  }

  clickEvent = () => {
    //console.log("Clicked", this);
    this.setState({name : "Satyam",
                  id : 25,
                  job : "NA"
    });
  }

  render(){
    return(
      <div className='App'>
        <h1>Update state please</h1>
        <button onClick={this.clickEvent}>Click me</button>
        <h1>{this.state.name}</h1>
        <h2>{this.state.id}</h2>
        <h2>{this.state.year}</h2>
        <h2>{this.state.job}</h2>
      </div>
    );
  }
}

//export default App;
