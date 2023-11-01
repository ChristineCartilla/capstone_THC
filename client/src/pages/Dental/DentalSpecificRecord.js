import React, {useEffect, useState, useRef} from 'react'
import Sidebar from '../../components/Sidebar.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import SidebarOpenBtn from '../../components/SidebarOpenBtn.js'
import THCDefaultPatientLogo from '../../images/default_image.png'

const DentalSpecificRecord = () => {
    const {residentid, recordid} = useParams();
    const [patientinfo, setPatientinfo] = useState([]);
    const [oralHealthInfo, setOralHealthInfo] = useState([]);

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height
        };
    }

    function useWindowDimensions() {
        const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
      
        useEffect(() => {
          function handleResize() {
            setWindowDimensions(getWindowDimensions());
          }
      
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
        }, []);
      
        return windowDimensions;
    }

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const { height, width } = useWindowDimensions();


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
                            <h1 className='text-start'>Dental {oralHealthInfo._id? oralHealthInfo._id.slice(-6): ""}</h1>  
                        </div>
                        <div className='sp3-pageBody'>
                            <div className='container'>
                                <div className='topDiv'>
                                    <h3 className="text-start ">Personal Information</h3>
                                    <div className={`sp3-personalInfoDiv personal-info ${
                                        width < 1500 ?
                                        "oral-health-mobile" : null
                                    }`}> 
                                        <div className="personal-info-left">
                                            <table className="">
                                                <tbody>
                                                    <tr>
                                                        <th>Name:</th>
                                                        <td>{patientinfo.first_name + " "+ patientinfo.middle_name + " " + patientinfo.last_name}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Age:</th>
                                                        <td>{patientinfo.age} Years Old</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Birth Date:</th>
                                                        <td>{formatDate(patientinfo.birthDate)}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Place of Birth:</th>
                                                        <td>{patientinfo.birthPlace}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Occupation:</th>
                                                        <td>{patientinfo.occupation}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Address:</th>
                                                        <td>{patientinfo.street + " " + patientinfo.barangay + " " + patientinfo.municipality + " " + patientinfo.zipCode}</td>
                                                    </tr>
                                                </tbody>
                                            </table>    
                                        </div>
                                        <div className="personal-info-right">
                                            <div><img src={THCDefaultPatientLogo}/></div>
                                        </div>
                                    </div>
                                    {/* <hr className="hr" /> */}
                                    <h3 className="text-start">Oral Health Condition</h3>
                                    <div className={`oral-health ${
                                        width < 1500 ?
                                        "oral-health-mobile" : null
                                    }`}>
                                        <div className="oral-health-left">
                                            <div className="oral-health-one">
                                                <span className="fw-bold">Date of Oral Examination:</span>
                                                <span className="fw-bold">Dental Caries:</span>
                                                <span className="fw-bold">Gingivitis:</span>
                                                <span className="fw-bold">Peiodontal Disease:</span>
                                                <span className="fw-bold">Debris:</span>
                                                <span className="fw-bold">Calculus:</span>
                                                <span className="fw-bold">Abnormal Growth:</span>
                                                <span className="fw-bold">Cleft Lip/Palate:</span>
                                                <span className="fw-bold"></span>
                                            </div>
                                            <div className="oral-health-two">
                                                <span> {formatDate(oralHealthInfo.createdAt)} </span>
                                                <span><input className="form-check-input" type="checkbox" checked={oralHealthInfo.dentalCaries? true: false} onChange={()=>{}}/></span>
                                                <span><input className="form-check-input" type="checkbox"  checked={oralHealthInfo.gingivitis? true: false} onChange={()=>{}}/></span>
                                                <span><input className="form-check-input" type="checkbox"  checked={oralHealthInfo.periodontalDisease? true: false} onChange={()=>{}}/></span>
                                                <span><input className="form-check-input" type="checkbox"  checked={oralHealthInfo.debris? true: false} onChange={()=>{}}/></span>
                                                <span><input className="form-check-input" type="checkbox"  checked={oralHealthInfo.calculus? true: false} onChange={()=>{}}/></span>
                                                <span><input className="form-check-input" type="checkbox"  checked={oralHealthInfo.abnormalGrowth? true: false} onChange={()=>{}}/></span>
                                                <span><input className="form-check-input" type="checkbox"  checked={oralHealthInfo.cleftLip? true: false} onChange={()=>{}}/></span>
                                                <span className="fw-bold"></span>
                                            </div>
                                        </div>
                                        <div className="oral-health-right">
                                            <div className="oral-health-three">
                                                <span className="fw-bold">No. of Permanent Teeth Present:</span>
                                                <span className="fw-bold">No. of Permanent Sound Teeth:</span>
                                                <span className="fw-bold">No. of Decayed Teeth:</span>
                                                <span className="fw-bold">No. of Missing Teeth:</span>
                                                <span className="fw-bold">No. of Filled Teeth:</span>
                                                <span className="fw-bold">No. of DMF Teeth:</span>
                                                <span className="fw-bold">No. of Temporary Teeth Present:</span>
                                                <span className="fw-bold">No. of Temporary Sound Teeth:</span>
                                                <span className="fw-bold">Total DF Teeth:</span>
                                            </div>
                                            <div className="oral-health-four">
                                                <span> {oralHealthInfo.no_permTeethPres} </span>
                                                <span> {oralHealthInfo.no_permSoundTeeth} </span>
                                                <span> {oralHealthInfo.no_permDecayedTeeth} </span>
                                                <span> {oralHealthInfo.no_permMissingTeeth} </span>
                                                <span> {oralHealthInfo.no_permFilledTeeth} </span>
                                                <span> {oralHealthInfo.totalDMFTeeth} </span>
                                                <span> {oralHealthInfo.no_tempTeethPres} </span>
                                                <span> {oralHealthInfo.no_tempSoundTeeth} </span>
                                                <span> {oralHealthInfo.totalDFTeeth} </span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="bottomDiv">
                                    <h3 className="text-start">Dietary Habits</h3>
                                    <div className="dietary">
                                        <div className="dietary-label">
                                            <span className="fw-bold">Sugar Sweetened Beverages/Food:</span>
                                            <span className="fw-bold">Frequency of Taking Alcohol:</span>
                                            <span className="fw-bold">Frequency of Taking Tobacco:</span>
                                        </div>
                                        <div className="dietary-input">
                                            <span>{convertNumVal(oralHealthInfo.sugarBvrgs)}</span>
                                            <span>{convertNumVal(oralHealthInfo.freq_alcohol)}</span>
                                            <span>{convertNumVal(oralHealthInfo.freq_tobacco)}</span>
                                        </div>
                                    </div>
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