import axios, { all } from 'axios';
import React, { useState, useEffect } from 'react'

const AdditionPrenatalAssesment = ({residentid , recordid}) => {
    //console.log(residentid)
    const [readableDateTime, setReadableDateTime] = useState('');
    const [dateOfVisitation, setDateTime] = useState('');
    const[aog,setAog]= useState('');
    const[fundalHeart,setfundalHeart]= useState('');
    const[fetalHeartBeat,setfetalHeartBeat]= useState('');
    const[findings,setfindings]= useState('');
    const[nuresesNotes,setnuresesNotes]= useState('');
   
    useEffect(() => {
        getCurrentDate();
        
       
      }, []);
      
      

      const getCurrentDate= async () => {
        const now = new Date();
        const phTime = new Date(now.toLocaleString("en-US", {timeZone: "Asia/Manila"}));
        const formattedDate = phTime.toISOString().split('T')[0];
        const isoString = phTime.toISOString(); // In ISO 8601 format
        const newReadableDateTime = phTime.toLocaleString();// In a human-readable format
        setDateTime(isoString); 
        setReadableDateTime(newReadableDateTime);
      }

      const addRecSubmit = async (event) => {
        event.preventDefault();
       // console.log(residentid);
      // console.log(isEveryFieldFilled )
        try{
            const userId = sessionStorage.getItem("profileId");
            const fetchServiceProvider = await axios.get(`/profile/${userId}`);
            const serviceProvider = "Dr. "+ fetchServiceProvider.data.last_name;
           const response = await axios.post(`maternalhealth/add/assessment/${residentid}/${recordid}`,{dateOfVisitation,aog,fundalHeart,fetalHeartBeat,findings,nuresesNotes,serviceProvider});

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
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Gestation Age</label>
                        <input type="text"  className="form-control Addition_Prenatal_textarea" 
                            id="exampleFormControlTextarea1" 
                            value={aog}
                            onChange={e => setAog(e.target.value)}
                            style={{backgroundColor: "#CCE8DE"}}/>
                    </div>        
                    <div className="col text-start">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Weight</label>
                        <input type="text"  className="form-control Addition_Prenatal_textarea" disabled value="35"
                            id="exampleFormControlTextarea1" 
                            style={{backgroundColor: "#CCE8DE"}}/>
                    </div>
                    <div className="col text-start">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Blood Pressure</label>
                        <input type="text"  className="form-control Addition_Prenatal_textarea" disabled value="120/50"
                            id="exampleFormControlTextarea1" 
                            style={{backgroundColor: "#CCE8DE"}}/>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col text-start">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Fundal Height</label>
                        <input type="text"  className="form-control Addition_Prenatal_textarea" 
                            id="exampleFormControlTextarea1" 
                            value={fundalHeart}
                            onChange={e => setfundalHeart(e.target.value)}
                            style={{backgroundColor: "#CCE8DE"}}/>
                    
                    </div>
                    <div className="col text-start">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Fetal Heartbeat</label>
                        <input type="text"  className="form-control Addition_Prenatal_textarea" 
                            id="exampleFormControlTextarea1" 
                            value={fetalHeartBeat}
                            onChange={e => setfetalHeartBeat(e.target.value)}
                            style={{backgroundColor: "#CCE8DE"}}/>
                    
                    </div>
                </div>
                <div className="mb-3 text-start">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Findings</label>
                    <textarea 
                        className="form-control Addition_MedicalCheckup_textarea" 
                        id="exampleFormControlTextarea1" 
                        rows="3" 
                        value={findings}
                        onChange={e => setfindings(e.target.value)}
                        style={{backgroundColor: "#CCE8DE"}}></textarea>
                </div>
                <div className="mb-3 text-start">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Nurse Notes </label>
                    <textarea 
                        className="form-control" 
                        id="exampleFormControlTextarea1" 
                        rows="3"
                        value={nuresesNotes}
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