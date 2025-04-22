import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>404 - Page Not Found</h1>
            <Link to='/' className="link">Back to the home page...</Link>
        </div>
     );
}
 
export default NotFound;