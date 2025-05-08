import {motion} from 'framer-motion';
const BudgetSummary = (props) => {
    return ( 
        <div className="budget-summary">
            <div className="budget"> <strong>Budget:</strong> {props.budget.toLocaleString()} </div>
            <div className="remaining"> <strong>Left:</strong> {props.remaining.toLocaleString()} </div>
            <motion.div 
                className="reset_button"
                whileHover={{ y: -5, scale: 1.1 }}
                transition={{ duration: 0.3 }}
            >
                <button onClick={props.onReset}>
                    <img src="public/trash-can_5909516.png" alt="trashCan" className="trashCan" />
                </button>
            </motion.div>
        </div>
     );
}
 
export default BudgetSummary;