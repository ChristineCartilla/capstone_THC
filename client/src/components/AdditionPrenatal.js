import axios, { all } from 'axios';
import React, { useState } from 'react'

const AdditionPrenatal= ({residentid}) => {
    const [numGravida, setnumGravida] = useState('');
    const [numPara, setnumPara] = useState('');
    const [numFullterm, setnumFullterm] = useState('');
    const [numOfAbortion, setnumOfAbortion] = useState('');
    const [numPremature, setnumPremature] = useState('');
    const [numOfLivingChild, setnumOfLivingChild] = useState('');
    const [numBornAlive, setnumBornAlive] = useState('');
    const [numOfStillBirth, setStillBirths] = useState('');
    const [numberOfLargeBabies, setnumberOfLargeBabies] = useState('');
    const [lastMenstrualPeriod, setlastMenstrualPeriod] = useState('');
    const [dateOfLastDelivery, setdateOfLastDelivery] = useState('');
    const [typeOfLastDelivery, settypeOfLastDelivery] = useState('');
    const [menstrualFlow, setMensflow] = useState('');
    const [dysmenorrhea, setDysmenorrhea] = useState(false);
    const [hydatidiformMole , sethydatidiformMole] = useState(false);
    const [ectopicPregnancy, setectopicPregnancy] = useState(false);
    const [diabetes, setDiabetes] = useState(false);
    const [illness, setIllness] = useState('');
    const [allergy, setAllergy] = useState('');
    const [hospitalization, setHospitalization] = useState('');

    
    const validateInputs = () => {
        const numberInputs = [
            numGravida,
            numPara,
            numFullterm,
            numOfAbortion,
            numPremature,
            numOfLivingChild,
            numBornAlive,
            numOfStillBirth,
            numberOfLargeBabies
        ];
        console.log(numberInputs)
        return numberInputs.every(value => value === null || (value !== "" && !isNaN(value) && value >= 0));
    }
    
    const addRecSubmit = async (event) => {
      event.preventDefault();
      try{
         if(validateInputs()){
                const userId = sessionStorage.getItem("profileId");
                const fetchServiceProvider = await axios.get(`/profile/${userId}`);
                const attendedBy = fetchServiceProvider.data.first_name+ " " +fetchServiceProvider.data.last_name;
                const response = await axios.post(`/maternalhealth/add/${residentid}`,{numGravida, numPara, 
                    numFullterm, numOfAbortion, numPremature, numOfLivingChild, numBornAlive,
                    numOfStillBirth, numberOfLargeBabies, lastMenstrualPeriod, dateOfLastDelivery,
                    typeOfLastDelivery,menstrualFlow, illness, allergy, hospitalization,dysmenorrhea,attendedBy})
              
                
                        if(response.status === 200){
                            alert("Prenatal Record Successfully Added");
                            window.location.reload();
                        }
            }else{
                alert("Invalid inputs")
            }
        
      } catch (error){
        console.log(error)
      }
    }

  return (
    <div className="modal fade" id="PAddition" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
        <div className="modal-content">
           <div className="modal-header">
               <h1 className="modal-title fs-5" id="exampleModalLabel">Prenatal Form</h1>
               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div> 
            <div className="modal-body">
                <form >
                <h3  className="pre-pageHeader text-start" id="">Obstetrical History</h3>
                <div  className="row mb-5">
                    <div  className="col text-start">
                        <label htmlFor="exampleFormControlTextarea1"  className="form-label">Gravida</label>
                        <input type="number"   className="form-control " 
                            id="exampleFormControlTextarea1" 
                            value={numGravida !== null ? numGravida : ""}
                            onChange={e => setnumGravida(e.target.value !== "" ? parseInt(e.target.value) : "")}
                            style={{backgroundColor: "#CCE8DE"}}/>
                    
                    </div>
                    <div  className="col text-start">
                        <label htmlFor="exampleFormControlTextarea1"  className="form-label">Para</label>
                        <input type="number"   className="form-control " 
                            id="exampleFormControlTextarea1" 
                            value={numPara !== null ? numPara : ""}
                            onChange={e => setnumPara(e.target.value !== "" ? parseInt(e.target.value) : "")}
                            style={{backgroundColor: "#CCE8DE"}}/>
                    
                    </div>
                    <div  className="col text-start">
                        <label htmlFor="exampleFormControlTextarea1"  className="form-label">No. of Full Term</label>
                        <input type="number"   className="form-control " 
                            id="exampleFormControlTextarea1" 
                            value={numFullterm!== null ? numFullterm : ""}
                            onChange={e => setnumFullterm(e.target.value !== "" ? parseInt(e.target.value) : "")}                        
                            style={{backgroundColor: "#CCE8DE"}}/>
                    
                    </div>
                    <div  className="col text-start">
                        <label htmlFor="exampleFormControlTextarea1"  className="form-label">No. of Abortion</label>
                        <input type="number"   className="form-control " 
                            id="exampleFormControlTextarea1" 
                            value={numOfAbortion!== null ? numOfAbortion : ""}
                            onChange={e => setnumOfAbortion(e.target.value !== "" ? parseInt(e.target.value) : "")}
                            style={{backgroundColor: "#CCE8DE"}}/>
                    </div>
                </div>
                <div  className="row mb-5">
                    <div  className="col text-start">
                        <label htmlFor="exampleFormControlTextarea1"  className="form-label">No. of Premature</label>
                        <input type="number"   className="form-control " 
                            id="exampleFormControlTextarea1" 
                            value={numPremature!== null ? numPremature : ""}
                            onChange={e => setnumPremature(e.target.value !== "" ? parseInt(e.target.value) : "")}
                            style={{backgroundColor: "#CCE8DE"}}/>
                    
                    </div>
                    <div  className="col text-start">
                        <label htmlFor="exampleFormControlTextarea1"  className="form-label">No. of Child Born Alive</label>
                        <input type="number"   className="form-control " 
                            id="exampleFormControlTextarea1" 
                            value={numBornAlive!== null ? numBornAlive : ""}
                          onChange={e => setnumBornAlive(e.target.value !== "" ? parseInt(e.target.value) : "")}
                            style={{backgroundColor: "#CCE8DE"}}/>
                    
                    </div>
                    <div  className="col text-start">
                        <label htmlFor="exampleFormControlTextarea1"  className="form-label">No. of Living Children</label>
                        <input type="number"   className="form-control " 
                            id="exampleFormControlTextarea1" 
                            value={numOfLivingChild!== null ? numOfLivingChild : ""}
                            onChange={e => setnumOfLivingChild(e.target.value !== "" ? parseInt(e.target.value) : "")}
                            style={{backgroundColor: "#CCE8DE"}}/>
                    
                    </div>
                    <div  className="col text-start">
                        <label htmlFor="exampleFormControlTextarea1"  className="form-label">No. of Stillbirths</label>
                        <input type="number"   className="form-control " 
                            id="exampleFormControlTextarea1" 
                            value={numOfStillBirth !== null ? numOfStillBirth : ""}
                            onChange={e => setStillBirths(e.target.value !== "" ? parseInt(e.target.value) : "")}
                            style={{backgroundColor: "#CCE8DE"}}/>
                    </div>
                </div>
                <div  className="row mb-5">
                    <div  className="col text-start">
                        <label htmlFor="exampleFormControlTextarea1"  className="form-label">No. of Large Babies</label>
                        <input type="number"   className="form-control " 
                            id="exampleFormControlTextarea1" 
                            value={numberOfLargeBabies!== null ? numberOfLargeBabies : ""}
                            onChange={e => setnumberOfLargeBabies(e.target.value !== "" ? parseInt(e.target.value) : "")}
                            style={{backgroundColor: "#CCE8DE"}}/>
                    
                    </div>
                    <div  className="col text-start">
                        <label htmlFor="exampleFormControlTextarea1"  className="form-label">Last Menstural Period</label>
                        <input type="date"   className="form-control " 
                            id="exampleFormControlTextarea1" 
                            value={lastMenstrualPeriod}
                            onChange={e => setlastMenstrualPeriod(e.target.value)}
                            style={{backgroundColor: "#CCE8DE"}}/>
                    
                    </div>
                    <div  className="col text-start">
                        <label htmlFor="exampleFormControlTextarea1"  className="form-label">Date of Last Delivery</label>
                        <input type="date"   className="form-control " 
                            id="exampleFormControlTextarea1" 
                            value={dateOfLastDelivery}
                            onChange={e => setdateOfLastDelivery(e.target.value)}
                            style={{backgroundColor: "#CCE8DE"}}/>
                    
                    </div>
                    <div  className="col text-start">
                        <label htmlFor="exampleFormControlTextarea1"  className="form-label">Type of Last Delivery</label>
                        <select  className="form-select" value={typeOfLastDelivery} onChange={e => settypeOfLastDelivery(e.target.value)} style={{backgroundColor: "#CCE8DE"}}>
                            <option  value="#" style={{backgroundColor: "white"}}>Choose...</option>
                            <option value="Viginal"  style={{backgroundColor: "white"}}>Viginal</option>
                            <option value="Cesarean Section" style={{backgroundColor: "white"}}>Cesarean Section</option>
                        </select>
                        
                    </div>
                </div>
                <div  className="row mb-5">
                    <div  className="col text-start">
                        <label htmlFor="exampleFormControlTextarea1"  className="form-label">Menstrual Flow</label>
                        <select  className="form-select" value={menstrualFlow} onChange={e => setMensflow(e.target.value)} style={{backgroundColor: "#CCE8DE"}}>
                            <option value="#"  style={{backgroundColor: "white"}}>Choose...</option>
                            <option value= "scanty (1-2 pads everday)" style={{backgroundColor: "white"}}>scanty (1-2 pads everday)</option>
                            <option value="moderate (3-5 pads everyday)" style={{backgroundColor: "white"}}>moderate (3-5 pads everyday)</option>
                            <option value="heavy (>5 pads everyday)" style={{backgroundColor: "white"}}>heavy (&gt;5 pads everyday)</option>
                        </select>
                    </div>
                    <div  className="col text-start">
                        <div  className="row">
                            <div className="form-check">
                                <input  className="form-check-input" type="checkbox" checked={dysmenorrhea} onChange={e => setDysmenorrhea(e.target.checked)}  id="flexCheckDefault "></input>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Dysmenorrhea
                                </label>
                            </div>
                        </div>  
                        <div  className="row">
                            <div className="form-check">
                                <input  className="form-check-input" type="checkbox" checked={hydatidiformMole} onChange={e => sethydatidiformMole(e.target.checked)}  id="flexCheckDefault" ></input>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                Hydatidiform mole (within the last 12 months)
                                </label>
                            </div>
                        </div>  
                        <div  className="row">
                            <div className="form-check">
                                <input  className="form-check-input" type="checkbox" checked={ectopicPregnancy} onChange={e => setectopicPregnancy(e.target.checked)}  id="flexCheckDefault" ></input>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                History of ectopic pregnancy
                                </label>
                            </div>
                        </div>  
                        <div  className="row">
                            <div className="form-check">
                                <input  className="form-check-input" type="checkbox" checked={diabetes} onChange={e => setDiabetes(e.target.checked)}  id="flexCheckDefault" ></input>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Diabetes
                                </label>
                            </div>
                        </div>  
                    </div>
                </div>
                <hr className="hr" />
                    <h3  className="pre-pageHeader text-start" id="">Medical History</h3>
                    <div  className="row mb-5">
                        <div  className="col text-start">
                            <label htmlFor="exampleFormControlTextarea1"  className="form-label">Previous Illness</label>
                            <textarea 
                                className="form-control Addition_MedicalCheckup_textarea" 
                                id="exampleFormControlTextarea1" 
                                rows="3" 
                                value={illness} onChange={e => setIllness(e.target.value)} 
                                style={{backgroundColor: "#CCE8DE"}}>
                            </textarea>
                        </div>
                        <div  className="col text-start">
                            <label htmlFor="exampleFormControlTextarea1"  className="form-label">Allergy</label>
                            <textarea 
                                className="form-control Addition_MedicalCheckup_textarea" 
                                id="exampleFormControlTextarea1" 
                                rows="3" 
                                value={allergy} onChange={e => setAllergy(e.target.value)} 
                                style={{backgroundColor: "#CCE8DE"}}>
                            </textarea>
                        </div>
                        <div  className="col text-start">
                            <label htmlFor="exampleFormControlTextarea1"  className="form-label">Previous Hospitalization</label>
                            <textarea 
                                className="form-control Addition_MedicalCheckup_textarea" 
                                id="exampleFormControlTextarea1" 
                                rows="3" 
                                value={hospitalization} onChange={e => setHospitalization(e.target.value)} 
                                style={{backgroundColor: "#CCE8DE"}}>
                            </textarea>
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

export default AdditionPrenatal