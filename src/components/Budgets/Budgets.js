import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Budget from "../Budget/Budget";
import TransactionFilter from "../TransactionFilter/TransactionFilter";
import "./Budgets.css";

const Budgets = () => {
  const [transactions, setTransactions] = useState([]);
  const [filteredYear, setFilteredYear] = useState("All");
  const URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      const transactionsData = await axios.get(URL + "/transactions");
      setTransactions(transactionsData.data);
    };

    fetchData();
  }, []);

  const handleYearChange = (selectedYear) => {
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  const transactionsRequested =
    filteredYear === "All"
      ? transactions
      : transactions.filter(
          (budget) =>
            new Date(budget.date).getFullYear().toString() === filteredYear
        );

  let displayTransactions = "";

  if (transactionsRequested.length === 0) {
    return <div className="budget-error">Found no transaction!</div>;
  } else {
    displayTransactions = transactionsRequested.map((budget, index) => (
      <Budget key={index.toString()} budget={budget} id={index} />
    ));
  }

  return (
    <>
      <TransactionFilter
        selected={filteredYear}
        handleYearChange={handleYearChange}
      />
      <div className="budgets" id="style-2">
        <div>
          <div className="heading">
            <div>Date</div>
            <div>Name</div>
            <div>Amount</div>
            <div>Detail</div>
          </div>
          {displayTransactions}
        </div>
      </div>
    </>
  );
};

export default Budgets;
