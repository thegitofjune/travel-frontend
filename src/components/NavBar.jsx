import { Link } from 'react-router-dom'
import '../styles/navbar.css'


const NavBar = () => {

    return (
        <div>
            <nav className="navbar  navbar-light  greyBackground navbar-fixed-top" >
                
                        <Link className="navbar-brand" to="/"></Link> |
                   
                        <Link className="nav-item nav-link active" to="/">Travel Map</Link>|
                   
                        <Link className="nav-item nav-link active" to="/locations">Destinations</Link>|
                   
                        <Link className="nav-item nav-link active" to="/add-location">Add a Destination</Link>|
              
            </nav>
        </div>
    )

}

export default NavBar