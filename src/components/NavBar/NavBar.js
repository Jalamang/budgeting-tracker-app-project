import React from "react";
import { Link } from "react-router-dom";
import AccountTotal from "../AccountTotal/AccountTotal";
import { Navbar, Container } from 'react-bootstrap';
import "./NavBar.css";




const NavBar = () => {
  return (

    <Navbar>
  <Container>
    <Navbar.Brand >
         <Link to="/transactions">
          <h1>Budget App</h1>
         </Link>
    </Navbar.Brand><AccountTotal />
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
         <button className="new-transaction">
         <Link to="/transactions/new">New Transaction</Link>
       </button>
       
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>

    // <div className="navbar">
    //   <div className="budgetTitle">
    //     <Link to="/transactions">
    //       <h1>Budget App</h1>
    //     </Link>
    //   </div>
    //    <div>
    //      <AccountTotal />
         
    //      </div> 
      
    //   <button className="new-transaction">
    //     <Link to="/transactions/new">New Transaction</Link>
    //   </button>
    // </div>
  );
};

export default NavBar;
