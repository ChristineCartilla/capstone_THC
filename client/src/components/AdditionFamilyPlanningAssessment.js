import React from "react";

const AdditionFamilyPlanningAssessment = () => {
    return (
        <form >
         <div className="row mb-5">
                <div className="col text-start">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Date of Visit</label>
                    <input type="text"  className="form-control" disabled id="exampleFormControlTextarea1" style={{backgroundColor: "#CCE8DE"}}/>
                </div>
                <div className="col text-start">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Service Provider</label>
                    <input type="text"  className="form-control Addition_Prenatal_textarea" 
                        id="exampleFormControlTextarea1" 
                        style={{backgroundColor: "#CCE8DE"}}/>
                </div>    

                <div className="col text-start">
                    
                </div>        
                
            </div>
            
            <div className="mb-3 text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Findings</label>
                <textarea 
                    className="form-control Addition_MedicalCheckup_textarea" 
                    id="exampleFormControlTextarea1" 
                    rows="3" 
                    style={{backgroundColor: "#CCE8DE"}}></textarea>
            </div>
            <div className="mb-3 text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Nurse Notes </label>
                <textarea 
                    className="form-control" 
                    id="exampleFormControlTextarea1" 
                    rows="3" 
                    style={{backgroundColor: "#CCE8DE"}}></textarea>
            </div>
          
        </form>
      )
}

export default AdditionFamilyPlanningAssessment