import Card from "./Card"
import ExpenseItem from "./ExpenseItem"
import './Expenses.css'
function Expenses(props) {

    return (
        <Card className="expenses">
            <ExpenseItem props={props.items[0]} />
            <ExpenseItem props={props.items[1]} />
            <ExpenseItem props={props.items[2]} />
        </Card>
    )
}
export default Expenses