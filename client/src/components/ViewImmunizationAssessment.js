import React from 'react'

const ViewImmunizationAssessment = ({recordid, residentid, record}) => {

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };
    
  return (
    <div className="modal fade" id="IAssesView" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Immunization Assessment Form</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div> 
            <div className="modal-body">
              <form >
                <div className="row mb-5">
                    <div className="col text-start">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Date Given</label>
                        <input 
                          type="text"  
                          className="form-control" 
                          disabled 
                          id="exampleFormControlTextarea1" 
                          style={{backgroundColor: "#CCE8DE"}}  
                          value={record? formatDate(record.createdAt): ""}
                          onChange={() => {}}/>
                    </div>
                    <div className="col text-start">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Weight</label>
                        <input 
                          type="text"  
                          className="form-control Addition_Immunization_textarea" 
                          id="exampleFormControlTextarea1" 
                          disabled 
                          value={record? record.weight : ""}
                          onChange={() => {""}}
                          style={{backgroundColor: "#CCE8DE"}}/>
                    </div>        
                    <div className="col text-start">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Height</label>
                        <input 
                          type="text"  
                          className="form-control Addition_Immunization_textarea" 
                          id="exampleFormControlTextarea1" 
                          disabled 
                          value={record? record.height : ""}
                          onChange={() => {}}
                          style={{backgroundColor: "#CCE8DE"}}/>
                    </div>
                    <div className="col text-start">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Temperature</label>
                        <input 
                          type="text" 
                          className="form-control Addition_Immunization_textarea" 
                          id="exampleFormControlTextarea1" 
                          disabled 
                          value={record? record.temp : ""}
                          onChange={() => {}}
                          style={{backgroundColor: "#CCE8DE"}}/>
                    </div>
                </div>
                <div className="mb-3 text-start">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Findings</label>
                    <textarea 
                        className="form-control Addition_Immunization_textarea" 
                        id="exampleFormControlTextarea1" 
                        rows="3" 
                        disabled 
                        value={record? record.findings : ""}
                        onChange={() => {}}
                        style={{backgroundColor: "#CCE8DE"}}></textarea>
                </div>
                <div className="mb-3 text-start">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Nurse Notes</label>
                    <textarea 
                        className="form-control" 
                        id="exampleFormControlTextarea1" 
                        rows="3" 
                        disabled 
                        value={record? record.notes : ""}
                        onChange={() => {}}
                        style={{backgroundColor: "#CCE8DE"}}></textarea>
                </div>
              </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ViewImmunizationAssessment