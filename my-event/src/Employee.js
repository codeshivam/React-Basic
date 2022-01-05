import React from 'react'

export const Employee = () =>{

    function clickEvent(){
        alert("I m event handler");
    }
    return(
    <div>
        <h1>Event in functional component</h1>
        <button onClick={clickEvent}>CLick me</button>
    </div>
    );
}