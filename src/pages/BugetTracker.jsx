import { Link } from 'react-router-dom';
import '../CSS/BugetTracker.css';
import Expenses from '../components/Expenses';
import List_of_expenses from '../components/list_of_expenses';
import Chart_of_expenses from '../components/Chart_of_expenses';

const BugetTracker = () => {
    return ( 
        <div className="budget-tracker-container">

            <div className="budget-tracker-title">
                <Link to="/" className="budget-tracker-link">
                    <h1>Budget Tracker</h1>
                </Link>
            </div>

            <div className="budget-tracker-expenses">
                <div className="budget-tracker-data">
                    <Expenses/>
                </div>

                <div className="budget-tracker-list">
                    <List_of_expenses/>
                </div>

                <div className="budget-tracker-chart">
                    <Chart_of_expenses/>
                </div>
            </div>
        </div>
     );
}
 
export default BugetTracker;