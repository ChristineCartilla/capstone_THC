import React, { useState } from "react";
import Sidebar from "../../components/Sidebar.js";
import Worker_Searchbox from "../../components/Worker_Searchbox.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import AdditionQueue from "../../components/AdditionQueue.js";

const QueueBHW = () => {
    const [selectedService, setSelectedService] = useState("Prenatal"); // Default selected service

    // Sample data for the queue (replace with actual data)
    const queueData = {
        Prenatal: [
            { name: "Person 1", date: "2021-10-01" },
            { name: "Person 2", date: "2021-10-01" },
            // Add more entries
        ],
        Checkup: [
            
            // Add more entries
        ],
        Dental: [
            { name: "Person 3", date: "2021-10-01" },
            { name: "Person 4", date: "2021-10-01" },
        ],
        FamilyPlanning: [
            { name: "Person 3", date: "2021-10-01" },
            { name: "Person 4", date: "2021-10-01" },
            { name: "Person 3", date: "2021-10-01" },
        ],
        Immunization: [
            { name: "Person 3", date: "2021-10-01" },
            { name: "Person 4", date: "2021-10-01" },
            { name: "Person 3", date: "2021-10-01" },
            { name: "Person 4", date: "2021-10-01" },
        ],
        Urinalysis: [
            { name: "Person 3", date: "2021-10-01" },
            { name: "Person 4", date: "2021-10-01" },
        ],
        Hematology: [
            { name: "Person 3", date: "2021-10-01" },
            { name: "Person 4", date: "2021-10-01" },
            { name: "Person 3", date: "2021-10-01" },
            { name: "Person 4", date: "2021-10-01" },
            { name: "Person 3", date: "2021-10-01" },
            { name: "Person 4", date: "2021-10-01" },
        ],
    };

    const handleServiceClick = (service) => {
        setSelectedService(service);
    };


    return (
        <div className="">
            <div className="mainLayout">
                <div className="mainLayout-left">
                    <Sidebar />
                </div>
                <div className="mainLayout-right container">
                    <div className="sp1-pageHeader d-flex justify-content-start">
                        <h1>Queuing</h1>
                    </div>
                    <div className="QueueCount row d-flex justify-content-evenly">
                        {Object.keys(queueData).map((service) => (
                            <div className="col p-2" key={service}>
                                <div className="card">
                                    <div className="card-body">
                                        <h6 className="card-title">{service}</h6>
                                        <br />
                                        <h2 className="card-text">{queueData[service].length}</h2>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="queuingContent">
                        <div className="row">
                            <div className="queingNav">
                                <ul className="nav justify-content-center">
                                    {Object.keys(queueData).map((service) => (
                                        <li className="nav-item" key={service}>
                                            <button
                                                className={`nav-link btn${
                                                    selectedService === service ? " active" : ""
                                                }`}
                                                onClick={() => handleServiceClick(service)}
                                            >
                                                {service}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                                <div className="col">
                                    <div className="queuingContentHeader d-flex justify-content-evenly">
                                        <div className="col">
                                            <h2>{selectedService} Queue</h2>
                                        </div>
                                        <div className="col">
                                            <Worker_Searchbox />
                                        </div>
                                        <div className="col">
                                            <button
                                                type="button"
                                                data-bs-toggle="modal"
                                                data-bs-target="#AddQueue"
                                            >
                                                <FontAwesomeIcon icon={faPlus} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="container table-responsive">
                                        <table className="queueTable table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Que No.</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {queueData[selectedService].map((entry, index) => (
                                                    <tr key={index}>
                                                        <td>{index + 1}</td>
                                                        <td>{entry.name}</td>
                                                        <td>{entry.date}</td>
                                                        <td>Pending</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <AdditionQueue />
            </div>
        </div>
    );
};

export default QueueBHW;
