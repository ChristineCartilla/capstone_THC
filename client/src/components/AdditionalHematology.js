import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AdditionalHematology = ({residentid, serviceProviderName}) => {
    const [hematocritLevel, setHematocritLevel] = useState("");
    const [hemoglobinMassConc, setHemoglobinMassConc] = useState("");
    const [erythrocyteNumConc, setErythrocyteNumConc] = useState("");
    const [leukocyteNumConc, setLeukocyteNumConc] = useState("");
    const [SegmenterNumFract, setSegmenterNumFract] = useState("");
    const [lymphocyteNumFract, setLymphocyteNumFract] = useState("");
    const [MonocyeNumFrac, setMonocyeNumFrac] = useState("");
    const [EosinophileNumFract, setEosinophileNumFract] = useState("");
    const [BasophileNumFract, setBasophileNumFract] = useState("");
    const [stab, setStab] = useState("");
    const [thrombocyteNumConc, setThrombocyteNumConc] = useState("");
    const [retlculocyteNumFrac, setReticulocyteNumFrac] = useState("");
    const [remarks, setRemarks] = useState("");
    const serviceProvider = serviceProviderName;

    const addRecSubmit = async (event) => {
        event.preventDefault();
       
        try{
                // const userId = sessionStorage.getItem("profileId");
                // const fetchServiceProvider = await axios.get(`/profile/${userId}`);
                // const serviceProvider = "Dr. "+ fetchServiceProvider.data.last_name;
                const response = await axios.post
                    (`/hematology/add/${residentid}`,
                        {hematocritLevel, hemoglobinMassConc, erythrocyteNumConc, leukocyteNumConc, 
                            SegmenterNumFract, lymphocyteNumFract, MonocyeNumFrac, EosinophileNumFract, 
                            BasophileNumFract, stab, thrombocyteNumConc, retlculocyteNumFrac, remarks, 
                            serviceProvider
                        }
                    );
            if(response.status === 200){
                alert("Hematology Successfully Added");
                window.location.reload();
            }
        } catch (error){
            console.log(error)
        }
    }

    return (
        <div className="modal fade" id="FPAddition" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Hematology Form</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form className='px-3'>
                            <div className="row mb-4 mt-4">
                                <div className="col text-start">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Performed by</label>
                                    <input 
                                        type="text"  
                                        className="form-control" 
                                        id="exampleFormControlTextarea1" 
                                        style={{backgroundColor: "#CCE8DE"}}
                                        value={serviceProvider}
                                        disabled/>
                                </div>
                                <div className="col text-start"> 
                                </div>    
                                <div className="col text-start">  
                                </div>
                            </div>

                            <div className="row mb-4">
                                <div className="col text-start">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Hematocrit </label>
                                    <input 
                                        type="text"  
                                        className="form-control mt-4" 
                                        id="exampleFormControlTextarea1" 
                                        style={{backgroundColor: "#CCE8DE"}}
                                        value={hematocritLevel}
                                        onChange={e => setHematocritLevel(e.target.value)}/>   
                                </div>
                                <div className="col text-start">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Hemoglobin Mass Concentration</label>
                                    <input 
                                        type="text"  
                                        className="form-control Addition_Prenatal_textarea" 
                                        id="exampleFormControlTextarea1" 
                                        style={{backgroundColor: "#CCE8DE"}}
                                        value={hemoglobinMassConc}
                                        onChange={e => setHemoglobinMassConc(e.target.value)}/>
                                </div>    
                                <div className="col text-start">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Erythrocyte Number Concentration</label>
                                    <input 
                                        type="text"  
                                        className="form-control Addition_Prenatal_textarea" 
                                        id="exampleFormControlTextarea1" 
                                        style={{backgroundColor: "#CCE8DE"}}
                                        value={erythrocyteNumConc}
                                        onChange={e => setErythrocyteNumConc(e.target.value)}/>
                                </div>
                                <div className="col text-start">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Leukocyte Number Concentration</label>
                                    <input 
                                        type="text"  
                                        className="form-control Addition_Prenatal_textarea" 
                                        id="exampleFormControlTextarea1" 
                                        style={{backgroundColor: "#CCE8DE"}}
                                        value={leukocyteNumConc}
                                        onChange={e => setLeukocyteNumConc(e.target.value)}/>
                                </div>
                            </div>

                            <div className="row mb-4">
                                <div className="col text-start">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Segmenter Number Fraction </label>
                                    <input 
                                        type="text"  
                                        className="form-control " 
                                        id="exampleFormControlTextarea1" 
                                        style={{backgroundColor: "#CCE8DE"}}
                                        value={SegmenterNumFract}
                                        onChange={e => setSegmenterNumFract(e.target.value)}/>
                                </div>
                                <div className="col text-start">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Lymphocyte Number Fraction</label>
                                    <input 
                                        type="text"  
                                        className="form-control Addition_Prenatal_textarea" 
                                        id="exampleFormControlTextarea1" 
                                        style={{backgroundColor: "#CCE8DE"}}
                                        value={lymphocyteNumFract}
                                        onChange={e => setLymphocyteNumFract(e.target.value)}/>
                                </div> 
                                <div className="col text-start">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Monocyte Number Fraction</label>
                                    <input 
                                        type="text"  
                                        className="form-control Addition_Prenatal_textarea" 
                                        id="exampleFormControlTextarea1" 
                                        style={{backgroundColor: "#CCE8DE"}}
                                        value={MonocyeNumFrac}
                                        onChange={e => setMonocyeNumFrac(e.target.value)}/>
                                </div>
                                <div className="col text-start">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Basophile Number Fraction</label>
                                    <input 
                                        type="text"  
                                        className="form-control Addition_Prenatal_textarea" 
                                        id="exampleFormControlTextarea1" 
                                        style={{backgroundColor: "#CCE8DE"}}
                                        value={BasophileNumFract}
                                        onChange={e => setBasophileNumFract(e.target.value)}/>
                                </div>
                                
                            </div>

                            <div className="row mb-4">
                                <div className="col text-start">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Eosinophile Number Fraction </label>
                                    <input 
                                        type="text"  
                                        className="form-control " 
                                        id="exampleFormControlTextarea1" 
                                        style={{backgroundColor: "#CCE8DE"}}
                                        value={EosinophileNumFract}
                                        onChange={e => setEosinophileNumFract(e.target.value)}/>
                                </div>
                                <div className="col text-start">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Stab</label>
                                    <input 
                                        type="text"  
                                        className="form-control Addition_Prenatal_textarea mt-4" 
                                        id="exampleFormControlTextarea1" 
                                        style={{backgroundColor: "#CCE8DE"}}
                                        value={stab}
                                        onChange={e => setStab(e.target.value)}/>
                                </div>
                                <div className="col text-start">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Thrombocyte Number Concentration </label>
                                    <input 
                                        type="text"  
                                        className="form-control" 
                                        id="exampleFormControlTextarea1" 
                                        style={{backgroundColor: "#CCE8DE"}}
                                        value={thrombocyteNumConc}
                                        onChange={e => setThrombocyteNumConc(e.target.value)}/>
                                </div>
                                <div className="col text-start">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Reticulocyte  Number Fraction</label>
                                    <input 
                                        type="text"  
                                        className="form-control Addition_Prenatal_textarea" 
                                        id="exampleFormControlTextarea1" 
                                        style={{backgroundColor: "#CCE8DE"}}
                                        value={retlculocyteNumFrac}
                                        onChange={e => setReticulocyteNumFrac(e.target.value)}/>
                                </div> 
                            </div>
                            
                        
                            <div className="mb-3 text-start">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Remarks </label>
                                <textarea 
                                    className="form-control" 
                                    id="exampleFormControlTextarea1" 
                                    rows="4" 
                                    style={{backgroundColor: "#CCE8DE"}}
                                    value={remarks}
                                    onChange={e => setRemarks(e.target.value)}></textarea>
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

export default AdditionalHematology