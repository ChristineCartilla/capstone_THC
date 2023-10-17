import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import EditUserProfile from '../../components/EditUserProfile';
import SidebarOpenBtn from '../../components/SidebarOpenBtn';


const Profile = () => {
  const profileID = sessionStorage.getItem("profileId"); 
  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    profileInformation();
  }, [profileID]);

  const profileInformation = async () => {
    if (profileID) {
      axios.get(`/profile/${profileID}`)
        .then((response) => {
          const birthDate = new Date(response.data.birthDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });

          response.data.birthDate = birthDate;

          setProfileData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching profile data:", error);
        });
    }
  }


  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="">
      <SidebarOpenBtn />
      <div className="mainLayout">
        <div className='mainLayout-left' >
          <Sidebar />  
        </div>
        
        <div className="container mainLayout-right" style={{backgroundColor: '#fff', borderRadius: '10px'}}>
          <div className="worker_pageHeader d-flex justify-content-around">
            <h1>Profile</h1>
            <span></span>
          </div>
          <div className="worker_pageBody">
            <div className='container text-center'>
              <div className='row'>
                <div className='col'>
                  <table className="workerDetail_table table table-borderless text-start w-75">
                    <tbody>
                      <tr>
                        <th scope='row'>First Name:</th>
                        <td>{profileData.first_name}</td>
                      </tr>
                      <tr>
                        <th scope='row'>Middle Name:</th>
                        <td>{profileData.middle_name}</td>
                      </tr>
                      <tr>
                        <th scope='row'>Last Name:</th>
                        <td>{profileData.last_name}</td>
                      </tr>
                      <tr>
                        <th scope='row'>Birth Date:</th>
                        <td>{profileData.birthDate}</td>
                      </tr>
                      <tr>
                        <th scope='row'>Birth Place:</th>
                        <td>{profileData.birthPlace}</td>
                      </tr>
                      <tr>
                        <th scope='row'>Civil Status:</th>
                        <td>{profileData.civilStatus}</td>
                      </tr>
                      <tr>
                        <th scope='row'>User Type:</th>
                        <td>{profileData.user_type}</td>
                      </tr>
                      <tr>
                        <th scope='row'>Nationality:</th>
                        <td>{profileData.nationality}</td>
                      </tr>
                      <tr>
                        <th scope='row'>PhilHealth No.:</th>
                        <td>{profileData.philHealthNo}</td>
                      </tr>
                      <tr>
                        <th scope='row'>Educational Attainment:</th>
                        <td>{profileData.educAttain}</td>
                      </tr>
                      <tr>
                        <th scope='row'>Occupation:</th>
                        <td>{profileData.occupation}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className='col'>
                  <table className="workerDetail_table table table-borderless text-start w-75">
                    <tbody>
                      <tr>
                        <th scope='row'>Gender:</th>
                        <td>{profileData.gender}</td>
                      </tr>
                      <tr>
                        <th scope='row'>Age</th>
                        <td>{profileData.age}</td>
                      </tr>
                      <tr>
                        <th scope='row'>Contact No.:</th>
                        <td>{profileData.contactNo}</td>
                      </tr>
                      <tr>
                        <th scope='row'>Email Address:</th>
                        <td>{profileData.email}</td>
                      </tr>
                      <tr>
                        <th scope='row'>Street:</th>
                        <td>{profileData.street}</td>
                      </tr>
                      <tr>
                        <th scope='row'>Barangay:</th>
                        <td>{profileData.barangay}</td>
                      </tr>
                      <tr>
                        <th scope='row'>Municipality:</th>
                        <td>{profileData.municipality}</td>
                      </tr>
                      <tr>
                        <th scope='row'>Province:</th>
                        {/* <td>{profileData.province}</td> */}
                      </tr>
                      <tr>
                        <th scope='row'>Zipcode:</th>
                        <td>{profileData.zipCode}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className='workerProfile_footer d-flex justify-content-between'>
                <button
                  type='button'
                  className='workerBackBtn float-start'
                  onClick={handleBack}>
                  <FontAwesomeIcon icon={faArrowLeft} /> Back
                </button>
                <div className='d-flex flex-column mb-3'>
                  <button type="button" className="workerEditBtn" data-bs-toggle="modal" data-bs-target="#editUserProfileModal">
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EditUserProfile></EditUserProfile>
    </div>
  );
};

export default Profile;
