import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import '../styles/addLocation.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const EditLocation = () => {

    const params = useParams()
    const navigate = useNavigate()
    const updateLocationApi = `http://localhost:8088/api/v1/locations/` + params.locationId
    const locationDetailApi = `http://localhost:8088/api/v1/locations/` + params.locationId
    const regionApi = `http://localhost:8088/api/v1/locations/regions`
    const [rating, setRating] = useState('')
    const [name, setName] = useState('')
    const [review, setReview] = useState('')
    const [region, setRegion] = useState("")
    const [regions, setRegions] = useState([])

    const loadRegions = () => {
        axios.get(regionApi).then((response) => {
            setRegions(response.data);
          });
    }

    const updateLocation = (event) => { 
        event.preventDefault()

        axios.put(updateLocationApi, {
            locationId: params.locationId,
            name: name,
            review: review,
            rating: rating,
            region: region
        }).then(
            navigate('/locations')
        )
    }

    const loadLocationDetails = () => {
        axios.get(locationDetailApi).then
            ((response) => {
                setName(response.data.name)
                setReview(response.data.review)
                setRating(response.data.rating)
                setRegion(response.data.region)
            });
    }

    useEffect(() => {
        loadLocationDetails()
        loadRegions()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

 
    return (
        <div className="center">
            <hr />
            <Form className="col-10" onSubmit={updateLocation}>
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
                    <Form.Group className="mb-3">
                    <Form.Select  name="region" value={region} onChange={event => setRegion(event.target.value)}>
                                    {regions.map((region, id) => (
										<option key={region.id} name="region">
											{region}  
										</option>
									))}
                                   </Form.Select >
                </Form.Group>
                <Button variant="success" type="submit" className="button-padding">Submit </Button>
                <Button variant="primary" className="btn btn-danger button-padding" onClick={() => navigate('/locations')}>Cancel</Button>
            </Form>
        </div>
    )
}

export default EditLocation