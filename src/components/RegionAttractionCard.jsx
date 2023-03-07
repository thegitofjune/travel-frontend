import Card from 'react-bootstrap/Card';
import '../styles/locationCard.css'
import Col from 'react-bootstrap/Col'
import {Link} from 'react-router-dom'



const RegionAttractionCard = (props) => {
    return (
       
        <div className="cardsInRow  ">
                <Card  className="roundCorners cardShadow  cardWitdh spaces">
                    <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">Destination :</Card.Subtitle>
                        <Card.Title>{props.location.name} </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">June's travel rating  :</Card.Subtitle>
                        <Card.Title>{props.location.rating} </Card.Title>
                        <Link to={`/location-details/${props.location.locationId}/`} >More about this destination</Link>
                    </Card.Body>
                </Card>          
       </div>
       
    )
}

export default RegionAttractionCard