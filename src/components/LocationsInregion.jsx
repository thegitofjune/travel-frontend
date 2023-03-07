import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { useState, useEffect } from 'react'
import RegionAttractionCard from './RegionAttractionCard'


const LocationsInRegion = () => {
    const params = useParams()

    const locationsInRegionAPI = 'http://localhost:8088/api/v1/locations/getByRegion/' + params.region

    const [locations, setLocations] = useState([])

    const loadLocationsInRegion = () => {
        axios.get(locationsInRegionAPI).then
            ((response) => {
                setLocations(response.data)
            });
    }
    useEffect(() => {
        loadLocationsInRegion()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="container">
            <hr />
            {locations.map(
                    location => <RegionAttractionCard key={location.locationId} location={location} />
                )}
           
        </div>
    )
}

export default LocationsInRegion