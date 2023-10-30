import React, {useState} from 'react'
import axios from 'axios';
import toast from 'react-hot-toast'

const AdditionWorker = () => {

    const [first_name, setFirst_Name] = useState('');
    const [last_name, setLast_Name] = useState('');
    const [middle_name, setMiddle_Name] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [birthPlace, setBirthPlace] = useState('');
    const [civilStatus, setCivilStatus] = useState('');
    const [gender, setGender] = useState('');
    const [nationality, setNationality] = useState('');
    const [contactNo, setContactNo] =useState('');
    const [educAttain, setEducAttain] = useState('');
    const [occupation, setOccupation] = useState('');
    const [street, setStreet] = useState('');
    const [barangay, setBarangay] = useState('');
    const [municipality, setMunicipality] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [email, setEmail] = useState('');

    const addWorkerSubmit = async (event) => {
        event.preventDefault()
        try {
            if(email, contactNo, occupation, first_name, last_name, middle_name, gender, birthDate, birthPlace,
                educAttain, occupation, contactNo, civilStatus, nationality, street, barangay, municipality, zipCode){
                    const response = await axios.post('/account/worker/register', {
                        email, phone: contactNo, user_type: occupation,first_name, last_name, middle_name,
                        gender, birthDate, birthPlace, educAttain, occupation, contactNo,civilStatus,
                        nationality, street, barangay, municipality, zipCode
                    },
                ); 
    
                if(response.status === 200){
                    toast.success("Added New Worker Successfully");
                    setTimeout(() => {
                        window.location.reload();
                      }, 500);
                }
            }else{
                toast.error("Complete Input Fields");
            }
            
        } catch (error) {
            console.log(error);
        }
    }


    return ( 
        <div className="modal fade" id="AddWorker" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Add Worker</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form className='px-3'>
                        <div className="row mb-5">
                            <div  className="col-md-4 text-start">
                                <label htmlFor="exampleFormControlTextarea1"  className="form-label">First Name</label>
                                <input type="text"   className="form-control" 
                                    id="exampleFormControlTextarea1"
                                    value={first_name} 
                                    style={{backgroundColor: "#CCE8DE"}}
                                    onChange={(event)=>setFirst_Name(event.target.value)}/>
                            </div>
                            <div  className="col-md-4 text-start">
                                <label htmlFor="exampleFormControlTextarea1"  className="form-label">Last Name</label>
                                <input type="text"   className="form-control " 
                                    id="exampleFormControlTextarea1" 
                                    value={last_name}
                                    style={{backgroundColor: "#CCE8DE"}}
                                    onChange={(event)=>setLast_Name(event.target.value)}/>
                            </div>
                            <div  className="col-md-4 text-start">
                                <label htmlFor="exampleFormControlTextarea1"  className="form-label">Middle Name</label>
                                <input type="text"   className="form-control " 
                                    id="exampleFormControlTextarea1" 
                                    value={middle_name}
                                    style={{backgroundColor: "#CCE8DE"}}
                                    onChange={(event)=>setMiddle_Name(event.target.value)}/>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div  className="col-md-4 text-start">
                                <label htmlFor="exampleFormControlTextarea1"  className="form-label">Birth Date</label>
                                <input type="date"   className="form-control" 
                                    id="exampleFormControlTextarea1" 
                                    value={birthDate}
                                    style={{backgroundColor: "#CCE8DE"}}
                                    onChange={(event)=>setBirthDate(event.target.value)}/>
                            </div>
                            <div  className="col-md-4 text-start">
                                <label htmlFor="exampleFormControlTextarea1"  className="form-label">Birth Place</label>
                                <input type="text"   className="form-control " 
                                    id="exampleFormControlTextarea1" 
                                    value={birthPlace}
                                    style={{backgroundColor: "#CCE8DE"}}
                                    onChange={(event)=>setBirthPlace(event.target.value)}/>
                            </div>
                            <div  className="col-md-4 text-start">
                                <label htmlFor="exampleFormControlTextarea1"  className="form-label">Civil Status</label>
                                <select 
                                    className="form-select"  
                                    style={{backgroundColor: "#CCE8DE"}}
                                    onChange={(event)=>setCivilStatus(event.target.value)} >
                                    <option value="#" disabled style={{backgroundColor: "white"}}>Choose...</option>
                                    <option value="Single"  style={{backgroundColor: "white"}}>Single</option>
                                    <option value="Married"  style={{backgroundColor: "white"}}>Married</option>
                                    <option value="Separated"  style={{backgroundColor: "white"}}>Separated</option>
                                    <option value="Widowed"  style={{backgroundColor: "white"}}>Widowed</option>
                                </select>
                            </div>
                            
                        </div>
                        
                        <div className="row mb-5">
                            <div  className="col-md-4 text-start">
                                    <label htmlFor="exampleFormControlTextarea1"  className="form-label">Gender</label>
                                    <select className="form-select"  style={{backgroundColor: "#CCE8DE"}}
                                                onChange={(event)=>setGender(event.target.value)}
                                            >
                                                <option value="#" disabled style={{backgroundColor: "white"}}>Choose...</option>
                                                <option value="Male"  style={{backgroundColor: "white"}}>Male</option>
                                                <option value="Female"  style={{backgroundColor: "white"}}>Female</option>
                                    </select>
                            </div>
                            <div  className="col-md-4 text-start">
                                <label htmlFor="exampleFormControlTextarea1"  className="form-label">Nationality</label>
                                <input type="text"   className="form-control" 
                                    id="exampleFormControlTextarea1"
                                    value={nationality} 
                                    style={{backgroundColor: "#CCE8DE"}}
                                    onChange={(event)=>setNationality(event.target.value)}/>
                            </div>
                            <div  className="col-md-4 text-start">
                                <label htmlFor="exampleFormControlTextarea1"  className="form-label">PhilHealth Number</label>
                                <input type="text"   className="form-control " 
                                    id="exampleFormControlTextarea1" 
                                    style={{backgroundColor: "#CCE8DE"}}/>
                            </div>
                            
                        </div>
                        <div className="row mb-5">
                        <div  className="col-md-4 text-start">
                                <label htmlFor="exampleFormControlTextarea1"  className="form-label">Contact Number</label>
                                <input type="text"   className="form-control " 
                                    id="exampleFormControlTextarea1" 
                                    value={contactNo}
                                    style={{backgroundColor: "#CCE8DE"}}
                                    onChange={(event)=>setContactNo(event.target.value)}/>
                            </div>
                            <div  className="col-md-4 text-start">
                                <label htmlFor="exampleFormControlTextarea1"  className="form-label">Educational Attainment</label>
                                <input type="text"   className="form-control " 
                                    id="exampleFormControlTextarea1" 
                                    value={educAttain}
                                    style={{backgroundColor: "#CCE8DE"}}
                                    onChange={(event)=>setEducAttain(event.target.value)}/>
                            </div>
                            <div  className="col-md-4 text-start">
                                <label htmlFor="exampleFormControlTextarea1"  className="form-label">Worker Position</label>
                                <select 
                                    className="form-select"  
                                    style={{backgroundColor: "#CCE8DE"}}
                                    onChange={(event)=>setOccupation(event.target.value)} >
                                        <option value="#" disabled style={{backgroundColor: "white"}}>Choose...</option>
                                        <option value="BHW"  style={{backgroundColor: "white"}}>BHW</option>
                                        <option value="Doctor"  style={{backgroundColor: "white"}}>Doctor</option>
                                        <option value="Dentist"  style={{backgroundColor: "white"}}>Dentist</option>
                                        <option value="Midwife"  style={{backgroundColor: "white"}}>Midwife</option>
                                        <option value="Nurse"  style={{backgroundColor: "white"}}>Nurse</option>
                                        <option value="Medtech"  style={{backgroundColor: "white"}}>Medical Technologist</option>
                                </select>
                            </div>
                        </div>
                        <h6 className="text-start mb-3" id="">Current Address</h6>
                        <div className="row mb-5">
                            <div  className="col-md-3 text-start">
                                <label htmlFor="exampleFormControlTextarea1"  className="form-label">Street</label>
                                <input type="text"   className="form-control" 
                                    id="exampleFormControlTextarea1" 
                                    style={{backgroundColor: "#CCE8DE"}}
                                    value={street}
                                    onChange={(event)=>setStreet(event.target.value)}/>
                            </div>
                            <div  className="col-md-3 text-start">
                                <label htmlFor="exampleFormControlTextarea1"  className="form-label">Barangay</label>
                                <input type="text"   className="form-control " 
                                    id="exampleFormControlTextarea1" 
                                    style={{backgroundColor: "#CCE8DE"}}
                                    value={barangay}
                                    onChange={(event)=>setBarangay(event.target.value)}/>
                            </div>
                            <div  className="col-md-3 text-start">
                                <label htmlFor="exampleFormControlTextarea1"  className="form-label">Municipality</label>
                                <input type="text"   className="form-control " 
                                    id="exampleFormControlTextarea1" 
                                    style={{backgroundColor: "#CCE8DE"}}
                                    value={municipality}
                                    onChange={(event)=>setMunicipality(event.target.value)}/>
                            </div>
                            <div  className="col-md-3 text-start">
                                <label htmlFor="exampleFormControlTextarea1"  className="form-label">Province</label>
                                <input type="text"   className="form-control " 
                                    id="exampleFormControlTextarea1" 
                                    style={{backgroundColor: "#CCE8DE"}}/>
                            </div>
                            <div  className="col-md-3 text-start">
                                <label htmlFor="exampleFormControlTextarea1"  className="form-label">Zipcode</label>
                                <input type="text"   className="form-control " 
                                    id="exampleFormControlTextarea1" 
                                    style={{backgroundColor: "#CCE8DE"}}
                                    value={zipCode}
                                    onChange={(event)=>setZipCode(event.target.value)}/>
                            </div>
                        </div>
                        <h6 className="text-start mb-3" id="">Account Credentials</h6>
                        <div className="row mb-5">
                            <div  className="col-md-3 text-start">
                                <label htmlFor="exampleFormControlTextarea1"  className="form-label">Email Address</label>
                                <input type="text"   className="form-control" 
                                    id="exampleFormControlTextarea1" 
                                    style={{backgroundColor: "#CCE8DE"}}
                                    value={email}
                                    onChange={(event)=>setEmail(event.target.value)}/>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" className="workerSubmitEditBtn" onClick={addWorkerSubmit}>Add Worker</button>
                </div>
            </div>
        </div>
    </div>
     );
}
 
export default AdditionWorker;