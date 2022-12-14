import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
    // we get robots as props
    // we destructure it

    //lets get all robots my using map to loop over them

    const cardComponent = robots.map((user, i) => {
        // we use variable i for index so we get 0,1,2....9
        // remember! user just replaces the idea 
        // of what is there in the object;
        // use "user" as a default for mapping anything!

        return <Card id={robots[i].id} name={robots[i].name} email={robots[i].email} />

    })

    return (
        <div>
            {/* remember: JavaScript needs to know
    to compile cardComponent so 
    it needs to be put in brakets */}

            {cardComponent}

        </div>
    )
}

export default CardList;