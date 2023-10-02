import React, { useState} from 'react'
import Sidebar from '../../components/Sidebar.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { useLocation, useNavigate } from 'react-router-dom'
import AdditionVitalSigns from '../../components/AdditionVitalSigns.js'
import ViewVitalSigns from '../../components/ViewVitalSigns.js'
import AdditionFamilyPlanningAssessment from '../../components/AdditionFamilyPlanningAssessment.js'
import ViewFamilyPlanningAssessment from '../../components/ViewFamilyPlanningAssessment.js'
import SidebarOpenBtn from '../../components/SidebarOpenBtn.js'

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
                <SidebarOpenBtn />
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
                                    <div className='container'>

                                            <div className="mt-4 row text-start">
                                                {/* COLUMN 1 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Name: </label>
                                                    <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span>
                                                </div>

                                                {/* COLUMN 2 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Number of pregnancies </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    
                                                </div>

                                                {/* COLUMN 3 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Skin: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span> N/A</span>
                                                </div>
                                            </div>

                                            <div className="mt-4 row text-start">
                                                {/* COLUMN 1 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold text-start'>Age: </label>
                                                    {/* <span> {patient.age} Years Old </span> */}
                                                    <span > 24 Years Old</span>
                                                </div>

                                                {/* COLUMN 2 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Gravida: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span> N/A</span>
                                                </div>

                                                {/* COLUMN 3 */}
                                                
                                            </div>

                                            <div className="mt-4 row text-start">
                                                {/* COLUMN 1 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Birth Date: </label>
                                                    {/* <span> {patient.birthdate} </span> */}
                                                    <span> 1997-06-01</span>
                                                </div>

                                                {/* COLUMN 2 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Para: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span> N/A</span>
                                                </div>
                                            </div>

                                            <div className="mt-4 row text-start">
                                                {/* COLUMN 1 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Educational Attainment: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span> N/A</span>
                                                </div>

                                                {/* COLUMN 2 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>No. of Full Term: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span> N/A</span>
                                                </div>

                                                {/* COLUMN 3 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Extremities: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span> N/A</span>
                                                </div>
                                            </div>

                                            <div className="mt-4 row text-start">
                                                {/* COLUMN 1 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Occupation: </label>
                                                    {/* <span> {patient.occupation} </span> */}
                                                    <span> N/A</span>
                                                </div>

                                                {/* COLUMN 2 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>No. of Abortions: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span> N/A</span>
                                                </div>

                                                {/* COLUMN 3 */}
                                                
                                            </div>

                                            <div className="mt-4 row text-start">
                                                {/* COLUMN 1 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Address: </label>
                                                    {/* <span> {patient.address} </span> */}
                                                    <span> Minoza St., Tigbao, Talamban, Cebu City</span>
                                                </div>

                                                {/* COLUMN 2 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>No. of Premature: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span> N/A</span>
                                                </div>

                                                {/* COLUMN 3 */}
                                                
                                            </div>

                                            <div className="mt-4 row text-start">
                                                {/* COLUMN 1 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Contact No.: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span> 09123456789</span>
                                                </div>

                                                {/* COLUMN 2 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>No. of Children Born Alive: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span> N/A</span>
                                                </div>

                                                {/* COLUMN 3 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Conjunctiva: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span> N/A</span>
                                                </div>
                                            </div>

                                            <div className="mt-4 row text-start">
                                                {/* COLUMN 1 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Civil Status: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span> Married</span>
                                                </div>

                                                {/* COLUMN 2 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>No. of Living Children: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span> N/A</span>
                                                </div>

                                                {/* COLUMN 3 */}
                                                
                                            </div>

                                            <div className="mt-4 row text-start">
                                                {/* COLUMN 1 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Religion: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span> Roman Catholic</span>
                                                </div>

                                                {/* COLUMN 2 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>No. of Stillbirths: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span> N/A</span>
                                                </div>

                                                {/* COLUMN 3 */}
                                            </div>

                                            <div className="mt-4 row text-start">
                                                {/* COLUMN 1 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Name of Spouse: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span> Juan Dela Cruz</span>
                                                </div>

                                                {/* COLUMN 2 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>No. of Large Babies: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span> N/A</span>
                                                </div>

                                                {/* COLUMN 3 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Breast: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span> N/A</span>
                                                </div>
                                            </div>

                                            <div className="mt-4 row text-start">
                                                {/* COLUMN 1 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Spouse Date of Birth: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span> 1997-06-01</span>
                                                </div>

                                                {/* COLUMN 2 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>LMP: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span> N/A</span>
                                                </div>

                                                {/* COLUMN 3 */}
                                            </div>

                                            <div className="mt-4 row text-start">
                                                {/* COLUMN 1 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Spouse Age: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span > 24 Years Old</span>
                                                </div>

                                                {/* COLUMN 2 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Date of Last Delivery: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span> N/A</span>
                                                </div>

                                                {/* COLUMN 3 */}
                                              
                                            </div>

                                            <div className="mt-4 row text-start">
                                                {/* COLUMN 1 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Spouse Occupation: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span > N/A</span>
                                                </div>

                                                {/* COLUMN 2 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Type of Last Delivery: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span> N/A</span>
                                                </div>

                                                {/* COLUMN 3 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Neck: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span> N/A</span>
                                                </div>
                                            </div>

                                            <div className="mt-4 row text-start">
                                                {/* COLUMN 1 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>No. of Living Children: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span > 3</span>
                                                </div>

                                                {/* COLUMN 2 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Menstrual Flow: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span> N/A</span>
                                                </div>

                                                {/* COLUMN 3 */}
                                                
                                            </div>

                                            <div className="mt-4 row text-start">
                                                {/* COLUMN 1 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Plan to have more children: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span > Yes</span>
                                                </div>

                                                {/* COLUMN 2 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Dysmenorrhea: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span> N/A</span>
                                                </div>

                                                {/* COLUMN 3 */}
                                                
                                            </div>

                                            <div className="mt-4 row text-start">
                                                {/* COLUMN 1 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Average Monthly Income: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span> 10,000</span>
                                                </div>

                                                {/* COLUMN 2 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Hydatidiform mole: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span> N/A</span>
                                                </div>

                                                {/* COLUMN 3 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Abdomen: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span> N/A</span>
                                                </div>
                                            </div>

                                            <div className="mt-4 row text-start">
                                                {/* COLUMN 1 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Medical History: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span>N/A</span>
                                                </div>

                                                {/* COLUMN 2 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>History of Ectopic Pregnancy: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span> N/A</span>
                                                </div>

                                                {/* COLUMN 3 */}
                                            </div>

                                            <div className="mt-4 row text-start">
                                                {/* COLUMN 1 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'></label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span> </span>
                                                </div>

                                                {/* COLUMN 2 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Diabetes: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span> N/A</span>
                                                </div>

                                                {/* COLUMN 3 */}
                                                <div className="col-md-4">
                                                    <label className='fw-bold'>Pelvic Examination: </label>
                                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                                    <span> N/A</span>
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
                                <div className='sp2-bottomDiv'>
                                    <div className='sp2-bottomDivHeader d-flex justify-content-between'>
                                        <h4 className="text-start">Family Planning Assessment</h4>    
                                        {/* Button trigger modal  */}
                                        <button type="button" className="sp2-addMedRecBtn" data-bs-toggle="modal" data-bs-target="#fpAssesAdd"><FontAwesomeIcon icon={faPlus}/></button>
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

                                                <tr
                                                    className='sp2-clickableMCRRow'
                                                    data-bs-toggle="modal" data-bs-target="#fpAssesView"
                                                >
                                                    <td>Session Finding #1</td>
                                                    <td>Dr. Doe</td>
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
                          <AdditionFamilyPlanningAssessment/>
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
                        <ViewFamilyPlanningAssessment/>
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

export default FamilyPlanningSpecificResidentRecord