import React from "react";
import { Link } from 'react-router-dom';
import "./Budget.css";

const Budget = ({ budget, id }) => {
  const { date, item_name, amount } = budget;
  return (
    <>
    
      <div className="budget">
      
        <button className="date-button">{date}</button>
        <div>{item_name}</div>
        <div>{amount}</div>
        <Link to={'/transactions/' + id}><button className="detail-view">Detail View</button></Link>
        
      </div>

    </>
  )
};

export default Budget;
