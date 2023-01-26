import './App.css';
import Location from './components/Location'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/NavBar'
import LandingPage from './components/LandingPage'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path="/" element={<LandingPage/>}></Route>
          <Route path="/locations" element={<Location/>}></Route>          
      </Routes>

    </div>
  );
}

export default App;
