import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPlus } from "@fortawesome/free-solid-svg-icons";
import AdditionQueue from "../../components/AdditionQueue.js";
import axios from "axios";

const QueueBHW = () => {
    const [doctorQueue, setDoctorQueue] = useState([]);
    const [dentistQueue, setDentistQueue] = useState([]);
    const [medTechQueue, setMedTechQueue] = useState([]);
    const [nurseQueue, setNurseQueue] = useState([]);
    const [midWifeQueue, setMidWifeQueue] = useState([]);

    useEffect(() => {
        getDoctorQueue();
        getDentistQueue();
        getMedtechQueue();
        getNurseQueue();
        getMidWifeQueue();
    },[]);

    const getDoctorQueue = async () => {
        const getQueue = await axios.get("/queue/fetchdoctorqueue");
        setDoctorQueue(getQueue.data);
    }

    const getDentistQueue = async () => {
        const getQueue = await axios.get("/queue/fetchdentistqueue");
        setDentistQueue(getQueue.data);
    }

    const getMedtechQueue = async () => {
        const getQueue = await axios.get("/queue/fetchmedtechqueue");
        setMedTechQueue(getQueue.data);
    }

    const getNurseQueue = async () => {
        const getQueue = await axios.get("/queue/fetchnursequeue");
        setNurseQueue(getQueue.data);
    }

    const getMidWifeQueue = async () => {
        const getQueue = await axios.get("/queue/fetchmidwifequeue");
        setMidWifeQueue(getQueue.data);
    }

    const doneQueueRec = async (queueRecId) => {
        await axios.patch(`/queue/done/${queueRecId}`);
        window.location.reload()
    }

    function formatDate(queue){
        const date = new Date(queue);
        const formattedDate = date.toLocaleDateString();
        return formattedDate;
    }
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
                    <div className="QueueCount row d-flex justify-content-center">
                        <div className="col-3 col-sm-2 p-2">
                            <div className="card">
                                <div className="card-body">
                                    <h6 className="card-title">Doctor</h6>
                                    <br />
                                    <h2 className="card-text">{doctorQueue.length}</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 col-sm-2 p-2">
                            <div className="card">
                                <div className="card-body">
                                    <h6 className="card-title">Dentist</h6>
                                    <br />
                                    <h2 className="card-text">{dentistQueue.length}</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 col-sm-2 p-2">
                            <div className="card">
                                <div className="card-body">
                                    <h6 className="card-title">MedTech</h6>
                                    <br />
                                    <h2 className="card-text">{medTechQueue.length}</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 col-sm-2 p-2">
                            <div className="card">
                                <div className="card-body">
                                    <h6 className="card-title">MidWife</h6>
                                    <br />
                                    <h2 className="card-text">{midWifeQueue.length}</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 col-sm-2 p-2">
                            <div className="card">
                                <div className="card-body">
                                    <h6 className="card-title">Nurse</h6>
                                    <br />
                                    <h2 className="card-text">{nurseQueue.length}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="my-5 queueMainTab">
                        <nav className="mx-2 d-flex justify-content-between">
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                {
                                    (sessionStorage.getItem("workerType") === "Doctor" || sessionStorage.getItem("workerType") === "Superadmin")? (
                                        <button className="nav-link" id="nav-doctor-tab" data-bs-toggle="tab" data-bs-target="#nav-doctor" type="button" role="tab" aria-controls="nav-doctor" aria-selected="true">Doctor</button>
                                    ): ""
                                }
                                {
                                    (sessionStorage.getItem("workerType") === "Dentist" || sessionStorage.getItem("workerType") === "Superadmin")? (
                                        <button className="nav-link" id="nav-dentist-tab" data-bs-toggle="tab" data-bs-target="#nav-dentist" type="button" role="tab" aria-controls="nav-dentist" aria-selected="false">Dentist</button>
                                    ): ""
                                }
                                {
                                    (sessionStorage.getItem("workerType") === "Medtech" || sessionStorage.getItem("workerType") === "Superadmin")? (
                                        <button className="nav-link" id="nav-medtech-tab" data-bs-toggle="tab" data-bs-target="#nav-medtech" type="button" role="tab" aria-controls="nav-medtech" aria-selected="false">Medical Technologist</button>
                                    ): ""
                                }
                                {
                                    (sessionStorage.getItem("workerType") === "Midwife" || sessionStorage.getItem("workerType") === "Superadmin")? (
                                        <button className="nav-link" id="nav-midWife-tab" data-bs-toggle="tab" data-bs-target="#nav-midWife" type="button" role="tab" aria-controls="nav-midWife" aria-selected="false">Midwife</button>
                                    ): ""
                                }
                                {
                                    (sessionStorage.getItem("workerType") === "Nurse" || sessionStorage.getItem("workerType") === "Superadmin")? (
                                        <button className="nav-link" id="nav-nurse-tab" data-bs-toggle="tab" data-bs-target="#nav-nurse" type="button" role="tab" aria-controls="nav-nurse" aria-selected="false">Nurse</button>
                                    ): ""
                                }
                                                    
                            </div>
                            {
                                (sessionStorage.getItem("workerType") === "BHW" || sessionStorage.getItem("workerType") === "Superadmin")? (
                                    <button
                                        className="queuingContentHeaderBtn "
                                        type="button"
                                        data-bs-toggle="modal"
                                        data-bs-target="#AddQueue">
                                        <FontAwesomeIcon icon={faPlus} /> <span>ADD QUEUE</span>
                                    </button> 
                                ): ""
                            }
                            
                        </nav>
                        <div className="tab-content queueTabDiv" id="nav-tabContent">
                            <div className="tab-pane fade " id="nav-doctor" role="tabpanel" aria-labelledby="nav-doctor-tab" tabIndex="0">
                                <div className="container table-responsive">
                                    <table className="queueTable table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Que No.</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Handler</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {doctorQueue.map((entry, index) => (
                                                <tr key={index}>
                                                    <td>{entry.que_number}</td>
                                                    <td>{entry.profile_id.first_name+" "+entry.profile_id.last_name}</td>
                                                    <td>{formatDate(entry.createdAt)}</td>
                                                    <td>{entry.status}</td>
                                                    <td>
                                                        <button 
                                                            className="queueRecordHandlerApproveBtn"
                                                            onClick={() => doneQueueRec(entry._id)}>
                                                            <FontAwesomeIcon icon={faCheck} />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                            {
                                                (doctorQueue.length == 0)?
                                                    (
                                                        <tr>
                                                            <td></td> 
                                                            <td></td>    
                                                            <td>NO WAITING RESIDENT</td>    
                                                            <td></td>    
                                                            <td></td>       
                                                        </tr>
                                                    ):""
                                                
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="nav-dentist" role="tabpanel" aria-labelledby="nav-dentist-tab" tabIndex="0">
                                <div className="container table-responsive">
                                    <table className="queueTable table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Que No.</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Handler</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {dentistQueue.map((entry, index) => (
                                                <tr key={index}>
                                                    <td>{entry.que_number}</td>
                                                    <td>{entry.profile_id.first_name+" "+entry.profile_id.last_name}</td>
                                                    <td>{formatDate(entry.createdAt)}</td>
                                                    <td>{entry.status}</td>
                                                    <td>
                                                        <button 
                                                            className="queueRecordHandlerApproveBtn"
                                                            onClick={() => doneQueueRec(entry._id)}>
                                                            <FontAwesomeIcon icon={faCheck} />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                            {
                                                (dentistQueue.length == 0)?
                                                    (
                                                        <tr>
                                                            <td></td> 
                                                            <td></td>    
                                                            <td>NO WAITING RESIDENT</td>    
                                                            <td></td>    
                                                            <td></td>       
                                                        </tr>
                                                    ):""
                                                
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="nav-medtech" role="tabpanel" aria-labelledby="nav-medtech-tab" tabIndex="0">
                                <div className="container table-responsive">
                                    <table className="queueTable table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Que No.</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Handler</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {medTechQueue.map((entry, index) => (
                                                <tr key={index}>
                                                    <td>{entry.que_number}</td>
                                                    <td>{entry.profile_id.first_name+" "+entry.profile_id.last_name}</td>
                                                    <td>{formatDate(entry.createdAt)}</td>
                                                    <td>{entry.status}</td>
                                                    <td>
                                                        <button 
                                                            className="queueRecordHandlerApproveBtn"
                                                            onClick={() => doneQueueRec(entry._id)}>
                                                            <FontAwesomeIcon icon={faCheck} />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                            {
                                                (medTechQueue.length == 0)?
                                                    (
                                                        <tr>
                                                            <td></td> 
                                                            <td></td>    
                                                            <td>NO WAITING RESIDENT</td>    
                                                            <td></td>    
                                                            <td></td>       
                                                        </tr>
                                                    ):""
                                                
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="nav-midWife" role="tabpanel" aria-labelledby="nav-midWife-tab" tabIndex="0">
                                <div className="container table-responsive">
                                    <table className="queueTable table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Que No.</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Handler</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {midWifeQueue.map((entry, index) => (
                                                <tr key={index}>
                                                    <td>{entry.que_number}</td>
                                                    <td>{entry.profile_id.first_name+" "+entry.profile_id.last_name}</td>
                                                    <td>{formatDate(entry.createdAt)}</td>
                                                    <td>{entry.status}</td>
                                                    <td>
                                                        <button 
                                                            className="queueRecordHandlerApproveBtn"
                                                            onClick={() => doneQueueRec(entry._id)}>
                                                            <FontAwesomeIcon icon={faCheck} />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                            {
                                                (midWifeQueue.length == 0)?
                                                    (
                                                        <tr>
                                                            <td></td> 
                                                            <td></td>    
                                                            <td>NO WAITING RESIDENT</td>    
                                                            <td></td>    
                                                            <td></td>       
                                                        </tr>
                                                    ):""
                                                
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="nav-nurse" role="tabpanel" aria-labelledby="nav-nurse-tab" tabIndex="0">
                                <div className="container table-responsive">
                                    <table className="queueTable table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Que No.</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Handler</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {nurseQueue.map((entry, index) => (
                                                <tr key={index}>
                                                    <td>{entry.que_number}</td>
                                                    <td>{entry.profile_id.first_name+" "+entry.profile_id.last_name}</td>
                                                    <td>{formatDate(entry.createdAt)}</td>
                                                    <td>{entry.status}</td>
                                                    <td>
                                                        <button 
                                                            className="queueRecordHandlerApproveBtn"
                                                            onClick={() => doneQueueRec(entry._id)}>
                                                            <FontAwesomeIcon icon={faCheck} />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                            {
                                                (nurseQueue.length == 0)?
                                                    (
                                                        <tr>
                                                            <td></td> 
                                                            <td></td>    
                                                            <td>NO WAITING RESIDENT</td>    
                                                            <td></td>    
                                                            <td></td>       
                                                        </tr>
                                                    ):""
                                                
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div id="noActiveTab"><span className="text-secondary" style={{fontSize:"12px"}}>Choose Service Provider to View Specific Queue List</span></div>
                            
                        </div>              
                    </div>
                </div>
                <AdditionQueue />
            </div>
        </div>
    );
};

export default QueueBHW;
