import { useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../styles/addLocation.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AddAttraction = () => {

    const navigate = useNavigate()
    const params = useParams()
    const attractionAPI = `http://localhost:8088/api/v1/attractions/addAttraction/` + params.locationId
    const [name, setName] = useState('')
    const [review, setReview] = useState('')
    const [rating, setRating] = useState("")

    const createAttraction = (event) => {
        event.preventDefault()

        axios.post(attractionAPI, {
            name: name,
            review: review,
            rating, rating
        }).then(
            navigate('/locations')
        )
    }


    return (
        <div>
            <hr />
            <Form className="col-10" onSubmit={createAttraction}>
                <Form.Group className="mb"  >
                    <Form.Label>Attraction Name:</Form.Label>
                    <Form.Control type="text" controlId="name" placeholder="Enter attraction name" value={name} onChange={event => setName(event.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Review:</Form.Label>
                    <Form.Control as="textarea" controlId="review" rows="5" placeholder="Enter attraction review" value={review} onChange={event => setReview(event.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Rating:</Form.Label>
                    <Form.Control type="number" controlId="rating" placeholder="Add a rating from 1 to 5" value={rating} onChange={event => setRating(event.target.value)} />
                </Form.Group>
                <Button variant="success" type="submit" className="button-padding">Submit </Button>
                <Button variant="primary" className="btn btn-danger button-padding" onClick={() => navigate('/locations')}>Cancel</Button>
            </Form>
        </div>
    )

}

export default AddAttraction