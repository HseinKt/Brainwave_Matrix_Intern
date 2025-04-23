import { Link } from 'react-router-dom';
import '../CSS/BugetTracker.css';
import { useState } from 'react';
import ExpenseChart from '../components/ExpenseChart';
import ExpenseList from '../components/ExpenseList';
import ExpenseForm from '../components/ExpenseForm';
import BudgetInput from '../components/BudgetInput';
import BudgetSummary from '../components/BudgetSummary';

const BugetTracker = () => {
    const [budget, setBudget] = useState('');
    const [expenses, setExpenses] = useState([]);

    const handleAddExpense = (expense) => {
        setExpenses([...expenses, expense]);
    }

    const handleDeleteExpense = (id) => {
        const updatedExpenses = expenses.filter(expense => expense-id != id);
        setExpenses(updatedExpenses);
    }

    const remaining = budget - expenses.reduce((acc, expense) => acc - expense.amount, budget);

    return ( 
        <div className="budget-tracker-container">

            <div className="budget-tracker-title">
                <Link to="/" className="budget-tracker-link">
                    <h1>Budget Tracker</h1>
                </Link>
            </div>

            <div className="budget-tracker-expenses">
                <div className="budget-tracker-data">
                    <BudgetInput budget={budget} setBudget={setBudget}/>
                    <ExpenseForm handleAddExpense={handleAddExpense}/>
                </div>

                <div className="budget-tracker-list">
                    <ExpenseList expenses={expenses} handleDeleteExpense={handleDeleteExpense}/>
                    <BudgetSummary budget={budget} remaining={remaining}/>
                </div>

                <div className="budget-tracker-chart">
                    <ExpenseChart expenses={expenses}/>
                </div>
            </div>
        </div>
     );
}
 
export default BugetTracker;