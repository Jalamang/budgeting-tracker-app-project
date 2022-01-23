import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./NewForm.css";

const URL = process.env.REACT_APP_API_URL;

const NewForm = () => {
  let { id } = useParams();
  const [transactions, setTransactions] = useState({
    date: "",
    item_name: "",
    amount: "",
    from: "",
    category: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const transactionsData = await axios(URL + "/transactions/" + id);
      setTransactions(transactionsData.data);
    };
    fetchData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (id !== undefined) {
      axios
        .put(`${URL}/transactions/${id}`, transactions)

        .then(() => navigate(`/transactions/${id}`));
    } else {
      axios
        .post(`${URL}/transactions`, transactions)

        .then(() => navigate(`/transactions`));
    }
  };

  const handleTextChange = (event) => {
    console.log(event.target.value);
    const { value, id } = event.target;
    setTransactions({ ...transactions, [id]: value });
  };

  const handleNevermind = () => navigate(`/transactions/`);

  return (
    <div className="newForm">
      <form className="newForm-control" onSubmit={handleSubmit}>
        <label htmlFor="date">Date :</label>
        <input
          type="text"
          min="2020-01-01"
          max="2022-12-31"
          id="date"
          value={transactions.date}
          onChange={handleTextChange}
          autoComplete="off"
          required
        />

        <label htmlFor="item_name">Item Name :</label>
        <input
          type="text"
          id="item_name"
          value={transactions.item_name}
          onChange={handleTextChange}
          autoComplete="off"
          required
        />

        <label htmlFor="amount">Amount :</label>
        <input
          id="amount"
          type="number"
          value={transactions.amount}
          onChange={handleTextChange}
          autoComplete="off"
          required
        />
        <label htmlFor="from">From :</label>
        <input
          id="from"
          type="text"
          value={transactions.from}
          onChange={handleTextChange}
          autoComplete="off"
          required
        />
        <label htmlFor="category">Select a category </label>
        <select
          id="category"
          value={transactions.category}
          onChange={handleTextChange}
        >
          <option >Choose a category</option>
          <option value="Income">Income</option>
          <option value="Savings">Savings</option>
          <option value="Pets">Pets</option>
          <option value="Food">Food</option>
          <option value="Telecoms">Telecoms</option>
          <option value="Bank">Bank</option>
        </select>
        <br />

        <input type="submit" className="form-submit" />
      </form>
      <button onClick={handleNevermind} className="form-nevermind">
        Nevermind
      </button>
    </div>
  );
};

export default NewForm;
