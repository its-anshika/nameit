import React from 'react';
import Namecard from './Namecard.js';

const Results = ({ suggested }) => {
    const namesarr = suggested.map((name) =>{
        return <Namecard key={name} suggestedname={name}/>;
        // return <p key={name}>{name} </p>;
    })

    return (
        <div className="results">
            {namesarr}
        </div>
    )
}
export default Results;
/* <p>{suggested.length > 0 && suggested[0]}</p> */
/* equivalent to <p>{suggested.length > 0 ? suggested[0] : null}</p> */