import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import '../styles/addLocation.css'

const EditLocation = () => {

    const params = useParams()
    const navigate = useNavigate()
    const updateLocationApi = `http://localhost:8088/api/v1/locations/` + params.locationId
    const locationDetailApi = `http://localhost:8088/api/v1/locations/` + params.locationId
    const [locationId, setLocationId] = useState('')
    const [name, setName] = useState('')
    const [review, setReview] = useState('')



    const updateLocation = (event) => {
        event.preventDefault()

        axios.put(updateLocationApi, {
            locationId: params.locationId,
            name: name,
            review: review
        }).then(
            navigate('/locations')
        )
    }

    const loadLocationDetails = () => {
        axios.get(locationDetailApi).then
            ((response) => {

                setName(response.data.name)
                setReview(response.data.review)
            });
    }

    useEffect(() => {
        loadLocationDetails()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

 
    return (
        <div className="center">
            <hr />
            <form className="col-10" onSubmit={updateLocation}>
                <div className="form-group">
                    <label htmlFor="exampleInputName">Location Name:</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter location name" value={name} onChange={event => setName(event.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputReview">Review:</label>
                    <textarea className="form-control" id="review" rows="5" placeholder="Enter location review" value={review} onChange={event => setReview(event.target.value)}></textarea>
                </div>
                <button type="submit" className="btn btn btn-success  button-padding">Submit</button>
                <button type="button" className="btn btn-danger button-padding" onClick={() => navigate('/locations')}>Cancel</button>
            </form>
        </div>
    )
}

export default EditLocation