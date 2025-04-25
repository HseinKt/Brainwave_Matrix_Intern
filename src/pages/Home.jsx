import { Link } from "react-router-dom";
import '../CSS/Home.css';
import Footer from "../components/Footer";

const Home = () => {
    return ( 
        <div>
            <div className="home-container">
                <div className="home-header">
                    <h1>Welcome to the Expense Tracker</h1>
                    <Link className="home-tracker" to="/tracker"> 
                        <button className="btn">Track your expenses</button>
                    </Link>
                </div>

                <div className="home-content">
                    <h3>💡 The Power of Tracking Our Expenses</h3>
                    <p className="home-text">
                        Tracking our expenses is a powerful habit that brings clarity and control over our financial life. It helps us understand where our money goes, identify unnecessary spending, and make smarter decisions with our income. Whether it's saving for a goal, avoiding debt, or simply building better financial awareness, a good expense tracker transforms spending into insight. With this app, users can visualize their habits, set limits, and take actionable steps toward financial freedom — one transaction at a time.
                    </p>
                </div>
            </div>

            <Footer/>            
        </div>
    );
}
 
export default Home;