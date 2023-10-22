import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import EditResidentProfile from '../../components/EditResidentProfile';
import SidebarOpenBtn from '../../components/SidebarOpenBtn';
import { useNavigate} from 'react-router-dom'
import axios from 'axios';

const ResidentsSpecificResident = () => {
  const { profile_id } = useParams();
  const [resident, setResident] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProf();
  }, []);

  const fetchProf = async () => {
    const profDetails = await axios.get(`/profile/${profile_id}`);
    setResident(profDetails.data)

  }

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

        <div className='container mainLayout-right residentLayout'>
          <div className="resident_pageHeader d-flex justify-content-around">
              <h1>Resident Profile</h1>  
              <span></span>
          </div>
          <div className='resident_pageBody'>
            <div className="container text-center">
              <div className="row">
                <div className="col">
                  <table class="residentDetail_table table-borderless text-start w-75">
                    <tbody>
                      <tr>
                        <th scope="row">First Name:</th>
                        <td >{resident.first_name}</td>
                      </tr>
                      <tr>
                        <th scope="row">Middle Name:</th>
                        <td>{resident.middle_name}</td>
                      </tr>
                      <tr>
                        <th scope="row">Last Name:</th>
                        <td>{resident.last_name}</td>
                      </tr>
                      <tr>
                        <th scope="row">Birth Date:</th>
                        <td>{resident.birthDate}</td>
                      </tr>
                      <tr>
                        <th scope="row">Civil Status:</th>
                        <td>{resident.civilStatus}</td>
                      </tr>
                      <tr>
                        <th scope="row">Relationship:</th>
                        <td>{resident.relationship}</td>
                      </tr>
                      <tr>
                        <th scope="row"> Nationality:</th>
                        <td>{resident.nationality}</td>
                      </tr>
                      <tr>
                        <th scope="row">Educational Attainment:</th>
                        <td>{resident.educAttain}</td>
                      </tr>
                      <tr>
                        <th scope="row">Occupation:</th>
                        <td>{resident.occupation}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col">
                  <table class="residentDetail_table table-borderless text-start w-75">
                    <tbody>
                      <tr>
                        <th scope="row">Status:</th>
                        <td >{resident.prof_status}</td>
                      </tr>
                      <tr>
                        <th scope="row">Gender:</th>
                        <td>{resident.gender}</td>
                      </tr>
                      <tr>
                        <th scope="row">Age:</th>
                        <td>{resident.age + " Years Old"}</td>
                      </tr>
                      <tr>
                        <th scope="row">Phone Number:</th>
                        <td>{resident.contactNo}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className='residentProfile_footer d-flex justify-content-between'>
                <button 
                    type="button"
                    className="residentBackBtn float-start"
                    onClick={() => handleBack()}>
                        <FontAwesomeIcon icon={faArrowLeft}/> Back
                </button>
                <div className='d-flex flex-column mb-3'>
                  {/* Button trigger modal */}
                  <button type="button" class="residentEditBtn" data-bs-toggle="modal" data-bs-target="#editResidentProfileModal">
                    Edit Resident Profile
                  </button>
                
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