import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import EditResidentProfile from '../../components/EditResidentProfile';
import SidebarOpenBtn from '../../components/SidebarOpenBtn';
import { useNavigate} from 'react-router-dom'
import axios from 'axios';
import THCDefaultPatientLogo from '../../images/default_image.png'

const ResidentsSpecificResident = () => {
  const { profile_id } = useParams();
  const [resident, setResident] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProf();
  }, []);

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

  function useWindowDimensions() {
      const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    
      useEffect(() => {
        function handleResize() {
          setWindowDimensions(getWindowDimensions());
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);
    
      return windowDimensions;
  }

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const { height, width } = useWindowDimensions();

  const fetchProf = async () => {
    const profDetails = await axios.get(`/profile/${profile_id}`);
    setResident(profDetails.data)

  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    if (!isNaN(date.getTime())) {
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    } else {
    return "Invalid Date";
    }
  }

  const formatAge = (dateString) => {
    const dateOfBirth = new Date(dateString);

    // Calculate the age
    const now = new Date();
    const age = now.getFullYear() - dateOfBirth.getFullYear();
    const monthDiff = now.getMonth() - dateOfBirth.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < dateOfBirth.getDate())) {
        return age - 1;
    }

    return age;
  };

  const handleBack = () => {
    window.history.back()
}

  return (
    <div className=''>
      <SidebarOpenBtn />
      <div className='mainLayout'>
        <div className='mainLayout-left'>
          <Sidebar />  
        </div>

        <div className='container mainLayout-right residentLayout p-0 sp3-mainContainer' >
          <div className="resident_pageHeader d-flex d-flex mx-5 px-5">
              <h1>Resident Profile</h1>  
              <span></span>
          </div>
          <div className='sp3-pageBody'>
          <div className='container '>
              <div className='topDiv'>

                <div className={`sp3-personalInfoDiv personal-info ${
                  width < 1500 ?
                  "oral-health-mobile" : null
                  }`}>
                    <div className="personal-info-left">
                      <table className="">
                        <tbody>
                          <tr>
                            <th scope="row">Name:</th>
                            <td className='mx-3'>{resident.first_name + " "+ resident.middle_name + " " + resident.last_name}</td>
                          </tr>
                          <tr>
                            <th scope="row">Birth Date:</th>
                            <td>{formatDate(resident.birthDate)}</td>
                          </tr>
                          <tr>
                            <th scope="row">Age:</th>
                            <td>{formatAge(resident.birthDate)} Years Old</td>
                          </tr>
                          <tr>
                            <th scope='row'>Gender:</th>
                            <td>{resident.gender}</td>
                          </tr>
                          <tr>
                            <th scope='row'>Occupation:</th>
                            <td>{resident.occupation}</td>
                          </tr>
                          <tr>
                            <th scope='row'>Educational Attainment:</th>
                            <td>{resident.educAttain}</td>
                          </tr>      
                          <tr>
                            <th scope='row'>Contact No.:</th>
                            <td>{resident.contactNo}</td>
                          </tr>
                          <tr>
                            <th scope='row'>Nationality:</th>
                            <td>{resident.nationality}</td>
                          </tr>
                          <tr>
                            <th scope='row'>Civil Status:</th>
                            <td>{resident.civilStatus}</td>
                          </tr>
                          <tr>
                            <th scope='row'>Relationship:</th>
                            <td>{resident.relationship}</td>
                          </tr>
                          <tr>
                            <th scope='row'>Status:</th>
                            <td>{resident.prof_status}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="personal-info-right">
                      <div><img src={THCDefaultPatientLogo}/></div>
                    </div>
                </div>
                    
              </div>
            </div>
          </div>
        </div>
      </div>
      <EditResidentProfile />
    </div>
    
  )
}

export default ResidentsSpecificResident