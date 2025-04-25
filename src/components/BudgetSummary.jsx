const BudgetSummary = (props) => {
    return ( 
        <div className="budget-summary">
            <div className="budget"> <strong>Budget:</strong> {props.budget.toLocaleString()} </div>
            <div className="remaining"> <strong>Left:</strong> {props.remaining.toLocaleString()} </div>
        </div>
     );
}
 
export default BudgetSummary;