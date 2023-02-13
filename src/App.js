import './App.css'
import Location from './components/Location'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/NavBar'
import LandingPage from './components/LandingPage'
import Footer from './components/Footer'
import LocationDetail from './components/LocationDetail'
import AddLocation from './components/AddLocation'
import AddAttraction from './components/AddAttraction'
import EditLocation from './components/EditLocation'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/locations" element={<Location />}></Route>
        <Route path="/location-details/:locationId/" element={<LocationDetail />}></Route>
        <Route path="/add-location/" element={<AddLocation />}></Route>
        <Route path="/add-attraction/:locationId" element={<AddAttraction />}></Route>
        <Route path="/edit-Location/:locationId" element={<EditLocation />}></Route>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
