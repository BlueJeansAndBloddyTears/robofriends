import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Card';
import 'tachyons';

//getting info on robots 
//from robots.js where we have an
//object there that we can use
import {robots} from './robots';
//we need to destructure it
//we could have robots, cats multiple ones

//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
//<Hello greeting ={'Hello ' + 'React Ninja'}/>

root.render(

    //we are using props here like greeting
  // we are using props here
  //getting data from robots.js like
  //id, name, email.

  <React.StrictMode>
    <div>
      
      <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
      <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
      <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
      <Card id={robots[3].id} name={robots[3].name} email={robots[3].email}/>

    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
