import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import '../styles/addLocation.css'

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
                console.log(response.data)
            });
    }

    useEffect(() => {
      loadAttraction()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    
    return (
        <div className="center">
            <hr />
            <form className="col-10" onSubmit={updateAttraction}>
                <div className="form-group">
                    <label htmlFor="exampleInputName">Location Name:</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter location name" value={name} onChange={event => setName(event.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputReview">Review:</label>
                    <textarea className="form-control" id="review" rows="5" placeholder="Enter location review" value={review} onChange={event => setReview(event.target.value)}></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputReview">Review:</label>
                    <input type="number"  className="form-control" id="rating"  placeholder="Enter attraction rating" value={rating} onChange={event => setRating(event.target.value)}></input>
                </div>
                <button type="submit" className="btn btn btn-success  button-padding">Submit</button>
                <button type="button" className="btn btn-danger button-padding" onClick={() => navigate('/locations')}>Cancel</button>
            </form>
        </div>
    )
}

export default EditAttraction