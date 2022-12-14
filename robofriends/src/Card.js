//import React, {Component} from "react";
import React from "react";

//import React, {Fragment} from "react";

// when we have multiple elements we
//can use Fragment in order to avoid
// adding unnecesarry divs to the DOM

{/* <Fragment>
<p>Q. What is React?</p>
<p>A. A JavaScript library for building user interfaces</p>
<p>Q. How do I render sibling elements?</p>
<p>A. Use Fragments</p>
</Fragment> */}

//or using the shorthand <> </> if
//not using keys

{/* <>
<p>Q. What is React?</p>
<p>A. A JavaScript library for building user interfaces</p>
<p>Q. How do I render sibling elements?</p>
<p>A. Use Fragments</p>
</> */}

// The only thing that the shorthand syntax doesn’t support
// for now is adding a key. This could be problematic
//if you are creating a description list, for example. 
//In this case, use the standard syntax.

// function Dictionary(props) {
//     return (
//         <dl>
//             {props.terms.map(({word, definition}) => 
//                 <React.Fragment key={word}>
//                     <dt>{word}</dt>
//                     <dd>{definition}</dd>
//                 </React.Fragment>
//             )}
//         </dl>
//     );
// }

const Card = ({name, email, id}) => {
  //  const {name, email, id} = props; 
    return (
        //we need to make sure that we 
        //return one thing
        //in our case a div component
        //putting an h1 here won't work

        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;