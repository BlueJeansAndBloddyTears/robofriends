import React, {Component} from 'react';
//this is called destructuring
import './Hello.css';

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