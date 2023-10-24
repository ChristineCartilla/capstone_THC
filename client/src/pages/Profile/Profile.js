import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import EditUserProfile from '../../components/EditUserProfile';
import SidebarOpenBtn from '../../components/SidebarOpenBtn';
import THCDefaultPatientLogo from '../../images/default_image.png'

const Profile = () => {
  const profileID = sessionStorage.getItem("profileId"); 
  const [profileData, setProfileData] = useState({});

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
    window.history.back();
  };

  return (
    <>
    <div className="">
      <SidebarOpenBtn />
      <div className="mainLayout">
        <div className='mainLayout-left' >
          <Sidebar />  
        </div>
        
        <div className="container mainLayout-right p-0 sp3-mainContainer" style={{backgroundColor: '#fff', borderRadius: '10px'}}>
          <div className="worker_pageHeader d-flex mx-5 px-5">
            <h1 className='text-start '>Profile</h1>
            <span></span>
          </div>
          <div className="sp3-pageBody">
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
                            <td>{profileData.first_name + " "+ profileData.middle_name + " " + profileData.last_name}</td>
                          </tr> 
                          <tr>
                            <th scope="row">Birth Date:</th>
                            <td>{formatDate(profileData.birthDate)}</td>
                          </tr>
                          <tr>
                            <th scope="row">Age:</th>
                            <td>{formatAge(profileData.birthDate)} Years Old</td>
                          </tr>
                          <tr>
                            <th scope="row">Place of Birth:</th>
                            <td>{profileData.birthPlace}</td>
                          </tr>
                          <tr>
                            <th scope='row'>Gender:</th>
                            <td>{profileData.gender}</td>
                          </tr>
                          <tr>
                            <th scope="row">Address:</th>
                            <td>{profileData.street + " " + profileData.barangay + " " + profileData.municipality + " " + profileData.zipCode}</td>
                          </tr>
                          <tr>
                            <th scope='row'>Occupation:</th>
                            <td>{profileData.occupation}</td>
                          </tr>
                          <tr>
                            <th scope='row'>Educational Attainment:</th>
                            <td>{profileData.educAttain}</td>
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
                            <th scope='row'>Nationality:</th>
                            <td>{profileData.nationality}</td>
                          </tr>
                          <tr>
                            <th scope='row'>Civil Status:</th>
                            <td>{profileData.civilStatus}</td>
                          </tr>
                          <tr>
                            <th scope='row'>PhilHealth No.:</th>
                            <td>{profileData.philHealthNo}</td>
                          </tr>
                          <tr>
                            <th scope='row'>User Type:</th>
                            <td>{profileData.user_type}</td>
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


          <div className='workerProfile_footer d-flex justify-content-between'>
            <button
              type='button'
              className='workerBackBtn float-start'
              onClick={handleBack}>
              <FontAwesomeIcon icon={faArrowLeft} /> Back
            </button>
            <div className='d-flex flex-column mb-3 '>
              <button type="button" className="workerEditBtn" data-bs-toggle="modal" data-bs-target="#editUserProfileModal">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <EditUserProfile></EditUserProfile>
   
    </>
  );
};

export default Profile;
