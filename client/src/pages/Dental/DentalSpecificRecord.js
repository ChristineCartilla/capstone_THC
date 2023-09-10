import React from 'react'
import Sidebar from '../../components/Sidebar.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { useLocation, useNavigate } from 'react-router-dom'

const DentalSpecificRecord = (props) => {
    const loc = useLocation();
    console.log(loc)
    const navigate = useNavigate();
    const patient = 
    {
        fname: "John",
        lname: "Doe",
        mname: "Smith",
        age: 24,
        birthdate: "09-10-1999",
        occupation: "N/A",
        address: "Minoza St. Tigbao, Talamban, Cebu City",
        pod:"Cebu City",
        doe:"07-14-2021",
        nptp:"28",
        npst:"2",
        ndt:"0",
        nmt:"2",
        nft:"5",
        tdmft:"5",
        nttp:"2",
        ntst:"0",
        tot:"30",
        ill:"N/A",
        all:"N/A",
        hos:"N/A",
        fta:"Sometimes",
        ftt:"Never"
    };

    const handleBack = () => {
        window.history.back()
    }

    return (
        <>
            <div className=''>
                <div className='mainLayout'>
                    <div className='mainLayout-left'>
                        <Sidebar />    
                    </div>
                    <div className='container mainLayout-right p-0'>
                        <div className="sp3-pageHeader container d-flex">
                            <button 
                            type="button"
                            className="sp3-servicesBacRecskBtn align-items-center"
                            onClick={() => handleBack()}>
                                <FontAwesomeIcon icon={faAngleLeft}/>
                        </button>
                            <h1 className='text-start'>Dental 1</h1>  
                        </div>
                        <div className='sp3-pageBody'>
                            <div className='container'>
                                <div className='topDiv'>
                                    <h3 className="text-start ">Personal Information</h3>
                                    <div className='sp3-personalInfoDiv'>
                                        <table className="table table-borderless tb">
                                            <tbody>
                                                <tr>
                                                    <th scope="row">Name:</th>
                                                    <td>{patient.fname + " "+ patient.mname + " " + patient.lname}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Age:</th>
                                                    <td>{patient.age} Years Old</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Birth Date:</th>
                                                    <td>{patient.birthdate}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Place of Birth:</th>
                                                    <td>{patient.pod}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Occupation:</th>
                                                    <td>{patient.occupation}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Address:</th>
                                                    <td>{patient.address}</td>
                                                </tr>
                                            </tbody>
                                        </table>    
                                    </div>
                                    <hr class="hr" />
                                    <h3 className="text-start">Oral Health Condition</h3>
                                    <div class="row-start tb">
                                            <div class="col-6 text-start itembox ">
                                            <label className="fw-bold ">Date of Oral Examination:  </label>
                                            <span> {patient.doe} </span>
                                            </div>
                                            <div class="col-6 text-start itembox ">
                                            <label className="fw-bold ">No. of Permanent Teeth Present:  </label>
                                            <span> {patient.nptp} </span>
                                            </div>
                                    </div>
                                    <div class="row-start tb">
                                            <div class="col-6 text-start itembox ">
                                            <label className="fw-bold" >Dental Caries:  </label>
                                            <input class="form-check-input" type="checkbox"  disabled style={{backgroundColor:"#D3D3D3"}}/>
                                            </div>
                                            <div class="col-6 text-start itembox ">
                                            <label className="fw-bold ">No. of Permanent Sound Teeth:  </label>
                                            <span> {patient.npst} </span>
                                            </div>
                                    </div>
                                    <div class="row-start tb">
                                            <div class="col-6 text-start itembox ">
                                            <label className="fw-bold ">Gingivitis:  </label>
                                            <input class="form-check-input" type="checkbox"  checked/>
                                            </div>
                                            <div class="col-6 text-start itembox ">
                                            <label className="fw-bold ">No. of Decayed Teeth :  </label>
                                            <span> {patient.ndt} </span>
                                            </div>
                                    </div>
                                    <div class="row-start tb">
                                            <div class="col-6 text-start itembox ">
                                            <label className="fw-bold ">Peiodontal Disease:  </label>
                                            <input class="form-check-input" type="checkbox"  checked/>
                                            </div>
                                            <div class="col-6 text-start itembox ">
                                            <label className="fw-bold ">No. of Missing Teeth :  </label>
                                            <span> {patient.nmt} </span>
                                            </div>
                                    </div>
                                    <div class="row-start tb">
                                            <div class="col-6 text-start itembox ">
                                            <label className="fw-bold ">Debris:  </label>
                                            <input class="form-check-input" type="checkbox"  checked/>
                                            </div>
                                            <div class="col-6 text-start itembox ">
                                            <label className="fw-bold ">No. of Filled Teeth :  </label>
                                            <span> {patient.nft} </span>
                                            </div>
                                    </div>
                                    <div class="row-start tb">
                                            <div class="col-6 text-start itembox ">
                                            <label className="fw-bold ">Calculus:  </label>
                                            <input class="form-check-input" type="checkbox"  disabled style={{backgroundColor:"#D3D3D3"}}/>
                                            </div>
                                            <div class="col-6 text-start itembox ">
                                            <label className="fw-bold ">No. of DMF Teeth:  </label>
                                            <span> {patient.tdmft} </span>
                                            </div>
                                    </div>
                                    <div class="row-start tb">
                                            <div class="col-6 text-start itembox ">
                                            <label className="fw-bold ">Abnormal Growth:  </label>
                                            <input class="form-check-input" type="checkbox"  disabled style={{backgroundColor:"#D3D3D3"}}/>
                                            </div>
                                            <div class="col-6 text-start itembox ">
                                            <label className="fw-bold ">No. of Temporary Teeth Present:  </label>
                                            <span> {patient.nttp} </span>
                                            </div>
                                    </div>
                                    <div class="row-start tb">
                                            <div class="col-6 text-start itembox ">
                                            <label className="fw-bold ">Cleft Lip/Palate:  </label>
                                            <input class="form-check-input" type="checkbox"  disabled style={{backgroundColor:"#D3D3D3"}}/>
                                            </div>
                                            <div class="col-6 text-start itembox ">
                                            <label className="fw-bold ">No. of Temporary Sound Teeth :  </label>
                                            <span> {patient.ntst} </span>
                                            </div>
                                    </div>
                                    <div class="row-start tb">
                                            <div class="col-6 text-start itembox ">
                                            
                                            </div>
                                            <div class="col-6 text-start itembox ">
                                            <label className="fw-bold ">No. of Teeth:  </label>
                                            <span> {patient.tot} </span>
                                            </div>
                                    </div>
                                    <hr class="hr" />
                                    <h3 className="text-start">Medical History</h3>
                                    <table className="table table-borderless tb">
                                            <tbody>
                                                <tr>
                                                    <th scope="row "> Illness:</th>
                                                    <td>{patient.ill}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Allergies:</th>
                                                    <td>{patient.all}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Hospitalization:</th>
                                                    <td>{patient.hos}</td>
                                                </tr>
                                            </tbody>
                                    </table>
                                    <h3 className="text-start">Dietary Habits</h3>
                                    <table className="table table-borderless tb">
                                            <tbody>
                                                <tr>
                                                    <th scope="row"> Sugar Sweetened Beverages/Food:</th>
                                                    <td><input class="form-check-input" type="checkbox"  checked/></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Frequency of Taking Alcohol:</th>
                                                    <td>{patient.fta}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Frequency of Taking Tobacco:</th>
                                                    <td>{patient.ftt}</td>
                                                </tr>
                                            </tbody>
                                    </table>
                                </div>
                        
                            </div>
                        </div>
                        
                    </div>
                </div>  
            </div>
        </>
    )
}

export default DentalSpecificRecord