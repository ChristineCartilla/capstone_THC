import React, { useState } from 'react';
import axios from 'axios';

const AdditionalFamilyPlanning = ({residentid}) => {
    const [checked, setChecked] = useState(false);
    const [pe_skin, setPe_skin] = useState('');
    const [pe_conjunctiva, setPe_conjunctiva] = useState('');
    const [pe_neck, setPe_neck] = useState('');
    const [pe_breast, setPe_breast] = useState('');
    const [pe_abdomen, setPe_abdomen] = useState('');
    const [pe_extremities, setPe_extremities] = useState('');
    const [pe_pelvicExam, setPe_pelvicExam] = useState('');
    const [numGravida, setNumGravida] = useState('');
    const [numPara, setNumPara] = useState('');
    const [numFullTerm, setNumFullTerm] = useState('');
    const [numOfAbortion, setNumOfAbortion] = useState('');
    const [numPremature, setNumPremature] = useState('');
    const [numBornAlive, setNumBornAlive] = useState('');
    const [numOfLivingChild, setNumOfLivingChild] = useState('');
    const [numOfStillBirth, setNumOfStillBirth] = useState('');
    const [numOfLargeBabies, setNumOfLargeBabies] = useState('');
    const [lastMenstrualPeriod, setLastMenstrualPeriod] = useState('');
    const [dateOfLastDelivery, setDateOfLastDelivery] = useState('');
    const [typeOfLastDelivery, setTypeOfLastDelivery] = useState('');
    const [menstrualFlow, setMenstrualFlow] = useState('');
    const [dysmenorrhea, setDysmenorrhea] = useState(false);   
    const [hydatidiformMole, setHydatidiformMole] = useState(false); 
    const [ectopicPregnancy, setEctopicPregnancy] = useState(false); 
    const [diabetes, setDiabetes] = useState(false); 
    
    const [nameSpouse, setNameSpouse] = useState('');
    const [spouseDoB, setSpouseDoB] = useState('');
    const [spouseAge, setSpouseAge] = useState('');
    const [spouseOccupation, setSpouseOccupation] = useState('');
    const [noLivingChild, setNoLivingChild] = useState('');
    const [planAddChild , setPlanAddChild] = useState(false);
    const [aveMonthIncome, setAveMonthIncome] = useState('');
    

    const [checkboxValues, setCheckboxValues] = useState([]);

    const handleCheckboxChange = (event) => {
        const value = event.target.value;
        if (event.target.checked) {
          setCheckboxValues([...checkboxValues, value]);
        } else {
          setCheckboxValues(checkboxValues.filter((val) => val !== value));
        }
      };

    const addRecSubmit = async (event) => {
        event.preventDefault();

        try {
            const combinedString = checkboxValues.join(', ');
            const response = await axios.post
            (`/familyplanning/add/${residentid}`,
                {
                    pe_skin, pe_conjunctiva, pe_neck, pe_breast, 
                    pe_abdomen, pe_extremities, pe_pelvicExam,
                    numGravida, numPara, numFullTerm, numOfAbortion,
                     numPremature, numBornAlive, numOfLivingChild, 
                     numOfStillBirth, numOfLargeBabies, lastMenstrualPeriod, 
                     typeOfLastDelivery, menstrualFlow, dysmenorrhea, 
                     hydatidiformMole, ectopicPregnancy, diabetes, illness:combinedString,
                     nameSpouse, spouseDoB, spouseAge, spouseOccupation, 
                     noLivingChild, planAddChild, aveMonthIncome 
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
                                        <input 
                                            type="text"   
                                            className="form-control" 
                                            id="exampleFormControlTextarea1" 
                                            style={{backgroundColor: "#CCE8DE"}}
                                            value={nameSpouse}
                                            onChange={(event) => setNameSpouse(event.target.value)}/>
                                    </div>
                                    <div  className="col-md-3 text-start">
                                        <label htmlFor="exampleFormControlTextarea1"  className="form-label ">Date of Birth</label>
                                        <input 
                                            type="date"   
                                            className="form-control " 
                                            id="exampleFormControlTextarea1" 
                                            style={{backgroundColor: "#CCE8DE"}}
                                            value={spouseDoB}
                                            onChange={(event) => setSpouseDoB(event.target.value)}/>
                                    </div>
                                    <div  className="col-md-3 text-start">
                                        <label htmlFor="exampleFormControlTextarea1"  className="form-label ">Age</label>
                                        <input 
                                            type="text"   
                                            className="form-control " 
                                            id="exampleFormControlTextarea1" 
                                            style={{backgroundColor: "#CCE8DE"}}
                                            value={spouseAge}
                                            onChange={(event) => setSpouseAge(event.target.value)}/>
                                    </div>
                                    <div  className="col-md-3 text-start">
                                        <label htmlFor="exampleFormControlTextarea1"  className="form-label ">Occupation</label>
                                        <input 
                                            type="text"   
                                            className="form-control " 
                                            id="exampleFormControlTextarea1" 
                                            style={{backgroundColor: "#CCE8DE"}}
                                            value={spouseOccupation}
                                            onChange={(event) => setSpouseOccupation(event.target.value)}/>
                                    </div>
                                </div>

                                <div  className="row mb-5">
                                    <div  className="col text-start">
                                        <label htmlFor="exampleFormControlTextarea1"  className="form-label ">No. of Living Children</label>
                                        <input 
                                            type="text"  
                                            className="form-control" 
                                            id="exampleFormControlTextarea1" 
                                            style={{backgroundColor: "#CCE8DE"}}
                                            value={noLivingChild}
                                            onChange={(event) => setNoLivingChild(event.target.value)}/>
                                    </div>
                                    <div  className="col text-start">
                                        <label htmlFor="exampleFormControlTextarea1"  className="form-label ">Plan to have more children?</label>
                                            <div className='text-center'>
                                            <div className="form-check form-check-inline">
                                                <input 
                                                    className="form-check-input"
                                                    type="radio" 
                                                    name="inlineRadioOptions" 
                                                    id="inlineRadio1" 
                                                    value={planAddChild ? "Yes" : "No"}
                                                    onChange={(event) => setPlanAddChild(event.target.value)}
                                                    />
                                                <label className="form-check-label" htmlFor="inlineRadio1">Yes</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input 
                                                    className="form-check-input" 
                                                    type="radio" 
                                                    name="inlineRadioOptions" 
                                                    id="inlineRadio2" 
                                                    value="2"
                                                    onChange={(event) => setPlanAddChild(event.target.value)}
                                                    />
                                                <label className="form-check-label" htmlFor="inlineRadio2">No</label>
                                            </div>
                                            </div>
                                    </div>
                                    <div  className="col text-start">
                                        <label htmlFor="exampleFormControlTextarea1"  className="form-label">Average Monthly Income</label>
                                        <input 
                                            type="text"   
                                            className="form-control " 
                                            id="exampleFormControlTextarea1" 
                                            style={{backgroundColor: "#CCE8DE"}}
                                            value={aveMonthIncome}
                                            onChange={(event) => setAveMonthIncome(event.target.value)}/>   
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
                                                <input 
                                                    className="form-check-input" 
                                                    type="checkbox" 
                                                    value="Severe headaches Migraine" 
                                                    onChange={handleCheckboxChange} 
                                                    id="flexCheckDefault"/>
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    Severe headaches / Migraine
                                                </label>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input 
                                                    className="form-check-input" 
                                                    type="checkbox" 
                                                    value="History of Stroke" 
                                                    onChange={handleCheckboxChange} 
                                                    id="flexCheckDefault"/>
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    History of Stroke / Heart attack / Hypertensions
                                                </label>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input 
                                                    className="form-check-input" 
                                                    type="checkbox" 
                                                    value="Non-traumatic Hematoma" 
                                                  
                                                    id="flexCheckDefault"/>
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    Non-traumatic Hematoma / Frequent bruising or gum bleeding
                                                </label>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input 
                                                    className="form-check-input"
                                                    type="checkbox" 
                                                    value="Breast Mass" 
                                                    onChange={handleCheckboxChange} 
                                                    id="flexCheckDefault"/>
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    Current or history of breast cancer / breast mass
                                                </label>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input 
                                                    className="form-check-input" 
                                                    type="checkbox" 
                                                    value="Severe chest pain" 
                                                    onChange={handleCheckboxChange}
                                                    id="flexCheckDefault"/>
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    Severe chest pain
                                                </label>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input 
                                                    className="form-check-input" 
                                                    type="checkbox" 
                                                    value="Cough for more than 14 days" 
                                                    onChange={handleCheckboxChange}
                                                    id="flexCheckDefault"/>
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
                                                    <input 
                                                        className="form-check-input"
                                                         type="checkbox" 
                                                         value="Jaundice" 
                                                         onChange={handleCheckboxChange}
                                                         id="flexCheckDefault"/>
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Jaundice
                                                    </label>
                                                </div>
                                                <div className="form-check mb-2">
                                                    <input 
                                                        className="form-check-input"
                                                         type="checkbox" 
                                                         value="Vaginal Bleeding" 
                                                         onChange={handleCheckboxChange}
                                                         id="flexCheckDefault"/>
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Unexplained vaginal bleeding
                                                    </label>
                                                </div>
                                                <div className="form-check mb-2">
                                                    <input 
                                                        className="form-check-input" 
                                                        type="checkbox" 
                                                        value="Vaginal Discharge" 
                                                        onChange={handleCheckboxChange}
                                                        id="flexCheckDefault"/>
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Abnormal vaginal discharge
                                                    </label>
                                                </div>
                                                <div className="form-check mb-2">
                                                    <input 
                                                        className="form-check-input" 
                                                        type="checkbox" 
                                                        value="Intake of phenobarbital" 
                                                        onChange={handleCheckboxChange}
                                                        id="flexCheckDefault"/>
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Intake of phenobarbital (anti-seizure) or rifampicin (anti-TB)
                                                    </label>
                                                </div>
                                                <div className="form-check mb-2">
                                                    <input 
                                                        className="form-check-input" 
                                                        type="checkbox" 
                                                        value="Smoker"
                                                        onChange={handleCheckboxChange}
                                                        id="flexCheckDefault"/>
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
                                        <input 
                                            type="text"  
                                            className="form-control Addition_Prenatal_textarea" 
                                            id="exampleFormControlTextarea1" 
                                            style={{backgroundColor: "#CCE8DE"}}
                                            onChange={(event) => setNumGravida(event.target.value)}
                                            value={numGravida}
                                        />
                                    </div>
                                    <div  className="col text-start">
                                        <label htmlFor="exampleFormControlTextarea1"  className="form-label">Para</label>
                                        <input 
                                            type="text"   
                                            className="form-control Addition_Prenatal_textarea" 
                                            id="exampleFormControlTextarea1" 
                                            style={{backgroundColor: "#CCE8DE"}}
                                            onChange={(event) => setNumPara(event.target.value)}
                                            value={numPara}
                                        />
                                    </div>
                                    <div  className="col text-start">
                                        <label htmlFor="exampleFormControlTextarea1"  className="form-label">No. of Full Term</label>
                                        <input 
                                            type="text"   
                                            className="form-control Addition_Prenatal_textarea" 
                                            id="exampleFormControlTextarea1" 
                                            style={{backgroundColor: "#CCE8DE"}}
                                            onChange={(event) => setNumFullTerm(event.target.value)}
                                            value={numFullTerm}/>
                                    </div>
                                    <div  className="col text-start">
                                        <label htmlFor="exampleFormControlTextarea1"  className="form-label">No. of Abortions</label>
                                        <input 
                                            type="text"  
                                            className="form-control Addition_Prenatal_textarea" 
                                            id="exampleFormControlTextarea1" 
                                            style={{backgroundColor: "#CCE8DE"}}
                                            onChange={(event) => setNumOfAbortion(event.target.value)}
                                            value={numOfAbortion}
                                        />
                                    </div>
                                </div>

                                <div  className="row mb-5">
                                    <div  className="col text-start">
                                        <label htmlFor="exampleFormControlTextarea1"  className="form-label">No. of Premature</label>
                                        <input 
                                            type="text"   
                                            className="form-control Addition_Prenatal_textarea" 
                                            id="exampleFormControlTextarea1" 
                                            style={{backgroundColor: "#CCE8DE"}}
                                            onChange={(event) => setNumPremature(event.target.value)}
                                            value={numPremature}
                                        />
                                    </div>
                                    <div  className="col text-start">
                                        <label htmlFor="exampleFormControlTextarea1"  className="form-label">No. of Child Born Alive</label>
                                        <input 
                                            type="text"  
                                            className="form-control Addition_Prenatal_textarea" 
                                            id="exampleFormControlTextarea1" 
                                            style={{backgroundColor: "#CCE8DE"}}
                                            onChange={(event) => setNumBornAlive(event.target.value)}
                                            value={numBornAlive}
                                        />  
                                    </div>
                                    <div  className="col text-start">
                                        <label htmlFor="exampleFormControlTextarea1"  className="form-label">No. of Living Children</label>
                                        <input 
                                            type="text"   
                                            className="form-control Addition_Prenatal_textarea" 
                                            id="exampleFormControlTextarea1" 
                                            style={{backgroundColor: "#CCE8DE"}}
                                            onChange={(event) => setNumOfLivingChild(event.target.value)}
                                            value={numOfLivingChild}
                                        />
                                    </div>
                                    <div  className="col text-start">
                                        <label htmlFor="exampleFormControlTextarea1"  className="form-label">No. of Stillbirths</label>
                                        <input 
                                            type="text"   
                                            className="form-control Addition_Prenatal_textarea" 
                                            id="exampleFormControlTextarea1" 
                                            style={{backgroundColor: "#CCE8DE"}}
                                            onChange={(event) => setNumOfStillBirth(event.target.value)}    
                                            value={numOfStillBirth}
                                        />  
                                    </div>
                                </div>
                                <div  className="row mb-5">
                                    <div  className="col text-start">
                                        <label htmlFor="exampleFormControlTextarea1"  className="form-label">No. of Large Babies</label>
                                        <input 
                                            type="text"   
                                            className="form-control Addition_Prenatal_textarea" 
                                            id="exampleFormControlTextarea1" 
                                            style={{backgroundColor: "#CCE8DE"}}
                                            onChange={(event) => setNumOfLargeBabies(event.target.value)}
                                            value={numOfLargeBabies}
                                        />
                                    </div>
                                    <div  className="col text-start">
                                        <label htmlFor="exampleFormControlTextarea1"  className="form-label">LMP</label>
                                        <input 
                                            type="date"   
                                            className="form-control Addition_Prenatal_textarea" 
                                            id="exampleFormControlTextarea1" 
                                            style={{backgroundColor: "#CCE8DE"}}
                                            onChange={(event) => setLastMenstrualPeriod(event.target.value)}
                                            value={lastMenstrualPeriod}
                                        />
                                    </div>
                                    <div  className="col text-start">
                                        <label htmlFor="exampleFormControlTextarea1"  className="form-label">Date of Last Delivery</label>
                                        <input 
                                            type="date"   
                                            className="form-control Addition_Prenatal_textarea" 
                                            id="exampleFormControlTextarea1" 
                                            style={{backgroundColor: "#CCE8DE"}}
                                            onChange={(event) => setDateOfLastDelivery(event.target.value)}
                                            value={dateOfLastDelivery}
                                        />
                                    </div>
                                    <div  className="col text-start">
                                        <label htmlFor="exampleFormControlTextarea1"  className="form-label">Type of Last Delivery</label>
                                        <select  className="form-select"  style={{backgroundColor: "#CCE8DE"}}
                              
                                            onChange={(event) => setTypeOfLastDelivery(event.target.value)}
                                        >
                                            <option value="#"  style={{backgroundColor: "white"}}>Choose...</option>
                                            <option value="Viginal"  style={{backgroundColor: "white"}}>Viginal</option>
                                            <option value="Cesarean"  style={{backgroundColor: "white"}}>Cesarean Section</option>
                                        </select>
                                    </div>
                                </div>
                                <div  className="row mb-5">
                                    <div  className="col text-start">
                                        <label htmlFor="exampleFormControlTextarea1"  className="form-label">Menstrual Flow</label>
                                        <select  className="form-select"  style={{backgroundColor: "#CCE8DE"}} 
                                            onChange={(event) => setMenstrualFlow(event.target.value)}  
                                            
                                        >
                                            <option value="#"  style={{backgroundColor: "white"}}>Choose...</option>
                                            <option value="Scanty"  style={{backgroundColor: "white"}}>scanty (1-2 pads everday)</option>
                                            <option value="Moderate"  style={{backgroundColor: "white"}}>moderate (3-5 pads everyday)</option>
                                            <option value="heavy"  style={{backgroundColor: "white"}}>heavy (more than 5 pads everyday)</option>
                                        </select>
                                    </div>
                                    <div  className="col text-start">
                                    <div  className="row">
                                        <div className="form-check">
                                            <input  
                                                className="form-check-input" 
                                                type="checkbox" 
                                                id="flexCheckDefault "
                                                value = {dysmenorrhea}
                                                onChange={(event) => setDysmenorrhea(event.target.value)}>
                                            </input>
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                Dysmenorrhea
                                            </label>
                                        </div>
                                    </div>  
                                    <div  className="row">
                                        <div className="form-check">
                                            <input  
                                                className="form-check-input" 
                                                type="checkbox" 
                                                id="flexCheckDefault" 
                                                value = {hydatidiformMole}
                                                onChange={(event) => setHydatidiformMole(event.target.value)}>
                                                </input>
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Hydatidiform mole (within the last 12 months)
                                            </label>
                                        </div>
                                    </div>  
                                    <div  className="row">
                                        <div className="form-check">
                                            <input  
                                                className="form-check-input" 
                                                type="checkbox" 
                                                id="flexCheckDefault" 
                                                value = {ectopicPregnancy}
                                                onChange={(event) => setEctopicPregnancy(event.target.value)}>
                                                </input>
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                            History of ectopic pregnancy
                                            </label>
                                        </div>
                                    </div>  
                                    <div  className="row">
                                        <div className="form-check">
                                            <input  
                                                className="form-check-input" 
                                                type="checkbox" 
                                                id="flexCheckDefault" 
                                                value = {diabetes}
                                                onChange={(event) => setDiabetes(event.target.value)}>
                                                </input>
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
                                        <input 
                                            className="form-check-input" 
                                            type="radio" 
                                            id="skinNormal" 
                                            name="inlineRadioOptionsSkin"
                                            value = "Normal"
                                            onChange={(event) => setPe_skin(event.target.value)}/>
                                        <label className="form-check-label" htmlFor="skinNormal">
                                            Normal
                                        </label>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input 
                                            className="form-check-input" 
                                            type="radio"   
                                            id="skinPale" 
                                            name="inlineRadioOptionsSkin"
                                            value = "Pale"
                                            onChange={(event) => setPe_skin(event.target.value)}/>
                                        <label className="form-check-label" htmlFor="skinPale">
                                            Pale
                                        </label>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input 
                                            className="form-check-input" 
                                            type="radio" 
                                            id="skinYellow" 
                                            name="inlineRadioOptionsSkin"
                                            value = "Yellowish"
                                            onChange={(event) => setPe_skin(event.target.value)}/>
                                        <label className="form-check-label" htmlFor="skinYellow">
                                            Yellowish
                                        </label>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input 
                                            className="form-check-input" 
                                            type="radio" 
                                            id="skinHematoma" 
                                            name="inlineRadioOptionsSkin"
                                            value = "Hematoma"
                                            onChange={(event) => setPe_skin(event.target.value)}/>
                                        <label className="form-check-label" htmlFor="skinHematoma">
                                            Hematoma
                                        </label>
                                    </div>
                                </div>

                                <div  className="col-md-3 text-start">
                                    <label htmlFor="exampleFormControlTextarea1"  className="form-label fw-bold">Extremities</label>
                                    <div className="form-check mb-2">
                                        <input 
                                            className="form-check-input" 
                                            type="radio" 
                                            id="exNormal" 
                                            name="inlineRadioOptionsEx"
                                            value = "Normal"
                                            onChange={(event) => setPe_extremities(event.target.value)}/>
                                        <label className="form-check-label" htmlFor="exNormal">
                                            Normal
                                        </label>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input 
                                            className="form-check-input" 
                                            type="radio" 
                                            id="exEdema" 
                                            name="inlineRadioOptionsEx"
                                            value = "Edema"
                                            onChange={(event) => setPe_extremities(event.target.value)}/>
                                        <label className="form-check-label" htmlFor="exEdema">
                                            Edema
                                        </label>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input 
                                            className="form-check-input" 
                                            type="radio" 
                                            id="exVaricosities" 
                                            name="inlineRadioOptionsEx"
                                            value = "Varicosities"
                                            onChange={(event) => setPe_extremities(event.target.value)}/>
                                        <label className="form-check-label" htmlFor="exVaricosities">
                                            Varicosities
                                        </label>
                                    </div>
                                </div>
                                
                                <div  className="col-md-3 text-start">
                                    <label htmlFor="exampleFormControlTextarea1"  className="form-label fw-bold">Conjunctiva</label>
                                    <div className="form-check mb-2">
                                        <input 
                                            className="form-check-input" 
                                            type="radio" 
                                            id="conNormal" 
                                            name="inlineRadioOptionsCon"
                                            value = "Normal"
                                            onChange={(event) => setPe_conjunctiva(event.target.value)}/>
                                        <label className="form-check-label" htmlFor="conNormal">
                                            Normal
                                        </label>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input 
                                            className="form-check-input" 
                                            type="radio"  
                                            id="conPale" 
                                            name="inlineRadioOptionsCon"
                                            value = "Pale"
                                            onChange={(event) => setPe_conjunctiva(event.target.value)}/>
                                        <label className="form-check-label" htmlFor="conPale">
                                            Pale
                                        </label>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input 
                                            className="form-check-input" 
                                            type="radio" 
                                            id="conYellowish" 
                                            name="inlineRadioOptionsCon"
                                            value = "Yellowish"
                                            onChange={(event) => setPe_conjunctiva(event.target.value)}/>
                                        <label className="form-check-label" htmlFor="conYellowish">
                                            Yellowish
                                        </label>
                                    </div>
                                </div>

                                <div  className="col-md-3 text-start">
                                    <label htmlFor="exampleFormControlTextarea1"  className="form-label fw-bold">Breast</label>
                                    <div className="form-check mb-2">
                                        <input 
                                            className="form-check-input" 
                                            type="radio" 
                                            id="breastNormal" 
                                            name="inlineRadioOptionsBreast"
                                            value = "Normal"
                                            onChange={(event) => setPe_breast(event.target.value)}/>
                                        <label className="form-check-label" htmlFor="breastNormal">
                                            Normal
                                        </label>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input 
                                            className="form-check-input" 
                                            type="radio" 
                                            id="breastMass"
                                            name="inlineRadioOptionsBreast"
                                            value = "Mass"
                                            onChange={(event) => setPe_breast(event.target.value)}/>
                                        <label className="form-check-label" htmlFor="breastNormal">
                                            Mass
                                        </label>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input 
                                            className="form-check-input" 
                                            type="radio" 
                                            id="breastND"
                                            name="inlineRadioOptionsBreastv"
                                            value = "Nipple Discharge"
                                            onChange={(event) => setPe_breast(event.target.value)}/>
                                        <label className="form-check-label" htmlFor="breastNormal">
                                            Nipple Discharge
                                        </label>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="row mb-5">
                                <div  className="col-md-3 text-start">
                                    <label htmlFor="exampleFormControlTextarea1"  className="form-label fw-bold">Neck</label>
                                    <div className="form-check mb-2">
                                        <input 
                                            className="form-check-input" 
                                            type="radio" 
                                            id="neckNormal" 
                                            name="inlineRadioOptionsNeck"
                                            value = "Normal"
                                            onChange={(event) => setPe_neck(event.target.value)}/>
                                        <label className="form-check-label" htmlFor="neckNormal">
                                            Normal
                                        </label>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input 
                                            className="form-check-input" 
                                            type="radio"
                                            id="neckNM" 
                                            name="inlineRadioOptionsNeck"
                                            value = "Neck Mass"
                                            onChange={(event) => setPe_neck(event.target.value)}/>
                                        <label className="form-check-label" htmlFor="neckNM">
                                            Neck Mass
                                        </label>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input 
                                            className="form-check-input" 
                                            type="radio" 
                                            id="neckELN" 
                                            name="inlineRadioOptionsNeck"
                                            value = "Enlarged Lymph Nodes"
                                            onChange={(event) => setPe_neck(event.target.value)}/>
                                        <label className="form-check-label" htmlFor="neckELN">
                                            Enlarged Lymph Nodes
                                        </label>
                                    </div>
                                </div>

                                <div  className="col-md-3 text-start">
                                    <label htmlFor="exampleFormControlTextarea1"  className="form-label fw-bold">Abdomen</label>
                                    <div className="form-check mb-2">
                                        <input 
                                            className="form-check-input" 
                                            type="radio"
                                            id="abdomenNormal" 
                                            name="inlineRadioOptionsAbdomen"
                                            value = "Normal"
                                            onChange={(event) => setPe_abdomen(event.target.value)}/>
                                        <label className="form-check-label" htmlFor="abdomenNormal">
                                            Normal
                                        </label>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input 
                                            className="form-check-input" 
                                            type="radio" 
                                            id="abdomenAM"
                                            name="inlineRadioOptionsAbdomen"
                                            value = "Abdominal Mass"
                                            onChange={(event) => setPe_abdomen(event.target.value)}/>
                                        <label className="form-check-label" htmlFor="abdomenAM">
                                            Abdominal Mass
                                        </label>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input 
                                            className="form-check-input" 
                                            type="radio" 
                                            id="abdomenVaricosities" 
                                            name="inlineRadioOptionsAbdomen"
                                            value = "Varicosities"
                                            onChange={(event) => setPe_abdomen(event.target.value)}/>
                                        <label className="form-check-label" htmlFor="abdomenVaricosities">
                                            Varicosities
                                        </label>
                                    </div>
                                </div>
                                
                                <div  className="col-md-3 text-start">
                                    <label htmlFor="exampleFormControlTextarea1"  className="form-label fw-bold">Pelvic Examination</label>
                                    <div className="form-check mb-2">
                                        <input 
                                            className="form-check-input" 
                                            type="radio" 
                                            id="peNormal" 
                                            name="inlineRadioOptionsPE"
                                            value = "Normal"
                                            onChange={(event) => setPe_pelvicExam(event.target.value)}/>
                                        <label className="form-check-label" htmlFor="peNormal">
                                            Normal
                                        </label>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input 
                                            className="form-check-input" 
                                            type="radio" 
                                            id="peMass" 
                                            name="inlineRadioOptionsPE"
                                            value = "Mass"
                                            onChange={(event) => setPe_pelvicExam(event.target.value)}/>
                                        <label className="form-check-label" htmlFor="peMass">
                                            Mass
                                        </label>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input 
                                            className="form-check-input" 
                                            type="radio" 
                                            id="peAD" 
                                            name="inlineRadioOptionsPE"
                                            value = "Abnormal Discharge"
                                            onChange={(event) => setPe_pelvicExam(event.target.value)}/>
                                        <label className="form-check-label" htmlFor="peAD">
                                            Abnormal Discharge
                                        </label>
                                    </div>
                                   
                                </div>
                            </div>
                            
                            </form>
                        </div>
                        
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="sp2-addMCButton" onClick={addRecSubmit}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
          )

}

export default AdditionalFamilyPlanning