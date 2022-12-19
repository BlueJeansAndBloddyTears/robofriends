import React from "react";

const Scroll = (props) => {
return (
    // {{}} the first curly brackets is a javascript expression
    //second are returning an object so there
    //we can have styles
    <div style={{overflowY:'scroll', border:'1px solid black', height:'500px'}}>
        {props.children}
    </div>
)
}

export default Scroll;