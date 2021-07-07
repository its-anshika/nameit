import React from 'react';
// import './index.css';

const Header = ({titl, headerExpanded }) =>{
return(
    <div className="header ">
      <img src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png" className={`headimg ${headerExpanded? 'headimg-expanded': 'headimg-contracted'}`} alt="name"/>
      <h1 className={ `headtxt ${headerExpanded? 'headtxt-expanded': 'headtxt-contracted'}` }>{titl}</h1>
    </div>
)
}

export default Header;