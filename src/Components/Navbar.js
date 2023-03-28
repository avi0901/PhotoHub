import { Link } from "react-router-dom"; 

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="links">
                <Link to="/mountain">Mountain</Link>
                <Link to="/goa">Goa</Link>
                <Link to="/">India</Link>
                <Link to="/beach">Beaches</Link>
                <Link to="/bird">Bird</Link>
                <Link to="/food">Food</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;