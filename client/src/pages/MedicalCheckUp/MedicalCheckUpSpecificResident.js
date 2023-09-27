import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faPlus } from '@fortawesome/free-solid-svg-icons'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import AdditionMedicalCheckup from '../../components/AdditionMedicalCheckup'

import THCDefaultPatientLogo from '../../images/default_image.png'

const MedicalCheckUpSpecificResident = () => {
    const { residentid } = useParams();
    const [patientinfo, setPatientInfo] = useState([]);
    const [records, setRecords] = useState([]);
    const navigate = useNavigate();
    var recLength = records.length;
    
    useEffect(() => {
        const patientInformation = async () => {
            await axios.get("http://localhost:8000/profiles/"+ residentid)
            .then((response) => {
                setPatientInfo(response.data) 
            })
        }
        const recordsList = async () => {
            try {
                const fetchMR = await axios.get("http://localhost:8000/medical_record");
                const fetchMCR = await axios.get("http://localhost:8000/medical_checkup_record");
                if(fetchMR.status === 200 && fetchMCR.status === 200){
                    
                    const record = (fetchMR.data).find((rec) => {
                        return rec.profileId === residentid
                    })
                    if(record){
                        const checkUpRec = (fetchMCR.data).filter((rec) => {
                            return rec.medical_recordId === record.id;
                        })
                        setRecords(checkUpRec);
                    }
                }
            } catch (error) {
                console.log(error);
            }
           
        }
        
        patientInformation();
        recordsList();
        console.log(records);
    }, [])


    const navigateRecord = (recordid) => {
        navigate(recordid);
    }
    const handleBack = () => {
        window.history.back()
    }

    return (
        <>
            <div className=''>
                <div className='mainLayout'>
                    <div className='mainLayout-left'>
                        <Sidebar />    
                    </div>
                    <div className='col p-0'>
                        <div className="sp2-pageHeader container">
                            <h1 className='text-start'>Medical Checkup Records</h1>  
                        </div>
                        <div className='sp2-pageBody'>
                            <div className='container-fluid p-5'>
                                <div className='row'>
                                    <div className='col-md-4 col-sm-12 sp2-topDiv'>
                                        <h5 className="text-start">Personal Information</h5>
                                        <div className='sp2-personalInfoDiv'>
                                            <div class="mb-3" style={{maxWidth: "540px;"}}>
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
                                                        <td scope="row">Age:</td>
                                                        <td>{patientinfo.age} Years Old</td>
                                                    </tr>
                                                    <tr>
                                                        <td scope="row">Birth Date:</td>
                                                        <td>{patientinfo.birthDate}</td>
                                                    </tr>
                                                    <tr>
                                                        <td scope="row">Birth Place:</td>
                                                        <td>{patientinfo.birthPlace}</td>
                                                    </tr>
                                                    <tr>
                                                        <td scope="row">Occupation:</td>
                                                        <td>{patientinfo.occupation}</td>
                                                    </tr>
                                                    <tr>
                                                        <td scope="row">Address:</td>
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
                                                        <th style={{width:"400px"}}>List of Medical Checkup Records</th>
                                                        <th></th> 
                                                        <th style={{textAlign:"end"}}><button type="button" className="sp2-addMedRecBtn" data-bs-toggle="modal" data-bs-target="#MCAddition"><FontAwesomeIcon icon={faPlus}/></button></th> 
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td></td>
                                                        <td>Record Number</td>
                                                        <td>Doctor</td>
                                                        <td>Date of Record</td> 
                                                    </tr>
                                                    {
                                                        records && records.map((rec,idx) => {
                                                            return (
                                                            <tr 
                                                                className='sp2-clickableMCRRow' 
                                                                key={idx}
                                                                onClick={() => navigateRecord(rec.id)}
                                                                >
                                                                <td>{"Medical Checkup 000"+ (recLength--)}</td>
                                                                <td>{rec.serviceprovider}</td>
                                                                <td>{rec.date}</td>
                                                            </tr>
                                                        )})
                                                    }
                                                    {
                                                        records.length == 0 && (
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
            <div className="modal fade" id="MCAddition" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Medical Checkup Form</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <AdditionMedicalCheckup />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" className="sp2-addMCButton">Save</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MedicalCheckUpSpecificResident