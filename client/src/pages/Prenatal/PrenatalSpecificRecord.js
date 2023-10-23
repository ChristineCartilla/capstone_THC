import React, { useEffect, useState }  from 'react'
import Sidebar from '../../components/Sidebar.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigate,useParams } from 'react-router-dom'
import AdditionTetanusToxoid from '../../components/AdditionTetanusToxoid.js'

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
                                    <div className='sp3-personalInfoDiv'>
                                    <div className="container">
                                        <div className="row -start">
                                            <div className="col itembox ">
                                            <label className="fw-bold">Name :  </label>
                                            <span> {patientinfo.first_name + " "+ patientinfo.middle_name + " " + patientinfo.last_name} </span>
                                            </div>
                                            <div className="col itembox ">
                                            <label className="fw-bold ">Address :  </label>
                                            <span> {patientinfo.street + " "+ patientinfo.barangay + " " + patientinfo.municipality+ " " + patientinfo.zipCode} </span>
                                            </div>
                                        </div>
                                        <div className="row -start">
                                            <div className="col itembox ">
                                            <label className="fw-bold">Age :  </label>
                                            <span> {formatAge(patientinfo.birthDate)} Years Old </span>
                                            </div>
                                            <div className="col itembox ">
                                            <label className="fw-bold">Birth Date :  </label>
                                            <span> {formatDate(patientinfo.birthDate)} </span>
                                            </div>
                                            <div className="col itembox ">
                                            <label className="fw-bold">Occupation :  </label>
                                            <span> {patientinfo.occupation} </span>
                                            </div>
                                        </div>
                                        <div className="row -start">
                                            <div className="col itembox ">
                                            <label className="fw-bold ">No. of Full Term:  </label>
                                                <span> {prenatalInfo?.obstetricalHistory?.numFullterm}</span>
                                            </div>
                                            <div className="col itembox ">
                                            <label className="fw-bold">No. of Abortion: </label>
                                            <span> {prenatalInfo?.obstetricalHistory?.numOfAbortion} </span>
                                            </div>
                                            <div className="col itembox ">
                                            <label className="fw-bold ">No. of Premature: </label>
                                            <span > {prenatalInfo?.obstetricalHistory?.numPremature} </span>
                                            </div>
                                        </div>
                                        <div className="row -start">
                                            <div className="col itembox ">
                                            <label className="fw-bold ">No. of Children Born Alive: </label>
                                            <span > {prenatalInfo?.obstetricalHistory?.numBornAlive} </span>
                                            </div>
                                            <div className="col itembox ">
                                            <label className="fw-bold">No. of Living Children: </label>
                                            <span> {prenatalInfo?.obstetricalHistory?.numOfLivingChild} </span>
                                            </div>
                                            <div className="col itembox ">
                                            <label className="fw-bold ">No. of Stillbirths: </label>
                                            <span > {prenatalInfo?.obstetricalHistory?.numOfStillBirth} </span>
                                            </div>
                                        </div>
                                        <div className="row -start">
                                            <div className="col itembox ">
                                            <label className="fw-bold ">Last Menstural Period: </label>
                                            <span > {formatDate(prenatalInfo?.obstetricalHistory?.lastMenstrualPeriod)} </span>
                                            </div>
                                            <div className="col itembox ">
                                            <label className="fw-bold">Date of Last Delivery: </label>
                                            <span> {formatDate(prenatalInfo?.obstetricalHistory?.dateOfLastDelivery)} </span>
                                            </div>
                                            <div className="row -start">
                                            <div className="col itembox  ">
                                            <label className="fw-bold ">Type of Last Delivery: </label>
                                            <span > {prenatalInfo?.obstetricalHistory?.typeOfLastDelivery} </span>
                                            </div>              
                                            </div>
                                        </div>
                                        <div className="row -start">
                                            <div className="col itembox ">
                                            <label className="fw-bold">Gravida: </label>
                                            <span> {prenatalInfo?.obstetricalHistory?.numGravida} </span>
                                            </div>
                                            <div className="col itembox ">
                                            <label className="fw-bold ">Para: </label>
                                            <span > {prenatalInfo?.obstetricalHistory?.numPara} </span>
                                            </div>
                                            <div className="col itembox ">
                                            <label className="fw-bold ">Menstrual Flow: </label>
                                            <span > {prenatalInfo?.obstetricalHistory?.menstrualFlow}</span>
                                            </div>  
                                        </div>
                                        <div className="row -start">
                                            <div className="col itembox ">
                                            <label className="fw-bold ">Diabetes: </label>
                                            <span > {prenatalInfo?.obstetricalHistory?.diabetes?'Yes' : 'No'}</span>
                                            </div>
                                            <div className="col itembox ">
                                            <label className="fw-bold">Hydatidiform mole: </label>
                                            <span> {prenatalInfo?.obstetricalHistory?.hydatidiformMole? 'Yes' : 'No'} </span>
                                            </div>
                                            <div className="col itembox ">
                                            <label className="fw-bold ">History of Ectopic Pregnancy: </label>
                                            <span > {prenatalInfo?.obstetricalHistory?.ectopicPregnancy? 'Yes' : 'No'} </span>
                                            </div>
                                        </div>
                                        <div className="row -start">
                                        <div className="col itembox ">
                                            <label className="fw-bold ">Dysmenorrhea: </label>
                                            <span > {prenatalInfo?.obstetricalHistory?.dysmenorrhea? 'Yes' : 'No'}</span>
                                            </div>             
                                        </div>
                                        
                                        <div className="row-start">
                                            <div className='col'>
                                            <label className="fw-bold">Illness: </label>
                                            <div className=''style={{textAlign: 'justify'}}>
                                            <span> {prenatalInfo?.medicalHistory?.illness} </span>
                                            </div>
                                            </div>
                                        </div> 
                                        <div className="row-start">
                                            <div className='col'>
                                            <label className="fw-bold ">Allergies: </label>
                                            <div className=''style={{textAlign: 'justify'}}>
                                            <span > {prenatalInfo?.medicalHistory?.allergy} </span>
                                            </div>
                                            </div>
                                        </div> 
                                        <div className="row-start">
                                            <div className='col'>
                                            <label className="fw-bold ">Previous Hospitalization: </label>
                                            <div className=''style={{textAlign: 'justify'}}>
                                                <span > {prenatalInfo?.medicalHistory?.hospitalization} </span>
                                            </div>
                                            </div>
                                        </div>    
                                        <div className="row-start">
                                            <div className="col itembox ">
                                            <label className="fw-bold col-sm-12">Tetanus Toxoid Status</label>
                                            <button type="button" className="sp2-addMedRecBtn" data-bs-toggle="modal" data-bs-target="#TetaAddition"><FontAwesomeIcon icon={faPlus}  style={{ color: '#44AA92' }}/></button>
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
          \<AdditionPrenatalAssesment residentid={patientinfo._id} recordid={prenatalInfo._id} vitalRec={vitalsignRec} />
            
            {/* View Prenatal Assessment Modal  */}
            <ViewPrenatalAssessment recordid={selectedRecordId}/>

            {/*  Add Tetanus Toxoid Modal  */}
             <AdditionTetanusToxoid  recordid={prenatalInfo._id}/>
   
                   
        </>
    )
}

export default PrenatalSpecificRecord