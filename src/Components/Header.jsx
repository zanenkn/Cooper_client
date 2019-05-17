import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return(
    <ul>
      <li><NavLink activeStyle={{fontWeight: 'bold'}} to='/'>Cooper Calculator</NavLink></li>
      <li><NavLink activeStyle={{fontWeight: 'bold'}} to='/history'>History</NavLink></li>   
    </ul>
  )
};

export default Header