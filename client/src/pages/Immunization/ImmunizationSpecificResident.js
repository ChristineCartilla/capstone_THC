import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faPlus } from '@fortawesome/free-solid-svg-icons'
import {  useParams } from 'react-router-dom'
import axios from 'axios'

import AdditionImmunizationAssessment from '../../components/AdditionImmunizationAssessment.js'
import ViewImmunizationAssessment from '../../components/ViewImmunizationAssessment.js'
import AdditionVaccine from '../../components/AdditionVaccine.js'
import SidebarOpenBtn from '../../components/SidebarOpenBtn.js'

import THCDefaultPatientLogo from '../../images/default_image.png'

const ImmunizationSpecificResident = () => {
    const { residentid, recordid} = useParams();
    const [patientinfo, setPatientInfo] = useState([]);
    const [childInfo, setChildInfo] = useState([]);
    const [motherInfo, setMotherInfo] = useState([]);
    const [fatherInfo, setFatherInfo] = useState([]);
    const [guardianInfo, setGuardianInfo] = useState([]);
    const [selectedRecordId, setSelectedRecordId] = useState(null);
    const [selectedRec, setSelectedRec] = useState(null);

    useEffect(() => {
        patientInformation();
        recordsList();
    }, [])
    
    const patientInformation = async () => {
        const accid = (await axios.get(`/account/fetchaccount/${residentid}`)).data;

        await axios.get("/profile/"+residentid)
        .then((response) => {
            setPatientInfo(response.data)
          
        })
        const response = await axios.get(`/account/fetchmember/${accid}`)
        const accountWithMatchingProfile = response.data;
            if (accountWithMatchingProfile) {
                const motherProfile = accountWithMatchingProfile.profile.find(profile => profile.relationship === "Mother");
                const fatherProfile = accountWithMatchingProfile.profile.find(profile => profile.relationship === "Father");
                const guardianProfile = accountWithMatchingProfile.profile.find(profile => profile.relationship === "Guardian");
    
                setMotherInfo(motherProfile || null);
                setFatherInfo(fatherProfile || null);
                setGuardianInfo(guardianProfile || []);
            } else {
                setMotherInfo(null);
                setFatherInfo(null);
                setGuardianInfo([]);
            }  
    }

    const recordsList = async () => {
        try {
            const fetchMR = await axios.get(`/childhealth/getrecord/${recordid}`);
            const records = fetchMR.data;
            setChildInfo(records)
        } catch (error) {
            console.log(error);
        }
    }

    const handleBack = () => {
        window.history.back()
    }

    function formatDateToWords(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString(undefined, options);
    }

    const handleDate = (date) => {
        const dateTimeString = date;
        const dateTime = new Date(dateTimeString);
        const dateString = dateTime.toISOString().split('T',1)[0];
        const readableDate = formatDateToWords(dateString);

        return readableDate;
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

    const handleRowClick = (recordid, record) => {
        setSelectedRecordId(recordid);
        setSelectedRec(record);
    };


    return (
        <>
            <div className=''>
                <SidebarOpenBtn />
                <div className='mainLayout'>
                    <div className='mainLayout-left'>
                        <Sidebar />    
                    </div>
                    <div className='col p-0'>
                        <div className="sp2-pageHeader container">
                            <h1 className='text-start'>Immunization Records</h1>  
                        </div>
                        <div className='sp2-pageBody'>
                            <div className='container-fluid p-5'>
                                <div className='row'>
                                    <div className='col-md-4 col-sm-12 sp2-topDiv'>
                                        <h5 className="text-start">Personal Information</h5>
                                        <div className='sp2-personalInfoDiv'>
                                            <div className="mb-3" style={{maxWidth: "540px"}}>
                                                <div className="row g-0">
                                                    <div className="col-md-4">
                                                        <img src={THCDefaultPatientLogo} height="80px" width="80px" alt="default_image.png" style={{marginTop:5}}/>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="card-body">
                                                            <h5 className="card-title">{patientinfo.first_name + " "+ patientinfo.middle_name + " " + patientinfo.last_name}</h5>
                                                            <p className="card-text">{patientinfo.gender + ", "+ patientinfo.civilStatus}</p>
                                                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            <table className="">
                                                <tbody>
                                                    <tr>
                                                        <td scope="row">Age:</td>
                                                        <td>{formatAge(patientinfo.birthDate)} Years Old</td>
                                                    </tr>
                                                    <tr>
                                                        <td scope="row">Birth Date:</td>
                                                        <td>{formatDate(patientinfo.birthDate)}</td>
                                                    </tr>
                                                    <tr>
                                                        <td scope="row">Birth Place:</td>
                                                        <td>{patientinfo.birthPlace}</td>
                                                    </tr>
                                                    <tr>
                                                        <td scope="row">Occupation:</td>
                                                        <td>{patientinfo.occupation}</td>
                                                    </tr>
                                                    <tr>
                                                        <td scope="row">Address:</td>
                                                        <td>{patientinfo.street + " "+ patientinfo.barangay + " " + patientinfo.municipality+ " " + patientinfo.zipCode}</td>
                                                    </tr>
                                                    
                                                </tbody>
                                            </table>
                                            {
                                                motherInfo &&
                                                (<>          
                                                    <hr /> 
                                                    <table className="">
                                                        <tbody>
                                                            <tr>
                                                                <td scope="row">Mother's Name:</td>
                                                                <td>{motherInfo.first_name + " " + motherInfo.middle_name + " " + motherInfo.last_name}</td>
                                                            </tr>
                                                            <tr>
                                                                <td scope="row">Mother's Age:</td>
                                                                <td>{formatAge(motherInfo.birthDate)} Years Old</td>
                                                            </tr>
                                                            <tr>
                                                                <td scope="row">Mother's Occupation:</td>
                                                                <td>{motherInfo.occupation}</td>
                                                            </tr>
                                                            <tr>
                                                                <td scope="row">Mother's Contact Number:</td>
                                                                <td>{motherInfo.contactNo}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>  
                                                </>)               
                                            }
                                    
                                            {
                                                fatherInfo &&
                                                (<>          
                                                    <hr /> 
                                                    <table className="">
                                                        <tbody>
                                                            <tr>
                                                                <td scope="row">Father's Name:</td>
                                                                <td>{fatherInfo.first_name + " " + fatherInfo.middle_name + " " + fatherInfo.last_name}</td>
                                                            </tr>
                                                            <tr>
                                                                <td scope="row">Father's Age:</td>
                                                                <td>{formatAge(fatherInfo.birthDate)} Years Old</td>
                                                            </tr>
                                                            <tr>
                                                                <td scope="row">Father's Occupation:</td>
                                                                <td>{fatherInfo.occupation}</td>
                                                            </tr>
                                                            <tr>
                                                                <td scope="row">Father's Contact Number:</td>
                                                                <td>{fatherInfo.contactNo}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>  
                                                </>)
                                                            
                                            }
                                            {
                                                childInfo &&
                                                (<>
                                                    <hr /> 
                                                    <table className="">
                                                        <tbody>
                                                            <tr>
                                                                <td scope="row">Place of Delivery:</td>
                                                                <td>{childInfo?.placeOfDelivery}</td>
                                                            </tr>
                                                            <tr>
                                                                <td scope="row">Birth Weight:</td>
                                                                <td>{childInfo?.birthWeight} </td>
                                                            </tr>
                                                            <tr>
                                                                <td scope="row">Type of Feeding:</td>
                                                                <td>{childInfo?.typeOfFeeding}</td>
                                                            </tr>
                                                            <tr>
                                                                <td scope="row">Date of Newborn Screening:</td>
                                                                <td>{formatDate(childInfo?.dateOfNewbornScreening)}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table> 
                                            
                                                </>)   
                                            }
                                            {
                                                childInfo &&
                                                (<>
                                                    <hr /> 
                                                    <div className="row-start">
                                                        <div className="col itembox ">
                                                            <label className="fw-bold col-sm-12">Vaccine Status</label>
                                                            {
                                                                (sessionStorage.getItem("workerType") === "Nurse" || sessionStorage.getItem("workerType") === "Superadmin")? (
                                                                    <button type="button" className="sp2-addMedRecBtn" data-bs-toggle="modal" data-bs-target="#VacAddition"><FontAwesomeIcon icon={faPlus}  style={{ color: '#44AA92' }}/></button>
                                                                ): ""
                                                            }
                                                            {childInfo && childInfo.childHealthVaccine && childInfo.childHealthVaccine.map((rec, idx) => {
                                                                if (rec._id != null) {
                                                                    return (
                                                                        <div className="d-flex" key={idx}>
                                                                            <label className="fw-bold "> {rec.vaccine_name} :  </label> 
                                                                            <span >  {formatDate(rec.dateGiven)} </span>  
                                                                        </div>
                                                                    );
                                                                }
                                                            })}
                                                        </div>
                                                    </div>
                                                </>)   
                                            }
                                        </div>
                                    </div>
                                    <div className='col-md-8 col-sm-12 sp2-bottomDiv'>
                                        <div className='sp2-MCRecordsDiv my-3'>
                                            <table className="table sp2-MCRecordsTable">
                                                <thead>
                                                    <tr>
                                                        <th></th>
                                                        <th style={{maxWidth:"400px"}}>Immunization Assessment Records</th>
                                                        <th></th> 
                                                        <th style={{textAlign:"end"}}><button type="button" className="sp2-addMedRecBtn" data-bs-toggle="modal" data-bs-target="#IAssesAddition"><FontAwesomeIcon icon={faPlus}/></button></th> 
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td></td>
                                                        <td>Record Number Code</td>
                                                        <td> </td>
                                                        <td>Date of Record</td> 
                                                    </tr>
                                                    {
                                                        childInfo.childHealthAssessment && childInfo.childHealthAssessment.map((rec, idx) => {
                                                            if (rec._id != null) {
                                                                return (
                                                                    <tr
                                                                        className='sp2-clickableMCRRow'
                                                                        key={idx}
                                                                        data-bs-toggle="modal" 
                                                                        data-bs-target="#IAssesView"
                                                                        onClick={() => handleRowClick(rec._id, rec)}
                                                                    >
                                                                        <td> </td>
                                                                        <td>{rec._id.slice(-6)}</td>
                                                                        <td> </td>
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
            
            {/* Add Imunization Assessment Modal  */}
              <AdditionImmunizationAssessment residentid={patientinfo._id} recordid={childInfo._id}/>
             
            {/* Add Immunization Modal  */}
              <ViewImmunizationAssessment residentid={patientinfo._id} recordid={selectedRecordId} record={selectedRec} /> 

            {/*  Add Tetanus Toxoid Modal  */}
              <AdditionVaccine recordid={recordid}/>         
        </>
    )
}

export default ImmunizationSpecificResident