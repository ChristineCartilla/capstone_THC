import React from 'react'

const AdditionImmunization= () => {
  return (
    <form >
        <div className="row mb-5">
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Birth Weight</label>
                <input type="text"  className="form-control Addition_Immunization_textarea" 
                    id="exampleFormControlTextarea1" 
                  
                    style={{backgroundColor: "#CCE8DE"}}/>
               
            </div>
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Place of Delivery</label>
                <input type="text"  className="form-control Addition_Immunization_textarea" 
                    id="exampleFormControlTextarea1" 
                  
                    style={{backgroundColor: "#CCE8DE"}}/>
               
            </div>
        </div>
        <div className="row mb-5">
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Type of Feeding</label>
                <input type="text"  className="form-control Addition_Immunization_textarea" 
                    id="exampleFormControlTextarea1" 
                  
                    style={{backgroundColor: "#CCE8DE"}}/>
               
            </div>
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Date Of Newborn Screening</label>
                <input type="text"  className="form-control Addition_Immunization_textarea" 
                    id="exampleFormControlTextarea1" 
                  
                    style={{backgroundColor: "#CCE8DE"}}/>
               
            </div>
        </div>
    </form>
  )
}

export default AdditionImmunization