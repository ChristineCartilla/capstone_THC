import React, { useState} from 'react'
import Sidebar from '../../components/Sidebar.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { useLocation, useNavigate } from 'react-router-dom'
import AdditionVitalSigns from '../../components/AdditionVitalSigns.js'
import ViewVitalSigns from '../../components/ViewVitalSigns.js'

const HematologySpecificRecord = () => {
    const [patient, setPatient] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
  
    const handleBack = () => {
        window.history.back()
    }
    return (
        <>
        <div className=''>
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
                        <h1 className='text-start'>Hematology 1</h1>  
                    </div>
                    <div className='sp3-pageBody'>
                        <div className='container'>
                            <div className='topDiv'>
                                <h4 className="text-start">Hematology Info</h4>
                                <div className='container'>

                                        <div className="mt-4 row text-start">
                                            <div className="">
                                                <label className='fw-bold'>Name: </label>
                                                {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                <span > Lexter Smith Doe</span>
                                            </div>

                                            <div className="mt-4">
                                                <label className='fw-bold'>Sex: </label>
                                                {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                <span> Male</span>
                                            </div>
                                            <div className="mt-4">
                                                <label className='fw-bold'>Age: </label>
                                                {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                <span> 26</span>
                                            </div>
                                            <div className="mt-4">
                                                <label className='fw-bold'>Address: </label>
                                                {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                <span> Minoza St., Tigbao, Talamban, Cebu City</span>
                                            </div>
                                            <div className="mt-4">
                                                <label className='fw-bold'>Hematocrit: </label>
                                                {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                <span> 0.41</span>
                                            </div>
                                            <div className="mt-4">
                                                <label className='fw-bold'>Hemaglobin Mass Conc.: </label>
                                                {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                <span> N/A</span>
                                            </div>
                                            <div className="mt-4">
                                                <label className='fw-bold'>Eryhrocyte Number Conc.: </label>
                                                {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                <span> 156 g/l</span>
                                            </div>
                                            <div className="mt-4">
                                                <label className='fw-bold'>Leukocyte Number Conc.: </label>
                                                {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                <span> 7//L</span>
                                            </div>
                                            <div className="mt-4">
                                                <label className='fw-bold'>Segmenter Number Fraction: </label>
                                                {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                <span> 0.62</span>
                                            </div>
                                            <div className="mt-4">
                                                <label className='fw-bold'>Lymphocyte Number Fraction: </label>
                                                {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                <span> 0.33</span>
                                            </div>
                                            <div className="mt-4">
                                                <label className='fw-bold'>Monocyte Number Fraction: </label>
                                                {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                <span> 0.05</span>
                                            </div>
                                            <div className="mt-4">
                                                <label className='fw-bold'>Eosinophile Number Fraction: </label>
                                                {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                <span> 0.02</span>
                                            </div>
                                            <div className="mt-4">
                                                <label className='fw-bold'>Basophile Number Fraction: </label>
                                                {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                <span> 0.02</span>
                                            </div>
                                            <div className="mt-4">
                                                <label className='fw-bold'>Stab: </label>
                                                {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                <span> 0.01</span>
                                            </div>
                                            <div className="mt-4">
                                                <label className='fw-bold'>Thrombocyte Number Conc.: </label>
                                                {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                <span> 340/L</span>
                                            </div>
                                            <div className="mt-4">
                                                <label className='fw-bold'>Reticulocyte Number Fraction: </label>
                                                {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                <span> 4.3%</span>
                                            </div>
                                            <div className="mt-4">
                                                <label className='fw-bold'>Remarks: </label>
                                                {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                <span> </span>
                                            </div>
                                            <div className="mt-4">
                                                <label className='fw-bold'>Medical Technologist: </label>
                                                {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                <span> Jane Doe S.</span>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div> 
                            
                            <div className='sp2-bottomDiv mt-5'>
                                <div className='sp2-bottomDivHeader d-flex justify-content-between'>
                                    <h4 className="text-start">Vital Signs Testing</h4>    
                                    {/* Button trigger modal  */}
                                    <button type="button" className="sp2-addMedRecBtn" data-bs-toggle="modal" data-bs-target="#PVitalAdd"><FontAwesomeIcon icon={faPlus}/></button>
                                </div>
                                <div className='sp2-MCRecordsDiv'>
                                    <table className="table sp2-MCRecordsTable">
                                        <thead>
                                            <tr>
                                                <th>Session Finding Number</th>
                                                <th>Date of Assessment</th>
                                            </tr>
                                        </thead>
                                        <tbody >
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
        <div className="modal fade" id="fpAssesAdd" tabIndex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel1">Family Planning Assessment</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                      {/* <AdditionFamilyPlanningAssessment/> */}
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" className="sp2-addMCButton">Save</button>
                </div>
                </div>
            </div>
        </div>

       {/* View Family Assessment Modal  */}
        <div className="modal fade" id="fpAssesView" tabIndex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel1">Family Planning Assessment</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    {/* <ViewFamilyPlanningAssessment/> */}
                </div>
                {/* <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" className="sp2-addMCButton">Save</button>
                </div> */}
                </div>
            </div>
        </div>
    </>
    )
}

export default HematologySpecificRecord