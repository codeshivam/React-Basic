import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import { Greet } from './component/Greet';
import { Student } from './component/Students';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Greet name = "Shivam"/>
    <Greet name = "Rekha" />
    <App name = "App" id = "4">
      <p>Small child pragrapf</p>
    </App>
    <Student name = 'Shivam'/>
    <Student name = 'Rahul'/>
    <Student name = 'Ganesh'/>
    <Student name = 'Givya'/>
    <Student name = 'Syana'/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
