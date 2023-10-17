import React, { useState } from 'react'
import axios from 'axios';

const AdditionVitalSigns = ({residentid}) => {
    const [ vitalSignWeight, setVitalSignWeight ] = useState("");
    const [ vitalSignHeight, setVitalSignHeight ] = useState("");
    const [ vitalSignBP, setVitalSignBP ] = useState("");
    const [ vitalSignPR, setVitalSignPR ] = useState("");
    const [ vitalSignTemp, setVitalSignTemp ] = useState("");

    const addRecSubmit = async (event) => {
        event.preventDefault();
  
        try{
            const response = await axios.post(`/vitalsign/add/${residentid}`,{
                height: vitalSignHeight,
                weight: vitalSignWeight,
                temp: vitalSignTemp,
                pulseRate: vitalSignPR,
                bloodpressure: vitalSignBP,
            })

            if(response.status === 200){
                alert("Vital Sign Successfully Added");
                window.location.reload();
            }
          
        } catch (error){
          console.log(error)
        }
      }
    return (
        <div className="modal fade" id="VitalSignAddition" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Vital Sign</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form >
                            <div className="row mb-5">
                                <div className="col text-start">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Weight</label>
                                    <input type="number"  className="form-control Addition_Prenatal_textarea" 
                                        id="exampleFormControlTextarea1" 
                                        value={vitalSignWeight}
                                        onChange={e => setVitalSignWeight(e.target.value)}
                                        style={{backgroundColor: "#CCE8DE"}}/>
                                </div>
                                <div className="col text-start">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Blood Pressure</label>
                                    <input type="number"  className="form-control Addition_Prenatal_textarea" 
                                        id="exampleFormControlTextarea1" 
                                        value={vitalSignBP}
                                        onChange={e => setVitalSignBP(e.target.value)}
                                        style={{backgroundColor: "#CCE8DE"}}/>
                                </div>
                            </div>
                            <div className="row mb-5">
                                <div className="col text-start">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Height</label>
                                    <input type="number"  className="form-control Addition_Vital_textarea" 
                                        id="exampleFormControlTextarea1" 
                                        value={vitalSignHeight}
                                        onChange={e => setVitalSignHeight(e.target.value)}
                                        style={{backgroundColor: "#CCE8DE"}}/>
                                </div>
                                <div className="col text-start">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Pulse Rate</label>
                                    <input type="number"  className="form-control Addition_Vital_textarea" 
                                        id="exampleFormControlTextarea1" 
                                        value={vitalSignPR}
                                        onChange={e => setVitalSignPR(e.target.value)}
                                        style={{backgroundColor: "#CCE8DE"}}/>
                                </div>
                            </div>
                            <div className="row mb-5">
                                <div className="col-6 text-start">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Temperature</label>
                                    <input type="text"  className="form-control Addition_Vital_textarea" 
                                        id="exampleFormControlTextarea1" 
                                        value={vitalSignTemp}
                                        onChange={e => setVitalSignTemp(e.target.value)}
                                        style={{backgroundColor: "#CCE8DE"}}/>
                                </div>
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

export default AdditionVitalSigns