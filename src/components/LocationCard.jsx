import {Link} from 'react-router-dom'

import '../styles/locationCard.css'

const LocationCard = (props) => {


  return (
    <div className="cardsInRow ">
      <div className="card cardWitdh roundCorners cardShadow spaces">
        <div className="card-body">
          <h6 className="card-title">Destination:</h6>
          <h5 className="card-text">{props.location.name}</h5>
          <h6 className="card-text">June's travel rating: {props.location.rating}</h6>
          <Link to={`/location-details/${props.location.locationId}/`} >More about this destination</Link>
        </div>
      </div>
    </div>
  )
}

export default LocationCard