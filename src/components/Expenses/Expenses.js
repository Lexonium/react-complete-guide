import React, { useState } from 'react';
import Card from "../UI/Card"
import ExpenseItem from "./ExpenseItem"
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter"
function Expenses(props) {
    const [selectedYear, onSelectYear] = useState('2020');
    const yearSelectionHandler = (year) =>{
        onSelectYear(year);
    };
    console.log(selectedYear);
    return (
        <Card className="expenses">
            <ExpensesFilter filterDefault={selectedYear} onYearSelection={yearSelectionHandler}/>
            <ExpenseItem props={props.items[0]} />
            <ExpenseItem props={props.items[1]} />
            <ExpenseItem props={props.items[2]} />
        </Card>
    )
}
export default Expenses