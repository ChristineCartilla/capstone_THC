import React from 'react'


const ViewFamilyPlanningAssessment = () => {   

    const handleBack = () => {
        window.history.back()
    }

    return (
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
                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                    <span className='fw-normal'> Normal vital signs, including blood pressure, hear rate, and respiratory rate, indicate a healthy individual</span>
                </div>
            </div>

            <div className='container fw-bold row'>
                <div className="col mx-5 mt-3 text-start">
                    <label className='fw-bold'>Method Accepted:   </label>
                    {/* <span> {patient.fname + " "+ patient.mname + " " + patient.lname} </span> */}
                    <span className='fw-normal'> Pills</span>
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

        
    )
}

export default ViewFamilyPlanningAssessment