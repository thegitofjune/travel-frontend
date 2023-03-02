import { useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../styles/addLocation.css'

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
        <div className="center">
            <hr />
            <form className="col-10" onSubmit={createAttraction}>
                <div className="form-group">
                    <label htmlFor="exampleInputName">Attraction Name:</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter attraction name" value={name} onChange={event => setName(event.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputReview">Review:</label>
                    <textarea className="form-control" id="review" rows="5" placeholder="Enter location review" value={review} onChange={event => setReview(event.target.value)}></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputReview">Review:</label>
                    <input type="number" className="form-control" id="rating" placeholder="Enter attraction rating" value={rating} onChange={event => setRating(event.target.value)}></input>
                </div>
                <div>
                <button type="submit" className="btn btn btn-success  button-padding">Submit</button>
                <button type="button" className="btn btn-danger button-padding" onClick={() => navigate('/locations')}>Cancel</button>
                </div>
            </form>
        </div>
    )

}

export default AddAttraction