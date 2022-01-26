import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Budget from "../Budget/Budget";
import TransactionFilter from "../TransactionFilter/TransactionFilter";
import "./Budgets.css";

const Budgets = () => {
  const [transactions, setTransactions] = useState([]);
  const [filteredYear, setFilteredYear] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const transactionsData = await axios.get(URL + "/transactions");
        setTransactions(transactionsData.data);
        setFetchError(null);
      } catch (err) {
        setFetchError(Error("Connection to backend not established!"));
      } finally {
        setIsLoading(false);
      }
    };
    setTimeout(() => fetchData(), 1000);
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

  let displayTransactions = transactionsRequested.map((budget, index) => (
    <Budget key={index.toString()} budget={budget} id={index} />
  ));

  return (
    <>
     
      {fetchError && <p style={{ color: "red" }}>{`${fetchError}`}</p>}

      {transactionsRequested.length === 0 && !isLoading && (
        <div className="budget-error">Found no transaction!</div>
      )}
      <TransactionFilter
        selected={filteredYear}
        handleYearChange={handleYearChange}
      /> 
      
      {isLoading && (
        <p style={{ color: "black", fontSize: "1.5rem", fontWeight: "700" }}>
          Loading transactions...
        </p>
      )}
      {!fetchError && !isLoading && (
        <div className="budgets">
          <div className="heading">
            <div>Date</div>
            <div>Name</div>
            <div>Amount</div>
            <div>Detail</div>
          </div>
          {displayTransactions}
        </div>
      )}
    </>
  );
};

export default Budgets;
