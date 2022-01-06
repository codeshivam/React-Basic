import React from 'react'

export class Admin extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isToggleOn: true
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        console.log("Mounted");
    }

    componentWillUnmount(){
        console.log("unmounted");
    }

    handleSubmit = ()=>{
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
          }));
    }

    render(){
        return(
        <div>
        <button onClick={this.handleSubmit}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
        </div>
        );
    }
}