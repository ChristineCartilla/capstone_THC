import React from 'react'
import Sidebar from '../../components/Sidebar.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { useLocation, useNavigate } from 'react-router-dom'
import AdditionVitalSigns from '../../components/AdditionVitalSigns.js'
import ViewVitalSigns from '../../components/ViewVitalSigns.js'
import AdditionImmunizationAssessment from '../../components/AdditionImmunizationAssessment.js'
import ViewImmunizationAssessment from '../../components/ViewImmunizationAssessment.js'
import AdditionVaccine from '../../components/AdditionVaccine.js'
import SidebarOpenBtn from '../../components/SidebarOpenBtn.js'

const ImmunizationSpecificRecord = (props) => {
    const loc = useLocation();
    console.log(loc)
    const navigate = useNavigate();
    const patient = 
    {
        fname: "John",
        lname: "Doe",
        mname: "Smith",
        age: 24,
        birthdate: "09-10-1999",
        sex:"Male",
        address: "Minoza St. Tigbao, Talamban, Cebu City",
        bo:"2nd",
        POD:"Hospital Gov't/Private",
        motName:"Jane Smith Doe",
        motAge:"24 years old",
        motOcc:"N/A",
        motCon:"09876543210",
        fatName:"John Smith Doe",
        fatAge:"24 years old",
        fatOcc:"Security Guard",
        fatCon:"09876543210",
        bw:"2.4 kgs",
        tof:"Breast Feeding",
        donbs:"09-20-1999",
        Vac:{
            BCG:"03-04-23",
            HEPBV:"03-04-23",
            PCV1:"03-04-23",
            PCV2:"03-04-23",
            PCV3:"03-04-23",
            OPV1:"03-04-23",
            OPV2:"03-04-23",
            OPV3:"03-04-23",
            AMV:"03-04-23",
            PENTA1:"03-04-23",
            PENTA2:"03-04-23",
            PENTA3:"03-04-23",
            MMR:"03-04-23",
        }
    };
    
    const test = 
    [
        {
            test: "Test Record 4",
            date: "04-07-2023",
        },  
        {
            test: "Test Record 3",
            date: "03-20-2023",
        },   
        {
            test: "Test Record 2",
            date: "02-14-2023",
        },   
        {
            test: "Test Record 1",
            date: "01-04-2023",
        },   
    ];

    
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
                            <h1 className='text-start'>Immunization 1</h1>  
                        </div>
                        <div className='sp3-pageBody'>
                            <div className='container'>
                                <div className='topDiv'>
                                    <h4 className="text-start">Personal Information</h4>
                                    <div className='sp3-personalInfoDiv'>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col itembox ">
                                            <label className="fw-bold">Name :  </label>
                                            <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span>
                                            </div>
                                            <div className="col itembox ">
                                            <label className="fw-bold ">Address :  </label>
                                            <span> {patient.address} </span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col itembox ">
                                            <label className="fw-bold">Sex :  </label>
                                            <span> {patient.sex} </span>
                                            </div>
                                            <div className="col itembox ">
                                            <label className="fw-bold">Birth Date :  </label>
                                            <span> {patient.birthdate} </span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col itembox ">
                                            <label className="fw-bold ">Mother's Name:  </label>
                                            <span> {patient.motName} </span>
                                            </div>
                                            <div className="col itembox ">
                                            <label className="fw-bold ">Father's Name:  </label>
                                            <span> {patient.fatName} </span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col itembox ">
                                            <label className="fw-bold">Mother's Age: </label>
                                            <span> {patient.motAge} </span>
                                            </div>
                                            <div className="col itembox ">
                                            <label className="fw-bold">Father's Age: </label>
                                            <span> {patient.fatAge} </span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col itembox ">
                                            <label className="fw-bold ">Mother's Occupation: </label>
                                            <span > {patient.motOcc} </span>
                                            </div>
                                            <div className="col itembox ">
                                            <label className="fw-bold ">Father's Occupation: </label>
                                            <span > {patient.fatOcc} </span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col itembox ">
                                            <label className="fw-bold ">Mother's Contact Number: </label>
                                            <span > {patient.motCon} </span>
                                            </div>
                                            <div className="col itembox ">
                                            <label className="fw-bold ">Father's Contact Number: </label>
                                            <span > {patient.fatCon} </span>
                                            </div>
                                        </div>
                                        <div className="row ">
                                            <div className="col itembox ">
                                            <label className="fw-bold ">Place of Delivery: </label>
                                            <span > {patient.POD} </span>
                                            </div>
                                            <div className="col itembox ">
                                            <label className="fw-bold">Birth Weight : </label>
                                            <span> {patient.bw} </span>
                                            </div>
                                            <div className="col itembox">
                                            <label className="fw-bold">Type of Feeding: </label>
                                            <span> {patient.tof} </span>
                                            </div>
                                            <div className="col itembox">
                                            <label className="fw-bold">Date of Newborn Screening: </label>
                                            <span> {patient.donbs} </span>
                                            </div>
                                        </div>
                                        <div className="row-start">
                                            <div className="col itembox ">
                                            <label className="fw-bold col-sm-12">Vaccine</label>
                                            <button type="button" className="sp2-addMedRecBtn" data-bs-toggle="modal" data-bs-target="#IAddition"><FontAwesomeIcon icon={faPlus}/></button>
                                                <div className="row  itembox flex-nowrap">
                                                <label className="fw-bold ">BCG :</label> 
                                                <span > {patient.Vac.BCG} </span>  
                                                </div>
                                                <div className="row  itembox flex-nowrap">
                                                <label className="fw-bold ">HEP BV:</label> 
                                                <span > {patient.Vac.HEPBV} </span>  
                                                </div>
                                                <div className="row  itembox flex-nowrap">
                                                <label className="fw-bold ">PCV 1:</label> 
                                                <span > {patient.Vac.PCV1} </span>  
                                                </div>
                                                <div className="row  itembox flex-nowrap">
                                                <label className="fw-bold ">PCV 2:</label> 
                                                <span > {patient.Vac.PCV2} </span>  
                                                </div>
                                                <div className="row  itembox flex-nowrap">
                                                <label className="fw-bold ">PCV 3:</label> 
                                                <span > {patient.Vac.PCV3} </span>  
                                                </div>
                                                <div className="row  itembox flex-nowrap">
                                                <label className="fw-bold ">OPV 1:</label> 
                                                <span > {patient.Vac.OPV1} </span>  
                                                </div>
                                                <div className="row  itembox flex-nowrap">
                                                <label className="fw-bold ">OPV 2:</label> 
                                                <span > {patient.Vac.OPV2} </span>  
                                                </div>
                                                <div className="row  itembox flex-nowrap">
                                                <label className="fw-bold ">OPV 3:</label> 
                                                <span > {patient.Vac.OPV3} </span>  
                                                </div>
                                                <div className="row  itembox flex-nowrap">
                                                <label className="fw-bold ">AMV:</label> 
                                                <span > {patient.Vac.AMV} </span>  
                                                </div>
                                                <div className="row  itembox flex-nowrap">
                                                <label className="fw-bold ">PENTA1:</label> 
                                                <span > {patient.Vac.PENTA1} </span>  
                                                </div>
                                                <div className="row  itembox flex-nowrap">
                                                <label className="fw-bold ">PENTA2:</label> 
                                                <span > {patient.Vac.PENTA2} </span>  
                                                </div>
                                                <div className="row  itembox flex-nowrap">
                                                <label className="fw-bold ">PENTA3:</label> 
                                                <span > {patient.Vac.PENTA3} </span>  
                                                </div>
                                                <div className="row  itembox flex-nowrap">
                                                <label className="fw-bold ">MMR:</label> 
                                                <span > {patient.Vac.MMR} </span>  
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
                                        <button type="button" className="sp2-addMedRecBtn" data-bs-toggle="modal" data-bs-target="#IVitalAdd"><FontAwesomeIcon icon={faPlus}/></button>
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
                                                {
                                                    test.map((rec,idx) => (
                                                        <tr 
                                                            className='sp2-clickableMCRRow' 
                                                            key={idx}
                                                            data-bs-toggle="modal" data-bs-target="#IVitalView"
                                                            >
                                                            <td>{rec.test}</td>
                                                            <td>{rec.date}</td>
                                                        </tr>
                                                    ))
                                                }
                                            
                                            </tbody>
                                        </table>    
                                    </div>
                                </div>
                                <div className='sp2-bottomDiv'>
                                    <div className='sp2-bottomDivHeader d-flex justify-content-between'>
                                        <h4 className="text-start">Immunization Assesment</h4>    
                                        {/* Button trigger modal  */}
                                        <button type="button" className="sp2-addMedRecBtn" data-bs-toggle="modal" data-bs-target="#IAssesAdd"><FontAwesomeIcon icon={faPlus}/></button>
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
                                                {
                                                    test.map((rec,idx) => (
                                                        <tr 
                                                            className='sp2-clickableMCRRow' 
                                                            key={idx}
                                                            data-bs-toggle="modal" data-bs-target="#IAssesView"
                                                            >
                                                            <td>{rec.test}</td>
                                                            <td>{rec.date}</td>
                                                        </tr>
                                                    ))
                                                }
                                            
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
            <div className="modal fade" id="IAddition" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Vaccine Form</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <AdditionVaccine />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" className="sp2-addMCButton">Save</button>
                    </div>
                    </div>
                </div>
            </div>


            {/*  Add Vital Signs Testing Modal  */}
            <div className="modal fade" id="IVitalAdd" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
            <div className="modal fade" id="IVitalView" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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

             {/* Add Prenata Assessment Modal  */}
            <div className="modal fade" id="IAssesAdd" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Immunization Assessment</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <AdditionImmunizationAssessment/>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" className="sp2-addMCButton">Save</button>
                    </div>
                    </div>
                </div>
            </div>

           {/* View Prenata Assessment Modal  */}
            <div className="modal fade" id="IAssesView" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Immunization Assessment</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <ViewImmunizationAssessment/>
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

export default ImmunizationSpecificRecord