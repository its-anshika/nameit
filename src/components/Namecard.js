import React from 'react';

const nameurl ="https://www.namecheap.com/domains/registration/results/?domain=%27%3B";

const Namecard = ({ suggestedname }) =>{
return(
    <a target = "_blank" href={ `${nameurl}${suggestedname}` } className="cardlink">
    <div className="namecard">
      <p className="namecard-name">{suggestedname}</p>
    </div>
    </a>
)
}

export default Namecard ;