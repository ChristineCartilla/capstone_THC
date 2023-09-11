import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faPlus } from '@fortawesome/free-solid-svg-icons'
import { useNavigate, useParams } from 'react-router-dom'
import AdditionalFamilyPlanning from '../../components/AdditionalFamilyPlanning.js'
import axios from 'axios'


const FamilyPlanningSpecificResident = () => {
    const { residentid } = useParams();
    const [patient, setPatient] = useState([]);
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
                const fetchFPR = await axios.get("http://localhost:8000/family_planning_record");
                if(fetchMR.status === 200 && fetchFPR.status === 200){

                    const record = (fetchMR.data).find((rec) => {
                        return rec.profile_id === residentid
                    })
                    const familyPlanRec = (fetchFPR.data).filter((rec) => {
                        return rec.medical_recordID === record.id;
                     })
                    
                    setRecords(familyPlanRec)
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

    const handleViewRecord = (patient) => {
        navigate(`/familyplanningspecificresidentrecord/${patient.id})`,
        {
            state:
            {
                patientdata: patient
            }
        });
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
                            <h1 className='text-start'>Family Planning Records</h1>  
                        </div>
                        <div className='sp2-pageBody'>
                            <div className='container'>
                                <div className='sp2-topDiv mt-5'>
                                    <h4 className="text-start">Personal Information</h4>
                                    <div className='sp2-personalInfoDiv'>
                                        <table className="table table-borderless">
                                            <tbody>
                                                <tr>
                                                    <th scope="row">Name:</th>
                                                    {/* <td>{patientinfo.first_name + " "+ patientinfo.middle_name + " " + patientinfo.last_name}</td> */}
                                                    <td>John Smith Doe</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Age:</th>
                                                    {/* <td>{patientinfo.age} Years Old</td> */}
                                                    <td>24 years old</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Birth Date:</th>
                                                    {/* <td>{patientinfo.birthDate}</td> */}
                                                    <td>08-10-1998</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Educational Attainment:</th>
                                                    {/* <td>{patientinfo.educaAttain}</td> */}
                                                    <td>N/A</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Occupation:</th>
                                                    {/* <td>{patientinfo.occupation}</td> */}
                                                    <td>N/A</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Address:</th>
                                                    {/* <td>{patientinfo.street + " "+ patientinfo.barangay + " " + patientinfo.municipality+ " " + patientinfo.zipCode}</td> */}
                                                    <td>Minoza St., Tigbao, Talamban, Cebu City</td>
                                                </tr>
                                            </tbody>
                                        </table>    
                                    </div>
                                </div>
                                <div className='sp2-bottomDiv'>
                                    <div className='sp2-bottomDivHeader d-flex justify-content-between'>
                                        <h4 className="text-start">Family Planning Records</h4>    
                                        {/* Button trigger modal  */}
                                        <button type="button" className="sp2-addMedRecBtn" data-bs-toggle="modal" data-bs-target="#FPAddition"><FontAwesomeIcon icon={faPlus}/></button>
                                    </div>
                                    <div className='sp2-MCRecordsDiv'>
                                        <table className="table sp2-MCRecordsTable">
                                            <thead>
                                                <tr>
                                                    <th>Family Planning Number</th>
                                                
                                                    <th>Date of Record</th> 
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    records && records.map((rec,idx) => {
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
                                                {
                                                    records.length == 0 && (
                                                        <tr className='sp2-clickableMCRRow'
                                                            onClick={() => handleViewRecord(patient)}
                                                        >
                                                            <td>Family Planning 1</td>
                                                            {/* <td><p className='text-center'>NO RECORDS FOUND</p></td> */}
                                                            <td>03-20-23</td>
                                                        </tr>
                                                    )
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
            <div className="modal fade" id="FPAddition" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Family Planning Form</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <AdditionalFamilyPlanning />
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

export default FamilyPlanningSpecificResident