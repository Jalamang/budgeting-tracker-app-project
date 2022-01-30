import React from "react";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Budget.css";

const Budget = ({ budget, id }) => {
  const { date, item_name, amount } = budget;
  return (
    <div>
    
      <div className="budget " >
        <button className="date-button">{date}</button>
        <div>{item_name}</div>
        <div>{amount}</div>
        <Link to={'/transactions/' + id}>
          <Button variant="secondary detail-view">Detail View</Button></Link>
        
      </div>

    </div>
  )
};

export default Budget;
