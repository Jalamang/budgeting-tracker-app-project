import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="navBar">
      <div className="budgetTitle">
        <Link to="/transactions">
          <h1>Budget App</h1>
        </Link>
      </div>
      <button className="newLink">
        <Link to="/transactions/new">New Transaction</Link>
      </button>
    </div>
  );
};

export default NavBar;
