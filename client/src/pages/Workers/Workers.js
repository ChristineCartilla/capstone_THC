import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Worker_Searchbox from "../../components/Worker_Searchbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdditionWorker from "../../components/AdditionWorker";

const Workers = () => {
  const [workers, setWorkers] = useState([]);
  const navigate = useNavigate();

  const handleViewWorker = (workerId) => {
    navigate(`/workers/${workerId}`);
  };


  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <div className="col p-0">
          <div className="worker_pageHeader d-flex justify-content-around">
            <h1>Workers</h1>
            <Worker_Searchbox
              setSearchResults={setWorkers}
            />
          </div>
          <div className="worker_addButton d-flex justify-content-start align-items-center">
            <button type="button" data-bs-toggle="modal" data-bs-target="#AddWorker">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
          <div className="worker_pageBody">
            <div className="container table-responsive">
              <table className="table WorkerTable">
                <thead>
                  <tr>
                    <th scope="col">Last Name</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Worker Type</th>
                    <th scope="col">Status</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {workers &&
                    workers.map((worker,idx) => (
                      <tr className="px-5" key={idx} >
                        <td>{worker?.profile[0]?.last_name}</td>
                        <td>{worker?.profile[0]?.first_name}</td>
                        <td>{worker?.profile[0]?.occupation}</td>
                        <td>{worker?.profile[0]?.prof_status}</td>
                        <td>
                          <button
                            type="button"
                            className="worker_viewBtn"
                            onClick={() => handleViewWorker(worker.profile[0]._id)}
                          >
                            View Worker Profile
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <AdditionWorker/>
    </div>
  );
};

export default Workers;
