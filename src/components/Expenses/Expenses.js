import React, { useState } from 'react';
import Card from "../UI/Card"

import './Expenses.css'
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from "./ExpensesFilter"
import ExpensesList from './ExpensesList';
function Expenses(props) {
    const [selectedYear, onSelectYear] = useState('2020');
    const yearSelectionHandler = (year) => {
        onSelectYear(year);
    };

    const filteredExpenses = (props.items.filter(expense => expense.date.getFullYear().toString() === selectedYear));

    

    return (
        <Card className="expenses">
            <ExpensesFilter filterDefault={selectedYear} onYearSelection={yearSelectionHandler} />
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>
        </Card>
    )
}
export default Expenses