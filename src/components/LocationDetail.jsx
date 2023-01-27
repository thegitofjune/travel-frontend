import { useParams } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

const LocationDetail = () => {

    const params = useParams()
    const locationDetailApi = `http://localhost:8088/api/v1/locations/` + params.locationId
    const locationApi = `http://localhost:8088/api/v1/locations/`
    const [locationDetails, setLocationDetails] = useState([])
    const [location, setLocation] = useState({})
    

    const loadLocationDetails = () => {
        axios.get(locationDetailApi).then
            ((response) => {
                setLocationDetails(response.data);
                console.log(response.data)
            });
    }

    
    const loadLocation = () => {
        axios.get(locationApi).then((response) => {
            setLocation(response.data);
        });
    }

    useEffect(() => {
        loadLocationDetails()
        loadLocation()
        
    }, []);


    return (
        <div>
            <h3>Location details for  {locationDetails.name}</h3>

            <p>{locationDetails.name}</p>

            <h3>Travel review for  {locationDetails.name}</h3>

            <p>{locationDetails.review}</p>


         

        </div>
    )

}

export default LocationDetail