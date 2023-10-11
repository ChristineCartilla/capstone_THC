import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import SidebarOpenBtn from '../../components/SidebarOpenBtn.js'

const MedicalCheckUpSpecificRecord = () => {
    const { residentid, recordid } = useParams();
    const [patientinfo, setPatientInfo] = useState([]);
    const [medicalCheckupInfo, setMedicalCheckupInfo] = useState([]);

    useEffect(() => {
        patientInformation();
        getMedicalCheckupDetails();
    }, [])

    const patientInformation = async () => {
        await axios.get("/profile/"+ residentid)
        .then((response) => {
            setPatientInfo(response.data) 
        })
    }
    const getMedicalCheckupDetails = async () => {
        await axios.get(`urinalysis/getrecord/${residentid}/${recordid}`)
        .then((response) => {
            setMedicalCheckupInfo(response.data.record) 
        })
    }

    const handleBack = () => {
        window.history.back()
    }

    return (
        <>
            <div className=''>
                <SidebarOpenBtn />
                <div className='mainLayout '>
                    <div className='mainLayout-left'>
                        <Sidebar />    
                    </div>
                    <div className='container mainLayout-right p-0 sp3-mainContainer'>
                        <div className="sp3-pageHeader container d-flex">
                            <button 
                            type="button"
                            className="sp3-servicesBacRecBtn align-items-center"
                            onClick={() => handleBack()}>
                                <FontAwesomeIcon icon={faAngleLeft}/>
                        </button>
                            {/* ILISANAN: SPECIFIC RECORD NUMBER */}
                            <h1 className='text-start'>Medical Checkup 1</h1>  
                        </div>
                        <div className='sp3-pageBody'>
                            <div className='container'>
                                <div className='topDiv'>
                                    <div className='row'>
                                        <div className='col-md-4 col-sm-12'>
                                            <h4 className="text-start">Personal Information</h4>
                                            <div className='sp3-personalInfoDiv'>
                                                <table className="">
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
                                        <div className='col-md-4 col-sm-12'>
                                            <div >
                                                <h4 className="text-start">Medical Service Provider</h4>
                                                <h5 className='text-start px-5'>
                                                    {medicalCheckupInfo.serviceProvider}
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                                </div>
                                <div className='buttomDiv'>
                                    <div>
                                        <h4 className="text-start">Findings</h4>
                                        <p className='text-start px-5'>
                                            {medicalCheckupInfo.findings}
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-start">Medical Prescription</h4>
                                        <p className='text-start px-5'>
                                            {medicalCheckupInfo.recommendation}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>  
            </div>
        </>
    )
}

export default MedicalCheckUpSpecificRecord