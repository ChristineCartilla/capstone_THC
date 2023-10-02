import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar.js'
import Services_Searchbox from '../../components/Services_Searchbox.js'
import { useNavigate} from 'react-router-dom'
import SidebarOpenBtn from '../../components/SidebarOpenBtn.js'

const FamilyPlanning = () => {
    const [patient, setPatient] = useState([]);
    const navigate = useNavigate();

    const handleViewExaminations = (patient) => {
        navigate(`/familyplanningallrecords/${patient.id}`,
            {
                state:   
                {
                    patientdata: patient
                }
            });
    }
    return (
        <div className=''>
            <SidebarOpenBtn />
            <div className='mainLayout'>
                <div className='mainLayout-left'>
                    <Sidebar />
                </div>
                
                <div className='container mainLayout-right'>
                    <div className='sp1-container'>
                        <div className="sp1-pageHeader d-flex justify-content-between">
                            <h1 className="">Family Planning</h1>  
                            <Services_Searchbox setSearchResults={setPatient}  />
                        </div>
                        <div className='sp1-pageBody mt-5'>
                            <div className='container'>
                                <ul className="list-group">
                                    <li className="list-group-item d-flex justify-content-between px-5 align-middle listHeader">
                                        <h6>Patient Name</h6>
                                    </li>
                                    {   
                                        patient && 
                                            patient.map((pwr, idx) => (
                                                <li className="list-group-item d-flex justify-content-between px-5 py-3 align-middle listRecords" key={idx}>
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
        </div>
    )
}

export default FamilyPlanning