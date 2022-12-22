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

   const total = totalAmounts.reduce(
    (previousValue, currentValue) =>
      Number(previousValue) + Number(currentValue),
    0
  );

  // https://fastspring.com/blog/how-to-format-30-currencies-from-countries-all-over-the-world/
  const f = new Intl.NumberFormat("en-us", {currency: "USD", style: "currency"});
  const fm = new Intl.NumberFormat("en-us", {notation: "compact"});
// console.log(f.format(total));
  return (
    <>
      <div className="account-total">
        <div>
          {total > 999999.99 
          ? fm.format(total) : f.format(total) }
        </div>
        <style> 
          {`
      .account-total{
       color: ${total >= 0 && total <= 1000.0 ? "white" : "green"}; 
      }
      .account-total{
        border-top: ${
          total >= 0 && total <= 1000.0
            ? "5px groove #ffff"
            : "5px groove #007500"
        }; 
      }

      .account-total{
        color: ${total < 0 ? "red" : ""}  
       }
      .account-total{
        border-top:  ${total < 0 ? "5px groove #ff0000" : ""}
          
       }
`}
        </style>
      </div>
    </>
  );
};

export default AccountTotal;
