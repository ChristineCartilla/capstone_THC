import React, { useState } from 'react';
import axios from 'axios';

const AdditionalFamilyPlanning = ({residentid}) => {
    const [checked, setChecked] = useState(false);
    const [pe_skin, setPe_skin] = useState([]);
    const [pe_conjunctiva, setPe_conjunctiva] = useState([]);
    const [pe_neck, setPe_neck] = useState([]);
    const [pe_breast, setPe_breast] = useState([]);
    const [pe_abdomen, setPe_abdomen] = useState([]);
    const [pe_extremities, setPe_extremities] = useState([]);
    const [pe_pelvicExam, setPe_pelvicExam] = useState([]);

    const addRecSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post
            (`/familyplanning/add/${residentid}`,
                {pe_skin, pe_conjunctiva, pe_neck, pe_breast, 
                    pe_abdomen, pe_extremities, pe_pelvicExam
                },
            );
                if(response.status === 200 ) {
                    alert("Family Planning Successfully Added");
                    window.location.reload();
                }
            } catch (error) {
            console.log(error);
         }
    }

        return (
            <div className="modal fade" id="FPAddition" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Family Planning Form</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className='px-3'>
                                <h6 className="pre-pageHeader text-start mb-3" id="">Medical Checkup</h6>

                                {/* MEDICAL CHECKUP */}
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
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input " type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                                <label className="form-check-label" htmlFor="inlineRadio1">1</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                                <label className="form-check-label" htmlFor="inlineRadio2">2</label>
                                            </div>
                                            </div>
                                    </div>
                                    <div  className="col text-start">
                                        <label htmlFor="exampleFormControlTextarea1"  className="form-label">Average Monthly Income</label>
                                        <input type="text"   className="form-control " 
                                            id="exampleFormControlTextarea1" 
                                            style={{backgroundColor: "#CCE8DE"}}/>
                                    </div>
                                </div>

                                <hr className="hr" />

                                {/* MEDICAL HISTORY */}
                                <h6 className="pre-pageHeader text-start mb-3" id=''>Medical History</h6>
                                <div  className="row mb-5">
                                    <div  className="col-md-6 text-start">
                                        <label htmlFor="exampleFormControlTextarea1"  className="form-label fw-bold">Does the client have any of the following?</label>
                                        <div className='mx-3'>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    Severe headaches / Migraine
                                                </label>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    History of Stroke / Heart attack / Hypertensions
                                                </label>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    Non-traumatic Hematoma / Frequent bruising or gum bleeding
                                                </label>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    Current or history of breast cancer / breast mass
                                                </label>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    Severe chest pain
                                                </label>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    Cough for more than 14 days
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div  className="col-md-6 text-start">
                                        <label htmlFor="exampleFormControlTextarea1"  className="form-label"></label>
                                            <div className='mx-3'>
                                                <div className="form-check mb-2">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Jaundice
                                                    </label>
                                                </div>
                                                <div className="form-check mb-2">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Unexplained vaginal bleeding
                                                    </label>
                                                </div>
                                                <div className="form-check mb-2">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Abnormal vaginal discharge
                                                    </label>
                                                </div>
                                                <div className="form-check mb-2">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Intake of phenobarbital (anti-seizure) or rifampicin (anti-TB)
                                                    </label>
                                                </div>
                                                <div className="form-check mb-2">
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Is the client SMOKER?
                                                    </label>
                                                </div>
                                                <div className="form-check mb-2">
                                                <label>
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        With disability?
                                                    </label>
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() => setChecked(!checked)} checked={checked}/>
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
                                <h6 className="pre-pageHeader text-start mb-3" id=''>Obstetrical History</h6>

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
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                Dysmenorrhea
                                            </label>
                                        </div>
                                    </div>  
                                    <div  className="row">
                                        <div className="form-check">
                                            <input  className="form-check-input" type="checkbox" value="" id="flexCheckDefault" ></input>
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Hydatidiform mole (within the last 12 months)
                                            </label>
                                        </div>
                                    </div>  
                                    <div  className="row">
                                        <div className="form-check">
                                            <input  className="form-check-input" type="checkbox" value="" id="flexCheckDefault" ></input>
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                            History of ectopic pregnancy
                                            </label>
                                        </div>
                                    </div>  
                                    <div  className="row">
                                        <div className="form-check">
                                            <input  className="form-check-input" type="checkbox" value="" id="flexCheckDefault" ></input>
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                Diabetes
                                            </label>
                                        </div>
                                    </div>  
                                    </div>
                                </div>

                            <hr className="hr" />  

                            {/* PHYSICAL EXAMINATION*/}
                            <h6 className="pre-pageHeader text-start mb-3" id=''>Physical Examination</h6>
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
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Normal
                                        </label>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Pale
                                        </label>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Yellowish
                                        </label>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Hematoma
                                        </label>
                                    </div>
                                </div>

                                <div  className="col-md-3 text-start">
                                    <label htmlFor="exampleFormControlTextarea1"  className="form-label fw-bold">Extremities</label>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Normal
                                        </label>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Edema
                                        </label>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Varicosities
                                        </label>
                                    </div>
                                </div>
                                
                                <div  className="col-md-3 text-start">
                                    <label htmlFor="exampleFormControlTextarea1"  className="form-label fw-bold">Conjunctiva</label>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Normal
                                        </label>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Pale
                                        </label>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Yellowish
                                        </label>
                                    </div>
                                </div>

                                <div  className="col-md-3 text-start">
                                    <label htmlFor="exampleFormControlTextarea1"  className="form-label fw-bold">Breast</label>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Normal
                                        </label>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Mass
                                        </label>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Nipple Discharge
                                        </label>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="row mb-5">
                                <div  className="col-md-3 text-start">
                                    <label htmlFor="exampleFormControlTextarea1"  className="form-label fw-bold">Neck</label>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Normal
                                        </label>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Neck Mas
                                        </label>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Enlarged Lymph Nodes
                                        </label>
                                    </div>
                                </div>

                                <div  className="col-md-3 text-start">
                                    <label htmlFor="exampleFormControlTextarea1"  className="form-label fw-bold">Abdomen</label>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Normal
                                        </label>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Abdominal Mass
                                        </label>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Varicosities
                                        </label>
                                    </div>
                                </div>
                                
                                <div  className="col-md-3 text-start">
                                    <label htmlFor="exampleFormControlTextarea1"  className="form-label fw-bold">Pelvic Examination</label>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Normal
                                        </label>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Mass
                                        </label>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Abnormal Discharge
                                        </label>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Cervical Abnormalities
                                        </label>            
                                        {/* <label>
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                Cervical Abnormalities
                                            </label>
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() => setChecked(!checked)} checked={checked}/>
                                                {
                                                    checked ? (
                                                    <input className="inputRequest formContentElement border border-0 border-bottom" name="token" type="checkbox"/> 
                                                    ): (<div></div>)
                                                }
                                        </label> */}
                                    </div>
                                    <div className="form-check mb-2 mx-4 ">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label className="form-check-label text-secondary" htmlFor="flexCheckDefault">
                                            Warts
                                        </label>
                                    </div>
                                    <div className="form-check mb-2 mx-4 ">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label className="form-check-label text-secondary" htmlFor="flexCheckDefault">
                                            Polyp or Cysts
                                        </label>
                                    </div>
                                    <div className="form-check mb-2 mx-4 ">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label className="form-check-label text-secondary" htmlFor="flexCheckDefault">
                                            Inflammation or Erosion
                                        </label>
                                    </div>
                                    <div className="form-check mb-2 mx-4 ">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label className="form-check-label text-secondary" htmlFor="flexCheckDefault">
                                            Bloody Discharge
                                        </label>
                                    </div>
                                </div>

                                <div  className="col-md-3 text-start">
                                    <label htmlFor="exampleFormControlTextarea1"  className="form-label fw-bold"></label>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Cervical Consistency
                                        </label>
                                    </div>
                                    <div className="form-check mb-2 mx-4 ">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label className="form-check-label text-secondary" htmlFor="flexCheckDefault">
                                            Firm
                                        </label>
                                    </div>
                                    <div className="form-check mb-2 mx-4 ">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label className="form-check-label text-secondary" htmlFor="flexCheckDefault">
                                        Soft
                                        </label>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Adnexal Mass / Tenderness
                                        </label>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Uterine Position
                                        </label>
                                    </div>
                                    <div className="form-check mb-2 mx-4 ">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label className="form-check-label text-secondary" htmlFor="flexCheckDefault">
                                        Mid
                                        </label>
                                    </div>
                                    <div className="form-check mb-2 mx-4 ">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label className="form-check-label text-secondary" htmlFor="flexCheckDefault">
                                        Anteflexed
                                        </label>
                                    </div>
                                    <div className="form-check mb-2 mx-4 ">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label className="form-check-label text-secondary" htmlFor="flexCheckDefault">
                                        Retroflexed
                                        </label>
                                    </div>
                                    <div className="form-check mb-2">
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Uterine Depth
                                        </label>
                                        <input className="form-control border border-0 border-bottom" type="text" placeholder="cm" aria-label="default input example"></input>
                                    </div>
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

export default AdditionalFamilyPlanning