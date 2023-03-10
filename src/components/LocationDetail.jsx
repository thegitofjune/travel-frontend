import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import '../styles/main.css'
import AttractionCard from './AttractionCard'

const LocationDetail = (props) => {

    const params = useParams()
    const locationDetailApi = `http://localhost:8088/api/v1/locations/` + params.locationId
    const attractionAPI = `http://localhost:8088/api/v1/attractions/` + params.locationId
    const locationId = params.locationId
    const [locationDetails, setLocationDetails] = useState([])
    const [attractions, setAttractions] = useState([])


    const loadLocationDetails = () => {
        axios.get(locationDetailApi).then
            ((response) => {
                setLocationDetails(response.data);
            });
    }

    const loatAttractions = () => {
        axios.get(attractionAPI).then((response) => {
            setAttractions(response.data);
        });
    }

    useEffect(() => {
        loadLocationDetails()
        loatAttractions()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <hr />
            <h3>Destination:  {locationDetails.name}</h3>
            <Link to={`/add-attraction/${locationId}`} className="linkGap text-dark">add an attaction</Link>
            <Link to={`/edit-location/${locationId}`} className="linkGap text-dark">Edit this destination</Link>
            <p>{locationDetails.review}</p>

            <div>
                {attractions.map(
                    attraction => <AttractionCard key={attraction.attractionId} attraction={attraction} />
                )}
            </div>

            <br /><br />

        </div>


    )

}

export default LocationDetail