import axios from 'axios'
import React from 'react'

const AdditionDental = () => {

  return (
    <div className="modal fade" id="DenAddition" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Dental Form</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form >
                            <h3 className="pre-pageHeader text-start" id="">Oral Health Condition</h3>
                                <div className="row mb-5">
                                    <div className="col text-start">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Date Given</label>
                                        <input type="text"  className="form-control" disabled id="exampleFormControlTextarea1" style={{backgroundColor: "#CCE8DE"}}/>
                                    </div>
                                    <div className="col text-start">
                                    <div className=" form-check form-check-inline  form-control-lg ">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label className="form-check-label" for="flexCheckDefault">
                                            Cleaning
                                        </label>
                                        </div>
                                        <div className=" form-check form-check-inline  form-control-lg ">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            Extraction
                                        </label>
                                        </div>
                                    </div>
                                </div>
                                <h5 className="text-start" id="">A. Check (/) if present (x) if absent</h5>
                                <div className="row mb-5">
                                <div className="col text-start">
                                        <div className=" form-check form-check-inline ">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label className="form-check-label" for="flexCheckDefault">
                                            Dental Carries
                                        </label>
                                        </div>
                                        <div className=" form-check form-check-inline   ">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            Gingivitis
                                        </label>
                                        </div>
                                        <div className=" form-check form-check-inline   ">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            Periodontal Disease
                                        </label>
                                        </div>
                                        <div className=" form-check form-check-inline ">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            Debris
                                        </label>
                                        </div>
                                        <div className=" form-check form-check-inline   ">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            Calculus
                                        </label>
                                        </div>
                                    
                                    </div>   
                                </div>
                                <div className="row mb-5">
                                <div className="col text-start">
                                <div className=" form-check form-check-inline   ">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            Abnormal Growth
                                        </label>
                                        </div>
                                        <div className=" form-check form-check-inline   ">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            Cleft Up/Palate
                                        </label>
                                        </div>
                                        <div className=" form-check form-check-inline   ">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            Others
                                        </label>
                                        </div>
                                    </div>   
                                </div>
                                <h5 className="text-start" id="">B. Indicate Number</h5>
                                <div className="row mb-5">
                                <div className="col text-start">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Number of Perm. Teeth Present</label>
                                        <input type="text"  className="form-control Addition_Dental_textarea" 
                                            id="exampleFormControlTextarea1" 
                                        
                                            style={{backgroundColor: "#CCE8DE"}}/>
                                    
                                    </div>
                                    <div className="col text-start">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Number of Perm. Sound Teeth</label>
                                        <input type="text"  className="form-control Addition_Dental_textarea" 
                                            id="exampleFormControlTextarea1" 
                                        
                                            style={{backgroundColor: "#CCE8DE"}}/>
                                    
                                    </div>
                                    <div className="col text-start">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Number of Decayed Teeth (D)</label>
                                        <input type="text"  className="form-control Addition_Dental_textarea" 
                                            id="exampleFormControlTextarea1" 
                                        
                                            style={{backgroundColor: "#CCE8DE"}}/>
                                    
                                    </div>
                                    <div className="col text-start">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Number of Missing Teeth (M) </label>
                                        <input type="text"  className="form-control Addition_Dental_textarea" 
                                            id="exampleFormControlTextarea1" 
                                        
                                            style={{backgroundColor: "#CCE8DE"}}/>
                                    </div>
                                </div>
                                <div className="row mb-5">
                                <div className="col text-start">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Number of Filled Teeth (F)</label>
                                        <input type="text"  className="form-control Addition_Dental_textarea" 
                                            id="exampleFormControlTextarea1" 
                                        
                                            style={{backgroundColor: "#CCE8DE"}}/>
                                    
                                    </div>
                                    <div className="col text-start">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Total Decay-Missing-Filled Teeth</label>
                                        <input type="text"  className="form-control Addition_Dental_textarea" 
                                            id="exampleFormControlTextarea1" 
                                        
                                            style={{backgroundColor: "#CCE8DE"}}/>
                                    
                                    </div>
                                    <div className="col text-start">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Number of Temp. Teeth Present</label>
                                        <input type="text"  className="form-control Addition_Dental_textarea" 
                                            id="exampleFormControlTextarea1" 
                                        
                                            style={{backgroundColor: "#CCE8DE"}}/>
                                    
                                    </div>
                                    <div className="col text-start">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Number of Temp. Sound Teeth</label>
                                        <input type="text"  className="form-control Addition_Dental_textarea" 
                                            id="exampleFormControlTextarea1" 
                                        
                                            style={{backgroundColor: "#CCE8DE"}}/>
                                    </div>
                                </div>
                                <div className="row mb-5">
                                <div className="col text-start">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Total of Teeth </label>
                                        <input type="text"  className="form-control Addition_Dental_textarea" 
                                            id="exampleFormControlTextarea1" 
                                        
                                            style={{backgroundColor: "#CCE8DE"}}/>
                                    
                                    </div>
                                </div>
                                <hr className="hr" />
                                <h3 className="pre-pageHeader text-start" id="">Dietary Habits / Social History</h3>
                                <div className="row mb-5">
                                    <div className="col text-start">
                                        <div className=" form-check form-check-inline  form-control-lg ">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label className="form-check-label" for="flexCheckDefault">
                                            Cleaning
                                        </label>
                                        </div>
                                    </div>
                                    <div className="col text-start">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Frequent use of alcohol</label>
                                        <select className="form-select"  style={{backgroundColor: "#CCE8DE"}}>
                                            <option value="#"  style={{backgroundColor: "white"}}>Choose...</option>
                                            <option value="#"  style={{backgroundColor: "white"}}>Always</option>
                                            <option value="#"  style={{backgroundColor: "white"}}>Often</option>
                                            <option value="#"  style={{backgroundColor: "white"}}>Sometimes</option>
                                            <option value="#"  style={{backgroundColor: "white"}}>Never</option>
                                        </select>
                                    </div>
                                    <div className="col text-start">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Frequent use of tobacco</label>
                                        <select className="form-select"  style={{backgroundColor: "#CCE8DE"}}>
                                            <option value="#"  style={{backgroundColor: "white"}}>Choose...</option>
                                            <option value="#"  style={{backgroundColor: "white"}}>Always</option>
                                            <option value="#"  style={{backgroundColor: "white"}}>Often</option>
                                            <option value="#"  style={{backgroundColor: "white"}}>Sometimes</option>
                                            <option value="#"  style={{backgroundColor: "white"}}>Never</option>
                                        </select>
                                    </div>
                                </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" className="sp2-addMCButton">Save</button>
                    </div>
                    </div>
                </div>
            </div>
    
  )
}

export default AdditionDental