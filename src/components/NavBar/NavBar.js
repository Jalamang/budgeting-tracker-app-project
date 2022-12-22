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
    
   
      <Navbar.Text>
         <button className="new-transaction">
         <Link to="/transactions/new">New Transaction</Link>
       </button>
       
      </Navbar.Text>
   
  </Container>
</Navbar>
  );
};

export default NavBar;
