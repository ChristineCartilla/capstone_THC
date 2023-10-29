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
  const [accountData, setAccountData] = useState({});

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
    accountInformation();
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

  const accountInformation = async () => {
    const accId = sessionStorage.getItem("accountId");

    axios.get(`/account/specaccount/${accId}`)
    .then((response) => {
      setAccountData(response.data[0]);
    })
    .catch((error) => {
      console.error("Error fetching account data:", error);
    });
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
                            <th>Name:</th>
                            <td>{profileData.first_name + " "+ profileData.middle_name + " " + profileData.last_name}</td>
                          </tr> 
                          <tr>
                            <th>Birth Date:</th>
                            <td>{formatDate(profileData.birthDate?profileData.birthDate: "N/A")}</td>
                          </tr>
                          <tr>
                            <th>Age:</th>
                            <td>{formatAge(profileData.birthDate?profileData.birthDate + "  Years Old": "N/A")}</td>
                          </tr>
                          <tr>
                            <th>Place of Birth:</th>
                            <td>{profileData.birthPlace?profileData.birthPlace: "N/A"}</td>
                          </tr>
                          <tr>
                            <th>Gender:</th>
                            <td>{profileData.gender?profileData.gender: "N/A"}</td>
                          </tr>
                          <tr>
                            <th>Address:</th>
                            <td>{profileData.street + " " + profileData.barangay + " " + profileData.municipality + " " + profileData.zipCode}</td>
                          </tr>
                          <tr>
                            <th>Occupation:</th>
                            <td>{profileData.occupation?profileData.occupation: "N/A"}</td>
                          </tr>
                          <tr>
                            <th>Educational Attainment:</th>
                            <td>{profileData.educAttain?profileData.educAttain: "N/A"}</td>
                          </tr>      
                          <tr>
                            <th>Contact No.:</th>
                            <td>{profileData.contactNo?profileData.contactNo: "N/A"}</td>
                          </tr>
                          <tr>
                            <th>Email Address:</th>
                            <td>{accountData.email? accountData.email: "N/A"}</td>
                          </tr>
                          <tr>
                            <th>Nationality:</th>
                            <td>{profileData.nationality?profileData.nationality: "N/A"}</td>
                          </tr>
                          <tr>
                            <th>Civil Status:</th>
                            <td>{profileData.civilStatus? profileData.civilStatus: "N/A"}</td>
                          </tr>
                          <tr>
                            <th>PhilHealth No.:</th>
                            <td>{profileData.philHealthNo? profileData.philHealthNo: "N/A"}</td>
                          </tr>
                          <tr>
                            <th>User Type:</th>
                            <td>{profileData.user_type? profileData.user_type: "N/A"}</td>
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
