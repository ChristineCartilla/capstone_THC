import React, {useState} from "react";
import Sidebar from "../../components/Sidebar.js";

const QueueBHW = () => {

    const [selectedService, setSelectedService] = useState("Prenatal"); // Default selected service

    // Sample data for the queue (replace with actual data)
    const queueData = {
        Prenatal: [
            { name: "Person 1" },
            { name: "Person 2" },
            // Add more entries
        ],
        Checkup: [
            { name: "Person 3" },
            { name: "Person 4" },
            // Add more entries
        ],
        Dental: [
            // Add entries
        ],
        FamilyPlanning: [
            // Add entries
        ],
        Immunization: [
            // Add entries
        ],
        Urinalysis: [
            // Add entries
        ],
        Hematology: [
            // Add entries
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
                        <div className="col p-2">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Prenatal</h5>
                                    <br />
                                    <h2 className="card-text">5</h2>
                                </div>
                            </div>
                        </div>

                        <div className="col p-2">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Checkup</h5>
                                    <br />
                                    <h2 className="card-text">5</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col p-2">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Dental</h5>
                                    <br />
                                    <h2 className="card-text">5</h2>
                                </div>
                            </div>
                        </div>

                        <div className="col p-2">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Family Planning</h5>
                                    <h2 className="card-text">5</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col p-2">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Immunization</h5>
                                    <br />
                                    <h2 className="card-text">5</h2>
                                </div>
                            </div>
                        </div>

                        <div className="col p-2">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Urinalysis</h5>
                                    <br />
                                    <h2 className="card-text">5</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col p-2">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Hematology</h5>
                                    <br />
                                    <h2 className="card-text">5</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="queuingContent">
                        <div className="row">
                            <div className="queingNav">
                                <ul className="nav nav-tabs justify-content-center">
                                    {Object.keys(queueData).map((service) => (
                                        <li
                                            className="nav-item"
                                            key={service}
                                        >
                                            <button
                                                className={`nav-link btn${selectedService === service ? "active" : ""}`}
                                                onClick={() => handleServiceClick(service)}
                                                >
                                                {service}
                                            </button>

                                        </li>
                                    ))}
                                </ul>
                            </div>
                        
                        

                        </div>
                    </div>

                </div>
            </div>
        </div>
     );
}
 
export default QueueBHW;