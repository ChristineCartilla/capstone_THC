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
  const [filteredWorkers, setFilteredWorkers] = useState([]); // Store filtered workers
  const navigate = useNavigate();

  const handleViewWorker = (workerID) => {
    navigate(`/workers/${workerID}`);
  };

  useEffect(() => {
    // Make a GET request to your JSON server's endpoint to fetch profiles with user_type "worker"
    axios
      .get("http://localhost:8000/profiles?user_type=worker")
      .then((response) => {
        setWorkers(response.data);
        setFilteredWorkers(response.data); // Initialize filtered workers with all workers
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Function to update filtered workers based on search results
  const updateSearchResults = (searchResults) => {
    setFilteredWorkers(searchResults);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <div className="col p-0">
          <div className="worker_pageHeader d-flex justify-content-around">
            <h1>Workers</h1>
            <Worker_Searchbox
              setSearchResults={updateSearchResults}
              workers={workers}
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
                  {filteredWorkers &&
                    filteredWorkers.map((worker) => (
                      <tr className="px-5" >
                        <td>{worker.last_name}</td>
                        <td>{worker.first_name}</td>
                        <td>{worker.occupation}</td>
                        <td>{worker.status}</td>
                        <td>
                          <button
                            type="button"
                            className="worker_viewBtn"
                            onClick={() => handleViewWorker(worker.id)}
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
