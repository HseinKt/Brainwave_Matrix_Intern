import { Link } from "react-router-dom";
import '../CSS/Home.css';

const Home = () => {
    return ( 
        <>
            <div>
                <h1>Welcome to the Expense Tracker</h1>
                <p>Track your expenses and manage your budget effectively.</p>
                <p>Click the button below to get started!</p>
                <Link className="home-tracker" to="/tracker"> 
                    <button className="btn">Track your expenses</button>
                </Link>
            </div>            
        </>
        
     );
}
 
export default Home;