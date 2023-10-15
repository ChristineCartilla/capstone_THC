import axios, { all } from 'axios';
import React, { useState ,useEffect} from 'react'
import {useParams } from 'react-router-dom'

const ViewPrenatalAssessment = ({recordid}) => {
    console.log(recordid)
    const [assessmentinfo, setAssessmentInfo] = useState([]);
     useEffect(() => {
         getAssessmentDetails();

     }, [])

    const  getAssessmentDetails = async () => {
        console.log(recordid)
    }
    //     console.log(recordid)
    //     await axios.get(`maternalhealth/assessment/${recordid}`)
    //     .then( (response) => {
    //         setAssessmentInfo(response.data)
    //         console.log(response)
    //     },)
    //     .catch((error) => {
    //         console.error('Error fetching data:', error);
    //       });
    // }
  return (
    <div className="modal fade" id="PAssesView" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                            <input type="text"  className="form-control" disabled id="exampleFormControlTextarea1" style={{backgroundColor: "#CCE8DE"}} value="03-15-23"/>
                        </div>
                        <div className="col text-start">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Gestation Age</label>
                            <input type="text"  className="form-control Addition_Prenatal_textarea" 
                                id="exampleFormControlTextarea1" 
                                style={{backgroundColor: "#CCE8DE"}} disabled value="18 weeks"/>
                        </div>        
                        <div className="col text-start">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Weight</label>
                            <input type="text"  className="form-control Addition_Prenatal_textarea" disabled value="56"
                                id="exampleFormControlTextarea1" 
                                style={{backgroundColor: "#CCE8DE"}}/>
                        </div>
                        <div className="col text-start">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Blood Pressure</label>
                            <input type="text"  className="form-control Addition_Prenatal_textarea" disabled value="120/28"
                                id="exampleFormControlTextarea1" 
                                style={{backgroundColor: "#CCE8DE"}}/>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col text-start">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Fundal Height</label>
                            <input type="text"  className="form-control Addition_Prenatal_textarea" 
                                id="exampleFormControlTextarea1" 
                            disabled value="25"
                                style={{backgroundColor: "#CCE8DE"}}/>
                        
                        </div>
                        <div className="col text-start">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Fetal Heartbeat</label>
                            <input type="text"  className="form-control Addition_Prenatal_textarea" 
                                id="exampleFormControlTextarea1" 
                                disabled value="115"
                                style={{backgroundColor: "#CCE8DE"}}/>
                        
                        </div>
                        <div className="col text-start">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Presenting Part of Fetus</label>
                            <input type="text"  className="form-control Addition_Prenatal_textarea" 
                                id="exampleFormControlTextarea1" 
                            disabled value="Left Mento Anterior"
                                style={{backgroundColor: "#CCE8DE"}}/>
                        
                        </div>
                    </div>
                    <div className="mb-3 text-start">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Findings</label>
                        <textarea 
                            className="form-control Addition_Prenatal_textarea" 
                            id="exampleFormControlTextarea1" 
                            rows="3" disabled value="Normal vital signs, including blood pressure, heart rate, and respiratory rate, indicate a healthy pregnancy"
                            style={{backgroundColor: "#CCE8DE"}}></textarea>
                    </div>
                    <div className="mb-3 text-start">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Nurse Notes</label>
                        <textarea 
                            className="form-control" 
                            id="exampleFormControlTextarea1" 
                            rows="3"  disabled
                            style={{backgroundColor: "#CCE8DE"}}></textarea>
                    </div>
                
                </form>
            </div>
        </div>
        </div>
        </div>
        
  )
}

export default ViewPrenatalAssessment