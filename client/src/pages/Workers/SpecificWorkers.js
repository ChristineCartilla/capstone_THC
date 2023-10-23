// SpecificWorkers.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import EditWorkerProfile from '../../components/EditWorkerProfile';
import axios from 'axios';
import SidebarOpenBtn from '../../components/SidebarOpenBtn';

const SpecificWorkers = () => {
  const { workerId } = useParams();
  const [worker, setWorker] = useState({});

  useEffect(()=>{
    workerInformation()
  }, [workerId])

  const workerInformation = async () => {
    if(workerId) {
      axios.get(`/profile/${workerId}`)
        .then((response) => {
            const birthDate = new Date(response.data.birthDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            });
            
            response.data.birthDate = birthDate;

            setWorker(response.data);
        }) 
    }
  }

  const handlePassClick = async () => {
    if(workerId){
      try {
          const response = await axios.patch(`/account/setdefault/${workerId}`)
          if(response.status===200){
            alert('Password is set to default');
            window.location.reload();
          }
      } catch (error) {
          console.log(error);
      }
    }
  }

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className=''>
      <SidebarOpenBtn/>
      <div className='mainLayout'>
        <div className="mainLayout-left">
          <Sidebar />
        </div>
        
                <div className="container mainLayout-right" style={{backgroundColor: '#fff', borderRadius: '10px'}}>
                  <div className='worker_pageHeader d-flex justify-content-around'>
                    <h1>Worker Profile</h1>
                    <span></span>
                  </div>
                  <div className='worker_pageBody'>
                    <div className='container text-center'>
                      <div className='row'>
                        <div className='col'>
                          <table className='workerDetail_table table table-borderless text-start w-75'>
                            <tbody>
                              <tr>
                                <th scope='row'>First Name:</th>
                                <td>{worker.first_name}</td>
                              </tr>
                              <tr>
                                <th scope='row'>Middle Name:</th>
                                <td>{worker.middle_name}</td>
                              </tr>
                              <tr>
                                <th scope='row'>Last Name:</th>
                                <td>{worker.last_name}</td>
                              </tr>
                              <tr>
                                <th scope='row'>Birth Date:</th>
                                <td>{worker.birthDate}</td>
                              </tr>
                              <tr>
                                <th scope='row'>Civil Status:</th>
                                <td>{worker.civilStatus}</td>
                              </tr>
                              <tr>
                                <th scope='row'>Nationality:</th>
                                <td>{worker.nationality}</td>
                              </tr>
                              <tr>
                                <th scope='row'>Educational Attainment:</th>
                                <td>{worker.educAttain}</td>
                              </tr>
                              <tr>
                                <th scope='row'>Occupation:</th>
                                <td>{worker.occupation}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className='col'>
                          <table className='workerDetail_table table table-borderless text-start w-75'>
                            <tbody>
                              <tr>
                                <th scope='row'>Status:</th>
                                <td>{worker.prof_status}</td>
                              </tr>
                              <tr>
                                <th scope='row'>Gender:</th>
                                <td>{worker.gender}</td>
                              </tr>
                              <tr>
                                <th scope='row'>Age:</th>
                                <td>{worker.age + ' Years Old'}</td>
                              </tr>
                              <tr>
                                <th scope='row'>Phone Number:</th>
                                <td>{worker.contactNo}</td>
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
                          <button type="button" class="workerPassDefBtn" onClick={handlePassClick}>
                            Set Password to Default
                          </button>
                          <button type="button" class="workerEditBtn" data-bs-toggle="modal" data-bs-target="#editWorkerProfileModal">
                            Edit Worker Profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
      </div>
      <EditWorkerProfile></EditWorkerProfile>
    </div>
  );
};

export default SpecificWorkers;
