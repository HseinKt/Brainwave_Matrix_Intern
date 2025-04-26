import {motion, useInView} from 'framer-motion';
import { useRef } from 'react';
const ExpenseList = (props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const listVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
    };
      
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };
    
    return ( 
        <div className="expense-list">
            <h3>List of Expenses</h3>
            {props.expenses.length === 0 ? (
                <p>No expenses added yet.</p>
            ) : (
                <motion.ul
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={listVariants}
                >
                    {props.expenses.map((expense, id) => (
                        <motion.li 
                            key={id}
                            style={{ textDecoration: expense.completed ? "line-through" : "none" }}
                            variants={itemVariants}
                        >
                            <span className="span-name">{expense.name}</span>
                            <span className="span-amount">{expense.amount}$</span>
                            <button onClick={() => props.handleDeleteExpense(id)}>❌</button>
                        </motion.li>
                    ))}
                </motion.ul>
            )}
        </div>
     );
}
 
export default ExpenseList;