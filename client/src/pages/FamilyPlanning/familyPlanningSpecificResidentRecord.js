import React, { useState, useEffect} from 'react'
import Sidebar from '../../components/Sidebar.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import AdditionVitalSigns from '../../components/AdditionVitalSigns.js'
import ViewVitalSigns from '../../components/ViewVitalSigns.js'
import AdditionFamilyPlanningAssessment from '../../components/AdditionFamilyPlanningAssessment.js'
import ViewFamilyPlanningAssessment from '../../components/ViewFamilyPlanningAssessment.js'
import SidebarOpenBtn from '../../components/SidebarOpenBtn.js'
import axios from 'axios'
import THCDefaultPatientLogo from '../../images/default_image.png'

const FamilyPlanningSpecificResidentRecord = () => {
    const { residentid, recordid } = useParams();
    const [patientinfo, setPatientInfo] = useState([]);
    const [familyplanningInfo, setFamilyPlanningInfo] = useState([]);
    const [selectedRec, setSelectedRec] = useState(null);
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const { height, width } = useWindowDimensions();

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

    useEffect(() => {
        patientInformation();
        getFamilyPlanningInfo();   
    }, [])

    const patientInformation = async () => {
        await axios.get("/profile/"+ residentid)
        .then((response) => {
            setPatientInfo(response.data) 
        })
    }

    const getFamilyPlanningInfo = async () => {
       await axios.get(`familyplanning/getrecord/${residentid}/${recordid}`)
        .then((response) => {
            setFamilyPlanningInfo(response.data.record) 
          console.log(response.data.record)
        
        })
    }

    const handleRowClick = async (recordid, recordVSid) => {
        const responseVS = (await axios.get(`familyplanning/assessment/${recordid}`)).data;
        setSelectedRec(responseVS);

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
                            <h1 className='text-start'>Family Planning 1</h1>  
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
                                                        <th scope="row">Name of Spouse:</th>
                                                        <td>{familyplanningInfo.nameSpouse}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Spouse Birth Date:</th>
                                                        <td>{formatDate(familyplanningInfo.spouseDoB)}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Spouse Age:</th>
                                                        <td>{formatAge(familyplanningInfo.spouseDoB)} Years Old</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Spouse Occupation:</th>
                                                        <td>{familyplanningInfo.spouseOccupation}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">No. of Living Children:</th>
                                                        <td>{familyplanningInfo.noLivingChild}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Plan to have more children:</th>
                                                        <td>{(familyplanningInfo.planAddChild == true)? "Yes": "No"}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Average Monthly Income:</th>
                                                        <td>{familyplanningInfo.aveMonthIncome}</td>
                                                    </tr>
                                                </tbody>
                                            </table>    
                                        </div>
                                        <div className="personal-info-right">
                                            <div><img src={THCDefaultPatientLogo}/></div>
                                        </div>
                                    </div>
                                    
                                    <h3 className="text-start">Medical Histories</h3>
                                    <div className={`oral-health ${
                                        width < 1500 ?
                                        "oral-health-mobile" : null
                                        }`}>
                                         <div className="oral-health-left">
                                            <span>
                                                {familyplanningInfo && familyplanningInfo.medicalHistory ? (
                                                    <span> {familyplanningInfo.medicalHistory.illness}</span>
                                                        ) : (
                                                        <span>Data not available</span>
                                                )}
                                            </span>
                                         </div>
                                    </div>

                                    <h3 className="text-start">Number of Pregnancies</h3>
                                    <div className={`oral-health ${
                                        width < 1500 ?
                                        "oral-health-mobile" : null
                                        }`}>
                                        <div className="oral-health-left">
                                            <div class="oral-health-one">
                                                <span className="fw-bold">Gravida:</span>
                                                <span className="fw-bold">Para:</span>
                                                <span className="fw-bold">No. of Full Term:</span>
                                                <span className="fw-bold">No. of Abortions:</span>
                                                <span className="fw-bold">No. of Premature:</span>
                                                <span className="fw-bold">No. of Children Born Alive:</span>
                                                <span className="fw-bold">No. of Living Children:</span>
                                                <span className="fw-bold">No. of Stillbirths:</span>
                                                <span className="fw-bold"></span>
                                            </div>
                                            <div class="oral-health-two">
                                                <span> 
                                                    {familyplanningInfo && familyplanningInfo.obstetricalHistory ? (
                                                        <span> {familyplanningInfo.obstetricalHistory.numGravida}</span>
                                                    ) : (
                                                        <span>Data not available</span>
                                                    )}
                                                </span>
                                                <span> 
                                                    {familyplanningInfo && familyplanningInfo.obstetricalHistory ? (
                                                        <span> {familyplanningInfo.obstetricalHistory.numPara}</span>
                                                    ) : (
                                                        <span>Data not available</span>
                                                    )}
                                                </span>
                                                <span> 
                                                    {familyplanningInfo && familyplanningInfo.obstetricalHistory ? (
                                                        <span> {familyplanningInfo.obstetricalHistory.numFullterm}</span>
                                                    ) : (
                                                        <span>Data not available</span>
                                                    )}
                                                </span>
                                                <span>
                                                    {familyplanningInfo && familyplanningInfo.obstetricalHistory ? (
                                                        <span> {familyplanningInfo.obstetricalHistory.numPremature}</span>
                                                    ) : (
                                                        <span>Data not available</span>
                                                    )}
                                                </span>
                                                <span>
                                                    {familyplanningInfo && familyplanningInfo.obstetricalHistory ? (
                                                        <span> {familyplanningInfo.obstetricalHistory.numBornAlive}</span>
                                                    ) : (
                                                        <span>Data not available</span>
                                                    )}
                                                </span>
                                                <span>
                                                    {familyplanningInfo && familyplanningInfo.obstetricalHistory ? (
                                                        <span> {familyplanningInfo.obstetricalHistory.numOfLivingChild}</span>
                                                    ) : (
                                                        <span>Data not available</span>
                                                    )}
                                                </span>
                                                <span>
                                                    {familyplanningInfo && familyplanningInfo.obstetricalHistory ? (
                                                        <span> {familyplanningInfo.obstetricalHistory.numOfStillBirth}</span>
                                                    ) : (
                                                        <span>Data not available</span>
                                                    )}
                                                </span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>
                                        <div className='oral-health-right'>
                                            <div className='oral-health-three'>
                                                <span className="fw-bold">No. of Large Babies:</span>
                                                <span className="fw-bold">LMP:</span>
                                                <span className="fw-bold">Date of Last Delivery:</span>
                                                <span className="fw-bold">Type of Last Delivery:</span>
                                                <span className="fw-bold">Menstrual Flow:</span>
                                                <span className="fw-bold">Dysmenorrhea:</span>
                                                <span className="fw-bold">Hydatidiform mole:</span>
                                                <span className="fw-bold">History of Ectopic Pregnancy:</span>
                                                <span className="fw-bold">Diabetes:</span>
                                            </div>
                                            <div className='oral-health-four'>
                                                <span>
                                                    {familyplanningInfo && familyplanningInfo.obstetricalHistory ? (
                                                        <span> {familyplanningInfo.obstetricalHistory.numberOfLargeBabies}</span>
                                                    ) : (
                                                        <span>Data not available</span>
                                                    )}
                                                </span>
                                                <span>
                                                    {familyplanningInfo && familyplanningInfo.obstetricalHistory ? (
                                                        <span> {formatDate(familyplanningInfo.obstetricalHistory.lastMenstrualPeriod)}</span>
                                                    ) : (
                                                        <span>Data not available</span>
                                                    )}
                                                </span>
                                                <span>
                                                    {familyplanningInfo && familyplanningInfo.obstetricalHistory ? (
                                                        <span> {formatDate(familyplanningInfo.obstetricalHistory.dateOfLastDelivery)}</span>
                                                    ) : (
                                                        <span>Data not available</span>
                                                    )}
                                                </span>
                                                <span>
                                                    {familyplanningInfo && familyplanningInfo.obstetricalHistory ? (
                                                        <span> {familyplanningInfo.obstetricalHistory.typeOfLastDelivery}</span>
                                                    ) : (
                                                        <span>Data not available</span>
                                                    )}
                                                </span>
                                                <span>
                                                    {familyplanningInfo && familyplanningInfo.obstetricalHistory ? (
                                                        <span> {familyplanningInfo.obstetricalHistory.menstrualFlow}</span>
                                                    ) : (
                                                        <span>Data not available</span>
                                                    )}
                                                </span>
                                                <span>
                                                    <input className="form-check-input" type="checkbox"  checked={(familyplanningInfo.obstetricalHistory && familyplanningInfo.obstetricalHistory.dysmenorrhea)? true: false} onChange={()=>{}}/>
                                                </span>
                                                <span>
                                                    <input className="form-check-input" type="checkbox"  checked={(familyplanningInfo.obstetricalHistory && familyplanningInfo.obstetricalHistory.hydatidiformMole)? true: false} onChange={()=>{}}/>
                                                </span>
                                                <span>
                                                    <input className="form-check-input" type="checkbox"  checked={(familyplanningInfo.obstetricalHistory && familyplanningInfo.obstetricalHistory.ectopicPregnancy)? true: false} onChange={()=>{}}/>
                                                </span>
                                                <span>
                                                    <input className="form-check-input" type="checkbox"  checked={(familyplanningInfo.obstetricalHistory && familyplanningInfo.obstetricalHistory.diabetes)? true: false} onChange={()=>{}}/>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <h3 className="text-start">Physical Examination</h3>
                                    <div className={`oral-health ${
                                        width < 1500 ?
                                        "oral-health-mobile" : null
                                        }`}>
                                        <div className="oral-health-left">
                                            <div class="oral-health-one">
                                                <span className='fw-bold'>Skin:</span>
                                                <span className='fw-bold'>Extremities:</span>
                                                <span className='fw-bold'>Conjunctiva:</span>
                                                <span></span>
                                            </div>
                                            <div className="oral-health-two">
                                                <span>{familyplanningInfo.pe_skin}</span>
                                                <span>{familyplanningInfo.pe_extremities}</span>
                                                <span>{familyplanningInfo.pe_conjunctiva}</span>
                                                <span></span>
                                            </div>
                                        </div> 
                                        <div className="oral-health-right">
                                            <div class="oral-health-three">
                                                <span className='fw-bold'>Breast:</span>
                                                <span className='fw-bold'>Neck:</span>
                                                <span className='fw-bold'>Abdomen: </span>
                                                <span className='fw-bold'>Pelvic Examination:</span>
                                            </div>
                                            <div className="oral-health-four">
                                                <span>{familyplanningInfo.pe_breast}</span>
                                                <span>{familyplanningInfo.pe_neck}</span>
                                                <span>{familyplanningInfo.pe_abdomen}</span>
                                                <span>{familyplanningInfo.pe_pelvicExam}</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div> 
                                






                            <div className='sp2-bottomDiv  '>
                                    <div className='sp2-bottomDivHeader d-flex justify-content-between mt-5 '>
                                        <h4 className="text-start">Family Planning Assessment</h4>    
                                        {/* Button trigger modal  */}
                                        <button
                                            type="button"
                                            className="sp2-addMedRecBtn"
                                            data-bs-toggle="modal"
                                            data-bs-target="#fpAssesAdd"
                                            style={{ color: '#8EC3B0' }}
                                            >
                                            <span>
                                                <FontAwesomeIcon icon={faPlus} />
                                            </span>
                                        </button>
                                    </div>
                                    <div className='sp2-MCRecordsDiv '  >
                                        <table className="table sp2-MCRecordsTable " >
                                            <thead className=''>
                                                <tr>
                                                    <th>Session Finding Number</th>
                                                    <th>Doctor</th>
                                                    <th>Date of Testing</th>
                                                </tr>
                                            </thead>
                                            <tbody >
                                                
                                                {
                                                    familyplanningInfo.familyPlanningAssessment && familyplanningInfo.familyPlanningAssessment.map((rec, idx) => {
                                                        if(rec._id !== null){
                                                            return (
                                                                <tr
                                                                    className='sp2-clickableMCRRow'
                                                                    key={idx}
                                                                    data-bs-toggle="modal" data-bs-target="#fpAssesView"
                                                                    onClick={() => handleRowClick(rec._id, rec.vitalSign)}
                                                                >
                                                                    <td>{rec._id}</td>
                                                                    <td>{rec.doctor}</td>
                                                                    <td>{rec.date}</td>
                                                                </tr>
                                                            )
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

         
            {/* Add Family Assessment Modal  */}
               <AdditionFamilyPlanningAssessment residentid={patientinfo._id} recordid={familyplanningInfo._id}/>
                
            {/* View Family Assessment Modal  */}
               <ViewFamilyPlanningAssessment record={selectedRec} />
                 
        </>
    )
}

export default FamilyPlanningSpecificResidentRecord