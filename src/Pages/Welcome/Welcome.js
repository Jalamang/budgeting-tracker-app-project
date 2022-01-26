import React from "react";
import ReactChart from "../../components/Chart/ReactChart";

import "./Welcome.css"
const Welcome = () => {
  return (
    <div className="welcome-page">
        <br/>
        {/* source :  https://www.youneedabudget.com/ */}
      <h1>'Gain Total Control of Your Money™'</h1>
      <h4>
        'Stop living paycheck-to-paycheck, get out of debt, and save more money™'
      </h4>
      <br/>
      <br/>
      <br/>
      <ReactChart />
    </div>
  );
};

export default Welcome;
