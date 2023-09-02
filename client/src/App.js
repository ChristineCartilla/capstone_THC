import './stylesheets/App.css';
import './stylesheets/Login_stylesheet.css';
import './stylesheets/Sidebar_stylesheet.css';
import './stylesheets/Searchbar_stylesheet.css';
import './stylesheets/Residents_stylesheet.css';
import './stylesheets/ServicesMainPage_stylesheet.css';
import './stylesheets/ServicesSecondPage_stylesheet.css';
import './stylesheets/ServicesThirdPage_stylesheet.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login';
import Registration from './pages/Registration';
import Sidebar from './components/Sidebar';

import Dental from './pages/Dental/Dental';

import MedicalCheckUp from './pages/MedicalCheckUp/MedicalCheckUp';
import MedicalCheckUpSpecificResident from './pages/MedicalCheckUp/MedicalCheckUpSpecificResident';
import MedicalCheckUpSpecificRecord from './pages/MedicalCheckUp/MedicalCheckUpSpecificRecord';
import Residents from './pages/Residents/Residents';
import ResidentsSpecificFamily from './pages/Residents/ResidentsSpecificFamily';
import ResidentsSpecificResident from './pages/Residents/ResidentsSpecificResident';

function App() {
  return (
    <div className="App ">
      
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Registration />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/medicalcheckup" element={<MedicalCheckUp />} />
          <Route path="/medicalcheckup/:residentid" element={<MedicalCheckUpSpecificResident />} />
          <Route path="/medicalcheckup/specres/record" element={<MedicalCheckUpSpecificRecord />} />
          <Route path="/dental" element={<Dental />} />
          <Route path="/resident" element={<Residents />} />
          <Route path="/resident/:familyid" element={<ResidentsSpecificFamily />} />
          <Route path="/resident/specfam/resident" element={<ResidentsSpecificResident />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
