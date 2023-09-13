import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar.js'
import Services_Searchbox from '../../components/Services_Searchbox.js'
import { useNavigate} from 'react-router-dom'

const Hematology = () => {
    const [patient, setPatient] = useState([]);
    const navigate = useNavigate();

    const handleViewExaminations = (patient) => {
        navigate(`/hematology/${patient.id}`,
            {
                state:   
                {
                    patientdata: patient
                }
            });
    }

    return(
         <div className='container-fluid '>
            <div className='row'>
                <Sidebar />
                <div className='col p-0'>
                    <div className="sp1-pageHeader d-flex justify-content-around">
                        <h1 className="">Hematology</h1>  
                        <Services_Searchbox setSearchResults={setPatient}  />
                    </div>
                    <div className='sp1-pageBody mt-5'>
                        <div className='container'>
                            <ul className="list-group">
                                <li className="list-group-item d-flex justify-content-between px-5 align-middle">
                                    <h6>Patient Name</h6>
                                </li>
                                {   
                                    patient && 
                                        patient.map((pwr, idx) => (
                                            <li className="list-group-item d-flex justify-content-between px-5 py-3 align-middle" key={idx}>
                                                <h6>{
                                                    pwr.first_name + " " + (pwr.middle_name).charAt(0) + ". " + pwr.last_name + " "
                                                }</h6>
                                                <button 
                                                    type="button" 
                                                    className="btn viewBtn"
                                                    onClick={() => handleViewExaminations(pwr)}>
                                                        View Medical History
                                                </button>
                                            </li>            
                                        ))
                                }
                               
                            </ul>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default Hematology