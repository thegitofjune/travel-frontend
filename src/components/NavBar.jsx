import {Link} from 'react-router-dom'
import  '../styles/navbar.css'


const NavBar = () => {
 
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light  purple-background " >
            <Link  className="navbar-brand" to="/">Home</Link>
            <Link className="nav-item nav-link active" to="/locations">Locations</Link>
            <Link className="nav-item nav-link active" to="/add-location">Add a Location</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link active" to="/locations">Locations</Link>
                </div>
            </div>
            </nav>
        </div>
    )
    
}

export default NavBar