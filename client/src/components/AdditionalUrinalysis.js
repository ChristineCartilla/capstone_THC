import axios from 'axios';
import React, { useState } from 'react'


const AdditionalUrinalysis = ({residentid, serviceProviderName}) => {
    const [color, setColor] = useState('');
    const [character, setCharacter] = useState('');
    const [reangentStrip, setReagentStrip] = useState('');
    const [glucosLevel, setGlucosLevel] = useState('');
    const [bilirubin, setBilirubin] = useState('');
    const [ketoneLevel, setKetoneLevel] = useState('');
    const [specificGravity, setSpecificGravity] = useState('');
    const [bloodLevel, setBloodLevel] = useState('');  
    const [phLevel, setPhLevel] = useState('');
    const [proteinLevel, setProteinLevel] = useState('');
    const [nitrate, setNitrate] = useState('');
    const [urobilinogenLevel, setUrobilinogenLevel] = useState('');
    const [leukocyteLevel, setLeukocyteLevel] = useState('');
    const [redBloodCellLevel, setRedBloodCellLevel] = useState('');
    const [pusLevel, setPusLevel] = useState('');
    const [calciumOxaletes, setCalciumOxaletes] = useState('');
    const [amorphousUrates, setAmorphousUrates] = useState('');
    const [uricAcid, setUricAcid] = useState('');
    const [amorphousPhosphates, setAmorphousPhosphates] = useState('');
    const [triplePhosphate, setTriplePhosphate] = useState('');
    const [squamousEpithelialCells, setSquamousEpithelialCells] = useState('');
    const [roundEpithelialCells, setRoundEpithelialCells] = useState('');
    const [bacteria, setBacteria] = useState('');
    const [mucusThreads, setMucusThreads] = useState('');
    const [yeastCells, setYeastCells] = useState('');
    const [remarks, setRemarks] = useState('');
    const serviceProvider = serviceProviderName;

    const addRecSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post
                (`/urinalysis/add/${residentid}`,
                    {
                        color, character, reangentStrip, glucosLevel, 
                        bilirubin, ketoneLevel, specificGravity, bloodLevel, 
                        phLevel, proteinLevel, urobilinogenLevel, leukocyteLevel, 
                        redBloodCellLevel, pusLevel, calciumOxaletes, amorphousUrates, 
                        uricAcid, amorphousPhosphates, triplePhosphate, nitrate, 
                        squamousEpithelialCells, roundEpithelialCells, bacteria, 
                        mucusThreads, yeastCells, remarks, serviceProvider
                    }
                );
                if(response.status === 200){
                    alert("Urinalysis Successfully Added");
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
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Urinalysis Form</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form className='px-3'>
                    <h6 className="pre-pageHeader text-start mb-4" id="">Urinalysis</h6>
                        <div className="row mb-4 ">
                            <div className="col text-start">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label mt-2">Performed by</label>
                                <input 
                                    type="text"  
                                    className="form-control" 
                                    id="exampleFormControlTextarea1" 
                                    style={{backgroundColor: "#CCE8DE"}}
                                    value = {serviceProvider}
                                    disabled/>
                            </div>
                            <div className="col text-start"> 
                            </div>    
                            <div className="col text-start">  
                            </div>
                        </div>

                    <hr className="hr" />

                    {/* Physicochemical Examination */}
                    <h6 className="pre-pageHeader text-start mb-3" id=''>Physicochemical Examination</h6>
                
                    <div className="row mb-4">
                        <div className="col text-start">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Color</label>
                            <input 
                                type="text" 
                                className="form-control Addition_Prenatal_textarea" 
                                id="exampleFormControlTextarea1" 
                                style={{backgroundColor: "#CCE8DE"}}
                                value = {color}
                                onChange={e => setColor(e.target.value)}/>
                        </div> 
                        <div className="col text-start">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Character</label>
                            <input 
                                type="text"  
                                className="form-control Addition_Prenatal_textarea" 
                                id="exampleFormControlTextarea1" 
                                style={{backgroundColor: "#CCE8DE"}}
                                value = {character}
                                onChange={e => setCharacter(e.target.value)}/>
                        </div>    

                        <div className="col text-start">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Reagent Strip Used:</label>
                            <input 
                                type="text"  
                                className="form-control Addition_Prenatal_textarea" 
                                id="exampleFormControlTextarea1" 
                                style={{backgroundColor: "#CCE8DE"}}
                                value = {reangentStrip}
                                onChange={e => setCharacter(e.target.value)}/>
                        </div>    
                       
                        <div className="col text-start">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Glucose</label>
                            <input 
                                type="number"  
                                className="form-control Addition_Prenatal_textarea" 
                                id="exampleFormControlTextarea1" 
                                style={{backgroundColor: "#CCE8DE"}}
                                value = {glucosLevel}
                                onChange={e => setGlucosLevel(e.target.value)}/>
                        </div>
                    </div>

                    <div className="row mb-4">

                        <div className="col text-start">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Bilirubin</label>
                            <input 
                                type="number"  
                                className="form-control Addition_Prenatal_textarea" 
                                id="exampleFormControlTextarea1" 
                                style={{backgroundColor: "#CCE8DE"}}
                                value = {bilirubin}
                                onChange={e => setBilirubin(e.target.value)}/>
                        </div> 
                       
                        <div className="col text-start">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Ketone</label>
                            <input 
                                type="number"  
                                className="form-control Addition_Prenatal_textarea" 
                                id="exampleFormControlTextarea1" 
                                style={{backgroundColor: "#CCE8DE"}}
                                value = {ketoneLevel}
                                onChange={e => setKetoneLevel(e.target.value)}/>
                        </div>    
                        <div className="col text-start">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Specific Gravity</label>
                            <input 
                                type="number"  
                                className="form-control Addition_Prenatal_textarea" 
                                id="exampleFormControlTextarea1" 
                                style={{backgroundColor: "#CCE8DE"}}
                                value = {specificGravity}
                                onChange={e => setSpecificGravity(e.target.value)}/>
                        </div>
                        <div className="col text-start">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Blood</label>
                            <input 
                                type="text"  
                                className="form-control Addition_Prenatal_textarea" 
                                id="exampleFormControlTextarea1" 
                                style={{backgroundColor: "#CCE8DE"}}
                                value = {bloodLevel}
                                onChange={e => setBloodLevel(e.target.value)}/>
                        </div>
                    </div>

                    
                    <div className="row mb-4">
                        
                        <div className="col text-start">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">PH Level</label>
                            <input 
                                type="number"  
                                className="form-control Addition_Prenatal_textarea" 
                                id="exampleFormControlTextarea1" 
                                style={{backgroundColor: "#CCE8DE"}}
                                value = {phLevel}
                                onChange={e => setPhLevel(e.target.value)}/>
                        </div> 

                        <div className="col text-start">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Protein</label>
                            <input 
                                type="number"  
                                className="form-control Addition_Prenatal_textarea" 
                                id="exampleFormControlTextarea1" 
                                style={{backgroundColor: "#CCE8DE"}}
                                value = {proteinLevel}  
                                onChange={e => setProteinLevel(e.target.value)}/>
                        </div>    
                        <div className="col text-start">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Urobilinogen</label>
                            <input 
                                type="number"  
                                className="form-control Addition_Prenatal_textarea" 
                                id="exampleFormControlTextarea1" 
                                style={{backgroundColor: "#CCE8DE"}}
                                value = {urobilinogenLevel}
                                onChange={e => setUrobilinogenLevel(e.target.value)}/>
                        </div>
                        <div className="col text-start">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Nitrate</label>
                            <input 
                                type="number"  
                                className="form-control Addition_Prenatal_textarea" 
                                id="exampleFormControlTextarea1" 
                                style={{backgroundColor: "#CCE8DE"}}
                                value = {nitrate}
                                onChange={e => setNitrate(e.target.value)} />
                        </div>
                    </div>

                    <div className='row mb-4'>
                        <div className="col text-start">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Leukocyte</label>
                            <input 
                                type="text"  
                                className="form-control Addition_Prenatal_textarea" 
                                id="exampleFormControlTextarea1" 
                                style={{backgroundColor: "#CCE8DE"}}
                                value ={leukocyteLevel} 
                                onChange={(e) => setLeukocyteLevel(e.target.value)}/>
                        </div> 
                        <div className="col text-start"></div>
                        <div className="col text-start"></div>
                        <div className="col text-start"></div>
                    </div>
                 
                    <hr className="hr" />

                    {/* Microscopic Examination */}
                    <h6 className="pre-pageHeader text-start mb-3" id=''>Microscopic Examination</h6>

                    <div className="row mb-4">
                        <div className="col text-start">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Red Blood Cells</label>
                            <input 
                                type="text"  
                                className="form-control Addition_Prenatal_textarea" 
                                id="exampleFormControlTextarea1" 
                                style={{backgroundColor: "#CCE8DE"}}
                                value = {redBloodCellLevel}
                                onChange={e => setRedBloodCellLevel(e.target.value)}/>
                        </div> 
                        <div className="col text-start">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Pus Cells</label>
                            <input 
                                type="text"  
                                className="form-control Addition_Prenatal_textarea" 
                                id="exampleFormControlTextarea1" 
                                style={{backgroundColor: "#CCE8DE"}}
                                value = {pusLevel}
                                onChange={e => setPusLevel(e.target.value)}/>
                        </div>    
                        <div className="col text-start">
                        </div>
                        <div className="col text-start">    
                        </div>
                    </div>

                    <hr className="hr" />

                    {/* Crystals */}
                    <h6 className="pre-pageHeader text-start mb-3" id=''>Crystals</h6>
                    <div className="row mb-4">
                        <div className="col text-start">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Calcium Oxalates</label>
                            <input 
                                type="text"  
                                className="form-control Addition_Prenatal_textarea" 
                                id="exampleFormControlTextarea1" 
                                style={{backgroundColor: "#CCE8DE"}}
                                value = {calciumOxaletes}
                                onChange={e => setCalciumOxaletes(e.target.value)}/>
                        </div> 
                        <div className="col text-start">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Amorphous Urates</label>
                            <input 
                                type="text"  
                                className="form-control Addition_Prenatal_textarea" 
                                id="exampleFormControlTextarea1" 
                                style={{backgroundColor: "#CCE8DE"}}
                                value = {amorphousUrates}
                                onChange={e => setAmorphousUrates(e.target.value)}/>
                        </div>    
                        <div className="col text-start">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Uric Acid</label>
                            <input 
                                type="text"  
                                className="form-control Addition_Prenatal_textarea" 
                                id="exampleFormControlTextarea1" 
                                style={{backgroundColor: "#CCE8DE"}}
                                value = {uricAcid}
                                onChange={e => setUricAcid(e.target.value)}/>
                        </div>
                        
                    </div>

                    <div className="row mb-4">
                        <div className="col text-start">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Triple Phosphates</label>
                            <input 
                                type="text"  
                                className="form-control Addition_Prenatal_textarea" 
                                id="exampleFormControlTextarea1" 
                                style={{backgroundColor: "#CCE8DE"}}
                                value = {triplePhosphate}
                                onChange={e => setTriplePhosphate(e.target.value)}/>
                        </div> 

                        <div className="col text-start">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Amorphous Phosphates</label>
                            <input 
                                type="text" 
                                className="form-control Addition_Prenatal_textarea" 
                                id="exampleFormControlTextarea1" 
                                style={{backgroundColor: "#CCE8DE"}}
                                value = {amorphousPhosphates}
                                onChange={e => setAmorphousPhosphates(e.target.value)}/>
                        </div>
                        
                       
                        <div className="col text-start">
                        </div>
                    </div>

                    <hr className="hr" />

                    {/* Miscellaneous Structures */}
                    <h6 className="pre-pageHeader text-start mb-3" id=''>Miscellaneous Structures</h6>

                    <div className="row mb-4">
                        <div className="col text-start">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Squamous Epithelial Cells</label>
                            <input 
                                type="text"  
                                className="form-control Addition_Prenatal_textarea" 
                                id="exampleFormControlTextarea1" 
                                style={{backgroundColor: "#CCE8DE"}}
                                value = {squamousEpithelialCells}
                                onChange={e => setSquamousEpithelialCells(e.target.value)}/>
                        </div> 
                        <div className="col text-start">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Round Epithelial Cells</label>
                            <input 
                                type="text"  
                                className="form-control Addition_Prenatal_textarea" 
                                id="exampleFormControlTextarea1" 
                                style={{backgroundColor: "#CCE8DE"}}
                                value = {roundEpithelialCells}
                                onChange={e => setRoundEpithelialCells(e.target.value)}/>
                        </div>    
                        <div className="col text-start">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Bacteria</label>
                            <input 
                                type="text"  
                                className="form-control Addition_Prenatal_textarea" 
                                id="exampleFormControlTextarea1" 
                                style={{backgroundColor: "#CCE8DE"}}
                                value = {bacteria}
                                onChange={e => setBacteria(e.target.value)}/>
                        </div>
                       
                    </div>

                    <div className="row mb-4">
                        <div className="col text-start">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Yeast Cells</label>
                            <input 
                                type="text"  
                                className="form-control Addition_Prenatal_textarea" 
                                id="exampleFormControlTextarea1" 
                                style={{backgroundColor: "#CCE8DE"}}
                                value = {yeastCells}
                                onChange={e => setYeastCells(e.target.value)}/>
                        </div> 

                        <div className="col text-start">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Mucus Threads</label>
                            <input type="text"  className="form-control Addition_Prenatal_textarea" 
                                id="exampleFormControlTextarea1" 
                                style={{backgroundColor: "#CCE8DE"}}
                                value = {mucusThreads}
                               onChange={e => setMucusThreads(e.target.value)}/>
                        </div>
                      
                       
                        <div className="col text-start">
                        </div>
                    </div>

                    <hr className="hr" />
                    
                    {/* Remarks */}
                    <h6 className="pre-pageHeader text-start mb-3" id=''>Remarks</h6>

                    <div className="mb-3 text-start">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Remarks </label>
                            <textarea 
                                className="form-control" 
                                id="exampleFormControlTextarea1" 
                                rows="4" 
                                style={{backgroundColor: "#CCE8DE"}}
                                value = {remarks}
                                onChange={e => setRemarks(e.target.value)}>
                            </textarea>
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

export default AdditionalUrinalysis