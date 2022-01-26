import React from 'react';
import BudgetDetail from '../../components/BudgetDetail/BudgetDetail';
import Button from '../../components/ButtonComponent/ButtonComponent';
import "./Show.css"

const Show = () => {
  return (<div className='show-page'>
    <h1>Show </h1>
     <BudgetDetail/>
     <Button/>
  </div>);
};

export default Show;
