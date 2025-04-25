import { Link } from 'react-router-dom';
import '../CSS/BugetTracker.css';
import { useEffect, useState } from 'react';
import ExpenseChart from '../components/ExpenseChart';
import ExpenseList from '../components/ExpenseList';
import ExpenseForm from '../components/ExpenseForm';
import BudgetInput from '../components/BudgetInput';
import BudgetSummary from '../components/BudgetSummary';

const BugetTracker = () => {
    const [budget, setBudget] = useState(() => {
        const savedBudget = localStorage.getItem('budget');
        return savedBudget ? Number(savedBudget) : '';
    });

    const [expenses, setExpenses] = useState(() => {
        const savedExpenses = localStorage.getItem('expenses');
        return savedExpenses ? JSON.parse(savedExpenses) : [];
    });

    const handleAddExpense = (expense) => {
        setExpenses([...expenses, expense]);
    }

    const handleDeleteExpense = (id) => {
        setExpenses(expenses.filter((_, i) => i !== id));
    }

    // const remaining = budget - expenses.reduce((acc, expense) => acc + expense.amount, budget);
    const totalSpent = expenses.reduce((acc, exp) => acc + Number(exp.amount), 0);
    const remaining = budget - totalSpent;

    useEffect(() => {
        localStorage.setItem('budget', budget);
    }, [budget]);
    
    useEffect(() => {
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }, [expenses]);
    
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
                    {/* <p>{expenses[0].name}</p>
                    {console.log(expenses[0].name)} */}
                    
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