import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import '../styles/addLocation.css'

const AddLocation = () => {

    const navigate = useNavigate()
    const locationApi = `http://localhost:8088/api/v1/locations/addLocation`
    const [location, setLocation] = useState([])
    const [name, setName] = useState('')
    const [review, setReview] = useState('')

    const createLocation = (event) => {
        event.preventDefault()
    
       
            axios.post(locationApi,{
              name : name,
              review : review,
            }).then(
              navigate('/locations')
            )
        } 
    return(
        <div className="center">
            <hr/>
            <form className="col-10" onSubmit={createLocation}>
            <div className="form-group">
                <label htmlFor="exampleInputName">Location Name:</label>
                <input type="text" className="form-control" id="name" placeholder="Enter location name" value={name} onChange={event => setName(event.target.value)}/>
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

export default AddLocation