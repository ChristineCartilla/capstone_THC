import axios from 'axios';
import React, { useState, useEffect } from 'react'

const AdditionPrenatalAssesment = ({residentid , recordid, vitalRec}) => {

    const [readableDateTime, setReadableDateTime] = useState('');
    const [dateOfVisitation, setDateTime] = useState('');
    const[aog,setAog]= useState(null);
    const[fundalHeight,setfundalHeight]= useState(null);
    const[fetalHeartBeat,setfetalHeartBeat]= useState(null);
    const[findings,setfindings]= useState('');
    const[nuresesNotes,setnuresesNotes]= useState('');
    const[partOfFetus,setpartOfFetus]= useState('');
    
     
    useEffect(() => {
        getCurrentDate();
       isToday();
       
      }, []);
      
 

      const getCurrentDate= async () => {
        const now = new Date();
        const phTime = new Date(now.toLocaleString("en-US", {timeZone: "Asia/Manila"}));
        const isoString = phTime.toISOString(); // In ISO 8601 format
        const newReadableDateTime = phTime.toLocaleString();// In a human-readable format
        setDateTime(isoString); 
        setReadableDateTime(newReadableDateTime);
        
      }
      const isToday = (createdAt) => {
        const createdAtDate = new Date(createdAt);
        const now = new Date();
        return (
            createdAtDate.getFullYear() === now.getFullYear() &&
            createdAtDate.getMonth() === now.getMonth() &&
            createdAtDate.getDate() === now.getDate()
        
        );
    }
     
    const validateInputs = () => {
        const inputs = [aog, fundalHeight, fetalHeartBeat];
    
        for (let input of inputs) {
          if (input !== null && (isNaN(input) || input < 0))  {
           
            return false;
          }
        }
    
        return true;
      }
   
      const addRecSubmit = async (event) => {
        event.preventDefault();
        if (!validateInputs()) {
            alert("Please enter valid positive numbers.");
            return;
          }
        try{
            const userId = sessionStorage.getItem("profileId");
            const fetchServiceProvider = await axios.get(`/profile/${userId}`);
            const serviceProvider = "Dr. "+ fetchServiceProvider.data.last_name;
           
            const response = await axios.post(`maternalhealth/add/assessment/${residentid}/${recordid}`,{dateOfVisitation,aog,fundalHeight,fetalHeartBeat,partOfFetus,findings,nuresesNotes,serviceProvider});

                  if(response.status === 200){
                      alert("Prenatal Assessment Record Successfully Added");
                      window.location.reload();
                    }
           }catch (error){
          console.log(error)
        }
      }

  return (
    <div className="modal fade" id="PAssesAdd" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
        <div className="modal-content">
           <div className="modal-header">
               <h1 className="modal-title fs-5" id="exampleModalLabel">Prenatal Assesment Form</h1>
               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div> 
            <div className="modal-body">
            <form >
            <div className="row mb-5">
                    <div className="col text-start">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Date Given</label>
                        <input type="text"  className="form-control" disabled id="exampleFormControlTextarea1" value={readableDateTime} style={{backgroundColor: "#CCE8DE"}}/>
                    </div>
                    <div className="col text-start">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Gestation Age <span style={{ fontStyle: "italic" }}>(weeks)</span> </label>
                        <input type="number"   className="form-control " 
                            id="exampleFormControlTextarea1" 
                            value={aog || null}
                            onChange={e => setAog(e.target.value)}
                            style={{backgroundColor: "#CCE8DE"}}/>
                    </div>        
                    <div className="col text-start">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Weight </label>
                        <input type="text"  className="form-control " disabled value={isToday(vitalRec.createdAt) ? vitalRec?.weight: "N/A"}
                            id="exampleFormControlTextarea1" 
                            style={{backgroundColor: "#CCE8DE"}}/>
                    </div>
                    <div className="col text-start">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Blood Pressure  </label>
                        <input type="text"  className="form-control " disabled value={ isToday(vitalRec.createdAt) ? vitalRec?.bloodpressure: "N/A" }
                            id="exampleFormControlTextarea1" 
                            style={{backgroundColor: "#CCE8DE"}}/>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col text-start">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Fundal Height</label>
                        <input type="number"  className="form-control " 
                            id="exampleFormControlTextarea1" 
                            value={fundalHeight || null}
                            onChange={e => setfundalHeight(e.target.value)}
                            style={{backgroundColor: "#CCE8DE"}}/>
                    
                    </div>
                    <div className="col text-start">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Fetal Heartbeat</label>
                        <input type="number"  className="form-control " 
                            id="exampleFormControlTextarea1" 
                            value={fetalHeartBeat || null}
                            onChange={e => setfetalHeartBeat(e.target.value)}
                            style={{backgroundColor: "#CCE8DE"}}/>
                    
                    </div>
                    <div className="col text-start">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Presenting Part of Fetus</label>
                        <input type="text"  className="form-control " 
                            id="exampleFormControlTextarea1" 
                            value={partOfFetus || ''}
                            onChange={e => setpartOfFetus(e.target.value)}
                            style={{backgroundColor: "#CCE8DE"}}/>
                    
                    </div>
                </div>
                <div className="mb-3 text-start">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Findings</label>
                    <textarea 
                        className="form-control" 
                        id="exampleFormControlTextarea1" 
                        rows="3" 
                        value={findings || ''}
                        onChange={e => setfindings(e.target.value)}
                        style={{backgroundColor: "#CCE8DE"}}></textarea>
                </div>
                <div className="mb-3 text-start">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Nurse Notes </label>
                    <textarea 
                        className="form-control" 
                        id="exampleFormControlTextarea1" 
                        rows="3"
                        value={nuresesNotes || ''}
                        onChange={e => setnuresesNotes(e.target.value)} 
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

export default AdditionPrenatalAssesment