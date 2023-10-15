import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ViewFamilyPlanningAssessment = () => {   
    const { residentid, recordid } = useParams();
    const [patientinfo, setPatientInfo] = useState([]);
    const [viewFamilyPlanningInfo , setViewFamilyPlanningInfo] = useState([]);
    
    useEffect(() => {
        patientInformation();
        getViewFamilyPlanningInfo();
    }, [])

    const patientInformation = async () => {
        await axios.get("/profile/"+ residentid)
        .then((response) => {
            setPatientInfo(response.data) 
        })
    }

    const getViewFamilyPlanningInfo = async () => {
        await axios.get(`/familyplanning/assessment/${recordid}`)
        .then((response) => {
            setViewFamilyPlanningInfo(response.data.record) 
        })
    }

    return (
        <div className="modal fade" id="fpAssesView" tabIndex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel1">Family Planning Assessment</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className='container mb-4'>
                            <div className='container fw-bold row'>
                            <h5 style={{color: "#8EC3B0"}} className='text-start '>Session Findings 1</h5>

                                <div className="col mx-5 mt-3 text-start">
                                    <label className='fw-bold'>Date:   </label>
                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                    <span className='fw-normal'> 03-15-23</span>
                                </div>
                            </div>

                            <div className='container fw-bold row'>
                                <div className="col mx-5 mt-3 text-start">
                                    <label className='fw-bold'>Weight:</label>
                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                    <span className='fw-normal'> 15kg</span>
                                </div>
                            </div>

                            <div className='container fw-bold row'>
                                <div className="col mx-5 mt-3 text-start">
                                    <label className='fw-bold'>Height:   </label>
                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                    <span className='fw-normal'> 33cm</span>
                                </div>
                            </div>

                            <div className='container fw-bold row'>
                                <div className="col mx-5 mt-3 text-start">
                                    <label className='fw-bold'>Temperature:   </label>
                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                    <span className='fw-normal'> 50</span>
                                </div>
                            </div>

                            <div className='container fw-bold row'>
                                <div className="col mx-5 mt-3 text-start">
                                    <label className='fw-bold'>Findings:   </label>
                                    <span> {viewFamilyPlanningInfo.findings}</span>
                                </div>
                            </div>

                            <div className='container fw-bold row'>
                                <div className="col mx-5 mt-3 text-start">
                                    <label className='fw-bold'>Method Accepted:   </label>
                                    <span> {viewFamilyPlanningInfo.methodAccepted}</span>
                                </div>
                            </div>

                            <div className='container fw-bold row'>
                                <div className="col mx-5 mt-3 text-start">
                                    <label className='fw-bold'>Servicec Provider:   </label>
                                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                                    <span className='fw-normal'> Dr. John Smith Doe</span>
                                </div>
                            </div>

                        </div>
                    </div> 
                </div>
            </div>
        </div>

        
    )
}

export default ViewFamilyPlanningAssessment