import React, {useEffect, useState} from 'react'
import Sidebar from '../../components/Sidebar.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import SidebarOpenBtn from '../../components/SidebarOpenBtn.js'



const DentalSpecificRecord = () => {
    const {residentid, recordid} = useParams();
    const [patientinfo, setPatientinfo] = useState([]);
    const [oralHealthInfo, setOralHealthInfo] = useState([]);

    useEffect(()=> {
        patientInformation();
        getOralHealthDetails();
    }, [])

    const patientInformation = async () => {
        await axios.get("/profile/" + residentid)
        .then((response) => {
            setPatientinfo(response.data)
        })
    }

    const getOralHealthDetails = async () => {
        await axios.get(`oralhealth/getrecord/${residentid}/${recordid}`)
        .then((response) => {
            setOralHealthInfo(response.data.record)
        })
    }

    const handleBack = () => {
        window.history.back()
    }

    //formatting the date
    function formatDate(dateString) {
        const date = new Date(dateString);
        if (!isNaN(date.getTime())) {
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
        } else {
        return "Invalid Date";
        }
    }

    const convertNumVal = (numValue) => {
        switch (numValue) {
            case 1:
              return "Always";
            case 2:
              return "Often";
            case 3:
              return "Sometimes";
            case 4:
              return "Never";
            default:
              return "Unknown";
          }
    }
    return (
        <>
            <div className=''>
                <SidebarOpenBtn />
                <div className='mainLayout'>
                    <div className='mainLayout-left'>
                        <Sidebar />    
                    </div>
                    <div className='container mainLayout-right p-0 sp3-mainContainer'>
                        <div className="sp3-pageHeader container d-flex">
                            <button 
                            type="button"
                            className="sp3-servicesBacRecBtn align-items-center"
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
                                        <table className="">
                                            <tbody>
                                                <tr>
                                                    <th scope="row">Name:</th>
                                                    <td>{patientinfo.first_name + " "+ patientinfo.middle_name + " " + patientinfo.last_name}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Age:</th>
                                                    <td>{patientinfo.age} Years Old</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Birth Date:</th>
                                                    <td>{formatDate(patientinfo.birthDate)}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Place of Birth:</th>
                                                    <td>{patientinfo.birthPlace}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Occupation:</th>
                                                    <td>{patientinfo.occupation}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Address:</th>
                                                    <td>{patientinfo.street + " " + patientinfo.barangay + " " + patientinfo.municipality + " " + patientinfo.zipCode}</td>
                                                </tr>
                                            </tbody>
                                        </table>    
                                    </div>
                                    {/* <hr className="hr" /> */}
                                    <h3 className="text-start">Oral Health Condition</h3>
                                    <div className="row-start tb">
                                            <div className="col-6 text-start itembox ">
                                            <label className="fw-bold ">Date of Oral Examination:  </label>
                                            <span> {formatDate(oralHealthInfo.createdAt)} </span>
                                            </div>
                                            <div className="col-6 text-start itembox ">
                                            <label className="fw-bold ">No. of Permanent Teeth Present:  </label>
                                            <span> {oralHealthInfo.no_permTeethPres} </span>
                                            </div>
                                    </div>
                                    <div className="row-start tb">
                                            <div className="col-6 text-start itembox ">
                                            <label className="fw-bold" >Dental Caries:  </label>
                                            <input className="form-check-input" type="checkbox" checked={oralHealthInfo.dentalCaries}/>
                                            </div>
                                            <div className="col-6 text-start itembox ">
                                            <label className="fw-bold ">No. of Permanent Sound Teeth:  </label>
                                            <span> {oralHealthInfo.no_permSoundTeeth} </span>
                                            </div>
                                    </div>
                                    <div className="row-start tb">
                                            <div className="col-6 text-start itembox ">
                                            <label className="fw-bold ">Gingivitis:  </label>
                                            <input className="form-check-input" type="checkbox"  checked={oralHealthInfo.gingivitis}/>
                                            </div>
                                            <div className="col-6 text-start itembox ">
                                            <label className="fw-bold ">No. of Decayed Teeth :  </label>
                                            <span> {oralHealthInfo.no_permDecayedTeeth} </span>
                                            </div>
                                    </div>
                                    <div className="row-start tb">
                                            <div className="col-6 text-start itembox ">
                                            <label className="fw-bold ">Peiodontal Disease:  </label>
                                            <input className="form-check-input" type="checkbox"  checked={oralHealthInfo.periodontalDisease}/>
                                            </div>
                                            <div className="col-6 text-start itembox ">
                                            <label className="fw-bold ">No. of Missing Teeth :  </label>
                                            <span> {oralHealthInfo.no_permMissingTeeth} </span>
                                            </div>
                                    </div>
                                    <div className="row-start tb">
                                            <div className="col-6 text-start itembox ">
                                            <label className="fw-bold ">Debris:  </label>
                                            <input className="form-check-input" type="checkbox"  checked={oralHealthInfo.debris}/>
                                            </div>
                                            <div className="col-6 text-start itembox ">
                                            <label className="fw-bold ">No. of Filled Teeth :  </label>
                                            <span> {oralHealthInfo.no_permFilledTeeth} </span>
                                            </div>
                                    </div>
                                    <div className="row-start tb">
                                            <div className="col-6 text-start itembox ">
                                            <label className="fw-bold ">Calculus:  </label>
                                            <input className="form-check-input" type="checkbox"  checked={oralHealthInfo.calculus}/>
                                            </div>
                                            <div className="col-6 text-start itembox ">
                                            <label className="fw-bold ">No. of DMF Teeth:  </label>
                                            <span> {oralHealthInfo.totalDMFTeeth} </span>
                                            </div>
                                    </div>
                                    <div className="row-start tb">
                                            <div className="col-6 text-start itembox ">
                                            <label className="fw-bold ">Abnormal Growth:  </label>
                                            <input className="form-check-input" type="checkbox"  checked={oralHealthInfo.abnormalGrowth}/>
                                            </div>
                                            <div className="col-6 text-start itembox ">
                                            <label className="fw-bold ">No. of Temporary Teeth Present:  </label>
                                            <span> {oralHealthInfo.no_tempTeethPres} </span>
                                            </div>
                                    </div>
                                    <div className="row-start tb">
                                            <div className="col-6 text-start itembox ">
                                            <label className="fw-bold ">Cleft Lip/Palate:  </label>
                                            <input className="form-check-input" type="checkbox"  checked={oralHealthInfo.cleftLip}/>
                                            </div>
                                            <div className="col-6 text-start itembox ">
                                            <label className="fw-bold ">No. of Temporary Sound Teeth :  </label>
                                            <span> {oralHealthInfo.no_tempSoundTeeth} </span>
                                            </div>
                                    </div>
                                    <div className="row-start tb">
                                            <div className="col-6 text-start itembox ">
                                            
                                            </div>
                                            <div className="col-6 text-start itembox ">
                                            <label className="fw-bold ">Total DF Teeth:  </label>
                                            <span> {oralHealthInfo.totalDFTeeth} </span>
                                            </div>
                                    </div>
                                    {/* <hr className="hr" /> */}
                                    {/* <h3 className="text-start">Medical History</h3>
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
                                    </table> */}
                                    
                                </div>
                                <div className="buttomDiv">
                                    <h3 className="text-start">Dietary Habits</h3>
                                        <table className="table tb table-borderless">
                                                <tbody>
                                                    <tr>
                                                        <th scope="row"> Sugar Sweetened Beverages/Food:</th>
                                                        <td>{convertNumVal(oralHealthInfo.sugarBvrgs)}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Frequency of Taking Alcohol:</th>
                                                        <td>{convertNumVal(oralHealthInfo.freq_alcohol)}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Frequency of Taking Tobacco:</th>
                                                        <td>{convertNumVal(oralHealthInfo.freq_tobacco)}</td>
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