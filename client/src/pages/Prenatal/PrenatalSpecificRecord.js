import React, { useEffect, useState }  from 'react'
import Sidebar from '../../components/Sidebar.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigate,useParams } from 'react-router-dom'
import AdditionTetanusToxoid from '../../components/AdditionTetanusToxoid.js'
import THCDefaultPatientLogo from '../../images/default_image.png'

import AdditionPrenatalAssesment from '../../components/AdditionPrenatalAssesment.js'
import ViewPrenatalAssessment from '../../components/ViewPrenatalAssessment.js'
import SidebarOpenBtn from '../../components/SidebarOpenBtn.js'
import axios from 'axios'

const PrenatalSpecificRecord = () => {
    
    const navigate = useNavigate();
    const { residentid, recordid } = useParams();
    const [patientinfo, setPatientInfo] = useState([]);
    const [prenatalInfo, setPrenatalInfo] = useState([]);
    const [vitalsignRec, setVitalSignRec] = useState([]);
    const [selectedRecordId, setSelectedRecordId] = useState(null);

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
        getPrenatalDetails();
        getVitalSignsRecord();
       
    }, [])

    const patientInformation = async () => {
        await axios.get("/profile/"+ residentid)
        .then((response) => {
            setPatientInfo(response.data) 
            
        })
    }
    const getPrenatalDetails = async () => {
        await axios.get(`maternalhealth/getrecord/${residentid}/${recordid}`)
        .then( (response) => {
            setPrenatalInfo(response.data.record)
            
        },)
    }

    const  getVitalSignsRecord = async () => {
       
        await axios.get(`/vitalsign/getlatestrec/${residentid}`)
        .then( (response) => {
            setVitalSignRec(response.data)
          console.log(response.data)
        })
        
       }

    

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString(undefined, options);
      };

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
      
     
    const handleRowClick = (recordid) => {
          setSelectedRecordId(recordid);
      
    };
     
    
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
                            <h1 className='text-start'>Prenatal 1</h1>  
                        </div>
                        <div className='sp3-pageBody'>
                            <div className='container'>
                                <div className='topDiv'>
                                    <h4 className="text-start">Personal Information</h4>
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
                                                        <th scope="row">Place of Birth:</th>
                                                        <td>{patientinfo.birthPlace}</td>
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
                                    <h3 className="text-start">Obstetrical History</h3>
                                    <div className={`oral-health ${
                                        width < 1500 ?
                                        "oral-health-mobile" : null
                                    }`}>
                                        <div className="oral-health-left">
                                            <div className="oral-health-one">
                                                <span className="fw-bold">No. of Full Term:</span>
                                                <span className="fw-bold">No. of Abortion:</span>
                                                <span className="fw-bold">No. of Premature:</span>
                                                <span className="fw-bold">No. of Children Born Alive:</span>
                                                <span className="fw-bold">No. of Living Children:</span>
                                                <span className="fw-bold">No. of Stillbirths:</span>
                                                <span className="fw-bold">Last Menstural Period:</span>
                                                <span className="fw-bold">Date of Last Delivery:</span>
                                            </div>
                                            <div className="oral-health-two">
                                                <span>{prenatalInfo?.obstetricalHistory?.numFullterm}</span>
                                                <span>{prenatalInfo?.obstetricalHistory?.numOfAbortion}</span>
                                                <span>{prenatalInfo?.obstetricalHistory?.numPremature}</span>
                                                <span>{prenatalInfo?.obstetricalHistory?.numBornAlive}</span>
                                                <span>{prenatalInfo?.obstetricalHistory?.numOfLivingChild}</span>
                                                <span>{prenatalInfo?.obstetricalHistory?.numOfStillBirth} </span>
                                                <span>{formatDate(prenatalInfo?.obstetricalHistory?.lastMenstrualPeriod)}</span>
                                                <span>{formatDate(prenatalInfo?.obstetricalHistory?.dateOfLastDelivery)}</span>
                                            </div>
                                        </div>
                                        <div className="oral-health-right">
                                            <div className="oral-health-three">
                                                <span className="fw-bold">Type of Last Delivery:</span>
                                                <span className="fw-bold">Gravida:</span>
                                                <span className="fw-bold">Para:</span>
                                                <span className="fw-bold">Menstrual Flow:</span>
                                                <span className="fw-bold">Diabetes:</span>
                                                <span className="fw-bold">Hydatidiform mole:</span>
                                                <span className="fw-bold">History of Ectopic Pregnancy:</span>
                                                <span className="fw-bold">Dysmenorrhea:</span>
                                            </div>
                                            <div className="oral-health-four">
                                                <span>{prenatalInfo?.obstetricalHistory?.typeOfLastDelivery}</span>
                                                <span>{prenatalInfo?.obstetricalHistory?.numGravida}</span>
                                                <span>{prenatalInfo?.obstetricalHistory?.numPara}</span>
                                                <span>{prenatalInfo?.obstetricalHistory?.menstrualFlow}</span>
                                                <span>{prenatalInfo?.obstetricalHistory?.diabetes?'Yes' : 'No'}</span>
                                                <span>{prenatalInfo?.obstetricalHistory?.hydatidiformMole? 'Yes' : 'No'}</span>
                                                <span>{prenatalInfo?.obstetricalHistory?.ectopicPregnancy? 'Yes' : 'No'}</span>
                                                <span>{prenatalInfo?.obstetricalHistory?.dysmenorrhea? 'Yes' : 'No'}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="text-start">Medical History</h3>
                                    <div className={`oral-health ${
                                        width < 1500 ?
                                        "oral-health-mobile" : null
                                    }`}>
                                        <div className="oral-health-left">
                                            <div className="oral-health-one">
                                                <span className="fw-bold">Illness:</span>
                                                <span className="fw-bold">Allergies:</span>
                                                <span className="fw-bold">Previous Hospitalization:</span>
                                            </div>
                                            <div className="oral-health-two">
                                                <span>{prenatalInfo?.medicalHistory?.illness} </span>
                                                <span>{prenatalInfo?.medicalHistory?.allergy}</span>
                                                <span>{prenatalInfo?.medicalHistory?.hospitalization}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="text-start">Tetanus Toxoid Status</h3>
                                    <div className={`oral-health ${
                                        width < 1500 ?
                                        "oral-health-mobile" : null
                                    }`}>
                                        <div className="oral-health-left">
                                            <button type="button" className="sp2-addMedRecBtn" data-bs-toggle="modal" data-bs-target="#TetaAddition"><FontAwesomeIcon icon={faPlus}  style={{ color: '#44AA92' }}/></button>
                                            <div className="oral-health-one">
                                            {
                                                prenatalInfo.tetanusToxoidStatus&& prenatalInfo.tetanusToxoidStatus.map((rec, idx) => {
                                                        if (rec._id != null) {
                                                            return (
                                                                <div className="d-flex">
                                                                <label className="fw-bold ">{rec.vaccine_name} : </label> 
                                                                <span > {formatDate(rec.dateGiven)} </span>  
                                                                </div>
                                                            );
                                                        }
                                                    
                                                    })
                                                }
                                            </div>
                                        </div>
                                                
                                    </div>
                                </div>
                                <div className='sp2-bottomDiv'>
                                    <div className='sp2-bottomDivHeader d-flex justify-content-between'>
                                        <h4 className="text-start">Prenatal Assesment</h4>    
                                        {/* Button trigger modal  */}
                                        <button type="button" className="sp2-addMedRecBtn" data-bs-toggle="modal" data-bs-target="#PAssesAdd"><FontAwesomeIcon icon={faPlus}  style={{ color: '#44AA92' }} /></button>
                                    </div>
                                    <div className='sp2-MCRecordsDiv'>
                                        <table className="table sp2-MCRecordsTable">
                                            <thead>
                                                <tr>
                                                    <th>Session Finding Number</th>
                                                    <th>Date of Testing</th>
                                                </tr>
                                            </thead>
                                            <tbody >
                                            {
                                            prenatalInfo.maternalHealthAssessment && prenatalInfo.maternalHealthAssessment.map((rec, idx) => {
                                                    if (rec._id != null) {
                                                        return (
                                                            <tr
                                                                className='sp2-clickableMCRRow'
                                                                key={idx}
                                                                data-bs-toggle="modal" data-bs-target="#PAssesView"
                                                                onClick={() => handleRowClick(rec._id)}
                                                            >
                                                                <td>{rec._id}</td>
                                                                <td>{formatDate(rec.createdAt)}</td>
                                                            </tr>
                                                        );
                                                    }
                                                
                                                })
                                            }
                                            
                                            </tbody>
                                        </table>    
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>  
            </div>
            
            {/* Add Prenatal Assessment Modal  */}
          <AdditionPrenatalAssesment residentid={patientinfo._id} recordid={prenatalInfo._id} vitalRec={vitalsignRec} />
            
            {/* View Prenatal Assessment Modal  */}
            <ViewPrenatalAssessment recordid={selectedRecordId}/>

            {/*  Add Tetanus Toxoid Modal  */}
             <AdditionTetanusToxoid  recordid={prenatalInfo._id}/>
   
                   
        </>
    )
}

export default PrenatalSpecificRecord