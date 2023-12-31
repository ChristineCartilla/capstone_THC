import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faPlus } from '@fortawesome/free-solid-svg-icons'
import {  useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import AdditionDental from '../../components/AdditionDental.js'
import THCDefaultPatientLogo from '../../images/default_image.png'
import SidebarOpenBtn from '../../components/SidebarOpenBtn.js'
import ViewVitalSigns from '../../components/ViewVitalSigns.js'

const DentalSpecificResident = () => {
    const { residentid } = useParams();
    const [patientinfo, setPatientInfo] = useState([]);
    const [records, setRecords] = useState([]);
    const navigate = useNavigate();
    const [selectedVSId, setSelectedVSId] = useState(null);
    const [vitalSignRecs, setVitalSignRecs] = useState([]);
    const [selectedVSRec, setSelectedVSRec] = useState(null);

    useEffect(() => {
        patientInformation();
        recordsList();
        vitalSignList();
    }, [])

  const patientInformation = async () => {
    await axios.get("/profile/"+residentid)
    .then((response) => {
        setPatientInfo(response.data)
    })
  }

    const recordsList = async () => {
        try {
            const fetchDR = await axios.get(`/oralhealth/${residentid}`);
            setRecords(fetchDR.data.medical_records);
            // console.log(fetchDR);
        } catch (error) {
            console.log(error);
        }
    }

    const vitalSignList = async () => {
        try {
            const fetchVS = await axios.get(`/vitalsign/${residentid}`);
            setVitalSignRecs(fetchVS.data.vital_signs);
        } catch (error) {
            console.log(error);
        }
    }

    const navigateRecord = (recordid) => {
        navigate(recordid);
    }

  
    const handleBack = () => {
        window.history.back()
    }

    const handleRowClickVS = (recordid, record) => {
        setSelectedVSId(recordid);
        setSelectedVSRec(record);
    }

    //formatting the date
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
    

    return (
        <>
            <div className=''>
                <SidebarOpenBtn />
                <div className='mainLayout'>
                    <div className='mainLayout-left'>
                        <Sidebar />    
                    </div>
                    <div className='col p-0'>
                        <div className="sp2-pageHeader container">
                            <h1 className='text-start'>Dental Records</h1>  
                        </div>
                        <div className='sp2-pageBody'>
                            <div className='container-fluid p-5'>
                                <div className='row'>
                                    <div className='col-md-4 col-sm-12 sp2-topDiv'>
                                        <h5 className="text-start">Personal Information</h5>
                                        <div className='sp2-personalInfoDiv'>
                                            <div className="mb-3" style={{maxWidth: "540px"}}>
                                                <div className="row g-0">
                                                    <div className="col-md-4">
                                                        <img src={THCDefaultPatientLogo} height="80px" width="80px" alt="default_image.png" style={{marginTop:5}}/>
                                                    </div>
                                                    <div className="col-md-8">
                                                    <div className="card-body">
                                                        <h5 className="card-title">{patientinfo.first_name + " "+ patientinfo.middle_name + " " + patientinfo.last_name}</h5>
                                                        <p className="card-text">{patientinfo.gender + ", "+ patientinfo.civilStatus}</p>
                                                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            <table className="">
                                                <tbody>
                                                    <tr>
                                                        <td>Age:</td>
                                                        <td>{patientinfo.age} Years Old</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Birth Date:</td>
                                                        <td>{formatDate(patientinfo.birthDate)}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Birth Place:</td>
                                                        <td>{patientinfo.birthPlace}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Occupation:</td>
                                                        <td>{patientinfo.occupation}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Address:</td>
                                                        <td>{patientinfo.street + " "+ patientinfo.barangay + " " + patientinfo.municipality+ " " + patientinfo.zipCode}</td>
                                                    </tr>
                                                </tbody>
                                            </table>    
                                        </div>
                                    </div>
                                    <div className='col-md-8 col-sm-12 sp2-bottomDiv'>

                                        <div className='sp2-MCRecordsDiv'>
                                            <table className="table sp2-MCRecordsTable">
                                                <thead>
                                                    <tr>
                                                        <th></th>
                                                        <th style={{width:"400px"}}>List of Dental Records</th>
                                                        <th></th> 
                                                        <th style={{textAlign:"end"}}>
                                                            {
                                                                (sessionStorage.getItem("workerType") === "Dentist" || sessionStorage.getItem("workerType") === "Superadmin")? (
                                                                    <button type="button" className="sp2-addMedRecBtn" data-bs-toggle="modal" data-bs-target="#DenAddition"><FontAwesomeIcon icon={faPlus}/></button>
                                                                ): ""
                                                            }
                                                        </th> 
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td></td>
                                                        <td>Record Number Code</td>
                                                        <td>Doctor</td>
                                                        <td>Date of Record</td> 
                                                    </tr>
                                                    {
                                                        records && records.map((rec,idx) => {
                                                            if(rec.service_id !== null){
                                                                return (
                                                                    <tr 
                                                                        className='sp2-clickableMCRRow' 
                                                                        key={idx}
                                                                        onClick={() => navigateRecord(rec.service_id._id)}
                                                                        >
                                                                        <td></td>
                                                                        <td>{rec.service_id._id.slice(-6)}</td>
                                                                        <td>{rec.service_id.serviceProvider}</td>
                                                                        <td>{formatDate(rec.service_id.createdAt)}</td>
                                                                    </tr>
                                                                )
                                                            } else {
                                                                return null;
                                                            }
                                                        })
                                                    }
                                                    {
                                                        records.length === 0 && (
                                                            <tr className='sp2-clickableMCRRow'>
                                                                <td></td>
                                                                <td></td>
                                                                <td><p >NO RECORDS FOUND</p></td>
                                                                <td></td>
                                                                
                                                            </tr>
                                                        )
                                                    }
                                                
                                                </tbody>
                                            </table>    
                                        </div>

                                         {/* Vital Signs */}
                                         <div className='sp2-MCRecordsDiv my-3'>
                                            <table className="table sp2-MCRecordsTable">
                                                <thead>
                                                    <tr>
                                                        <th></th>
                                                        <th style={{maxWidth:"400px"}}>Vital Signs</th>
                                                        <th></th> 
                                                        <th style={{textAlign:"end"}}></th> 
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td></td>
                                                        <td>Record Number Code</td>
                                                        <td> </td>
                                                        <td>Date of Record</td> 
                                                    </tr>
                                                    {
                                                        vitalSignRecs && vitalSignRecs.map((rec, idx) => {
                                                            if (rec._id !== null) {
                                                                return (
                                                                    <tr
                                                                        className='sp2-clickableMCRRow'
                                                                        key={idx}
                                                                        data-bs-toggle="modal" data-bs-target="#VitalSignView"
                                                                        onClick={() => handleRowClickVS(rec._id, rec)}
                                                                    >
                                                                        <td> </td>
                                                                        <td>{rec._id.slice(-6)}</td>
                                                                        <td> </td>
                                                                        <td>{formatDate(rec.createdAt)}</td>
                                                                    </tr>
                                                                );
                                                            } else {
                                                                return null;
                                                            }
                                                        })
                                                    }
                                                    {
                                                        vitalSignRecs.length == 0 && (
                                                            <tr className='sp2-clickableMCRRow'>
                                                                <td></td>
                                                                <td></td>
                                                                <td><p >NO RECORDS FOUND</p></td>
                                                                <td></td>
                                                                
                                                            </tr>
                                                        )
                                                    }
                                                        
                                                </tbody>
                                            </table>     
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <button 
                            type="button"
                            className="sp2-servicesBackBtn float-start"
                            onClick={() => handleBack()}>
                                <FontAwesomeIcon icon={faArrowLeft}/> Back
                        </button>
                    </div>
                </div>  
            </div>

             {/* Modal  */}
            <AdditionDental residentid={patientinfo._id} />
            
            {/*View Vital Sign Modal  */}
            <ViewVitalSigns recordid={selectedVSId} record={selectedVSRec}/>
        </>
    )
}

export default DentalSpecificResident