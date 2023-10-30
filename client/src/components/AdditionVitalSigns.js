import React, { useEffect, useState } from 'react'
import axios from 'axios';
import toast from 'react-hot-toast'

const AdditionVitalSigns = ({residentid}) => {
    const [residentList, setResidentList] = useState([]);
    const [ resident, setResident ] = useState("");
    const [ residentId, setResidentId ] = useState("");
    const [ vitalSignWeight, setVitalSignWeight ] = useState("");
    const [ vitalSignHeight, setVitalSignHeight ] = useState("");
    const [ vitalSignBP, setVitalSignBP ] = useState("");
    const [ vitalSignPR, setVitalSignPR ] = useState("");
    const [ vitalSignTemp, setVitalSignTemp ] = useState("");

    useEffect(() => {
        fetchResidents();
    })

    const fetchResidents = async () => {
        const data = await axios.get("/profile/fetchresident");
        setResidentList(data.data);
    }

    const onSearch = (searchTerm, searchId) => {
        setResident(searchTerm);
        setResidentId(searchId);
    }

    const addRecSubmit = async (event) => {
        event.preventDefault();
  
        try{
            const response = await axios.post('/vitalsign/add',{
                resid: residentId,
                height: vitalSignHeight,
                weight: vitalSignWeight,
                temp: vitalSignTemp,
                pulseRate: vitalSignPR,
                bloodpressure: vitalSignBP,
            })

            if(response.status === 200){
                toast.success("Vital Sign Successfully Added");
                window.location.reload();
            }
          
        } catch (error){
          console.log(error)
        }
    }

    return (
        <div className="modal fade" id="VitalSignAddition" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Vital Sign</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form >
                            <div className="row mb-5">
                                <div className="col-6 text-start">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Patient Name</label>
                                    <input type='hidden' value={residentId} onChange={()=>{}}/>
                                    <input type='text' className="form-control Addition_Vital_textarea" value={resident} onChange={e => setResident(e.target.value)} style={{backgroundColor: "rgb(204, 232, 222)"}} />
                                    <div className='dropdown Addition_Vital_textarea'>
                                    {
                                        residentList
                                        .filter(item => {
                                            const searchTerm = resident.toLowerCase();
                                            const firstname = item.first_name.toLowerCase();
                                            const lastname = item.last_name.toLowerCase();
                                            return searchTerm && firstname.startsWith(searchTerm) || searchTerm && lastname.startsWith(searchTerm);
                                        })
                                        .map((item) => (
                                            <div 
                                                key={item._id}
                                                className="dropdown-row"
                                                onClick={() => onSearch(item.first_name+" "+item.last_name, item._id)}>{item.first_name+" "+item.last_name}</div>
                                        ))
                                    }
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-5">
                                <div className="col text-start">
                                    <label htmlFor="exampleFormControlTextarea2" className="form-label">Weight</label>
                                    <input type="number"  className="form-control Addition_Prenatal_textarea" 
                                        id="exampleFormControlTextarea2" 
                                        value={vitalSignWeight}
                                        onChange={e => setVitalSignWeight(e.target.value)}
                                        style={{backgroundColor: "#CCE8DE"}}
                                        placeholder='Kg.'/>
                                </div>
                                <div className="col text-start">
                                    <label htmlFor="exampleFormControlTextarea3" className="form-label">Blood Pressure</label>
                                    <input type="text"  className="form-control Addition_Prenatal_textarea" 
                                        id="exampleFormControlTextarea3" 
                                        value={vitalSignBP}
                                        onChange={e => setVitalSignBP(e.target.value)}
                                        style={{backgroundColor: "#CCE8DE"}}/>
                                </div>
                            </div>
                            <div className="row mb-5">
                                <div className="col text-start">
                                    <label htmlFor="exampleFormControlTextarea4" className="form-label">Height</label>
                                    <input type="number"  className="form-control Addition_Vital_textarea" 
                                        id="exampleFormControlTextarea4" 
                                        value={vitalSignHeight}
                                        onChange={e => setVitalSignHeight(e.target.value)}
                                        style={{backgroundColor: "#CCE8DE"}}
                                        placeholder='cm.'/>
                                </div>
                                <div className="col text-start">
                                    <label htmlFor="exampleFormControlTextarea5" className="form-label">Pulse Rate</label>
                                    <input type="number"  className="form-control Addition_Vital_textarea" 
                                        id="exampleFormControlTextarea5" 
                                        value={vitalSignPR}
                                        onChange={e => setVitalSignPR(e.target.value)}
                                        style={{backgroundColor: "#CCE8DE"}}/>
                                </div>
                            </div>
                            <div className="row mb-5">
                                <div className="col-6 text-start">
                                    <label htmlFor="exampleFormControlTextarea6" className="form-label">Temperature</label>
                                    <input type="number"  className="form-control Addition_Vital_textarea" 
                                        id="exampleFormControlTextarea6" 
                                        value={vitalSignTemp}
                                        onChange={e => setVitalSignTemp(e.target.value)}
                                        style={{backgroundColor: "#CCE8DE"}}
                                        placeholder='celcius'/>
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

export default AdditionVitalSigns