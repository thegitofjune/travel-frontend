import {Link} from 'react-router-dom'

import '../styles/locationCard.css'

const LocationCard = (props) => {


  return (
    <div className="cardsInRow">
      <div className="card cardWitdh roundCorners cardShadow spaces">
        <div className="card-body">
          <h5 className="card-title">Location</h5>
          <p className="card-text">{props.location.name}.</p>
          <h6 className="card-title">thoughts on {props.location.name}:</h6>
          <p className="card-text">{props.location.reviews.reviewBody}</p>
          <Link to="/location/{locationId}" className="card-link">More about this location</Link>
        </div>
      </div>
    </div>
  )
}

export default LocationCard