// SpecificWorkers.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import EditWorkerProfile from '../../components/EditWorkerProfile';

const SpecificWorkers = () => {
  const { worker_id } = useParams();
  const [worker, setWorker] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8000/profiles/${worker_id}`)
      .then((res) => res.json())
      .then((resp) => {
        setWorker(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [worker_id]);

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className='container-fluid'>
      <div className='row'>
        <Sidebar />
        <div className='col p-0'>
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
                        <td>{worker.status}</td>
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
