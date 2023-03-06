import './App.css'
import Location from './components/Location'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import { Routes, Route, useNavigate } from 'react-router-dom'
import Navbar from './components/NavBar'
import LandingPage from './components/LandingPage'
import Footer from './components/Footer'
import LocationDetail from './components/LocationDetail'
import AddLocation from './components/AddLocation'
import AddAttraction from './components/AddAttraction'
import EditLocation from './components/EditLocation'
import NotFoundPage from './components/NoutFoundPage'
import EditAttraction from './components/EditAttraction'
import { Modal } from 'bootstrap'
import ChooseRegion from './components/ChooseRegion'

function App() {

  const Navigate = useNavigate()
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
        <Route path="/modal/:locationId" element={<Modal />}></Route>
        <Route path="/edit-attraction/:locationId/:attractionId" element={<EditAttraction />}></Route>
        <Route path="/choose-region/" element={<ChooseRegion />}></Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
