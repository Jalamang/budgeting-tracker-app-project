import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./ReactChart.css";
//components 
import { Bar, Line, PolarArea, Pie, Radar, Doughnut } from "react-chartjs-2";

//A short registration format registers everything.
import { Chart, LineElement, registerables } from "chart.js";
// Registers the plugin to all charts:
Chart.register(...registerables);


const ReactChart = () => {
  const [transactions, setTransactions] = useState([]);
  const URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      const transactionsData = await axios.get(URL + "/transactions");
      setTransactions(transactionsData.data);
    };
    fetchData();
  }, []);

  const expenseArray = [];
  transactions.map((expense) =>
    expenseArray.push(
      expense.category[0].toUpperCase() + expense.category.slice(1)
    )
  );

  //labels:
  const data = [...new Set(expenseArray)];

  console.log(data)
  const IncomeArray = [];
  transactions.map((cat) => {
    if (cat.category.toLowerCase() === "income") {
      IncomeArray.push(cat.amount);
    }
  });

  let incomeTotal = IncomeArray.reduce(
    (previousValue, currentValue) =>
      Number(previousValue) + Number(currentValue),
    0
  );

  const foodArray = [];
  transactions.map((cat) => {
    if (cat.category.toLowerCase() === "food") {
      foodArray.push(cat.amount);
    }
  });

  let foodTotal = foodArray.reduce(
    (previousValue, currentValue) =>
      Number(previousValue) + Number(currentValue),
    0
  );

  const savingsArray = [];
  transactions.map((cat) => {
    if (cat.category.toLowerCase() === "savings") {
      savingsArray.push(cat.amount);
    }
  });

  let savingsTotal = savingsArray.reduce(
    (previousValue, currentValue) =>
      Number(previousValue) + Number(currentValue),
    0
  );

  const bankArray = [];
  transactions.map((cat) => {
    if (cat.category.toLowerCase() === "bank") {
      bankArray.push(cat.amount);
    }
  });

  let bankTotal = bankArray.reduce(
    (previousValue, currentValue) =>
      Number(previousValue) + Number(currentValue),
    0
  );

  const petArray = [];
  transactions.map((cat) => {
    if (cat.category.toLowerCase() === "pet") {
      petArray.push(cat.amount);
    }
  });

  let petTotal = petArray.reduce(
    (previousValue, currentValue) =>
      Number(previousValue) + Number(currentValue),
    0
  );

  const telecomsArray = [];
  transactions.map((cat) => {
    if (cat.category.toLowerCase() === "telecoms") {
      telecomsArray.push(cat.amount);
    }
  });

  let telecomsTotal = telecomsArray.reduce(
    (previousValue, currentValue) =>
      Number(previousValue) + Number(currentValue),
    0
  );
console.log(telecomsTotal)
  //amounts for each category
  const categoryTotal = [
    incomeTotal,
    foodTotal,
    savingsTotal,
    bankTotal,
    petTotal,
    telecomsTotal,
    telecomsTotal,
  ];

  return (
    <div className="chart">
      <Doughnut
        data={{
          labels: data,
          datasets: [
            {
              // label: "Budget App",
              data: categoryTotal,
              //backgroundColor:'green',
              backgroundColor: [
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
                "rgba(255, 159, 64, 0.6)",
              ],
              borderWidth: 1,
              borderColor: "#777",
              hoverBorderWidth: 3,
              hoverBorderColor: "#000",
            },
          ],
        }}
        options={{
          plugins: {
            title: {
              display: false,
              text: "Budgeting App",
            },
            legend: {
              display: true,
              position: "right",
            },
          },
        }}
      />
    </div>
  );
};

export default ReactChart;
