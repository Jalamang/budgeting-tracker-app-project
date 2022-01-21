import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./AccountTotal.css";

const AccountTotal = () => {
  const [transactions, setTransactions] = useState([]);
  const URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      const transactionsData = await axios.get(URL + "/transactions");
      setTransactions(transactionsData.data);
    };
    fetchData();
  }, []);

  const totalAmounts = transactions.map((amount) => amount.amount);
  let total = totalAmounts.reduce(
    (previousValue, currentValue) =>
      Number(previousValue) + Number(currentValue),
    0
  );
 
  return (
    <>
      <h1 className="acc-text">Total</h1>
      <div className="account-total">
        <div>{total.toFixed(2).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</div>
        <style>
          {`
      .account-total{
       color: ${total >= 0 && total < 1000 ? "white" : "green"}; 
       width:'250px';
      }
      .account-total{
        color: ${total < 0 ? "red" : ""}  
       }
`}
        </style>
      </div>
    </>
  );
};

export default AccountTotal;
