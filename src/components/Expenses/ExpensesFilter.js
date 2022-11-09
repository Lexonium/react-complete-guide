import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    //const [selectedYear, setYear] = useState('');
    const setYearHandler = (event)=>{
        //console.log(event.target.value.toString());
        //setYear(event.target.value.toString());
        props.onYearSelection(event.target.value.toString());
    }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.filterDefault} onChange={setYearHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;