import React from "react";
import { Link } from "react-router-dom";
import AccountTotal from "../AccountTotal/AccountTotal";

import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="navbar">
      <div className="budgetTitle">
        <Link to="/transactions">
          <h1>Budget App</h1>
        </Link>
      </div>
       <div>
         <AccountTotal />
         
         </div> 
      
      <button className="new-transaction">
        <Link to="/transactions/new">New Transaction</Link>
      </button>
    </div>
  );
};

export default NavBar;
