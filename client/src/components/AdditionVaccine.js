import axios from 'axios';
import React, { useState, useEffect } from 'react'
import toast from 'react-hot-toast'


const AdditionVaccine = ({recordid}) => {
    const [vaccine_name,setVaccine]= useState('');
    const [dateGiven,setdateGiven]= useState('');
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
            const response = await axios.post(`childhealth/addvaccine/${recordid}`,{ vaccine_name, dateGiven});
           
            if(response.status === 200){
              toast.success("Successfully Added Vaccine to Existing Child Health Record");
              setTimeout(() => {
                window.location.reload();
              }, 500);
            }
            

          }
          
        } catch (error){
          console.log(error)
        }
      }
  return (
    <div className="modal fade" id="VacAddition" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                        <input type="text"  className="form-control" disabled id="exampleFormControlTextarea1" style={{backgroundColor: "#CCE8DE"}} value={readableDateTime}/>
                    </div>
                    <div className="col text-start">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Vaccine</label>
                        <select className="form-select" value={vaccine_name} onChange={e => setVaccine(e.target.value)} style={{backgroundColor: "#CCE8DE"}}>
                            <option value=""  style={{backgroundColor: "white"}}>Choose...</option>
                            <option value="BCG"  style={{backgroundColor: "white"}}>BCG</option>
                            <option value="HEP BV"  style={{backgroundColor: "white"}}>HEPBV</option>
                            <option value="PCV 1"  style={{backgroundColor: "white"}}>PCV1</option>
                            <option value="PCV 2"  style={{backgroundColor: "white"}}>PCV2</option>
                            <option value="PCV 3"  style={{backgroundColor: "white"}}>PCV3</option>
                            <option value="OPV 1"  style={{backgroundColor: "white"}}>OPV1</option>
                            <option value="OPV 2"  style={{backgroundColor: "white"}}>OPV2</option>
                            <option value="OPV 3"  style={{backgroundColor: "white"}}>OPV3</option>
                            <option value="AMV"  style={{backgroundColor: "white"}}>AMV</option>
                            <option value="PENTA 1"  style={{backgroundColor: "white"}}>PENTA1</option>
                            <option value="PENTA 2"  style={{backgroundColor: "white"}}>PENTA2</option>
                            <option value="PENTA 3"  style={{backgroundColor: "white"}}>PENTA3</option>
                            <option value="MMR"  style={{backgroundColor: "white"}}>MMR</option>
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

export default AdditionVaccine