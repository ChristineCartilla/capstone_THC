import axios from 'axios';
import React, { useState } from 'react'

const AdditionMedicalCheckup = ({residentid}) => {
  const [findings, setFindings] = useState("");
  const [recommendation, setRecommendation] = useState("");

  const addRecSubmit = async (event) => {
    event.preventDefault();
    console.log(residentid);
    try{
      if(findings != "" && recommendation != ""){
        const userId = sessionStorage.getItem("profileId");
        const fetchServiceProvider = await axios.get(`/profile/${userId}`);
        const serviceProvider = "Dr. "+ fetchServiceProvider.data.last_name;
        const response = await axios.post(`/medicalcheckup/add/${residentid}`,{findings, recommendation, serviceProvider});

        if(response.status === 200){
          alert("Medical Checkup Successfully Added");
          window.location.reload();
        }
      }
      
    } catch (error){
      console.log(error)
    }
  }

  return (
    <div className="modal fade" id="MCAddition" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Medical Checkup Form</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form >
                  <div className="mb-3 text-start">
                      <label htmlFor="exampleFormControlTextarea1" className="form-label">Findings</label>
                      <textarea 
                          className="form-control Addition_MedicalCheckup_textarea" 
                          id="exampleFormControlTextarea1" 
                          rows="3" 
                          style={{backgroundColor: "#CCE8DE"}}
                          value={findings}
                          onChange={e => setFindings(e.target.value)}></textarea>
                  </div>
                  <div className="mb-3 text-start">
                      <label htmlFor="exampleFormControlTextarea1" className="form-label">Medical Prescriptions</label>
                      <textarea 
                          className="form-control" 
                          id="exampleFormControlTextarea1" 
                          rows="3" 
                          style={{backgroundColor: "#CCE8DE"}}
                          value={recommendation}
                          onChange={e => setRecommendation(e.target.value)}></textarea>
                  </div>
              </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                <button type="button" className="sp2-addMCButton" onClick={addRecSubmit}>Save</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default AdditionMedicalCheckup