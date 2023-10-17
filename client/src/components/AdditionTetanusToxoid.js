import axios from 'axios';
import React , { useState,useEffect } from 'react'

const AdditionTetanusToxoid = ({recordid}) => {
    const [vaccine_name,setVaccine]= useState("");
    const [dateGiven,setdateGiven]= useState("");
    const [readableDateTime, setReadableDateTime] = useState('');

    useEffect(() => {
        getCurrentDate();
        
       
      }, []);
      
      const getCurrentDate= async () => {
        const now = new Date();
        const phTime = new Date(now.toLocaleString("en-US", {timeZone: "Asia/Manila"}));
        const isoString = phTime.toISOString(); // In ISO 8601 format
        const newReadableDateTime = phTime.toLocaleString();// In a human-readable format
        setdateGiven(isoString); 
        setReadableDateTime(newReadableDateTime);
      }

      const requiredFields = [
        vaccine_name, dateGiven
      ];
    
      const isEveryFieldFilled = requiredFields.every(value => value !== "");

      const addRecSubmit = async (event) => {
        event.preventDefault();
      
        try{
          if(isEveryFieldFilled){
            const userId = sessionStorage.getItem("profileId");
            const fetchServiceProvider = await axios.get(`/profile/${userId}`);
            const attendedBy  = "Dr. "+ fetchServiceProvider.data.last_name;
            const response = await axios.post(`maternalhealth/add/tetanustoxoid/${recordid}`,{vaccine_name, dateGiven, attendedBy});
           
            if(response.status === 200){
              alert("Successfully Added Vaccine to Existing Maternal Health Record");
              window.location.reload();
            }
            

          }
          
        } catch (error){
          console.log(error)
        }
      }

  return (
    <div className="modal fade" id="TetaAddition" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Immunization Form</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div> 
          <div className="modal-body">
            <form >
              <div className="row mb-5">
                  <div className="col text-start">
                      <label htmlFor="exampleFormControlTextarea1" className="form-label">Date Given</label>
                      <input type="text"  className="form-control" disabled id="exampleFormControlTextarea1" style={{backgroundColor: "#CCE8DE"}} value={readableDateTime}/>
                  </div>
                  <div className="col text-start">
                      <label htmlFor="exampleFormControlTextarea1" className="form-label">Vaccine</label>
                      <select className="form-select" value={vaccine_name} onChange={e => setVaccine(e.target.value)}  style={{backgroundColor: "#CCE8DE"}}>
                          <option value=""  style={{backgroundColor: "white"}}>Choose...</option>
                          <option value="TT1"  style={{backgroundColor: "white"}}>TT1</option>
                          <option value="TT2"  style={{backgroundColor: "white"}}>TT2</option>
                          <option value="TT3"  style={{backgroundColor: "white"}}>TT3</option>
                          <option value="TT4"  style={{backgroundColor: "white"}}>TT4</option>
                          <option value="TT5"  style={{backgroundColor: "white"}}>TT5</option>
                      </select>
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

export default AdditionTetanusToxoid