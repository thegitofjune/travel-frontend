import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'

const LocationDetail = () => {

    const params = useParams()
    const locationApi = `http://localhost:8088/api/v1/locations/`+params.locationId
  
    const [locationDetails, setLocationDetails] = useState([])
    

    return (
        <div>
            <p>this is the detail on this location</p>
        </div>
    )
}

export default LocationDetail