import { Link } from 'react-router-dom'
import '../styles/navbar.css'


const NavBar = () => {

    return (
        <div>
            <nav className="navbar  navbar-light  purple-background " >
                <ul id="menu">
                    <li>
                        <Link className="navbar-brand" to="/"></Link> 
                    </li>&nbsp;|&nbsp;
                    <li>
                        <Link className="nav-item nav-link active" to="/">Travel Map</Link>
                    </li>&nbsp;|&nbsp;
                    <li>
                        <Link className="nav-item nav-link active" to="/locations">Destinations</Link>
                    </li>&nbsp;|&nbsp;
                    <li>
                        <Link className="nav-item nav-link active" to="/add-location">Add a Destination</Link>
                    </li>&nbsp;|&nbsp;
                </ul>
            </nav>
        </div>
    )

}

export default NavBar