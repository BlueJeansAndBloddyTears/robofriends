import React, {Component} from "react";
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import {robots} from './robots';
import './App.css';

//we need a STATE which describes our application
// in order to to change what robots get displayed
//

//PROPS are simply things that come from state
//the parent tells the child what the state is
// BUT in order to use STATE we need to go back
//to the way we created components
// not like we have now as a function const app ...
//but as a class which extends react component 

//const state = 

class App extends Component {
    constructor() {
    super()
      this.state = {
        robots: robots,
        searchfield : ''
    }
    
}
onSearchChange = (event) => {


// anytime you make your own methods on a 
// // component use this syntax 
// onSearchChange = (event) => {
// notice the = and => 
//why? so that "this" is able to work

this.setState({searchfield: event.target.value})

//    console.log(filteredRobots);

}


    render() {
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());

    })
    if (!robots.length) {
    
        return  <h1>Loading...</h1>

    } else {
        return (
            <div>
                <h1 className="tc">RoboFriends</h1>
                <Searchbox searchChange={this.onSearchChange}/>
                <Scroll>
                <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        );
            }
    }
}

// const App = () => {
//     return (
//         <div>
//         <h1 className="tc">RoboFriends</h1>
//         <Searchbox />
//         <CardList robots={robots}/>
//         </div>
//     )
// }

export default App;