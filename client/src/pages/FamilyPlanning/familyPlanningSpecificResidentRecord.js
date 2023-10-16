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

const FamilyPlanningSpecificResidentRecord = () => {
    const { residentid, recordid } = useParams();
    const [patientinfo, setPatientInfo] = useState([]);
    const [familyplanningInfo, setFamilyPlanningInfo] = useState([]);
    const [selectedRecordId, setSelectedRecordId] = useState(null);

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
         //  setFamilyPlanningInfo(response.data.record)
        
        })
    }

    const handleRowClick = (recordid) => {
        setSelectedRecordId(recordid);
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

console.log(selectedRecordId);
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
                                    <h4 className="text-start">Family Planning Info</h4>
                                    <div className='container'>

                                            <div className="mt-4 row text-start">
                                                {/* COLUMN 1 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Name: </label>
                                                    <span> {patientinfo.fname + " "+ patientinfo.mname + " " + patientinfo.lname} </span>
                                                </div>

                                                {/* COLUMN 2 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>NUMBER OF PREGNANCIES </label>
                                                </div>

                                                {/* COLUMN 3 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Skin: </label>
                                                    <span> {familyplanningInfo.pe_skin}</span>
                                                </div>
                                            </div>

                                            <div className="mt-4 row text-start">
                                                {/* COLUMN 1 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold text-start'>Age: </label>
                                                    <span> {patientinfo.age} Years Old</span>
                                                </div>
                                                {/* COLUMN 2 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Gravida: </label>
                                                    {familyplanningInfo && familyplanningInfo.obstetricalHistory ? (
                                                        <span> {familyplanningInfo.obstetricalHistory.numGravida}</span>
                                                    ) : (
                                                        <span>Data not available</span>
                                                    )}
                                                    {/* <span> {familyplanningInfo.obstetricalHistory.numGravida}</span> */}
                                                </div>
                                                {/* COLUMN 3 */}
                                                
                                            </div>

                                            <div className="mt-4 row text-start">
                                                {/* COLUMN 1 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Birth Date: </label>
                                                    <span> {formatDate(patientinfo.birthDate)}</span>
                                                </div>

                                                {/* COLUMN 2 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Para: </label>
                                                    {familyplanningInfo && familyplanningInfo.obstetricalHistory ? (
                                                        <span> {familyplanningInfo.obstetricalHistory.numPara}</span>
                                                    ) : (
                                                        <span>Data not available</span>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="mt-4 row text-start">
                                                {/* COLUMN 1 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Educational Attainment: </label>
                                                    <span> {patientinfo.educAttain}</span>
                                                </div>
                                                {/* COLUMN 2 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>No. of Full Term: </label>
                                                    {familyplanningInfo && familyplanningInfo.obstetricalHistory ? (
                                                        <span> {familyplanningInfo.obstetricalHistory.numFullterm}</span>
                                                    ) : (
                                                        <span>Data not available</span>
                                                    )}
                                                   
                                                </div>
                                                {/* COLUMN 3 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Extremities: </label>
                                                    <span> {familyplanningInfo.pe_extremities}</span>
                                                </div>
                                            </div>

                                            <div className="mt-4 row text-start">
                                                {/* COLUMN 1 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Occupation: </label>
                                                    <span> {patientinfo.occupation}</span>
                                                </div>

                                                {/* COLUMN 2 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>No. of Abortions: </label>
                                                    {familyplanningInfo && familyplanningInfo.obstetricalHistory ? (
                                                        <span> {familyplanningInfo.obstetricalHistory.numOfAbortion}</span>
                                                    ) : (
                                                        <span>Data not available</span>
                                                    )}
                                                   
                                                </div>
                                                {/* COLUMN 3 */}
                                            </div>

                                            <div className="mt-4 row text-start">
                                                {/* COLUMN 1 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Address: </label>
                                                    <span> {patientinfo.street + " "+ patientinfo.barangay + " " + patientinfo.municipality+ " " + patientinfo.zipCode}</span>
                                                </div>

                                                {/* COLUMN 2 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>No. of Premature: </label>
                                                    {familyplanningInfo && familyplanningInfo.obstetricalHistory ? (
                                                        <span> {familyplanningInfo.obstetricalHistory.numPremature}</span>
                                                    ) : (
                                                        <span>Data not available</span>
                                                    )}
                                                    
                                                </div>
                                                {/* COLUMN 3 */}
                                                
                                            </div>

                                            <div className="mt-4 row text-start">
                                                {/* COLUMN 1 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Contact No.: </label>
                                                    <span> {patientinfo.contactNo}</span>
                                                </div>
                                                {/* COLUMN 2 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>No. of Children Born Alive: </label>
                                                    {familyplanningInfo && familyplanningInfo.obstetricalHistory ? (
                                                        <span> {familyplanningInfo.obstetricalHistory.numBornAlive}</span>
                                                    ) : (
                                                        <span>Data not available</span>
                                                    )}
                                                  
                                                </div>
                                                {/* COLUMN 3 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Conjunctiva: </label>
                                                    <span> {familyplanningInfo.pe_conjunctiva}</span>
                                                </div>
                                            </div>

                                            <div className="mt-4 row text-start">
                                                {/* COLUMN 1 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Civil Status: </label>
                                                    <span> {patientinfo.civilStatus}</span>
                                                </div>

                                                {/* COLUMN 2 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>No. of Living Children: </label>
                                                    {familyplanningInfo && familyplanningInfo.obstetricalHistory ? (
                                                        <span> {familyplanningInfo.obstetricalHistory.numOfLivingChild}</span>
                                                    ) : (
                                                        <span>Data not available</span>
                                                    )}
                                                    
                                                </div>
                                                {/* COLUMN 3 */}
                                            </div>

                                            <div className="mt-4 row text-start">
                                                {/* COLUMN 1 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Religion: </label>
                                                    <span> Roman Catholic</span>
                                                </div>

                                                {/* COLUMN 2 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>No. of Stillbirths: </label>
                                                    {familyplanningInfo && familyplanningInfo.obstetricalHistory ? (
                                                        <span> {familyplanningInfo.obstetricalHistory.numOfStillBirth}</span>
                                                    ) : (
                                                        <span>Data not available</span>
                                                    )}
                                                </div>
                                                {/* COLUMN 3 */}
                                            </div>

                                            <div className="mt-4 row text-start">
                                                {/* COLUMN 1 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Name of Spouse: </label>
                                                   <span> {familyplanningInfo.nameSpouse}</span>
                                                </div>

                                                {/* COLUMN 2 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>No. of Large Babies: </label>
                                                    {familyplanningInfo && familyplanningInfo.obstetricalHistory ? (
                                                        <span> {familyplanningInfo.obstetricalHistory.numberOfLargeBabies}</span>
                                                    ) : (
                                                        <span>Data not available</span>
                                                    )}
                                               
                                                </div>
                                                {/* COLUMN 3 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Breast: </label>
                                                    <span> {familyplanningInfo.pe_breast}</span>
                                                </div>
                                            </div>

                                            <div className="mt-4 row text-start">
                                                {/* COLUMN 1 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Spouse Date of Birth: </label>
                                                    <span> {familyplanningInfo.spouseDoB}</span>
                                                </div>
                                                {/* COLUMN 2 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>LMP: </label>
                                                    {familyplanningInfo && familyplanningInfo.obstetricalHistory ? (
                                                        <span> {familyplanningInfo.obstetricalHistory.lastMenstrualPeriod}</span>
                                                    ) : (
                                                        <span>Data not available</span>
                                                    )}
                                                   
                                                </div>
                                                {/* COLUMN 3 */}
                                            </div>

                                            <div className="mt-4 row text-start">
                                                {/* COLUMN 1 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Spouse Age: </label>
                                                    <span> </span>
                                                </div>

                                                {/* COLUMN 2 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Date of Last Delivery: </label>
                                                    {familyplanningInfo && familyplanningInfo.obstetricalHistory ? (
                                                        <span> {familyplanningInfo.obstetricalHistory.dateOfLastDelivery}</span>
                                                    ) : (
                                                        <span>Data not available</span>
                                                    )}
                                              
                                                </div>
                                                {/* COLUMN 3 */}
                                            </div>

                                            <div className="mt-4 row text-start">
                                                {/* COLUMN 1 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Spouse Occupation: </label>
                                                    <span> {familyplanningInfo.spouseOccupation}</span>
                                                </div>
                                                {/* COLUMN 2 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Type of Last Delivery: </label>
                                                    {familyplanningInfo && familyplanningInfo.obstetricalHistory ? (
                                                        <span> {familyplanningInfo.obstetricalHistory.typeOfLastDelivery}</span>
                                                    ) : (
                                                        <span>Data not available</span>
                                                    )}
                                                   
                                                </div>
                                                {/* COLUMN 3 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Neck: </label>
                                                    <span> {familyplanningInfo.pe_neck}</span>
                                                </div>
                                            </div>

                                            <div className="mt-4 row text-start">
                                                {/* COLUMN 1 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>No. of Living Children: </label>
                                                    {familyplanningInfo && familyplanningInfo.obstetricalHistory ? (
                                                        <span> {familyplanningInfo.obstetricalHistory.numOfLivingChild}</span>
                                                    ) : (
                                                        <span>Data not available</span>
                                                    )}
                                                  
                                                </div>

                                                {/* COLUMN 2 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Menstrual Flow: </label>
                                                    {familyplanningInfo && familyplanningInfo.obstetricalHistory ? (
                                                        <span> {familyplanningInfo.obstetricalHistory.menstrualFlow}</span>
                                                    ) : (
                                                        <span>Data not available</span>
                                                    )}
                                                   
                                                </div>
                                                {/* COLUMN 3 */}       
                                            </div>

                                            <div className="mt-4 row text-start">
                                                {/* COLUMN 1 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Plan to have more children: </label>
                                                   <span> {familyplanningInfo.planAddChild}</span>
                                                </div>
                                                {/* COLUMN 2 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Dysmenorrhea: </label>
                                                    {familyplanningInfo && familyplanningInfo.obstetricalHistory ? (
                                                        <span> {familyplanningInfo.obstetricalHistory.dysmenorrhea}</span>
                                                    ) : (
                                                        <span>Data not available</span>
                                                    )}
                                                  
                                                </div>
                                                {/* COLUMN 3 */}    
                                            </div>

                                            <div className="mt-4 row text-start">
                                                {/* COLUMN 1 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Average Monthly Income: </label>
                                                   <span> {familyplanningInfo.aveMonthIncome}</span>
                                                </div>
                                                {/* COLUMN 2 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Hydatidiform mole: </label>
                                                    {familyplanningInfo && familyplanningInfo.obstetricalHistory ? (
                                                        <span> {familyplanningInfo.obstetricalHistory.hydatidiformMole}</span>
                                                    ) : (
                                                        <span>Data not available</span>
                                                    )}
                                                   
                                                </div>
                                                {/* COLUMN 3 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Abdomen: </label>
                                                    <span> {familyplanningInfo.pe_abdomen}</span>
                                                </div>
                                            </div>

                                            <div className="mt-4 row text-start">
                                                {/* COLUMN 1 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Medical History: </label>
                                                    {familyplanningInfo && familyplanningInfo.medicalHistory ? (
                                                        <span> {familyplanningInfo.medicalHistory.illness}</span>
                                                    ) : (
                                                        <span>Data not available</span>
                                                    )}
                                               
                                                </div>

                                                {/* COLUMN 2 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>History of Ectopic Pregnancy: </label>
                                                    {familyplanningInfo && familyplanningInfo.obstetricalHistory ? (
                                                        <span> {familyplanningInfo.obstetricalHistory.ectopicPregnancy}</span>
                                                    ) : (
                                                        <span>Data not available</span>
                                                    )}
                                                  
                                                </div>
                                                {/* COLUMN 3 */}
                                            </div>

                                            <div className="mt-4 row text-start">
                                                {/* COLUMN 1 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'></label>
                                                    <span> </span>
                                                </div>
                                                {/* COLUMN 2 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Diabetes: </label>
                                                    {familyplanningInfo && familyplanningInfo.obstetricalHistory ? (
                                                        <span> {familyplanningInfo.obstetricalHistory.diabetes}</span>
                                                    ) : (
                                                        <span>Data not available</span>
                                                    )}
                                                  
                                                </div>
                                                {/* COLUMN 3 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Pelvic Examination: </label>
                                                    <span> {familyplanningInfo.pe_pelvicExam}</span>
                                                </div>
                                            </div>
                                      
                                    
                                    </div>
                                </div>
                            </div> 
                                
                                {/* <div className='sp2-bottomDiv mt-5'>
                                    <div className='sp2-bottomDivHeader d-flex justify-content-between'>
                                        <h4 className="text-start">Vital Signs Testing</h4>     */}
                                        {/* Button trigger modal  */}
                                        {/* <button type="button" className="sp2-addMedRecBtn" data-bs-toggle="modal" data-bs-target="#PVitalAdd"><FontAwesomeIcon icon={faPlus}/></button>
                                    </div>
                                    <div className='sp2-MCRecordsDiv'>
                                        <table className="table sp2-MCRecordsTable">
                                            <thead>
                                                <tr>
                                                    <th>Session Finding Number</th>
                                                    <th>Date of Assessment</th>
                                                </tr>
                                            </thead>
                                            <tbody > */}
                                                {/* {
                                                    test.map((rec,idx) => (
                                                        <tr 
                                                            className='sp2-clickableMCRRow' 
                                                            key={idx}
                                                            data-bs-toggle="modal" data-bs-target="#PVitalView"
                                                            >
                                                            <td>{rec.test}</td>
                                                            <td>{rec.date}</td>
                                                        </tr>
                                                    ))
                                                } */}
{/* 
                                                <tr
                                                    className='sp2-clickableMCRRow'
                                                    data-bs-toggle="modal" data-bs-target="#PVitalView"
                                                >
                                                    <td>Session Finding #1</td>
                                                    <td>June 1, 2021</td>

                                                </tr>

                                            
                                            </tbody>
                                        </table>    
                                    </div>
                                </div> */}
                                <div className='sp2-bottomDiv'>
                                    <div className='sp2-bottomDivHeader d-flex justify-content-between mt-5'>
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
                                    <div className='sp2-MCRecordsDiv'>
                                        <table className="table sp2-MCRecordsTable">
                                            <thead>
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
                                                                    onClick={() => handleRowClick(rec._id)}
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

            {/*  Add Vital Signs Testing Modal  */}
            <div className="modal fade" id="PVitalAdd" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Vital Signs Form</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <AdditionVitalSigns />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" className="sp2-addMCButton">Save</button>
                    </div>
                    </div>
                </div>
            </div>
            
            {/* View Vital Signs Testing Modal  */}
            <div className="modal fade" id="PVitalView" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">View Vital Signs</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <ViewVitalSigns/>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" className="sp2-addMCButton">Save</button>
                    </div>
                    </div>
                </div>
            </div>

             {/* Add Family Assessment Modal  */}
                <AdditionFamilyPlanningAssessment residentid={patientinfo._id} recordid={familyplanningInfo._id}/>
                
           {/* View Family Assessment Modal  */}
           
            <ViewFamilyPlanningAssessment recordid={selectedRecordId}/>
                 
        </>
    )
}

export default FamilyPlanningSpecificResidentRecord