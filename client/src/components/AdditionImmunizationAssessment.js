import axios, { all } from 'axios';
import React, { useState, useEffect } from 'react'

const AdditionImmunizationAssessment = ({residentid , recordid}) => {
    const [readableDateTime, setReadableDateTime] = useState("");
    const [findings, setFindings] = useState("");
    const [notes, setNotes] = useState("");
    const [vitalSign, setVitalSign] = useState("");
   
    useEffect(() => {
        getCurrentDate();
        getVitalSignsRecord();
       
      }, [residentid]);
      
      
      
    const getCurrentDate= async () => {
        const now = new Date();
        const phTime = new Date(now.toLocaleString("en-US", {timeZone: "Asia/Manila"}));
        const newReadableDateTime = phTime.toLocaleString();// In a human-readable format
        setReadableDateTime(newReadableDateTime);
    }

    const  getVitalSignsRecord = async () => {
        await axios.get("/vitalsign/getlatestrec/"+residentid)
        .then((response) => {
            setVitalSign(response.data)
            
        })
    }


    const addRecSubmit = async (event) => {
        event.preventDefault();
        try{
            const userId = sessionStorage.getItem("profileId");
            const fetchServiceProvider = await axios.get(`/profile/${userId}`);
            const serviceProvider = "Dr. "+ fetchServiceProvider.data.last_name;
            
            const response = await axios.post(`childhealth/addassessment/${recordid}`,
                {
                    findings,notes,serviceProvider, weight: vitalSign.weight, height: vitalSign.height, temp: vitalSign.temp
            });

                if(response.status === 200){
                    alert("Immunization Assessment Record Successfully Added");
                    window.location.reload();
                }
        }catch (error){
            console.log(error)
        }
    }

    return (
        <div className="modal fade" id="IAssesAddition" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                        id="exampleFormControlTextarea1" 
                                        style={{backgroundColor: "#CCE8DE"}} 
                                        defaultValue={readableDateTime} disabled/>
                                </div>
                                <div className="col text-start">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Weight</label>
                                    <input 
                                        type="text"  
                                        className="form-control Addition_Immunization_textarea" 
                                        id="exampleFormControlTextarea1"  
                                        defaultValue={vitalSign.weight}
                                        style={{backgroundColor: "#CCE8DE"}} disabled/>
                                </div>        
                                <div className="col text-start">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Height</label>
                                    <input 
                                        type="text"  
                                        className="form-control Addition_Immunization_textarea" 
                                        id="exampleFormControlTextarea1" 
                                        defaultValue={vitalSign.height}
                                        style={{backgroundColor: "#CCE8DE"}} disabled/>
                                </div>
                                <div className="col text-start">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Temperature</label>
                                    <input 
                                        type="text"  
                                        className="form-control Addition_Immunization_textarea" 
                                        id="exampleFormControlTextarea1"  
                                        defaultValue={vitalSign.temp}
                                        style={{backgroundColor: "#CCE8DE"}} disabled/>
                                </div>
                            </div>
                            <div className="mb-3 text-start">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Findings</label>
                                <textarea 
                                    className="form-control Addition_Immunization_textarea" 
                                    id="exampleFormControlTextarea1" 
                                    rows="3" value={findings}
                                    onChange={e => setFindings(e.target.value)}
                                    style={{backgroundColor: "#CCE8DE"}}></textarea>
                            </div>
                            <div className="mb-3 text-start">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Nurse Notes</label>
                                <textarea 
                                    className="form-control" 
                                    id="exampleFormControlTextarea1" 
                                    rows="3" value={notes}
                                    onChange={e => setNotes(e.target.value)}
                                    style={{backgroundColor: "#CCE8DE"}}></textarea>
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

export default AdditionImmunizationAssessment