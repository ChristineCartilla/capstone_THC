import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import axios from 'axios';
import "jquery-ui-dist/jquery-ui";
import {Toaster} from 'react-hot-toast'

import './stylesheets/App.css';
import './stylesheets/Login_stylesheet.css';
import './stylesheets/Sidebar_stylesheet.css';
import './stylesheets/Searchbar_stylesheet.css';
import './stylesheets/Residents_stylesheet.css';
import './stylesheets/ServicesMainPage_stylesheet.css';
import './stylesheets/ServicesSecondPage_stylesheet.css';
import './stylesheets/ServicesThirdPage_stylesheet.css';
import './stylesheets/ServicesPnInD_stylesheet.css';
import './stylesheets/Workers_stylesheet.css';
import './stylesheets/Dashboard_stylesheet.css';
import './stylesheets/Queue_stylesheet.css';


import Login from './pages/Login';
import Registration from './pages/Registration';
import Sidebar from './components/Sidebar';
import Dental from './pages/Dental/Dental';
import DentalSpecificResident from './pages/Dental/DentalSpecificResident';
import DentalSpecificRecord from './pages/Dental/DentalSpecificRecord';
import MedicalCheckUp from './pages/MedicalCheckUp/MedicalCheckUp';
import MedicalCheckUpSpecificResident from './pages/MedicalCheckUp/MedicalCheckUpSpecificResident';
import MedicalCheckUpSpecificRecord from './pages/MedicalCheckUp/MedicalCheckUpSpecificRecord';
import Residents from './pages/Residents/Residents';
import ResidentsSpecificFamily from './pages/Residents/ResidentsSpecificFamily';
import ResidentsSpecificResident from './pages/Residents/ResidentsSpecificResident';
import FamilyPlanning from './pages/FamilyPlanning/familyPlanning';
import FamilyPlanningSpecificResident from './pages/FamilyPlanning/familyPlanningSpecificResident';
import FamilyPlanningSpecificResidentRecord from './pages/FamilyPlanning/familyPlanningSpecificResidentRecord';
import Prenatal from './pages/Prenatal/Prenatal';
import PrenatalSpecificResident from './pages/Prenatal/PrenatalSpecificResident';
import PrenatalSpecificRecord from './pages/Prenatal/PrenatalSpecificRecord';
import Immunization from './pages/Immunization/Immunization';
import ImmunizationSpecificResident from './pages/Immunization/ImmunizationSpecificResident';
import Laboratory from './pages/Laboratory/Laboratory';
import Hematology from './pages/Laboratory/Hematology';
import HematologySpecificResident from './pages/Laboratory/HematologySpecificResident';
import HematologySpecificRecord from './pages/Laboratory/HematologySpecificRecord';
import Urinalysis from './pages/Laboratory/Urinalysis';
import UrinalysisSpecificResident from './pages/Laboratory/UrinalysisSpecificResident';
import UrinalysisSpecificRecord from './pages/Laboratory/UrinalysisSpecificRecord';
import Workers from './pages/Workers/Workers';
import SpecificWorkers from './pages/Workers/SpecificWorkers'
import Profile from './pages/Profile/Profile';
import Dashboard from './pages/Dashboard/Dashboard';
import QueueBHW from './pages/Queue/QueueBHW';
import ImmunizationResidentPage from './pages/Immunization/ImmunizationResidentPage';
import PrivateRoutes from './utils/PrivateRoutes';

axios.defaults.baseURL = 'https://keen-bouman.108-61-201-27.plesk.page/';

function App() {

  return (
    <div className="App ">
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={24}
        containerStyle={{
          textAlign: 'start',
          top: 20,
          left: 20,
          bottom: 20,
          right: 20,
        }}
        toastOptions={{
          success: {
            style: {
              paddingLeft: '20px',
              borderLeft: '5px solid #8EC3B0',
              boxShadow: '2px 2px 5px #8EC3B0',
            },
          },
          error: {
            style: {
              paddingLeft: '20px',
              borderLeft: '5px solid #EC3B14',
              boxShadow: '2px 2px 5px #EC3B14',
            },
          },
        }}
      />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Registration />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/sidebar" element={<Sidebar />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/prenatal" element={<Prenatal />} />
            <Route path="/prenatal/:residentid" element={<PrenatalSpecificResident />} />
            <Route path="/prenatal/:residentid/:recordid" element={<PrenatalSpecificRecord />} />
            <Route path="/immunization" element={<Immunization />} />
            <Route path="/immunization/specres/:residentid" element={<ImmunizationResidentPage />} />
            <Route path="/immunization/specres/:residentid/:recordid" element={<ImmunizationSpecificResident />} />
            <Route path="/medicalcheckup" element={<MedicalCheckUp />} />
            <Route path="/medicalcheckup/:residentid" element={<MedicalCheckUpSpecificResident />} />
            <Route path="/medicalcheckup/:residentid/:recordid" element={<MedicalCheckUpSpecificRecord />} />
            <Route path="/dental" element={<Dental />} />
            <Route path="/dental/:residentid" element={<DentalSpecificResident />} />
            <Route path="/dental/:residentid/:recordid" element={<DentalSpecificRecord />} />
            <Route path="/resident" element={<Residents />} />
            <Route path="/resident/:familyid" element={<ResidentsSpecificFamily />} />
            <Route path="/resident/:familyid/:profile_id" element={<ResidentsSpecificResident />} />
            <Route path="/familyplanning" element={<FamilyPlanning />} />
            <Route path="/familyplanning/:residentid" element={<FamilyPlanningSpecificResident />} />
            <Route path="/familyplanning/:residentid/:recordid" element={<FamilyPlanningSpecificResidentRecord />} />
            <Route path="/laboratory" element={<Laboratory />} />
            <Route path="/hematology" element={<Hematology />} />
            <Route path="/hematology/:residentid" element={<HematologySpecificResident />} />
            <Route path="/hematology/:residentid/:recordid" element={<HematologySpecificRecord />} />
            <Route path="/urinalysis" element={<Urinalysis />} />
            <Route path="/urinalysis/:residentid" element={<UrinalysisSpecificResident />} />
            <Route path="/urinalysis/:residentid/:recordid" element={<UrinalysisSpecificRecord />} />
            <Route path="/queue" element={<QueueBHW />} />
            <Route path="/workers" element={<Workers />}/>
            <Route path="/workers/:workerId" element={<SpecificWorkers/>}/>
            <Route path="/profile/:profileId" element={<Profile />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
