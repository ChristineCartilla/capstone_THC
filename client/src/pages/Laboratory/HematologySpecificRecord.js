import React, { useEffect, useState} from 'react'
import Sidebar from '../../components/Sidebar.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import AdditionVitalSigns from '../../components/AdditionVitalSigns.js'
import ViewVitalSigns from '../../components/ViewVitalSigns.js'
import SidebarOpenBtn from '../../components/SidebarOpenBtn.js'
import axios from 'axios'
import THCDefaultPatientLogo from '../../images/default_image.png'

const HematologySpecificRecord = () => {
    const { residentid, recordid } = useParams();
    const [patientinfo, setPatientInfo] = useState([]);
    const [hematologyInfo, setHematologyInfo] = useState([]);
    
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

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const { height, width } = useWindowDimensions();

    useEffect(() => {
        patientInformation();
        getHematologyDetails();
    }, [])

    const patientInformation = async () => {
        await axios.get("/profile/"+ residentid)
        .then((response) => {
            setPatientInfo(response.data) 
        })
    }

    const getHematologyDetails = async () => {
        await axios.get(`hematology/getrecord/${residentid}/${recordid}`)
        .then((response) => {
            setHematologyInfo(response.data.record) 
        })
    }

    const formatAge = (dateString) => {
        const dateOfBirth = new Date(dateString);

        // Calculate the age
        const now = new Date();
        const age = now.getFullYear() - dateOfBirth.getFullYear();
        const monthDiff = now.getMonth() - dateOfBirth.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < dateOfBirth.getDate())) {
            return age - 1;
        }

        return age;
    };

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

    

    const handleBack = () => {
        window.history.back()
    }
    return (
        <>
        <div className=''>
            <SidebarOpenBtn />
            <div className='mainLayout'>
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
                        <h1 className='text-start'>Hematology {hematologyInfo._id? hematologyInfo._id.slice(-6): ""}</h1>  
                    </div>
                    <div className='sp3-pageBody'>
                        <div className='container'>
                            <div className='topDiv'>
                                <h3 className="text-start">Personal Information</h3>
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
                                                        <th scope="row">Sex:</th>
                                                        <td>{patientinfo.gender}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Age:</th>
                                                        <td>{patientinfo.age} Years Old</td>
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

                                <h3 className="text-start">Hematology Information</h3>
                                    <div className={`oral-health ${
                                        width < 1500 ?
                                        "oral-health-mobile" : null
                                    }`}>
                                        <div className='oral-health-left'>
                                            <div className='oral-health-one'>
                                                <span className="fw-bold">Hematocrit:</span>
                                                <span className="fw-bold">Hemoglobin Mass Conc.:</span>
                                                <span className="fw-bold">Erythrocyte Number Conc.:</span>
                                                <span className="fw-bold">Leukocyte Number Conc.:</span>
                                                <span className="fw-bold">Segmenter Number Fraction:</span>
                                                <span className="fw-bold">Lymphocyte Number Fraction:</span>
                                            </div>
                                            <div className='oral-health-two'>
                                                <span> {(hematologyInfo.hematocritLevel)?hematologyInfo.hematocritLevel: "N/A"}</span>
                                                <span> {(hematologyInfo.hemoglobinMassConc)?hematologyInfo.hemoglobinMassConc: "N/A"}</span>
                                                <span> {(hematologyInfo.erythrocyteNumConc)?hematologyInfo.erythrocyteNumConc: "N/A"}</span>
                                                <span> {(hematologyInfo.LeukocyteNumConc)?hematologyInfo.LeukocyteNumConc: "N/A"}</span>
                                                <span> {(hematologyInfo.SegmenterNumFract)?hematologyInfo.SegmenterNumFract: "N/A"}</span>
                                                <span> {(hematologyInfo.lymphocyteNumFract)?hematologyInfo.lymphocyteNumFract: "N/A"}</span>
                                            </div>
                                        </div>
                                        <div className='oral-health-right'>
                                            <div className='oral-health-three'>
                                                <span className="fw-bold">Monocyte Number Fraction:</span>
                                                <span className="fw-bold">Eosinophil Number Fraction:</span>
                                                <span className="fw-bold">Basophile Number Fraction:</span>
                                                <span className="fw-bold">Stab:</span>
                                                <span className="fw-bold">Thrombocyte Number Conc.:</span>
                                                <span className="fw-bold">Reticulocyte Number Fraction:</span>
                                            </div>
                                            <div className="oral-health-four">
                                                <span> {(hematologyInfo.MonocyeNumFrac)?hematologyInfo.MonocyeNumFrac: "N/A"}</span>
                                                <span> {(hematologyInfo.EosinophileNumFract)?hematologyInfo.EosinophileNumFract: "N/A"}</span>
                                                <span> {(hematologyInfo.BasophileNumFract)?hematologyInfo.BasophileNumFract: "N/A"}</span>
                                                <span> {(hematologyInfo.stab)?hematologyInfo.stab: "N/A"}</span>
                                                <span> {(hematologyInfo.thrombocyteNumConc)?hematologyInfo.thrombocyteNumConc: "N/A"}</span>
                                                <span> {(hematologyInfo.retlculocyteNumFrac)?hematologyInfo.retlculocyteNumFrac: "N/A"}</span>
                                            </div>
                                        </div>
                                    </div>

                                    
                            </div> 
                            
                            <div className="bottomDiv">
                                <div className="dietary">
                                    <div className="dietary-label">
                                        <span className="fw-bold">Remarks:</span>
                                        <span className="fw-bold">Medical Technologist:</span>
                                    </div>
                                    <div className="dietary-input">
                                        <span>{hematologyInfo.remarks}</span>
                                        <span>{hematologyInfo.serviceProvider}</span> 
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

export default HematologySpecificRecord