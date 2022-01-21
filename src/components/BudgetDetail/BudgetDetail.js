import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./BudgetDetail.css";

const BudgetDetail = () => {
  const [transactions, setTransaction] = useState({
    date: "undefined",
    item_name: "undefined",
    amount: 'undefined',
  });
  const URL = process.env.REACT_APP_API_URL;
  const { id } = useParams();
  

  useEffect(() => {
    const fetchData = async () => {
      const transactionData = await axios.get(URL + "/transactions/" + id);
      setTransaction(transactionData.data);
    };
    fetchData();
  }, []);

  const { date, item_name, amount, from, category } = transactions;

  return (
    <div>
      <div className="budgetDetail">
        <h2>Date : {`${date}`}</h2>
        <h3>Item Name : {`${item_name}`}</h3>
        <h4>Amount :{`${amount}`}</h4>
        <h4>From :{`${from}`}</h4>
        <h4>Category :{`${category}`}</h4>
      </div>
    </div>
  );
};

export default BudgetDetail;
