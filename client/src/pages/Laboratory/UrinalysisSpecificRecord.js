import React, { useState} from 'react'
import Sidebar from '../../components/Sidebar.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { useLocation, useNavigate } from 'react-router-dom'
import AdditionVitalSigns from '../../components/AdditionVitalSigns.js'
import ViewVitalSigns from '../../components/ViewVitalSigns.js'

const UrinalysisSpecificRecord = () => {
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
                <div className='container mainLayout-right p-0'>
                    <div className="sp3-pageHeader container d-flex">
                        <button 
                        type="button"
                        className="sp3-servicesBacRecskBtn -center"
                        onClick={() => handleBack()}>
                            <FontAwesomeIcon icon={faAngleLeft}/>
                    </button>
                        <h1 className='text-start'>Urinalysis 1</h1>  
                    </div>
                    <div className='sp3-pageBody'>
                        <div className='container'>
                            <div className='topDiv'>
                                <h4 className="text-start">Urinalysis Info</h4>
                                <div className='container'>

                                        <div className="mt-4 row text-start ">
                                            <div className="col-md-6">
                                                <div className='col'>
                                                    <label className='fw-bold'>PHYSICOCHEMICAL EXAMINATION: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                   
                                                </div>
                                                <div className='col mt-4 mx-4'>
                                                    <label className='fw-bold'>Color: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span> Straw</span>
                                                </div>
                                                <div className='col mt-4 mx-4 '>
                                                    <label className='fw-bold'>Character: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span> Slightly Cloudy</span>
                                                </div>

                                                <div className='col mt-5 mx-4'>
                                                    <label className='fw-bold'>Reagent Strip Used: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span> N/A </span>
                                                </div>
                                                <div className='col mt-4 mx-4'>
                                                    <label className='fw-bold'>Glucose: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span> N/A</span>
                                                </div>
                                                <div className='col mt-4 mx-4'>
                                                    <label className='fw-bold'>Bilirubin: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span> N/A</span>
                                                </div>
                                                <div className='col mt-4 mx-4'>
                                                    <label className='fw-bold'>Ketone: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span> N/A</span>
                                                </div>
                                                <div className='col mt-4 mx-4'>
                                                    <label className='fw-bold'>Specific Gravity: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span> 1.005</span>
                                                </div>
                                                <div className='col mt-4 mx-4'>
                                                    <label className='fw-bold'>Blood: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span> N/A</span>
                                                </div>
                                                <div className='col mt-4 mx-4'>
                                                    <label className='fw-bold'>PH: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span> 6.0</span>
                                                </div>
                                                <div className='col mt-4 mx-4'>
                                                    <label className='fw-bold'>Protein: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span> N/A</span>
                                                </div>
                                                <div className='col mt-4 mx-4'>
                                                    <label className='fw-bold'>Urobilinogen: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span> 0.2</span>
                                                </div>
                                                <div className='col mt-4 mx-4'>
                                                    <label className='fw-bold'>Nitrite: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span> N/A</span>
                                                </div>
                                                <div className='col mt-4 mx-4'>
                                                    <label className='fw-bold'>Leukocyte: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span> Trace</span>
                                                </div>

                                                
                                               
                                                
                                            </div>

                                            <div className="col-md-6">
                                            <div className='col mt-4 mx-4'>
                                                    <label className='fw-bold'>Crystals: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span> N/A</span>
                                                </div>
                                                <div className='col mt-4 mx-4'>
                                                    <label className='fw-bold'>Calcium Oxalates: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span> N/A</span>
                                                </div>
                                                <div className='col mt-4 mx-4'>
                                                    <label className='fw-bold'>Amorphous Urates: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span> N/A</span>
                                                </div>
                                                <div className='col mt-4 mx-4'>
                                                    <label className='fw-bold'>Uric Acid: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span> 1.005</span>
                                                </div>
                                                <div className='col mt-4 mx-4'>
                                                    <label className='fw-bold'>Amorphous Phosphates: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span> N/A</span>
                                                </div>
                                                <div className='col mt-4 mx-4'>
                                                    <label className='fw-bold'>Triple Phosphates: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span> 6.0</span>
                                                </div>

                                                <div className='col mt-5 mx-4'>
                                                    <label className='fw-bold'>Miscellaneous Structures: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span>  </span>
                                                </div>
                                                <div className='col mt-4 mx-4'>
                                                    <label className='fw-bold'>Squamous Epithelial Cells: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span> Rare</span>
                                                </div>
                                                <div className='col mt-4 mx-4'>
                                                    <label className='fw-bold'>Round Epithelial Cells: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span> N/A</span>
                                                </div>
                                                <div className='col mt-4 mx-4'>
                                                    <label className='fw-bold'>Bacteria: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span> Few</span>
                                                </div>
                                                <div className='col mt-4 mx-4'>
                                                    <label className='fw-bold'>Mucus Threads: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span> Few</span>
                                                </div>
                                                <div className='col mt-4 mx-4'>
                                                    <label className='fw-bold'>Yeast Cells: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span> Few</span>
                                                </div>
                                                
                                            </div>
                                           
                                        </div>
                                </div>
                            </div>
                        </div> 
                            
                            <div className='sp2-bottomDiv mt-5'>
                                <div className='sp2-bottomDivHeader d-flex justify-content-between'>
                                    <h4 className="text-start">Vital Signs Testing</h4>    
                                    {/* Button trigger modal  */}
                                    <button type="button" className="sp2-addMedRecBtn" data-bs-toggle="modal" data-bs-target="#UVitalAdd"><FontAwesomeIcon icon={faPlus}/></button>
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
                                                data-bs-toggle="modal" data-bs-target="#UVitalView"
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
        <div className="modal fade" id="UVitalAdd" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
        <div className="modal fade" id="UVitalView" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
    </>
    )
}

export default UrinalysisSpecificRecord