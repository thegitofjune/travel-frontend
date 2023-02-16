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
                console.log(response.data)
                console.log(attractionAPI)
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
        loatAttractions()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <hr />
            <h3>Destination:  {locationDetails.name}</h3>
            <Link to={`/add-attraction/${locationId}`} className="linkGap">add an attaction</Link>
            <Link to={`/edit-location/${locationId}`} className="linkGap">Edit this location</Link>
            <p>{locationDetails.review}</p>

            <div className="accordion purple-background  width90 corners5" id="accordionExample">
                {attractions.map(
                    attraction => <AttractionCard key={attraction.attractionId} attraction={attraction} />
                )}
            </div>

            <br /><br />

        </div>


    )

}

export default LocationDetail