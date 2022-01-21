import React from "react";
import AccountTotal from "../../components/AccountTotal/AccountTotal";
import Budgets from "../../components/Budgets/Budgets";
import "./Index.css";

const Index = () => {
  return (
    <div className="index">
      <h1>Index</h1>
      <AccountTotal />
      <Budgets />
    </div>
  );
};

export default Index;
