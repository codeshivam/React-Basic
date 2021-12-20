import react from 'react';
import React, {Component} from 'react';
import reactDom from 'react-dom';
import '../App.css';
import { Greet } from './Greet';

class App extends Component {
  render(){ 
  return(
    <div className="App">
      <h1>Hello React</h1>
      <h2>This is {this.props.name} {this.props.id}component</h2>
      <h3>{this.props.children}</h3>
      <Greet name = "Diana"/>
    </div>
  );
}
}

export default App;
