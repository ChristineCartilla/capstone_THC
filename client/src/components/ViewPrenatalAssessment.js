import axios from 'axios';
import React, { useState ,useEffect} from 'react'


const ViewPrenatalAssessment = ({recordid}) => {

    const [assessmentinfo, setAssessmentInfo] = useState([]);
    const [vitalsignsinfo, setVitalSignsInfo] = useState([]);

     useEffect(() => {
         getAssessmentDetails();

     }, [ recordid])

    const  getAssessmentDetails = async () => {
        try {
            const response = await axios.get(`maternalhealth/assessment/${recordid}`);
            setAssessmentInfo(response.data);
        
            if (response.data.vitalSign) {
              const vitalSignCreatedAtDate = new Date(response.data.vitalSign.createdAt).toISOString().split('T')[0];
              const assessmentCreatedAtDate = new Date(response.data.createdAt).toISOString().split('T')[0];
          
              if (vitalSignCreatedAtDate === assessmentCreatedAtDate) {
                setVitalSignsInfo(response.data.vitalSign);
              } else {
                setVitalSignsInfo([]);
              }
            } else {
              setVitalSignsInfo([]);
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
    }
      
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString(undefined, options);
      };
  return (
    <div className="modal fade" id="PAssesView" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
        <div className="modal-content">
           <div className="modal-header">
               <h1 className="modal-title fs-5" id="exampleModalLabel">Prenatal Assessment Form</h1>
               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div> 
            <div className="modal-body">
                <form >
                <div className="row mb-5">
                        <div className="col text-start">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Date Given</label>
                            <input type="text"  className="form-control" disabled id="exampleFormControlTextarea1" style={{backgroundColor: "#CCE8DE"}} value={formatDate(assessmentinfo.dateOfVisitation)}/>
                        </div>
                        <div className="col text-start">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Gestation Age</label>
                            <input type="text"  className="form-control Addition_Prenatal_textarea" 
                                id="exampleFormControlTextarea1" 
                                disabled value={assessmentinfo.aog}
                                style={{backgroundColor: "#CCE8DE"}} />
                        </div>        
                        <div className="col text-start">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Weight</label>
                            <input type="text"  className="form-control Addition_Prenatal_textarea" disabled value={vitalsignsinfo? vitalsignsinfo.weight : ""}
                                id="exampleFormControlTextarea1" 
                                style={{backgroundColor: "#CCE8DE"}}/>
                        </div>
                        <div className="col text-start">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Blood Pressure</label>
                            <input type="text"  className="form-control Addition_Prenatal_textarea" disabled value={vitalsignsinfo? vitalsignsinfo.bloodpressure : ""}
                                id="exampleFormControlTextarea1" 
                                style={{backgroundColor: "#CCE8DE"}}/>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col text-start">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Fundal Height</label>
                            <input type="text"  className="form-control Addition_Prenatal_textarea" 
                                id="exampleFormControlTextarea1" 
                                disabled value={assessmentinfo.fundalHeight}
                                style={{backgroundColor: "#CCE8DE"}}/>
                        
                        </div>
                        <div className="col text-start">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Fetal Heartbeat</label>
                            <input type="text"  className="form-control Addition_Prenatal_textarea" 
                                id="exampleFormControlTextarea1" 
                                disabled value={assessmentinfo.fetalHeartBeat}
                                style={{backgroundColor: "#CCE8DE"}}/>
                        
                        </div>
                        <div className="col text-start">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Presenting Part of Fetus</label>
                            <input type="text"  className="form-control Addition_Prenatal_textarea" 
                                id="exampleFormControlTextarea1" 
                                disabled 
                                value={assessmentinfo.partOfFetus}
                                style={{backgroundColor: "#CCE8DE"}}/>
                        
                        </div>
                    </div>
                    <div className="mb-3 text-start">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Findings</label>
                        <textarea 
                            className="form-control Addition_Prenatal_textarea" 
                            id="exampleFormControlTextarea1" 
                            rows="3" disabled value={assessmentinfo.findings}
                            style={{backgroundColor: "#CCE8DE"}}></textarea>
                    </div>
                    <div className="mb-3 text-start">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Nurse Notes</label>
                        <textarea 
                            className="form-control" 
                            id="exampleFormControlTextarea1" 
                            rows="3"  disabled value={assessmentinfo.nuresesNotes}
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