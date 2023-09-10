import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faPlus } from '@fortawesome/free-solid-svg-icons'
import {  useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import AdditionImmunization from '../../components/AdditionImmunization.js'


const ImmunizationSpecificResident = () => {
    const { residentid } = useParams();
    const [patientinfo, setPatientInfo] = useState([]);
    
    useEffect(() => {
        const patientInformation = async () => {
            const data = 
                await axios.get("http://localhost:8000/profiles")
                .then((response) => {
                    const list = response.data
                    setPatientInfo(list.find((res) => res.profile_id == residentid));
                    console.log(response)
                })
                console.log(patientinfo)
        }
        patientInformation();
        
    }, [])

    const navigate = useNavigate();

    const record = 
    [
        {
            record: "Immunization Record 4",
            doctor: "Dr. Doe",
            date: "04-07-2023",
        },  
        {
            record: "Immunization Record 3",
            doctor: "Dr. Doe",
            date: "03-20-2023",
        },   
        {
            record: "Immunization Record 2",
            doctor: "Dr. Doe",
            date: "02-14-2023",
        },   
        {
            record: "Immunization Record 1",
            doctor: "Dr. Doe",
            date: "01-04-2023",
        },   
    ];

    const navigateRecord = () => {
        navigate('/immunization/specres/record', {state:{data:"HELLO"}});
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
                            <h1 className='text-start'>Immunization Records</h1>  
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
                                        <h4 className="text-start">Immunization Records</h4>    
                                        {/* Button trigger modal  */}
                                        <button type="button" className="sp2-addMedRecBtn" data-bs-toggle="modal" data-bs-target="#IAddition"><FontAwesomeIcon icon={faPlus}/></button>
                                    </div>
                                    <div className='sp2-MCRecordsDiv'>
                                        <table className="table sp2-MCRecordsTable">
                                            <thead>
                                                <tr>
                                                    <th>Immunization Records</th>
                                                    <th>Doctor</th>
                                                    <th>Date of Record</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    record.map((rec,idx) => (
                                                        <tr 
                                                            className='sp2-clickableMCRRow' 
                                                            key={idx}
                                                            onClick={() => navigateRecord()}
                                                            >
                                                            <td>{rec.record}</td>
                                                            <td>{rec.doctor}</td>
                                                            <td>{rec.date}</td>
                                                        </tr>
                                                    ))
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
            <div className="modal fade" id="IAddition" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Immunization Form</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <AdditionImmunization/>
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

export default ImmunizationSpecificResident