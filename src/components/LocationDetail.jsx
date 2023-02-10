import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import {Link, useParams} from 'react-router-dom'

const LocationDetail = () => {

    const params = useParams()
    const locationDetailApi = `http://localhost:8088/api/v1/locations/` + params.locationId
    const locationApi = `http://localhost:8088/api/v1/locations/`
    const attractionAPI = `http://localhost:8088/api/v1/attractions/` + params.locationId
    const locationId = params.locationId

    const [locationDetails, setLocationDetails] = useState([])
    const [attractions, setAttractions] = useState([])
    const [location, setLocation] = useState({})


    const loadLocationDetails = () => {
        axios.get(locationDetailApi).then
            ((response) => {
                setLocationDetails(response.data);
                console.log(response.data)
                console.log(attractionAPI)
            });
    }


    const loadLocation = () => {
        axios.get(locationApi).then((response) => {
            setLocation(response.data);
        });
    }

    const loatAttractions = () => {
        axios.get(attractionAPI).then((response) => {
            setAttractions(response.data);
            console.log("in this method")
        });
    }


    useEffect(() => {
        loadLocationDetails()
        loadLocation()
        loatAttractions()
    }, []);


    return (
        <div>
            <hr/>
            <h3>Destination:  {locationDetails.name}</h3>
            <Link to={`/add-attraction/${locationId}`}>add an attaction</Link>            <hr/>
            <p>{locationDetails.review}</p>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Attractions in {locationDetails.name}</th>
                        <th scope="col">Review</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        attractions.map(
                            attraction =>
                                <tr key={attraction.attractionId}>
                                    <td>{attraction.name}</td>
                                    <td>{attraction.review}</td>
                                    
                                </tr>
                        )
                    }
                </tbody>
            </table>

        </div>
    )

}

export default LocationDetail