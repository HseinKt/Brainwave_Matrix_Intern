import { useState } from "react";

const ExpenseForm = ({handleAddExpense}) => {

    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // const expense = {
        //     id: Math.floor(Math.random() * 10000),
        //     name: name,
        //     amount: Number(amount)
        // }
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

            <button type="submit">Add</button>
        </form>
     );
}
 
export default ExpenseForm;