//import React, {Component} from "react";
import React from "react";

const Card = (props) => {
    return (
        //we need to make sure that we 
        //return one thing
        //in our case a div component
        //putting an h1 here won't work

        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt='robots' src='https://robohash.org/test?200x200'/>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    )
}

export default Card;