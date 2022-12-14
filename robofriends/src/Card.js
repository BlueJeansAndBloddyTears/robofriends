//import React, {Component} from "react";
import React from "react";

const Card = () => {
    return (
        //we need to make sure that we 
        //return one thing
        //in our case a div component
        //putting an h1 here won't work

        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt='robots' src='https://robohash.org/test?200x200'/>
            <div>
                <h2>Jane Doe</h2>
                <p>jane.doe@gmail.com</p>
            </div>
        </div>
    )
}

export default Card;