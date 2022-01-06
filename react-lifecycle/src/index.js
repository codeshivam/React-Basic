import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import { Clock } from './Clock';
import reportWebVitals from './reportWebVitals';



ReactDOM.render(
  <React.StrictMode>
    <App />
    <Clock date = {new Date()} />
  </React.StrictMode>,
  document.getElementById('root')
);


//setInterval(tick, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
