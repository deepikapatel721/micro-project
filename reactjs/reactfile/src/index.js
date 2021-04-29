import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
/*import Demo from './Demo';*/
import Avtar from './Avtar';
import reportWebVitals from './reportWebVitals';

/*
ReactDOM.render(
  <Demo name="deepika"/>,
  document.getElementById('root')
);
*/

ReactDOM.render( <Avtar />, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
