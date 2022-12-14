import React, {Component} from 'react';
//this is called destructuring
import './Hello.css';

//the class Hello can be turned into a function
//because these are just functions
//working example on how
//this can we written in another way

// const Hello = (props) => {
//     return (
//         //this is jsx it creates its virtual dom 
//         //so we use className instead of class
//         //only changes what needs to.
//         //class is a reserved keyword in Javascript
//         //hence we use className
//         <div className='f1 tc' >
//         <h1>Hello World</h1>
//         <p>Welcome to React</p>
//         <p>{props.greeting}</p>
//         </div>
//         )

//     //we're using props no need for
//     // this before props 

// }

//If you select a block of code and use the key sequence 
// Ctrl+K+C, you'll comment out the section of code. 
// Ctrl+K+U will uncomment the code
class Hello extends Component {
    render() {

        return (
        //this is jsx it creates its virtual dom 
        //so we use className instead of class
        //only changes what needs to.
        //class is a reserved keyword in Javascript
        //hence we use className
        <div className='f1 tc' >
        <h1>Hello World</h1>
        <p>Welcome to React</p>
        <p>{this.props.greeting}</p>
        </div>
        )
    }
}

export default Hello;