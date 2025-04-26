import { Link } from "react-router-dom";
import '../CSS/Home.css';
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const Home = () => {
    return ( 
        <div>
            <div className="home-container">
                <div className="home-header">
                    <motion.h1
                        initial={{ x: -200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1}}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="moving-text"
                    >
                        Welcome to the Expense Tracker
                    </motion.h1>
                    <Link className="home-tracker" to="/tracker"> 
                        <button className="btn">Track your expenses</button>
                    </Link>
                </div>

                <div className="home-content">
                    <h3>💡 The Power of Tracking Our Expenses</h3>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }} // Start hidden and move up
                        whileInView={{ opacity: 1, y: 0 }} // Animate when in view
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="home-text"
                    >
                    Tracking our expenses is a powerful habit that brings clarity and control over our financial life. It helps us understand where our money goes, identify unnecessary spending, and make smarter decisions with our income. Whether it's saving for a goal, avoiding debt, or simply building better financial awareness, a good expense tracker transforms spending into insight. With this app, users can visualize their habits, set limits, and take actionable steps toward financial freedom — one transaction at a time.
                    </motion.p>
                </div>
            </div>

            <Footer/>            
        </div>
    );
}
 
export default Home;