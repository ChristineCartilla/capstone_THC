import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast'

const AdditionDispensing = () => {
    const [givenDate, setGivenDate] = useState("");
    const [medicationName, setMedicationName] = useState("");
    const [dosage, setDosage] = useState("");
    const [bhwName, setBhwName] = useState("");
    const [prescription, setPrescription] = useState("");
    

    useEffect(()=>{
        setDate()
    },[]);

    const setDate = () => {
        const dateToday = new Date();
        const formattedDate = dateToday.toLocaleDateString();
        setGivenDate(formattedDate);
    }
    
    const addDispenseRec = async () => {
        try {
            const addDespense = await axios.post("/dispensing/adddispensing", 
                {dateGiven: givenDate, medicationName, dosage, bhwName, prescription}
            )
            if(addDespense.status === 200){
                if(givenDate && medicationName && dosage && bhwName && prescription){
                    toast.success("Dispensing of Medication Successfully Added");
                    window.location.reload();
                } else {
                    toast.error("Incomplete Information for Dispensing Medication, Try Again...");
                }
                
            }
        } catch (error) {
            console.log(error)
        }
        
    }
    return ( 
        <div className="modal fade" id="AddDispensing" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Medication Dispensing</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form className='px-3'>
                        <div className="row mb-5">
                            <div  className="col-md-6 text-start">
                                <label htmlFor="exampleFormControlTextarea1"  className="form-label">Date Given</label>
                                <input 
                                    type="text"   
                                    className="form-control" 
                                    id="exampleFormControlTextarea1"
                                    value={givenDate} 
                                    onChange={()=>{}}
                                    style={{backgroundColor: "#CCE8DE"}}/>
                            </div>
                            <div  className="col-md-6 text-start">
                                <label htmlFor="exampleFormControlTextarea1"  className="form-label">Medication Name</label>
                                <input 
                                    type="text"   
                                    className="form-control " 
                                    id="exampleFormControlTextarea1" 
                                    value={medicationName}
                                    onChange={e => setMedicationName(e.target.value)}
                                    style={{backgroundColor: "#CCE8DE"}}/>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div  className="col-md-6 text-start">
                                <label htmlFor="exampleFormControlTextarea1"  className="form-label">Dosage</label>
                                <input 
                                    type="text"   
                                    className="form-control" 
                                    id="exampleFormControlTextarea1" 
                                    value={dosage}
                                    onChange={e => setDosage(e.target.value)}
                                    style={{backgroundColor: "#CCE8DE"}}/>
                            </div>
                            <div  className="col-md-6 text-start">
                                <label htmlFor="exampleFormControlTextarea1"  className="form-label">BHW Name</label>
                                <input 
                                    type="text"   
                                    className="form-control " 
                                    id="exampleFormControlTextarea1" 
                                    value={bhwName}
                                    onChange={e => setBhwName(e.target.value)}
                                    style={{backgroundColor: "#CCE8DE"}}/>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div  className="col-md-12 text-start">
                                <label htmlFor="exampleFormControlTextarea1"  className="form-label">Prescription</label>
                                <textarea 
                                    className="form-control" 
                                    id="exampleFormControlTextarea1" 
                                    rows="3" 
                                    value={prescription}
                                    onChange={e => setPrescription(e.target.value)}
                                    style={{backgroundColor: "#CCE8DE"}}></textarea>
                            </div>
                        </div>
                        
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" className="workerSubmitEditBtn" onClick={addDispenseRec}>Add</button>
                </div>
            </div>
        </div>
    </div>
     );
}
 
export default AdditionDispensing;