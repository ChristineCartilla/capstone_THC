import React from 'react'

const AdditionMedicalCheckup = () => {
  return (
    <form >
        <div className="mb-3 text-start">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Findings</label>
            <textarea 
                className="form-control Addition_MedicalCheckup_textarea" 
                id="exampleFormControlTextarea1" 
                rows="3" 
                style={{backgroundColor: "#CCE8DE"}}></textarea>
        </div>
        <div className="mb-3 text-start">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Medical Prescriptions</label>
            <textarea 
                className="form-control" 
                id="exampleFormControlTextarea1" 
                rows="3" 
                style={{backgroundColor: "#CCE8DE"}}></textarea>
        </div>
    </form>
  )
}

export default AdditionMedicalCheckup