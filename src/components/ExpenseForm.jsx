import { useState } from "react";

const ExpenseForm = ({handleAddExpense}) => {

    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !amount) return;
        handleAddExpense({name, amount});
        setName('');
        setAmount('');
    }

    return ( 
        <form onSubmit={handleSubmit} className="expense-form">
            <h3>Enter Your Expenses Here...</h3>

            <label>Name:</label>
            <input 
                type="text" 
                placeholder="e.g. Coffee"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <label>Enter Amount:</label>
            <input 
                type="number" 
                placeholder="e.g. 5.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min={0}
            />

            <div className="submit-button">
                <button type="submit">Add</button>
            </div>
        </form>
     );
}
 
export default ExpenseForm;