import React from 'react'

const ViewVitalSigns = () => {
  return (
    <form >
        <div className="row mb-5">
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Weight</label>
                <input type="text"  className="form-control Addition_Vital_textarea"  value="35" disabled
                    id="exampleFormControlTextarea1" 
                  
                    style={{backgroundColor: "#CCE8DE"}}/>
               
            </div>
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Blood Pressure</label>
                <input type="text"  className="form-control Addition_Vital_textarea" value="110/68" disabled
                    id="exampleFormControlTextarea1" 
                  
                    style={{backgroundColor: "#CCE8DE"}}/>
               
            </div>
        </div>
        <div className="row mb-5">
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Height(cm)</label>
                <input type="text"  className="form-control Addition_Vital_textarea" value="151.6" disabled
                    id="exampleFormControlTextarea1" 
                  
                    style={{backgroundColor: "#CCE8DE"}}/>
               
            </div>
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Pulse Rate</label>
                <input type="text"  className="form-control Addition_Vital_textarea" value="72" disabled
                    id="exampleFormControlTextarea1" 
                  
                    style={{backgroundColor: "#CCE8DE"}}/>
               
            </div>
        </div>
        <div className="row mb-5">
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Temperature(Celsius)</label>
                <input type="text"  className="form-control Addition_Vital_textarea" value="36.59" disabled
                    id="exampleFormControlTextarea1" 
                  
                    style={{backgroundColor: "#CCE8DE"}}/>
               
            </div>
        </div>
    </form>
  )
}

export default ViewVitalSigns