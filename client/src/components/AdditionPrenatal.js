import React from 'react'

const AdditionPrenatal= () => {
  return (
    <form >
        <h3 className="pre-pageHeader text-start" id="">Obstetrical History</h3>
        <div className="row mb-5">
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Gravida</label>
                <input type="text"  className="form-control Addition_Prenatal_textarea" 
                    id="exampleFormControlTextarea1" 
                  
                    style={{backgroundColor: "#CCE8DE"}}/>
               
            </div>
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Para</label>
                <input type="text"  className="form-control Addition_Prenatal_textarea" 
                    id="exampleFormControlTextarea1" 
                  
                    style={{backgroundColor: "#CCE8DE"}}/>
               
            </div>
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">No. of Full Term</label>
                <input type="text"  className="form-control Addition_Prenatal_textarea" 
                    id="exampleFormControlTextarea1" 
                  
                    style={{backgroundColor: "#CCE8DE"}}/>
               
            </div>
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">No. of Abortion</label>
                <input type="text"  className="form-control Addition_Prenatal_textarea" 
                    id="exampleFormControlTextarea1" 
                  
                    style={{backgroundColor: "#CCE8DE"}}/>
            </div>
        </div>
        <div className="row mb-5">
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">No. of Premature</label>
                <input type="text"  className="form-control Addition_Prenatal_textarea" 
                    id="exampleFormControlTextarea1" 
                  
                    style={{backgroundColor: "#CCE8DE"}}/>
               
            </div>
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">No. of Child Born Alive</label>
                <input type="text"  className="form-control Addition_Prenatal_textarea" 
                    id="exampleFormControlTextarea1" 
                  
                    style={{backgroundColor: "#CCE8DE"}}/>
               
            </div>
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">No. of Living Children</label>
                <input type="text"  className="form-control Addition_Prenatal_textarea" 
                    id="exampleFormControlTextarea1" 
                  
                    style={{backgroundColor: "#CCE8DE"}}/>
               
            </div>
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">No. of Stillbirths</label>
                <input type="text"  className="form-control Addition_Prenatal_textarea" 
                    id="exampleFormControlTextarea1" 
                  
                    style={{backgroundColor: "#CCE8DE"}}/>
        </div>
        </div>
        <div className="row mb-5">
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">No. of Large Babies</label>
                <input type="text"  className="form-control Addition_Prenatal_textarea" 
                    id="exampleFormControlTextarea1" 
                  
                    style={{backgroundColor: "#CCE8DE"}}/>
               
            </div>
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">LMP</label>
                <input type="text"  className="form-control Addition_Prenatal_textarea" 
                    id="exampleFormControlTextarea1" 
                  
                    style={{backgroundColor: "#CCE8DE"}}/>
               
            </div>
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Date of Last Delivery</label>
                <input type="date"  className="form-control Addition_Prenatal_textarea" 
                    id="exampleFormControlTextarea1" 
                  
                    style={{backgroundColor: "#CCE8DE"}}/>
               
            </div>
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Type of Last Delivery</label>
                <select className="form-select"  style={{backgroundColor: "#CCE8DE"}}>
                    <option value="#"  style={{backgroundColor: "white"}}>Choose...</option>
                    <option value="#"  style={{backgroundColor: "white"}}>Viginal</option>
                    <option value="#"  style={{backgroundColor: "white"}}>Cesarean Section</option>
                </select>
                
            </div>
        </div>
        <div className="row mb-5">
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Menstrual Flow</label>
                <select className="form-select"  style={{backgroundColor: "#CCE8DE"}}>
                    <option value="#"  style={{backgroundColor: "white"}}>Choose...</option>
                    <option value="#"  style={{backgroundColor: "white"}}>scanty (1-2 pads everday)</option>
                    <option value="#"  style={{backgroundColor: "white"}}>moderate (3-5 pads everyday)</option>
                    <option value="#"  style={{backgroundColor: "white"}}>moderate (3-5 pads everyday)</option>
                </select>
            </div>
            <div className="col text-start">
             <div className="row">
                <div class="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault "></input>
                    <label class="form-check-label" for="flexCheckDefault">
                        Dysmenorrhea
                    </label>
                </div>
              </div>  
              <div className="row">
                <div class="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" ></input>
                    <label class="form-check-label" for="flexCheckDefault">
                    Hydatidiform mole (within the last 12 months)
                    </label>
                </div>
              </div>  
              <div className="row">
                <div class="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" ></input>
                    <label class="form-check-label" for="flexCheckDefault">
                    History of ectopic pregnancy
                    </label>
                </div>
              </div>  
              <div className="row">
                <div class="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" ></input>
                    <label class="form-check-label" for="flexCheckDefault">
                         Diabetes
                    </label>
                </div>
              </div>  
            </div>
        </div>
        <hr class="hr" />
        <h3 className="pre-pageHeader text-start" id="">Medical History</h3>
        <div className="row mb-5">
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Previous Illness</label>
                <textarea 
                    className="form-control Addition_MedicalCheckup_textarea" 
                    id="exampleFormControlTextarea1" 
                    rows="3" 
                    style={{backgroundColor: "#CCE8DE"}}>
                </textarea>
            </div>
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Allergy</label>
                <textarea 
                    className="form-control Addition_MedicalCheckup_textarea" 
                    id="exampleFormControlTextarea1" 
                    rows="3" 
                    style={{backgroundColor: "#CCE8DE"}}>
                </textarea>
            </div>
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Previous Hospitalization</label>
                <textarea 
                    className="form-control Addition_MedicalCheckup_textarea" 
                    id="exampleFormControlTextarea1" 
                    rows="3" 
                    style={{backgroundColor: "#CCE8DE"}}>
                </textarea>
            </div>
        </div>
    </form>
  )
}

export default AdditionPrenatal