import axios from 'axios'
import React, {useState} from 'react'
import toast from 'react-hot-toast'

const AdditionDental = ({residentid}) => {
    const [dentalCaries, setDentalCaries] = useState(false);
    const [gingivitis, setGingivitis] = useState(false);
    const [periodontalDisease, setPeriodontalDisease] = useState(false);
    const [debris, setDebris] = useState(false);
    const [calculus, setCalculus] = useState(false);
    const [abnormalGrowth, setAbnormalGrowth] = useState(false);
    const [cleftLip, setCliftLip] = useState(false);

    const [no_permTeethPres, setNo_PermTeethPres] = useState('');
    const [no_permSoundTeeth, setNo_PermSoundTeeth] = useState('');
    const [no_permDecayedTeeth, setNo_PermDecayedTeeth] = useState ('');
    const [no_permMissingTeeth, setNo_PermMissingTeeth] = useState ('');
    const [no_permFilledTeeth, setNo_PermFilledTeeth] = useState('');
    const [totalDMFTeeth, setTotalDMFTeeth] = useState('');
    const [no_tempTeethPres, setNo_TempTeethPres] = useState('');
    const [no_tempSoundTeeth, setNo_TempSoundTeeth] = useState('');
    const [no_tempDecayedTeeth, setNo_TempDecayedTeeth] = useState('');
    const [no_tempFilledTeeth, setNo_TempFilledTeeth] = useState('');
    const [totalDFTeeth, setTotalDFTeeth] = useState('');
    const [sugarBvrgs, setSugarBvrgs] = useState('');
    const [freq_alcohol, setFreq_Alcohol] = useState('');
    const [freq_tobacco, setFreq_Tobacco] = useState('');


    const [no_permTeethPresError, setNo_PermTeethPresError] = useState('');
    const [no_permSoundTeethError, setNo_PermSoundTeethError] = useState('');
    const [no_permDecayedTeethError, setNo_PermDecayedTeethError] = useState ('');
    const [no_permMissingTeethError, setNo_PermMissingTeethError] = useState ('');
    const [no_permFilledTeethError, setNo_PermFilledTeethError] = useState('');
    const [totalDMFTeethError, setTotalDMFTeethError] = useState('');
    const [no_tempTeethPresError, setNo_TempTeethPresError] = useState('');
    const [no_tempSoundTeethError, setNo_TempSoundTeethError] = useState('');
    const [no_tempDecayedTeethError, setNo_TempDecayedTeethError] = useState('');
    const [no_tempFilledTeethError, setNo_TempFilledTeethError] = useState('');
    const [totalDFTeethError, setTotalDFTeethError] = useState('');
    

    const addRecSubmit = async (event) => {
        event.preventDefault();
        setNo_PermTeethPresError('');
        setNo_PermSoundTeethError('');
        setNo_PermDecayedTeethError('');
        setNo_PermMissingTeethError('');
        setNo_PermFilledTeethError('');
        setTotalDMFTeethError('');
        setNo_TempTeethPresError('');
        setNo_TempSoundTeethError('');
        setNo_TempDecayedTeethError('');
        setNo_TempFilledTeethError('');
        setTotalDFTeethError('');

        if (no_permTeethPres && !/^\d+$/.test(no_permTeethPres)) {
            setNo_PermTeethPresError('Invalid Input');
            return;
        }
        if (no_permSoundTeeth && !/^\d+$/.test(no_permSoundTeeth)) {
            setNo_PermSoundTeethError('Invalid Input');
            return;
        }
        if (no_permDecayedTeeth && !/^\d+$/.test(no_permDecayedTeeth)) {
            setNo_PermDecayedTeethError('Invalid Input');
            return;
        }
        if (no_permMissingTeeth && !/^\d+$/.test(no_permMissingTeeth)) {
            setNo_PermMissingTeethError('Invalid Input');
            return;
        }
        if (no_permFilledTeeth && !/^\d+$/.test(no_permFilledTeeth)) {
            setNo_PermFilledTeethError('Invalid Input');
            return;
        }
        if (totalDMFTeeth && !/^\d+$/.test(totalDMFTeeth)) {
            setTotalDMFTeethError('Invalid Input');
            return;
        }
        if (no_tempTeethPres && !/^\d+$/.test(no_tempTeethPres)) {
            setNo_TempTeethPresError('Invalid Input');
            return;
        }
        if (no_tempSoundTeeth && !/^\d+$/.test(no_tempSoundTeeth)) {
            setNo_TempSoundTeethError('Invalid Input');
            return;
        }
        if (no_tempDecayedTeeth && !/^\d+$/.test(no_tempDecayedTeeth)) {
            setNo_TempDecayedTeethError('Invalid Input');
            return;
        }
        if (no_tempFilledTeeth && !/^\d+$/.test(no_tempFilledTeeth)) {
            setNo_TempFilledTeethError('Invalid Input');
            return;
        }
        if (totalDFTeeth && !/^\d+$/.test(totalDFTeeth)) {
            setTotalDFTeethError('Invalid Input');
            return;
        }

        try {
            const userId = sessionStorage.getItem("profileId");
            const fetchServiceProvider = await axios.get(`/profile/${userId}`);
            const serviceProvider = "Dr. "+ fetchServiceProvider.data.last_name;
            const response = await axios.post(`/oralhealth/add/${residentid}`,
                {
                    dentalCaries, gingivitis, periodontalDisease, debris, calculus,
                    abnormalGrowth, cleftLip, no_permTeethPres, no_permSoundTeeth,
                    no_permDecayedTeeth, no_permMissingTeeth, no_permFilledTeeth, totalDMFTeeth,
                    no_tempTeethPres, no_tempSoundTeeth, no_tempDecayedTeeth, no_tempFilledTeeth,
                    totalDFTeeth, sugarBvrgs, freq_alcohol, freq_tobacco, serviceProvider
                },
            );
                if(response.status === 200 ) {
                    toast.success("Dental Record Successfully Added");
                    setTimeout(() => {
                        window.location.reload();
                      }, 700);
                }
                // console.log(dentalCaries, gingivitis, periodontalDisease, debris, calculus,
                //     abnormalGrowth, cleftLip, no_permTeethPres, no_permSoundTeeth,
                //     no_permDecayedTeeth, no_permMissingTeeth, no_permFilledTeeth, totalDMFTeeth,
                //     no_tempTeethPres, no_tempSoundTeeth, no_tempDecayedTeeth, no_tempFilledTeeth,
                //     totalDFTeeth, sugarBvrgs, freq_alcohol, freq_tobacco);
            
        } catch (error) {
            console.log(error)
        }
    }
    


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
                                <h5 className="text-start" id="">A. Check (/) if present</h5>
                                <div className="row mb-5">
                                <div className="col text-start">
                                        <div className=" form-check form-check-inline ">
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            id="flexCheckDefault"
                                            checked={dentalCaries} 
                                            onChange={(event)=>setDentalCaries(event.target.checked)}/>
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Dental Carries
                                        </label>
                                        </div>
                                        <div className=" form-check form-check-inline   ">
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            checked={gingivitis}
                                            id="flexCheckDefault" 
                                            onChange={(event)=>setGingivitis(event.target.checked)}/>
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Gingivitis
                                        </label>
                                        </div>
                                        <div className=" form-check form-check-inline   ">
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            checked={periodontalDisease} 
                                            id="flexCheckDefault" 
                                            onChange={(event)=>setPeriodontalDisease(event.target.checked)}/>
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Periodontal Disease
                                        </label>
                                        </div>
                                        <div className=" form-check form-check-inline ">
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            checked={debris}
                                            id="flexCheckDefault" 
                                            onChange={(event)=>setDebris(event.target.checked)}/>
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Debris
                                        </label>
                                        </div>
                                        <div className=" form-check form-check-inline   ">
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            checked={calculus} 
                                            id="flexCheckDefault" 
                                            onChange={(event)=>setCalculus(event.target.checked)}/>
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Calculus
                                        </label>
                                        </div>
                                    
                                    </div>   
                                </div>
                                <div className="row mb-5">
                                <div className="col text-start">
                                <div className=" form-check form-check-inline   ">
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            checked={abnormalGrowth} 
                                            id="flexCheckDefault" 
                                            onChange={(event)=>setAbnormalGrowth(event.target.checked)}/>
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Abnormal Growth
                                        </label>
                                        </div>
                                        <div className=" form-check form-check-inline   ">
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            checked={cleftLip} 
                                            id="flexCheckDefault" 
                                            onChange={(event)=>setCliftLip(event.target.checked)}/>
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Cleft Up/Palate
                                        </label>
                                        </div>
                                    </div>   
                                </div>
                                <h5 className="text-start" id="">B. Indicate Number</h5>
                                <div className="row mb-5">
                                <div className="col text-start">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Number of Perm. Teeth Present</label>
                                        <input type="number"  className="form-control Addition_Dental_textarea" 
                                            id="exampleFormControlTextarea1" 
                                            value={no_permTeethPres}
                                            style={{backgroundColor: "#CCE8DE"}}
                                            onChange={(event)=> setNo_PermTeethPres(event.target.value)}/>
                                        {no_permTeethPresError && <div className="text-danger">{no_permTeethPresError}</div>}
                                    </div>
                                    <div className="col text-start">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Number of Perm. Sound Teeth</label>
                                        <input type="number"  className="form-control Addition_Dental_textarea" 
                                            id="exampleFormControlTextarea1" 
                                            value={no_permSoundTeeth}
                                            style={{backgroundColor: "#CCE8DE"}}
                                            onChange={(event)=> setNo_PermSoundTeeth(event.target.value)}/>
                                            {no_permSoundTeethError && <div className="text-danger">{no_permSoundTeethError}</div>}
                                    </div>
                                    <div className="col text-start">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Number of Decayed Teeth (D)</label>
                                        <input type="number"  className="form-control Addition_Dental_textarea" 
                                            id="exampleFormControlTextarea1" 
                                            value={no_permDecayedTeeth}
                                            style={{backgroundColor: "#CCE8DE"}}
                                            onChange={(event)=>setNo_PermDecayedTeeth(event.target.value)}/>
                                            {no_permDecayedTeethError && <div className="text-danger">{no_permDecayedTeethError}</div>}
                                    
                                    </div>
                                    <div className="col text-start">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Number of Missing Teeth (M) </label>
                                        <input type="number"  className="form-control Addition_Dental_textarea" 
                                            id="exampleFormControlTextarea1" 
                                            value={no_permMissingTeeth}
                                            style={{backgroundColor: "#CCE8DE"}}
                                            onChange={(event)=>setNo_PermMissingTeeth(event.target.value)}/>
                                            {no_permMissingTeethError && <div className="text-danger">{no_permMissingTeethError}</div>}
                                    </div>
                                </div>
                                <div className="row mb-5">
                                <div className="col text-start">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Number of Filled Teeth (F)</label>
                                        <input type="number"  className="form-control Addition_Dental_textarea" 
                                            id="exampleFormControlTextarea1" 
                                            value={no_permFilledTeeth}
                                            style={{backgroundColor: "#CCE8DE"}}
                                            onChange={(event)=>setNo_PermFilledTeeth(event.target.value)}/>
                                            {no_permFilledTeethError && <div className="text-danger">{no_permFilledTeethError}</div>}
                                    
                                    </div>
                                    <div className="col text-start">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Total Decay-Missing-Filled Teeth</label>
                                        <input type="number"  className="form-control Addition_Dental_textarea" 
                                            id="exampleFormControlTextarea1" 
                                            value={totalDMFTeeth}
                                            style={{backgroundColor: "#CCE8DE"}}
                                            onChange={(event)=>setTotalDMFTeeth(event.target.value)}/>
                                            {totalDMFTeethError && <div className="text-danger">{totalDMFTeethError}</div>}
                                    </div>
                                    <div className="col text-start">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Number of Temp. Teeth Present</label>
                                        <input type="number"  className="form-control Addition_Dental_textarea" 
                                            id="exampleFormControlTextarea1" 
                                            value={no_tempTeethPres}
                                            style={{backgroundColor: "#CCE8DE"}}
                                            onChange={(event)=>setNo_TempTeethPres(event.target.value)}/>
                                            {no_tempTeethPresError && <div className="text-danger">{no_tempTeethPresError}</div>}
                                    
                                    </div>
                                    <div className="col text-start">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Number of Temp. Sound Teeth</label>
                                        <input type="number"  className="form-control Addition_Dental_textarea" 
                                            id="exampleFormControlTextarea1" 
                                            value={no_tempSoundTeeth}
                                            style={{backgroundColor: "#CCE8DE"}}
                                            onChange={(event)=>setNo_TempSoundTeeth(event.target.value)}/>
                                            {no_tempSoundTeethError && <div className="text-danger">{no_tempSoundTeethError}</div>}
                                            
                                    </div>
                                </div>
                                <div className="row mb-5">
                                <div className="col-3 text-start">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Number of Temp. Decayed Teeth</label>
                                        <input type="number"  className="form-control Addition_Dental_textarea" 
                                            id="exampleFormControlTextarea1" 
                                            value={no_tempDecayedTeeth}
                                            style={{backgroundColor: "#CCE8DE"}}
                                            onChange={(event)=>setNo_TempDecayedTeeth(event.target.value)}/>
                                            {no_tempDecayedTeethError && <div className="text-danger">{no_tempDecayedTeethError}</div>}
                                            
                                    
                                    </div>
                                    <div className="col-3 text-start">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Number of Temp. Filled Teeth</label>
                                        <input type="number"  className="form-control Addition_Dental_textarea" 
                                            id="exampleFormControlTextarea1" 
                                            value={no_tempFilledTeeth}
                                            style={{backgroundColor: "#CCE8DE"}}
                                            onChange={(event)=>setNo_TempFilledTeeth(event.target.value)}/>
                                            {no_tempFilledTeethError && <div className="text-danger">{no_tempFilledTeethError}</div>}
                                    </div>
                                <div className="col-3 text-start">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label"><br />Total DF Teeth </label>
                                        <input type="number"  className="form-control Addition_Dental_textarea" 
                                            id="exampleFormControlTextarea1" 
                                            value={totalDFTeeth}
                                            style={{backgroundColor: "#CCE8DE"}}
                                            onChange={(event)=>setTotalDFTeeth(event.target.value)}/>
                                            {totalDFTeethError && <div className="text-danger">{totalDFTeethError}</div>}
                                    
                                    </div>
                                </div>
                                <hr className="hr" />
                                <h3 className="pre-pageHeader text-start" id="">Dietary Habits / Social History</h3>
                                <div className="row mb-5">
                                    <div className="col text-start">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Frequent intake of Sugary Beverage</label>
                                        <select className="form-select"  style={{backgroundColor: "#CCE8DE"}}
                                            onChange={(event)=>setSugarBvrgs(event.target.value)}
                                        >
                                            <option value="#"  style={{backgroundColor: "white"}}>Choose...</option>
                                            <option value="1"  style={{backgroundColor: "white"}}>Always</option>
                                            <option value="2"  style={{backgroundColor: "white"}}>Often</option>
                                            <option value="3"  style={{backgroundColor: "white"}}>Sometimes</option>
                                            <option value="4"  style={{backgroundColor: "white"}}>Never</option>
                                        </select>
                                    </div>
                                    <div className="col text-start">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label"><br />Frequent use of alcohol</label>
                                        <select className="form-select"  style={{backgroundColor: "#CCE8DE"}}
                                            onChange={(event)=>setFreq_Alcohol(event.target.value)}
                                        >
                                            <option value="#"  style={{backgroundColor: "white"}}>Choose...</option>
                                            <option value="1"  style={{backgroundColor: "white"}}>Always</option>
                                            <option value="2"  style={{backgroundColor: "white"}}>Often</option>
                                            <option value="3"  style={{backgroundColor: "white"}}>Sometimes</option>
                                            <option value="4"  style={{backgroundColor: "white"}}>Never</option>
                                        </select>
                                    </div>
                                    <div className="col text-start">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label"><br />Frequent use of tobacco</label>
                                        <select className="form-select"  style={{backgroundColor: "#CCE8DE"}}
                                            onChange={(event)=>setFreq_Tobacco(event.target.value)}
                                        >
                                            <option value="#"  style={{backgroundColor: "white"}}>Choose...</option>
                                            <option value="1"  style={{backgroundColor: "white"}}>Always</option>
                                            <option value="2"  style={{backgroundColor: "white"}}>Often</option>
                                            <option value="3"  style={{backgroundColor: "white"}}>Sometimes</option>
                                            <option value="4"  style={{backgroundColor: "white"}}>Never</option>
                                        </select>
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

export default AdditionDental