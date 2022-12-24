import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./AccountTotal.css";

const AccountTotal = () => {
  const [transactions, setTransactions] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      const transactionsData = await axios.get(URL + "/transactions");
      setTransactions(transactionsData.data);
    };
    fetchData();
  }, []);

  
  const totalAmounts = transactions.map((amount) => amount.amount);

   

  useEffect(() => {
    setTotalAmount(totalAmounts.reduce(
      (previousValue, currentValue) =>
        Number(previousValue) + Number(currentValue),
      0
    ))
  })

  // https://fastspring.com/blog/how-to-format-30-currencies-from-countries-all-over-the-world/
  const f = new Intl.NumberFormat("en-us", {currency: "USD", style: "currency"});
  const fm = new Intl.NumberFormat("en-us", {notation: "compact"});
// console.log(f.format(total));
  return (
    <>
      <div className="account-total">
        <div>
          {totalAmount > 999999.99 
          ? fm.format(totalAmount) : f.format(totalAmount) }
        </div>
        <style> 
          {`
      .account-total{
       color: ${totalAmount >= 0 && totalAmount <= 1000.0 ? "white" : "green"}; 
      }
      .account-total{
        border-top: ${
          totalAmount >= 0 && totalAmount <= 1000.0
            ? "5px groove #ffff"
            : "5px groove #007500"
        }; 
      }

      .account-total{
        color: ${totalAmount < 0 ? "red" : ""}  
       }
      .account-total{
        border-top:  ${totalAmount < 0 ? "5px groove #ff0000" : ""}
          
       }
`}
        </style>
      </div>
    </>
  );
};

export default AccountTotal;
