import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Card';
import 'tachyons';

//getting info on robots 
//from robots.js where we have an
//object there that we can use
import robots from './robots';

//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
//<Hello greeting ={'Hello ' + 'React Ninja'}/>

root.render(

    //we are using props here like greeting

  <React.StrictMode>
    <div>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
