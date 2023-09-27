import React, { useState} from "react";
import Sidebar from "../../components/Sidebar.js";
import { useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faPlus } from "@fortawesome/free-solid-svg-icons";

const FamilyPlanningAllRecords = () => {
    const [patient, setPatient] = useState([]);
    const navigate = useNavigate();
    
    const handleViewExaminations = (patient) => {
        navigate(`/familyplanning/${patient.id}`,
            {
                state:
                {
                    patientdata: patient
                }
            });
    }

    const handleBack = () => {
        window.history.back()
    }


    return (
        <div>
            <div className='mainLayout'>
                <div className='mainLayout-left'>
                    <Sidebar />
                </div>  
                <div className='container mainLayout-right'>
                    <div className='sp1-container'>
                        <div className="sp1-pageHeader d-flex justify-content-between">
                            <h1 className="">Family Planning</h1>  
                        </div>
                        <div className='sp1-pageBody'>
                            <div className='container'>
                                <div className='sp2-bottomDiv'>
                                    <div className='sp2-MCRecordsDiv '>
                                        <table className="table sp2-MCRecordsTable">
                                            <thead>
                                                <tr>
                                                    <th></th> 
                                                    <th>List of Family Planning Examinations</th>
                                                    <th></th> 
                                                    <th><button type="button" className="sp2-addMedRecBtn" data-bs-toggle="modal" data-bs-target="#MCAddition"><FontAwesomeIcon icon={faPlus}/></button></th> 
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td></td>
                                                    <td>Examination Number</td>
                                                    <td></td>
                                                    <td>Date of Examination</td> 
                                                </tr>
                                                <tr
                                                    className='sp2-clickableMCRRow' 
                                                    onClick={() => handleViewExaminations(patient)}
                                                > 
                                                    <td></td>
                                                    <td>Examination #1</td>
                                                    <td></td>
                                                    <td>June 1, 2021</td>
                                                </tr>
                                            
                                            </tbody>
                                        </table>    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
                    <button 
                        type="button"
                        className="sp2-servicesBackBtn float-start mt-5"
                        onClick={() => handleBack()}>
                        <FontAwesomeIcon icon={faArrowLeft}/> Back
                    </button> 
                </div>
            </div>
        </div>
    
    )
      
}

export default FamilyPlanningAllRecords