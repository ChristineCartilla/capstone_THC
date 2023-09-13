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
        <div className='container-fluid '>
            <div className='row'>
                <Sidebar />
                <div className='col p-0'>
                    <div className="sp1-pageHeader d-flex">
                        <h1 className="float-start mx-5">Family Planning</h1>  
                    </div>
                    
                    <div className='sp2-bottomDiv mt-5'>
                        <div className='sp2-bottomDivHeader d-flex float-end '>
                            {/* <h4 className="text-start">Family Planning Records</h4>     */}
                            {/* Button trigger modal  */}
                                <button type="button" className="sp2-addMedRecBtn" data-bs-toggle="modal" data-bs-target="#MCAddition"><FontAwesomeIcon icon={faPlus}/></button>
                                    </div>
                                    <div className='sp2-MCRecordsDiv'>
                                        <table className="table sp2-MCRecordsTable">
                                            <thead>
                                                <tr>
                                                    <th>Examinations</th>
                    
                                                    <th>Date of Record</th> 
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr
                                                    className='sp2-clickableMCRRow' 
                                                    onClick={() => handleViewExaminations(patient)}
                                                > 
                                                    <td>Examination #1</td>
                                                    <td>June 1, 2021</td>
                                                </tr>
                                            
                                            </tbody>
                                        </table>    
                                    </div>
                                </div>
                                <button 
                    type="button"
                    className="sp2-servicesBackBtn float-start "
                    onClick={() => handleBack()}>
                    <FontAwesomeIcon icon={faArrowLeft}/> Back
                </button>   
                </div>
                
            </div>  
            
        </div>

    
    )
      
}

export default FamilyPlanningAllRecords