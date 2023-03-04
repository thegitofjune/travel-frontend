import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import '../styles/addLocation.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const EditAttraction = (props) => {

    const params = useParams()
    const navigate = useNavigate()
    const updateAttractionApi = `http://localhost:8088/api/v1/attractions/` +   params.locationId + `/` +params.attractionId
    const attractionApi = `http://localhost:8088/api/v1/attractions/attraction/` + params.attractionId
    const locationApi = `http://localhost:8088/api/v1/locations/` + params.locationId
    const [name, setName] = useState('')
    const [review, setReview] = useState('')
    const [rating, setRating] = useState('')
    const [location, setLocation] = useState({})
    

    const loadLocation = () => {
        axios.get(locationApi).then
            ((response) => {
                setLocation(response.data)
            });
    }

    const updateAttraction = (event) => {
        event.preventDefault()

        axios.put(updateAttractionApi, {
            locationId: params.locationId,
            attractionId: params.attractionId,
            location: location,
            name: name,
            review: review,
            rating: rating
        }).then(
            navigate('/locations')
        )
    }

    const loadAttraction = () => {
        axios.get(attractionApi).then
            ((response) => {

                setName(response.data.name)
                setReview(response.data.review)
                setRating(response.data.rating)
                setLocation(loadLocation())
            });
    }

    useEffect(() => {
      loadAttraction()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    
    return (
        <div className="center">
            <hr />
            <Form className="col-10" onSubmit={updateAttraction}>
                <Form.Group className="mb"  >
                    <Form.Label>Attraction Name:</Form.Label>
                    <Form.Control type="text" className="form-control" id="name" placeholder="Enter attraction name" value={name} onChange={event => setName(event.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label>Review:</Form.Label>
                    <Form.Control as="textarea"  className="form-control" id="review" rows="5" placeholder="Enter attraction review" value={review} onChange={event => setReview(event.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="exampleInputRating">Rating:</Form.Label>
                    <Form.Control type="number" className="form-control" id="rating" placeholder="Add a rating from 1 to 5" value={rating} onChange={event => setRating(event.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit" className="button-padding">Submit </Button>
                <Button variant="primary" className="btn btn-danger button-padding" onClick={() => navigate('/locations')}>Cancel</Button>
            </Form>
       
        </div>
    )
}

export default EditAttraction