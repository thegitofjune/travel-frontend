import {useState, useEffect} from 'react'
import axios from 'axios'
import LocationCard from './LocationCard'


const Location = () => {

    const api = 'http://localhost:8088/api/v1/locations/'
    const [locations, setLocations] = useState([])

    useEffect(() => {
        loadLocations()
      }, []);

    const loadLocations = () => {
        axios.get(api).then((response) => {
            setLocations(response.data);
          });
    }

    return(
        <div className="container">
            <hr/>
            <div>
                {locations.map(
                    location => <LocationCard key={location.locationId} location={location}/>
                )}
            </div>
        </div>

    );
}

export default Location