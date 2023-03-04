import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../styles/addLocation.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AddLocation = () => {

    const navigate = useNavigate()
    const locationApi = `http://localhost:8088/api/v1/locations/addLocation`
    const [name, setName] = useState('')
    const [review, setReview] = useState('')
    const [rating, setRating] = useState("")
    const sleep = ms => new Promise(r => setTimeout(r, 1000));

    const createLocation = (event) => {
        event.preventDefault()


        axios.post(locationApi, {
            name: name,
            review: review,
            rating: rating
        }).then(() => {
            sleep();
            navigate('/locations')
        })
    }
    return (
        <div className="center">
            <hr />
            <Form className="col-10" onSubmit={createLocation}>
                <Form.Group className="mb-3">
                <Form.Label>Location Name:</Form.Label>
                    <Form.Control type="text" className="form-control" id="name" placeholder="Enter location name" value={name} onChange={event => setName(event.target.value)} />
                    </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label>Review:</Form.Label>
                    <Form.Control as="textarea"  className="form-control" id="review" rows="5" placeholder="Enter location review" value={review} onChange={event => setReview(event.target.value)} />
                    </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label> Rating:</Form.Label>
                <Form.Control type="number" className="form-control" id="review"  placeholder="Add a rating from 1 to 5" value={rating} onChange={event => setRating(event.target.value)}/>
                    </Form.Group>
                <Button variant="primary" type="submit" className="button-padding">Submit </Button>
                <Button variant="primary" className="btn btn-danger button-padding" onClick={() => navigate('/locations')}>Cancel</Button>
            </Form>
        </div>
    )
}

export default AddLocation