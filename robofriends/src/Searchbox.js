import React from "react";


const Searchbox = () => {
    //className = tc means text center using tachyons module
    return(
        <div className="tc">
        <input className="pa3 ba b--green bg-lightest-blue"
               type='search'
               placeholder='search robots' />
        </div>
    )
}

export default Searchbox;