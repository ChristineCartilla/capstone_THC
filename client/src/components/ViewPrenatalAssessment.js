import React from 'react'

const AdditionPrenatalAssesment = () => {
  return (
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
  )
}

export default AdditionPrenatalAssesment