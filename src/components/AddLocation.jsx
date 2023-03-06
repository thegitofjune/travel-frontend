import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../styles/addLocation.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AddLocation = () => {

    const navigate = useNavigate()
    const locationApi = `http://localhost:8088/api/v1/locations/addLocation`
    const regionApi = `http://localhost:8088/api/v1/locations/regions`
    const [name, setName] = useState('')
    const [review, setReview] = useState('')
    const [rating, setRating] = useState("")
    const [region, setRegion] = useState("")
    const [regions, setRegions] = useState([])

    const sleep = ms => new Promise(r => setTimeout(r, 1000));

    const loadRegions = () => {
        axios.get(regionApi).then((response) => {
            setRegions(response.data);
          });
    }

    const createLocation = (event) => {
        event.preventDefault()


        axios.post(locationApi, {
            name: name,
            review: review,
            rating: rating,
            region: region
        }).then(() => {
            sleep();
            navigate('/locations')
        })
    }

    useEffect(() => {
        loadRegions()
      }, []);

    return (
        <div className="center">
            <hr />
            <Form className="col-10" onSubmit={createLocation}>
                <Form.Group className="mb-3">
                <Form.Label>Location Name:</Form.Label>
                    <Form.Control type="text"  controlId="name" placeholder="Enter location name" value={name} onChange={event => setName(event.target.value)} />
                    </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label>Review:</Form.Label>
                    <Form.Control as="textarea"  className="form-control"  controlId="review" rows="5" placeholder="Enter location review" value={review} onChange={event => setReview(event.target.value)} />
                    </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label> Rating:</Form.Label>
                <Form.Control type="number" className="form-control"  controlId="review"  placeholder="Add a rating from 1 to 5" value={rating} onChange={event => setRating(event.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                    <Form.Select  name="region" value={region} onChange={event => setRegion(event.target.value)}>
                                    {regions.map((region, id) => (
										<option key={region.id} name="region">
											{region}  
										</option>
									))}
                                   </Form.Select >
                </Form.Group>
                <Button  variant="success" type="submit" className="button-padding">Submit </Button>
                <Button variant="primary" className="btn btn-danger button-padding" onClick={() => navigate('/locations')}>Cancel</Button>
            </Form>
        </div>
    )
}

export default AddLocation