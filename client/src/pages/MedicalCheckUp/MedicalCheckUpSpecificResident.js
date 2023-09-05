import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faPlus } from '@fortawesome/free-solid-svg-icons'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import AdditionMedicalCheckup from '../../components/AdditionMedicalCheckup'


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
                        return rec.profile_id === residentid
                    })

                    const checkUpRec = (fetchMCR.data).filter((rec) => {
                        return rec.mr_id === record.id;
                    })
                    setRecords(checkUpRec);
                }
            } catch (error) {
                console.log(error);
            }
        }
        
        patientInformation();
        recordsList();
    }, [])


    const navigateRecord = (recordid, recordNum) => {
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
                            <div className='container'>
                                <div className='sp2-topDiv'>
                                    <h4 className="text-start">Personal Information</h4>
                                    <div className='sp2-personalInfoDiv'>
                                        <table className="table table-borderless">
                                            <tbody>
                                                <tr>
                                                    <th scope="row">Name:</th>
                                                    <td>{patientinfo.first_name + " "+ patientinfo.middle_name + " " + patientinfo.last_name}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Age:</th>
                                                    <td>{patientinfo.age} Years Old</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Birth Date:</th>
                                                    <td>{patientinfo.birthDate}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Occupation:</th>
                                                    <td>{patientinfo.occupation}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Address:</th>
                                                    <td>{patientinfo.street + " "+ patientinfo.barangay + " " + patientinfo.municipality+ " " + patientinfo.zipCode}</td>
                                                </tr>
                                            </tbody>
                                        </table>    
                                    </div>
                                </div>
                                <div className='sp2-bottomDiv'>
                                    <div className='sp2-bottomDivHeader d-flex justify-content-between'>
                                        <h4 className="text-start">Medical Checkup Records</h4>    
                                        {/* Button trigger modal  */}
                                        <button type="button" className="sp2-addMedRecBtn" data-bs-toggle="modal" data-bs-target="#MCAddition"><FontAwesomeIcon icon={faPlus}/></button>
                                    </div>
                                    <div className='sp2-MCRecordsDiv'>
                                        <table className="table sp2-MCRecordsTable">
                                            <thead>
                                                <tr>
                                                    <th>Medical Checkup Records</th>
                                                    <th>Doctor</th>
                                                    <th>Date of Record</th> 
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    records.map((rec,idx) => {
                                                        return (
                                                        <tr 
                                                            className='sp2-clickableMCRRow' 
                                                            key={idx}
                                                            onClick={() => navigateRecord(rec.id)}
                                                            >
                                                            <td>{"Medical Checkup "+ (recLength--)}</td>
                                                            <td>{rec.serviceprovider}</td>
                                                            <td>{rec.date}</td>
                                                        </tr>
                                                    )})
                                                }
                                            
                                            </tbody>
                                        </table>    
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