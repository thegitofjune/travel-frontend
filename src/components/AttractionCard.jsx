import { Link, useParams } from 'react-router-dom'
import '../styles/locationCard.css'


const AttractionCard = (props) => {

  const params = useParams()
  const id1 = "headingOne" + props.attraction.attractionId
  const id2 = "collapseOne" + props.attraction.attractionId
  const attractionId = props.attraction.attractionId
  const locationId = params.locationId


  return (
    <div className="cardsInRow">
    <div className="card cardWitdh roundCorners cardShadow spaces">
      <div className="card-body">
        <h6 className="card-title">Attraction:</h6>
        <h5 className="card-text">{props.attraction.name}</h5>
        <h5 className="card-text">{props.attraction.review}</h5>
        <h6 className="card-text">June's travel rating: {props.attraction.rating}</h6>
        <Link to={`/edit-attraction/${locationId}/${attractionId}`}  >Edit this attraction</Link>
      </div>
    </div>
  </div>
  )
}

export default AttractionCard