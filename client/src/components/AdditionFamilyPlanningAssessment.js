import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';

const AdditionFamilyPlanningAssessment = () => {
    const { residentid, recordid } = useParams();
   const [findings, setFindings] = useState("");
    const [methodAccepted, setMethodAccepted] = useState("");

    const addRecSubmit = async (event) => {
        try {
            const response = await axios.post
            (`/familyplanning/add/assessment/${residentid}/${recordid}`, 
            {findings, methodAccepted});
            if(response.status === 200 ) {
                alert("Family Planning Assessment Successfully Added");
                window.location.reload();
            }
        }
        catch(err) {
            console.log(err);
        }
    }

    return (
        <div className="modal fade" id="fpAssesAdd" tabIndex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel1">Family Planning Assessment</h1>
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
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Method Accepted </label>
                                <textarea 
                                    className="form-control" 
                                    id="exampleFormControlTextarea1" 
                                    rows="3" 
                                    style={{backgroundColor: "#CCE8DE"}}
                                    value={methodAccepted}
                                    onChange={e => setMethodAccepted(e.target.value)}></textarea>
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

export default AdditionFamilyPlanningAssessment