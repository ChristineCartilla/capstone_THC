import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';

const AdditionFamilyPlanningAssessment = () => {
    const { residentid, recordid } = useParams();
    const [findings, setFindings] = useState("");
    const [methodAccepted, setMethodAccepted] = useState("");
    const [dateOfFollowUpVisit, setDateOfFollowUpVisit] = useState("");

    useEffect(() => {
        // Check if residentid and recordid are not null or undefined
        if (residentid && recordid) {
           console.log(residentid, recordid);
        }
    }, [residentid, recordid])

    const addRecSubmit = async (event) => {
        try {
            const userId = sessionStorage.getItem("profileId");
            const fetchServiceProvider = await axios.get(`/profile/${userId}`);
            const serviceProvider = fetchServiceProvider.data.first_name+" "+fetchServiceProvider.data.last_name;
            const response = await axios.post(`/familyplanning/add/assessment/${residentid}/${recordid}`, 
            { findings, methodAccepted, serviceProvider, dateOfFollowUpVisit });
            if (response.status === 200) {
                alert("Family Planning Assessment Successfully Added");
                window.location.reload();
            }
            
        } catch (err) {
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
                                <label htmlFor="exampleFormControlTextarea1"  className="form-label">Method Accepted</label>
                                <select  className="form-select w-50" value={methodAccepted} onChange={e => setMethodAccepted(e.target.value)} style={{backgroundColor: "#CCE8DE"}}>
                                    <option value="#" style={{backgroundColor: "white"}}>Choose...</option>
                                    <option value="Pills"  style={{backgroundColor: "white"}}>Pills</option>
                                    <option value="depot-medroxyprogesterone acetate(DMPA)" style={{backgroundColor: "white"}}>depot-medroxyprogesterone acetate (DMPA)</option>
                                    <option value="Implant"  style={{backgroundColor: "white"}}>Implant</option>
                                    <option value="Intrauterine device(IUD)"  style={{backgroundColor: "white"}}>Intrauterine device (IUD)</option>
                                </select>
                            </div>
                            <div className="mb-3 text-start">
                                <label htmlFor="exampleFormControlTextarea1"  className="form-label">Date of Next Visit</label>
                                <input 
                                    type="date"   
                                    className="form-control w-50" 
                                    id="exampleFormControlTextarea1" 
                                    value={dateOfFollowUpVisit}
                                    onChange={e => setDateOfFollowUpVisit(e.target.value)}
                                    style={{backgroundColor: "#CCE8DE"}}
                                />
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