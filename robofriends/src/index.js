import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import Card from './Card';
//import CardList from './CardList';

import App from './containers/App';

import 'tachyons';

//getting info on robots 
//from robots.js where we have an
//object there that we can use
import {robots} from './containers/robots';
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
      <App />    
      {/* <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
      <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
      <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
      <Card id={robots[3].id} name={robots[3].name} email={robots[3].email}/> */}

    </div>
  </React.StrictMode>
);

// Read about what does
// Strict Mode do
// https://reactjs.org/docs/strict-mode.html

// StrictMode is a tool for highlighting 
// potential problems in an application. Like Fragment, 
// StrictMode does not render any visible UI. 
// It activates additional checks and warnings for 
// its descendants.

// Note:

// Strict mode checks are run in development mode only;
// they do not impact the production build.


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
