import React from "react";
import CardList from './CardList';
import Searchbox from './Searchbox';
import {robots} from './robots';

//we need a STATE which describes our application
// in order to to change what robots get displayed
//

//PROPS are simply things that come from state
//the parent tells the child what the state is
// BUT in order to use STATE we need to go back
//to the way we created components
// not like we have now as a function const app ...
//but as a class which extends react component 

const App = () => {
    return (
        <div>
        <h1 className="tc">RoboFriends</h1>
        <Searchbox />
        <CardList robots={robots}/>
        </div>
    )
}

export default App;