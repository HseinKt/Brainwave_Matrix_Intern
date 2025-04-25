const ExpenseList = (props) => {
    return ( 
        <div className="expense-list">
            <h3>List of Expenses</h3>
            {props.expenses.length === 0 ? (
                <p>No expenses added yet.</p>
            ) : (
                <ul>
                    {props.expenses.map((expense, id) => (
                        <li key={id}>
                            <span className="span-name">{expense.name}</span>
                            <span className="span-amount">{expense.amount}$</span>
                            <button onClick={() => props.handleDeleteExpense(id)}>❌</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
     );
}
 
export default ExpenseList;