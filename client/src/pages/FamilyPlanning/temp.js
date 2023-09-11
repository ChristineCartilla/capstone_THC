import React, { useState} from 'react'
import Sidebar from '../../components/Sidebar.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { useLocation, useNavigate } from 'react-router-dom'


const FamilyPlanningSpecificResidentRecord = () => {
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
                            <h1 className='text-start'>Family Planning 1</h1>  
                        </div>
                        <div className='sp3-pageBody'>
                            <div className='container'>
                                <div className='topDiv'>
                                    <h4 className="text-start">Family Planning Info</h4>
                                    <div className='sp3-personalInfoDiv'>

                                    <div class="container">
                                        <div class="row">
                                            <div class="col-md-4">
                                            <label className="fw-bold">Name :  </label>
                                            <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span>
                                            </div>
                                            <div class="col itembox ">
                                            <label className="fw-bold ">Address :  </label>
                                            <span> {patient.address} </span>
                                        </div>
                                    </div>

                                        <div class="row">
                                            <div class="col-md-4">
                                            <label className="fw-bold">Age :  </label>
                                            <span> {patient.age} Years Old </span>
                                            </div>
                                            <div class="col itembox ">
                                            <label className="fw-bold">Birth Date :  </label>
                                            <span> {patient.birthdate} </span>
                                            </div>
                                            <div class="col itembox ">
                                            <label className="fw-bold">Occupation :  </label>
                                            <span> {patient.occupation} </span>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-4">
                                            <label className="fw-bold ">No. of Full Term:  </label>
                                            <span> {patient.NoFT} </span>
                                            </div>
                                            <div class="col itembox ">
                                            <label className="fw-bold">No. of Abortion: </label>
                                            <span> {patient.NoAb} </span>
                                            </div>
                                            <div class="col itembox ">
                                            <label className="fw-bold ">No. of Premature: </label>
                                            <span > {patient.NoFT} </span>
                                            </div>
                                        </div>
                                        <div class="row -start">
                                            <div class="col itembox ">
                                            <label className="fw-bold ">No. of Children Born Alive: </label>
                                            <span > {patient.NoCBA} </span>
                                            </div>
                                            <div class="col itembox ">
                                            <label className="fw-bold">No. of Living Children: </label>
                                            <span> {patient.NoLC} </span>
                                            </div>
                                            <div class="col itembox ">
                                            <label className="fw-bold ">No. of Stillbirths: </label>
                                            <span > {patient.NoStill} </span>
                                            </div>
                                        </div>
                                        <div class="row -start">
                                            <div class="col itembox ">
                                            <label className="fw-bold ">LMP: </label>
                                            <span > {patient.LMP} </span>
                                            </div>
                                            <div class="col itembox ">
                                            <label className="fw-bold">Date of Last Delivery: </label>
                                            <span> {patient.DateLD} </span>
                                            </div>
                                            <div class="col itembox">
                                            <label className="fw-bold">Illness: </label>
                                            <span> {patient.ill} </span>
                                            </div>
                                        </div>
                                        <div class="row -start">
                                        <div class="col itembox  ">
                                            <label className="fw-bold ">Type of Last Delivery: </label>
                                            <span > {patient.TypeLD} </span>
                                            </div>
                                            <div class="col itembox  ">
                                            <label className="fw-bold ">Menstrual Flow: </label>
                                            <span > {patient.mensflow} </span>
                                            </div>
                                            <div class="col itembox">
                                            <label className="fw-bold ">Allergies: </label>
                                            <span > {patient.algr} </span>
                                            </div> 
                                        </div>
                                        <div class="row -start">
                                            <div class="col itembox ">
                                            <label className="fw-bold">Hydatidiform mole: </label>
                                            <span> {patient.hydmole} </span>
                                            </div>
                                            <div class="col itembox ">
                                            <label className="fw-bold ">History of Ectopic Pregnancy: </label>
                                            <span > {patient.HEP} </span>
                                            </div>
                                        </div>
                                        <div class="row -start">
                                            <div class="col itembox ">
                                            <label className="fw-bold ">Previous Hospitalization: </label>
                                            <span > {patient.PH} </span>
                                            </div>
                                            <div class="col itembox ">
                                            <label className="fw-bold col-sm-12">Tetanus Toxoid Status</label>
                                            <button type="button" className="sp2-addMedRecBtn" data-bs-toggle="modal" data-bs-target="#PAddition"><FontAwesomeIcon icon={faPlus}/></button>
                                                <div class="row  itembox flex-nowrap">
                                                <label className="fw-bold ">Tetanus Toxoid 1 :</label> 
                                                {/* <span > {patient.TTS.TT1} </span>   */}
                                                </div>
                                                <div class="row  itembox flex-nowrap">
                                                <label className="fw-bold ">Tetanus Toxoid 2 :</label> 
                                                {/* <span > {patient.TTS.TT2} </span>   */}
                                                </div>
                                                <div class="row  itembox flex-nowrap">
                                                <label className="fw-bold ">Tetanus Toxoid 3 :</label> 
                                                {/* <span > {patient.TTS.TT3} </span>   */}
                                                </div>
                                                <div class="row  itembox flex-nowrap">
                                                <label className="fw-bold ">Tetanus Toxoid 4 :</label> 
                                                {/* <span > {patient.TTS.TT4} </span>   */}
                                                </div>
                                                <div class="row  itembox flex-nowrap">
                                                <label className="fw-bold ">Tetanus Toxoid 5 :</label> 
                                                {/* <span > {patient.TTS.TT5} </span>   */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div> 
                                </div>
                                <div className='sp2-bottomDiv'>
                                    <div className='sp2-bottomDivHeader d-flex justify-content-between'>
                                        <h4 className="text-start">Vital Signs Testing</h4>    
                                        {/* Button trigger modal  */}
                                        <button type="button" className="sp2-addMedRecBtn" data-bs-toggle="modal" data-bs-target="#PVitalAdd"><FontAwesomeIcon icon={faPlus}/></button>
                                    </div>
                                    <div className='sp2-MCRecordsDiv'>
                                        <table className="table sp2-MCRecordsTable">
                                            <thead>
                                                <tr>
                                                    <th>Test Number</th>
                                                    <th>Date of Testing</th>
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
                                            
                                            </tbody>
                                        </table>    
                                    </div>
                                </div>
                                <div className='sp2-bottomDiv'>
                                    <div className='sp2-bottomDivHeader d-flex justify-content-between'>
                                        <h4 className="text-start">Prenatal Assesment</h4>    
                                        {/* Button trigger modal  */}
                                        <button type="button" className="sp2-addMedRecBtn" data-bs-toggle="modal" data-bs-target="#PAssesAdd"><FontAwesomeIcon icon={faPlus}/></button>
                                    </div>
                                    <div className='sp2-MCRecordsDiv'>
                                        <table className="table sp2-MCRecordsTable">
                                            <thead>
                                                <tr>
                                                    <th>Session Finding Number</th>
                                                    <th>Date of Testing</th>
                                                </tr>
                                            </thead>
                                            <tbody >
                                                {/* {
                                                    test.map((rec,idx) => (
                                                        <tr 
                                                            className='sp2-clickableMCRRow' 
                                                            key={idx}
                                                            data-bs-toggle="modal" data-bs-target="#PAssesView"
                                                            >
                                                            <td>{rec.test}</td>
                                                            <td>{rec.date}</td>
                                                        </tr>
                                                    ))
                                                }
                                             */}
                                            </tbody>
                                        </table>    
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>  
            </div>

              {/*  Add Tetanus Toxoid Modal  */}
            <div className="modal fade" id="PAddition" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Tetanus Toxoid Form</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {/* <AdditionTetanusToxoid /> */}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" className="sp2-addMCButton">Save</button>
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
                        {/* <AdditionVitalSigns /> */}
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
                        {/* <ViewVitalSigns/> */}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" className="sp2-addMCButton">Save</button>
                    </div>
                    </div>
                </div>
            </div>

             {/* Add Prenata Assessment Modal  */}
            <div className="modal fade" id="PAssesAdd" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Prenatal Assessment</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {/* <AdditionPrenatalAssesment/> */}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" className="sp2-addMCButton">Save</button>
                    </div>
                    </div>
                </div>
            </div>

           {/* View Prenata Assessment Modal  */}
            <div className="modal fade" id="PAssesView" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Prenatal Assessment</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {/* <ViewPrenatalAssessment/> */}
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

export default FamilyPlanningSpecificResidentRecord