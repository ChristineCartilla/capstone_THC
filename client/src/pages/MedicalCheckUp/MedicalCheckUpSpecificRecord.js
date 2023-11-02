import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import SidebarOpenBtn from '../../components/SidebarOpenBtn.js'
import THCDefaultPatientLogo from '../../images/default_image.png'

const MedicalCheckUpSpecificRecord = () => {
    const { residentid, recordid } = useParams();
    const [patientinfo, setPatientInfo] = useState([]);
    const [medicalCheckupInfo, setMedicalCheckupInfo] = useState([]);
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const { height, width } = useWindowDimensions();

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
        await axios.get(`medicalcheckup/getrecord/${residentid}/${recordid}`)
        .then((response) => {
            setMedicalCheckupInfo(response.data.record) 
        })
    }

    const handleBack = () => {
        window.history.back()
    }

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height
        };
    }

    function useWindowDimensions() {
        const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
      
        useEffect(() => {
          function handleResize() {
            setWindowDimensions(getWindowDimensions());
          }
      
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
        }, []);
      
        return windowDimensions;
    }

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
                            <h1 className='text-start'>Medical Checkup {medicalCheckupInfo._id?medicalCheckupInfo._id.slice(-6):""}</h1>  
                        </div>
                        <div className='sp3-pageBody'>
                            <div className='container'>
                                <div className='topDiv'>
                                    <h3 className="text-start ">Personal Information</h3>
                                    <div className={`sp3-personalInfoDiv personal-info ${
                                        width < 1500 ?
                                        "oral-health-mobile" : null
                                        }`}> 
                                        <div className="personal-info-left">
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
                                                        <td>{formatDate(patientinfo.birthDate)}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Occupation:</th>
                                                        <td>{patientinfo.occupation}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Address:</th>
                                                        <td>{patientinfo.street + " " + patientinfo.barangay + " " + patientinfo.municipality + " " + patientinfo.zipCode}</td>
                                                    </tr>
                                                </tbody>
                                            </table>    
                                        </div>
                                        <div className="personal-info-right">
                                            <div><img src={THCDefaultPatientLogo}/></div>
                                        </div>
                                    </div>
                                    
                                    <h3 className="text-start">Findings</h3>
                                    <div className={`oral-health ${
                                        width < 1500 ?
                                        "oral-health-mobile" : null
                                        }`}>
                                        
                                            <div class="medcheckfind">
                                                <span>{medicalCheckupInfo.findings}</span>
                                            </div>
                                    
                                    </div>

                                    <h3 className="text-start">Medical Prescription</h3>
                                    <div className={`oral-health ${
                                        width < 1500 ?
                                        "oral-health-mobile" : null
                                        }`}>
                                        
                                            <div className="medcheckfind">
                                                <span>{medicalCheckupInfo.recommendation}</span>
                                            </div>
                                        
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