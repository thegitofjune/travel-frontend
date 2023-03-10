import { Link, useParams } from 'react-router-dom'
import '../styles/locationCard.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';


const AttractionCard = (props) => {

  const params = useParams()
  const attractionId = props.attraction.attractionId
  const locationId = params.locationId
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div className="cardsInRow">
      <div className="card cardWitdh roundCorners cardShadow spaces">
        <div className="card-body">
          <h6 className="card-title">Attraction:</h6>
          <h5 className="card-text">{props.attraction.name}</h5>
          <h6 className="card-text">June's travel rating: {props.attraction.rating}</h6>
          <hr />
          <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
          >
            <Button className="reviewButton" variant="custom" onClick={handleShow}>
              read review      </Button>

            <Modal centered show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>June's review of {props.attraction.name}</Modal.Title>
              </Modal.Header>
              <Modal.Body>{props.attraction.review}</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
          </Button>
              </Modal.Footer>
            </Modal>
          </div>
          <hr />
          <Link to={`/edit-attraction/${locationId}/${attractionId}`}  >Edit this attraction</Link>
        </div>
      </div>
    </div>
  )
}

export default AttractionCard