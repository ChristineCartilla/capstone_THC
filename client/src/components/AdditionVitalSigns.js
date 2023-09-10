import React from 'react'

const AdditionVitalSigns = () => {
  return (
    <form >
        <div className="row mb-5">
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Weight</label>
                <input type="text"  className="form-control Addition_Prenatal_textarea" 
                    id="exampleFormControlTextarea1" 
                  
                    style={{backgroundColor: "#CCE8DE"}}/>
               
            </div>
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Blood Pressure</label>
                <input type="text"  className="form-control Addition_Prenatal_textarea" 
                    id="exampleFormControlTextarea1" 
                  
                    style={{backgroundColor: "#CCE8DE"}}/>
               
            </div>
        </div>
        <div className="row mb-5">
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Height</label>
                <input type="text"  className="form-control Addition_Vital_textarea" 
                    id="exampleFormControlTextarea1" 
                  
                    style={{backgroundColor: "#CCE8DE"}}/>
               
            </div>
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Pulse Rate</label>
                <input type="text"  className="form-control Addition_Vital_textarea" 
                    id="exampleFormControlTextarea1" 
                  
                    style={{backgroundColor: "#CCE8DE"}}/>
               
            </div>
        </div>
        <div className="row mb-5">
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Temperature</label>
                <input type="text"  className="form-control Addition_Vital_textarea" 
                    id="exampleFormControlTextarea1" 
                  
                    style={{backgroundColor: "#CCE8DE"}}/>
               
            </div>
        </div>
    </form>
  )
}

export default AdditionVitalSigns