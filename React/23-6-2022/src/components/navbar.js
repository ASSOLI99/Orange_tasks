import {Link , NavLink} from "react-router-dom";

// import {Link } from 'react-router-dom'
function Navbar(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg  bg-dark text-white">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/" >Navbar</NavLink>

                
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <NavLink className="nav-Link mx-2"  to="/home" >Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-Link mx-2" to='/about' >About</NavLink>
                        </li>

                        <li className="nav-item">
                        <NavLink className="nav-Link mx-2" to='/counter' >Counter</NavLink>
                        </li>

                    </ul>

                    
                </div>
        </nav>
        </div>
    );
}

export default Navbar;