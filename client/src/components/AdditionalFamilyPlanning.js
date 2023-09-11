import React from 'react'
const { useState } = require("react")

const AdditionalFamilyPlanning = () => {
    const [checked, setChecked] = useState(false)

        return (
            <form className='px-3'>
                <h5 className="pre-pageHeader text-start mb-3" id="">Medical Checkup</h5>

                {/* MEDICAL CHECKUP */}
                <div  className="row mb-5">
                    <div  className="col-md-3 text-start">
                        <label htmlFor="exampleFormControlTextarea1"  className="form-label">Name of Client</label>
                        <input type="text"   className="form-control" 
                            id="exampleFormControlTextarea1" 
                            style={{backgroundColor: "#CCE8DE"}}/>
                    </div>
                    <div  className="col-md-2 text-start">
                        <label htmlFor="exampleFormControlTextarea1"  className="form-label">Date of Birth</label>
                        <input type="text"   className="form-control " 
                            id="exampleFormControlTextarea1" 
                            style={{backgroundColor: "#CCE8DE"}}/>
                    </div>
                    <div  className="col-md-2 text-start">
                        <label htmlFor="exampleFormControlTextarea1"  className="form-label">Age</label>
                        <input type="text"   className="form-control " 
                            id="exampleFormControlTextarea1" 
                            style={{backgroundColor: "#CCE8DE"}}/>
                    </div>
                    <div  className="col-md-5 text-start">
                        <label htmlFor="exampleFormControlTextarea1"  className="form-label">Educational Attainment</label>
                        <input type="text"   className="form-control " 
                            id="exampleFormControlTextarea1" 
                            style={{backgroundColor: "#CCE8DE"}}/>
                    </div>
                </div>

                <div  className="row mb-5">
                    <div  className="col-md-3 text-start">
                        <label htmlFor="exampleFormControlTextarea1"  className="form-label">Occupation</label>
                        <input type="text"   className="form-control " 
                            id="exampleFormControlTextarea1" 
                            style={{backgroundColor: "#CCE8DE"}}/>
                    </div>
                    <div  className="col-md-9 text-start">
                                <label htmlFor="exampleFormControlTextarea1"  className="form-label ">Address</label>
                                    <input type="text" className="form-control col-md-2 " 
                                        id="exampleFormControlTextarea1" 
                                        style={{backgroundColor: "#CCE8DE"}} /> 
                    </div>
                </div>

                <div  className="row mb-5">
                    <div  className="col text-start">
                        <label htmlFor="exampleFormControlTextarea1"  className="form-label ">Contact Number</label>
                        <input type="text"   className="form-control" 
                            id="exampleFormControlTextarea1" 
                            style={{backgroundColor: "#CCE8DE"}}/>
                    </div>
                    <div  className="col text-start">
                        <label htmlFor="exampleFormControlTextarea1"  className="form-label">Civil Status</label>
                        <input type="text"   className="form-control " 
                            id="exampleFormControlTextarea1" 
                            style={{backgroundColor: "#CCE8DE"}}/>
                    </div>
                    <div  className="col text-start">
                        <label htmlFor="exampleFormControlTextarea1"  className="form-label ">Religion</label>
                        <input type="text"   className="form-control " 
                            id="exampleFormControlTextarea1" 
                            style={{backgroundColor: "#CCE8DE"}}/>
                    </div>
                </div>

                <div  className="row mb-5">
                    <div  className="col-md-3 text-start">
                        <label htmlFor="exampleFormControlTextarea1"  className="form-label ">Name of Spouse</label>
                        <input type="text"   className="form-control" 
                            id="exampleFormControlTextarea1" 
                            style={{backgroundColor: "#CCE8DE"}}/>
                    </div>
                    <div  className="col-md-3 text-start">
                        <label htmlFor="exampleFormControlTextarea1"  className="form-label ">Date of Birth</label>
                        <input type="text"   className="form-control " 
                            id="exampleFormControlTextarea1" 
                            style={{backgroundColor: "#CCE8DE"}}/>
                    </div>
                    <div  className="col-md-3 text-start">
                        <label htmlFor="exampleFormControlTextarea1"  className="form-label ">Age</label>
                        <input type="text"   className="form-control " 
                            id="exampleFormControlTextarea1" 
                            style={{backgroundColor: "#CCE8DE"}}/>
                    </div>
                    <div  className="col-md-3 text-start">
                        <label htmlFor="exampleFormControlTextarea1"  className="form-label ">Occupation</label>
                        <input type="text"   className="form-control " 
                            id="exampleFormControlTextarea1" 
                            style={{backgroundColor: "#CCE8DE"}}/>
                    </div>
                </div>

                <div  className="row mb-5">
                    <div  className="col-md-3 text-start">
                        <label htmlFor="exampleFormControlTextarea1"  className="form-label">Name of Spouse</label>
                        <input type="text"   className="form-control" 
                            id="exampleFormControlTextarea1" 
                            style={{backgroundColor: "#CCE8DE"}}/>
                    </div>
                    <div  className="col-md-3 text-start">
                        <label htmlFor="exampleFormControlTextarea1"  className="form-label">Date of Birth</label>
                        <input type="text"   className="form-control " 
                            id="exampleFormControlTextarea1" 
                            style={{backgroundColor: "#CCE8DE"}}/>
                    </div>
                    <div  className="col-md-3 text-start">
                        <label htmlFor="exampleFormControlTextarea1"  className="form-label ">Age</label>
                        <input type="text"   className="form-control " 
                            id="exampleFormControlTextarea1" 
                            style={{backgroundColor: "#CCE8DE"}}/>
                    </div>
                    <div  className="col-md-3 text-start">
                        <label htmlFor="exampleFormControlTextarea1"  className="form-label ">Occupation</label>
                        <input type="text"   className="form-control " 
                            id="exampleFormControlTextarea1" 
                            style={{backgroundColor: "#CCE8DE"}}/>
                    </div>
                </div>

                <div  className="row mb-5">
                    <div  className="col text-start">
                        <label htmlFor="exampleFormControlTextarea1"  className="form-label ">No. of Living Children</label>
                        <input type="text"   className="form-control" 
                            id="exampleFormControlTextarea1" 
                            style={{backgroundColor: "#CCE8DE"}}/>
                    </div>
                    <div  className="col text-start">
                        <label htmlFor="exampleFormControlTextarea1"  className="form-label ">Plan to have more children?</label>
                        {/* <input type="text"   className="form-control " 
                            id="exampleFormControlTextarea1"  
                            style={{backgroundColor: "#CCE8DE"}}  */}
                            <div className='text-center'>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input " type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                <label class="form-check-label" for="inlineRadio1">1</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                <label class="form-check-label" for="inlineRadio2">2</label>
                            </div>
                            </div>
                    </div>
                    <div  className="col text-start">
                        <label htmlFor="exampleFormControlTextarea1"  className="form-label fw-bold">Average Monthly Income</label>
                        <input type="text"   className="form-control " 
                            id="exampleFormControlTextarea1" 
                            style={{backgroundColor: "#CCE8DE"}}/>
                    </div>
                </div>

                <hr className="hr" />

                {/* MEDICAL HISTORY */}
                <h5 className="pre-pageHeader text-start mb-3" id=''>Medical History</h5>
                <div  className="row mb-5">
                    <div  className="col-md-6 text-start">
                        <label htmlFor="exampleFormControlTextarea1"  className="form-label fw-bold">Does the client have any of the following?</label>
                        <div className='mx-3'>
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault">
                                    Severe headaches / Migraine
                                </label>
                            </div>
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault">
                                    History of Stroke / Heart attack / Hypertensions
                                </label>
                            </div>
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault">
                                    Non-traumatic Hematoma / Frequent bruising or gum bleeding
                                </label>
                            </div>
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault">
                                    Current or history of breast cancer / breast mass
                                </label>
                            </div>
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault">
                                    Severe chest pain
                                </label>
                            </div>
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault">
                                    Cough for more than 14 days
                                </label>
                            </div>
                        </div>
                    </div>

                    <div  className="col-md-6 text-start">
                        <label htmlFor="exampleFormControlTextarea1"  className="form-label"></label>
                            <div className='mx-3'>
                                <div class="form-check mb-2">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Jaundice
                                    </label>
                                </div>
                                <div class="form-check mb-2">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Unexplained vaginal bleeding
                                    </label>
                                </div>
                                <div class="form-check mb-2">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Abnormal vaginal discharge
                                    </label>
                                </div>
                                <div class="form-check mb-2">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Intake of phenobarbital (anti-seizure) or rifampicin (anti-TB)
                                    </label>
                                </div>
                                <div class="form-check mb-2">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Is the client SMOKER?
                                    </label>
                                </div>
                                <div class="form-check mb-2">
                                <label>
                                    <label class="form-check-label" for="flexCheckDefault">
                                        With disability?
                                    </label>
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() => setChecked(!checked)} checked={checked}/>
                                    {
                                            checked ? (
                                            <input className="inputRequest formContentElement border border-0 border-bottom" name="token" type="text" placeholder="  If yes, please specify"/>
                                            ) : (<div></div>)
                                        }
                                    </label>
                                </div>
                            </div>
                    </div>
                </div>

                <hr className="hr" />

                {/* OBSTESTRICAL HISTORY */}
                <h5 className="pre-pageHeader text-start mb-3" id=''>Obstetrical History</h5>

                <div  className="row mb-5">
                    <div  className="col text-start">
                        <label htmlFor="exampleFormControlTextarea1"  className="form-label">Gravida</label>
                        <input type="text"   className="form-control Addition_Prenatal_textarea" 
                            id="exampleFormControlTextarea1" 
                            style={{backgroundColor: "#CCE8DE"}}/>
                    </div>
                    <div  className="col text-start">
                        <label htmlFor="exampleFormControlTextarea1"  className="form-label">Para</label>
                        <input type="text"   className="form-control Addition_Prenatal_textarea" 
                            id="exampleFormControlTextarea1" 
                            style={{backgroundColor: "#CCE8DE"}}/>
                    </div>
                    <div  className="col text-start">
                        <label htmlFor="exampleFormControlTextarea1"  className="form-label">No. of Full Term</label>
                        <input type="text"   className="form-control Addition_Prenatal_textarea" 
                            id="exampleFormControlTextarea1" 
                            style={{backgroundColor: "#CCE8DE"}}/>
                    </div>
                    <div  className="col text-start">
                        <label htmlFor="exampleFormControlTextarea1"  className="form-label">No. of Abortions</label>
                        <input type="text"   className="form-control Addition_Prenatal_textarea" 
                            id="exampleFormControlTextarea1" 
                            style={{backgroundColor: "#CCE8DE"}}/>
                    </div>
                </div>

                <div  className="row mb-5">
                    <div  className="col text-start">
                        <label htmlFor="exampleFormControlTextarea1"  className="form-label">No. of Premature</label>
                        <input type="text"   className="form-control Addition_Prenatal_textarea" 
                            id="exampleFormControlTextarea1" 
                            style={{backgroundColor: "#CCE8DE"}}/>
                    </div>
                    <div  className="col text-start">
                        <label htmlFor="exampleFormControlTextarea1"  className="form-label">No. of Child Born Alive</label>
                        <input type="text"   className="form-control Addition_Prenatal_textarea" 
                            id="exampleFormControlTextarea1" 
                            style={{backgroundColor: "#CCE8DE"}}/>
                    </div>
                    <div  className="col text-start">
                        <label htmlFor="exampleFormControlTextarea1"  className="form-label">No. of Living Children</label>
                        <input type="text"   className="form-control Addition_Prenatal_textarea" 
                            id="exampleFormControlTextarea1" 
                            style={{backgroundColor: "#CCE8DE"}}/>
                    </div>
                    <div  className="col text-start">
                        <label htmlFor="exampleFormControlTextarea1"  className="form-label">No. of Stillbirths</label>
                        <input type="text"   className="form-control Addition_Prenatal_textarea" 
                            id="exampleFormControlTextarea1" 
                            style={{backgroundColor: "#CCE8DE"}}/>
                    </div>
                </div>
                <div  className="row mb-5">
                    <div  className="col text-start">
                        <label htmlFor="exampleFormControlTextarea1"  className="form-label">No. of Large Babies</label>
                        <input type="text"   className="form-control Addition_Prenatal_textarea" 
                            id="exampleFormControlTextarea1" 
                            style={{backgroundColor: "#CCE8DE"}}/>
                    </div>
                    <div  className="col text-start">
                        <label htmlFor="exampleFormControlTextarea1"  className="form-label">LMP</label>
                        <input type="text"   className="form-control Addition_Prenatal_textarea" 
                            id="exampleFormControlTextarea1" 
                            style={{backgroundColor: "#CCE8DE"}}/>
                    </div>
                    <div  className="col text-start">
                        <label htmlFor="exampleFormControlTextarea1"  className="form-label">Date of Last Delivery</label>
                        <input type="date"   className="form-control Addition_Prenatal_textarea" 
                            id="exampleFormControlTextarea1" 
                            style={{backgroundColor: "#CCE8DE"}}/>
                    </div>
                    <div  className="col text-start">
                        <label htmlFor="exampleFormControlTextarea1"  className="form-label">Type of Last Delivery</label>
                        <select  className="form-select"  style={{backgroundColor: "#CCE8DE"}}>
                            <option value="#"  style={{backgroundColor: "white"}}>Choose...</option>
                            <option value="#"  style={{backgroundColor: "white"}}>Viginal</option>
                            <option value="#"  style={{backgroundColor: "white"}}>Cesarean Section</option>
                        </select>
                    </div>
                </div>
                <div  className="row mb-5">
                    <div  className="col text-start">
                        <label htmlFor="exampleFormControlTextarea1"  className="form-label">Menstrual Flow</label>
                        <select  className="form-select"  style={{backgroundColor: "#CCE8DE"}}>
                            <option value="#"  style={{backgroundColor: "white"}}>Choose...</option>
                            <option value="#"  style={{backgroundColor: "white"}}>scanty (1-2 pads everday)</option>
                            <option value="#"  style={{backgroundColor: "white"}}>moderate (3-5 pads everyday)</option>
                            <option value="#"  style={{backgroundColor: "white"}}>moderate (3-5 pads everyday)</option>
                        </select>
                    </div>
                    <div  className="col text-start">
                    <div  className="row">
                        <div className="form-check">
                            <input  className="form-check-input" type="checkbox" value="" id="flexCheckDefault "></input>
                            <label className="form-check-label" for="flexCheckDefault">
                                Dysmenorrhea
                            </label>
                        </div>
                    </div>  
                    <div  className="row">
                        <div className="form-check">
                            <input  className="form-check-input" type="checkbox" value="" id="flexCheckDefault" ></input>
                            <label className="form-check-label" for="flexCheckDefault">
                            Hydatidiform mole (within the last 12 months)
                            </label>
                        </div>
                    </div>  
                    <div  className="row">
                        <div className="form-check">
                            <input  className="form-check-input" type="checkbox" value="" id="flexCheckDefault" ></input>
                            <label className="form-check-label" for="flexCheckDefault">
                            History of ectopic pregnancy
                            </label>
                        </div>
                    </div>  
                    <div  className="row">
                        <div className="form-check">
                            <input  className="form-check-input" type="checkbox" value="" id="flexCheckDefault" ></input>
                            <label className="form-check-label" for="flexCheckDefault">
                                Diabetes
                            </label>
                        </div>
                    </div>  
                    </div>
                </div>

            <hr className="hr" />  

            {/* PHYSICAL EXAMINATION*/}
            <h5 className="pre-pageHeader text-start mb-3" id=''>Physical Examination</h5>
            <div  className="row mb-5">
                <div  className="col text-start">
                    <label htmlFor="exampleFormControlTextarea1"  className="form-label">Weight</label>
                    <input type="text"   className="form-control Addition_Prenatal_textarea" 
                        id="exampleFormControlTextarea1" 
                        style={{backgroundColor: "#CCE8DE"}}/>
                </div>
                <div  className="col text-start">
                    <label htmlFor="exampleFormControlTextarea1"  className="form-label">Height</label>
                    <input type="text"   className="form-control Addition_Prenatal_textarea" 
                        id="exampleFormControlTextarea1" 
                        style={{backgroundColor: "#CCE8DE"}}/>
                </div>
                <div  className="col text-start">
                    <label htmlFor="exampleFormControlTextarea1"  className="form-label">Blood Pressure</label>
                    <input type="text"   className="form-control Addition_Prenatal_textarea" 
                        id="exampleFormControlTextarea1" 
                        style={{backgroundColor: "#CCE8DE"}}/>
                </div>
                <div  className="col text-start">
                    <label htmlFor="exampleFormControlTextarea1"  className="form-label">Pulse Rate</label>
                    <input type="text"   className="form-control Addition_Prenatal_textarea" 
                        id="exampleFormControlTextarea1" 
                        style={{backgroundColor: "#CCE8DE"}}/>
                </div>
            </div>
            
            <div className="row mb-5">
                <div  className="col-md-3 text-start">
                    <label htmlFor="exampleFormControlTextarea1"  className="form-label fw-bold">Skin</label>
                    <div class="form-check mb-2">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            Normal
                        </label>
                    </div>
                    <div class="form-check mb-2">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            Pale
                        </label>
                    </div>
                    <div class="form-check mb-2">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            Yellowish
                        </label>
                    </div>
                    <div class="form-check mb-2">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            Hematoma
                        </label>
                    </div>
                </div>

                <div  className="col-md-3 text-start">
                    <label htmlFor="exampleFormControlTextarea1"  className="form-label fw-bold">Extremities</label>
                    <div class="form-check mb-2">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            Normal
                        </label>
                    </div>
                    <div class="form-check mb-2">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            Edema
                        </label>
                    </div>
                    <div class="form-check mb-2">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            Varicosities
                        </label>
                    </div>
                </div>
                   
                <div  className="col-md-3 text-start">
                    <label htmlFor="exampleFormControlTextarea1"  className="form-label fw-bold">Conjunctiva</label>
                    <div class="form-check mb-2">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            Normal
                        </label>
                    </div>
                    <div class="form-check mb-2">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            Pale
                        </label>
                    </div>
                    <div class="form-check mb-2">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            Yellowish
                        </label>
                    </div>
                </div>

                <div  className="col-md-3 text-start">
                    <label htmlFor="exampleFormControlTextarea1"  className="form-label fw-bold">Breast</label>
                    <div class="form-check mb-2">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            Normal
                        </label>
                    </div>
                    <div class="form-check mb-2">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            Mass
                        </label>
                    </div>
                    <div class="form-check mb-2">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            Nipple Discharge
                        </label>
                    </div>
                </div>
            </div>
            
            <div className="row mb-5">
                <div  className="col-md-3 text-start">
                    <label htmlFor="exampleFormControlTextarea1"  className="form-label fw-bold">Neck</label>
                    <div class="form-check mb-2">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            Normal
                        </label>
                    </div>
                    <div class="form-check mb-2">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            Neck Mas
                        </label>
                    </div>
                    <div class="form-check mb-2">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            Enlarged Lymph Nodes
                        </label>
                    </div>
                </div>

                <div  className="col-md-3 text-start">
                    <label htmlFor="exampleFormControlTextarea1"  className="form-label fw-bold">Abdomen</label>
                    <div class="form-check mb-2">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            Normal
                        </label>
                    </div>
                    <div class="form-check mb-2">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            Abdominal Mass
                        </label>
                    </div>
                    <div class="form-check mb-2">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            Varicosities
                        </label>
                    </div>
                </div>
                   
                <div  className="col-md-3 text-start">
                    <label htmlFor="exampleFormControlTextarea1"  className="form-label fw-bold">Pelvic Examination</label>
                    <div class="form-check mb-2">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            Normal
                        </label>
                    </div>
                    <div class="form-check mb-2">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            Mass
                        </label>
                    </div>
                    <div class="form-check mb-2">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            Abnormal Discharge
                        </label>
                    </div>
                    <div class="form-check mb-2">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            Cervical Abnormalities
                        </label>            
                        {/* <label>
                            <label class="form-check-label" for="flexCheckDefault">
                                Cervical Abnormalities
                            </label>
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() => setChecked(!checked)} checked={checked}/>
                                {
                                    checked ? (
                                    <input className="inputRequest formContentElement border border-0 border-bottom" name="token" type="checkbox"/> 
                                    ): (<div></div>)
                                }
                        </label> */}
                    </div>
                    <div class="form-check mb-2 mx-4 ">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label text-secondary" for="flexCheckDefault">
                            Warts
                        </label>
                    </div>
                    <div class="form-check mb-2 mx-4 ">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label text-secondary" for="flexCheckDefault">
                            Polyp or Cysts
                        </label>
                    </div>
                    <div class="form-check mb-2 mx-4 ">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label text-secondary" for="flexCheckDefault">
                            Inflammation or Erosion
                        </label>
                    </div>
                    <div class="form-check mb-2 mx-4 ">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label text-secondary" for="flexCheckDefault">
                            Bloody Discharge
                        </label>
                    </div>
                </div>

                <div  className="col-md-3 text-start">
                    <label htmlFor="exampleFormControlTextarea1"  className="form-label fw-bold"></label>
                    <div class="form-check mb-2">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            Cervical Consistency
                        </label>
                    </div>
                    <div class="form-check mb-2 mx-4 ">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label text-secondary" for="flexCheckDefault">
                            Firm
                        </label>
                    </div>
                    <div class="form-check mb-2 mx-4 ">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label text-secondary" for="flexCheckDefault">
                          Soft
                        </label>
                    </div>
                    <div class="form-check mb-2">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            Adnexal Mass / Tenderness
                        </label>
                    </div>
                    <div class="form-check mb-2">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                           Uterine Position
                        </label>
                    </div>
                    <div class="form-check mb-2 mx-4 ">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label text-secondary" for="flexCheckDefault">
                           Mid
                        </label>
                    </div>
                    <div class="form-check mb-2 mx-4 ">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label text-secondary" for="flexCheckDefault">
                          Anteflexed
                        </label>
                    </div>
                    <div class="form-check mb-2 mx-4 ">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label text-secondary" for="flexCheckDefault">
                          Retroflexed
                        </label>
                    </div>
                    <div class="form-check mb-2">
                        <label class="form-check-label" for="flexCheckDefault">
                          Uterine Depth
                        </label>
                        <input class="form-control border border-0 border-bottom" type="text" placeholder="cm" aria-label="default input example"></input>
                    </div>
                </div>
            </div>
            
            </form>
          )

}

export default AdditionalFamilyPlanning