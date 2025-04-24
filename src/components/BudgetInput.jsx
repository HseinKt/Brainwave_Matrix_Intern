const BudgetInput = (props) => {

    return ( 
        <div className="budget-input-container">
            <input 
                type="number" 
                placeholder="Enter your budget"
                value={props.budget}
                onChange={(e) => props.setBudget(e.target.value)}
                min={0}
            />
            <p>Your Pudget is {props.budget} Dollars</p>
        </div>
     );
}
 
export default BudgetInput;