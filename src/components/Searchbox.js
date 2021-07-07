import React from 'react';

const Searchbox = ({ oninput }) =>{
return(
    <div className="search">
     <input onChange={(event) => oninput(event.target.value)} type="text" placeholder="Type keywords here" className="search-input"/>
    </div>
)
}
// event handlers(onclick,onchange,...)automatically gets passed on with events
//event.target.value is what user types
export default Searchbox;