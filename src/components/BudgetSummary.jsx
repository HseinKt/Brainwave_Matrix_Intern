const BudgetSummary = (props) => {
    return ( 
        <div className="budget-summary">
            <div className="budget"> <strong>Budget:</strong> {props.budget.toLocaleString()} </div>
            <div className="remaining"> <strong>Left:</strong> {props.remaining.toLocaleString()} </div>
            <div className="reset_button">
                <button onClick={props.onReset}>
                    <img src="public/trash-can_5909516.png" alt="trashCan" className="trashCan" />
                </button>
            </div>
        </div>
     );
}
 
export default BudgetSummary;