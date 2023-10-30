import React, { useEffect, useState} from 'react'
import axios from 'axios'
import Sidebar from '../../components/Sidebar.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import SidebarOpenBtn from '../../components/SidebarOpenBtn.js'
import THCDefaultPatientLogo from '../../images/default_image.png'

const UrinalysisSpecificRecord = () => {
    const { residentid, recordid } = useParams();
    const [patientinfo, setPatientInfo] = useState([]);
    const [urinalysisInfo, setUrinalysisInfo] = useState([]);

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

    useEffect(() => {
        patientInformation();
        getUrinalysisDetails();
    }, [])

    const patientInformation = async () => {
        await axios.get("/profile/"+ residentid)
        .then((response) => {
            setPatientInfo(response.data) 
        })
    }

    const getUrinalysisDetails = async () => {
        await axios.get(`urinalysis/getrecord/${residentid}/${recordid}`)
        .then((response) => {
            setUrinalysisInfo(response.data.record) 
        })
    }

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
  
    const handleBack = () => {
        window.history.back()
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
                        <h1 className='text-start'>Urinalysis 1</h1>  
                    </div>
                    <div className='sp3-pageBody'>
                        <div className='container'>
                            <div className='topDiv'>
                                <h3 className="text-start">Urinalysis Info</h3>
                                <div className={`sp3-personalInfoDiv personal-info ${
                                        width < 1500 ?
                                        "oral-health-mobile" : null
                                    }`}> 
                                    <div className="personal-info-left">
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
                                    <div className="personal-info-right">
                                        <div><img src={THCDefaultPatientLogo}/></div>
                                    </div>
                                </div>
                                <h3 className="text-start">Physicochemical Examination</h3>
                                <div className={`oral-health ${
                                        width < 1500 ?
                                        "oral-health-mobile" : null
                                    }`}>
                                    <div className="oral-health-left">
                                        <div className="oral-health-one">
                                            <span className='fw-bold'>Color:</span>
                                            <span className='fw-bold'>Character:</span>
                                            <span className='fw-bold'>Reagent Strip Used:</span>
                                            
                                            <span className='fw-bold'>Ketone:</span>
                                            <span className='fw-bold'>Specific Gravity:</span>
                                            <span className='fw-bold'>Blood:</span>
                                            <span></span>
                                        </div>
                                        <div className="oral-health-two">
                                            <span>{(urinalysisInfo.color)? urinalysisInfo.color: "N/A"}</span>
                                            <span>{(urinalysisInfo.character)? urinalysisInfo.character: "N/A"}</span>
                                            <span>{(urinalysisInfo.reagentStrip)? urinalysisInfo.reagentStrip: "N/A"}</span>
                                            <span>{(urinalysisInfo.ketoneLevel)? urinalysisInfo.ketoneLevel: "N/A"}</span>
                                            <span>{(urinalysisInfo.specificGravity)? urinalysisInfo.specificGravity: "N/A"}</span>
                                            <span>{(urinalysisInfo.bloodLevel)? urinalysisInfo.bloodLevel: "N/A"}</span>
                                            <span></span>
                                        </div>
                                        <div className='oral-health-three'>
                                            <span className='fw-bold'>Bilirubin:</span>
                                            <span className='fw-bold'>Glucose:</span>
                                            <span className='fw-bold'>PH:</span>
                                            <span className='fw-bold'>Protein:</span>
                                            <span className='fw-bold'>Urobilinogen:</span>
                                            <span className='fw-bold'>Nitrite:</span>
                                            <span className='fw-bold'>Leukocyte:</span>
                                        </div>
                                        <div className='oral-health-four'>
                                            <span>{(urinalysisInfo.bilirubin)? urinalysisInfo.bilirubin: "N/A"}</span>
                                            <span>{(urinalysisInfo.glucosLevel)? urinalysisInfo.glucosLevel: "N/A"}</span>
                                            <span>{(urinalysisInfo.phLevel)? urinalysisInfo.phLevel: "N/A"}</span>
                                            <span>{(urinalysisInfo.proteinLevel)? urinalysisInfo.proteinLevel: "N/A"}</span>
                                            <span>{(urinalysisInfo.urobilinogenLevel)? urinalysisInfo.urobilinogenLevel: "N/A"}</span>
                                            <span>{(urinalysisInfo.nitrate)? urinalysisInfo.nitrate: "N/A"}</span>
                                            <span>{(urinalysisInfo.leukocyteLevel)? urinalysisInfo.leukocyteLevel: "N/A"}</span>
                                        </div>
                                    </div>
                                </div>

                                
                                <h3 className="text-start">Microscopic Examination</h3>
                                <div className={`oral-health ${
                                        width < 1500 ?
                                        "oral-health-mobile" : null
                                    }`}>
                                    <div className="oral-health-left">
                                        <div className="oral-health-one">
                                            <span className='fw-bold'>Red Blood Cells:</span>
                                        </div>
                                        <div className="oral-health-two">
                                            <span>{(urinalysisInfo.redBloodCellLevel)?urinalysisInfo.redBloodCellLevel: "N/A"}</span> 
                                        </div>
                                        <div className='oral-health-three'>
                                            <span className='fw-bold'>Pus Cells:</span>    
                                        </div>
                                        <div className='oral-health-four'>
                                            <span>{(urinalysisInfo.pusLevel)?urinalysisInfo.pusLevel: "N/A"}</span>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-start">Crystals</h3>
                                <div className={`oral-health ${
                                        width < 1500 ?
                                        "oral-health-mobile" : null
                                    }`}>
                                    <div className="oral-health-left">
                                        <div className="oral-health-one">
                                            <span className='fw-bold'>Calcium Oxalates:</span>
                                            <span className='fw-bold'>Amorphous Urates:</span>
                                            <span></span>
                                        </div>
                                        <div className="oral-health-two">
                                            <span>{(urinalysisInfo.calciumOxaletes)?urinalysisInfo.calciumOxaletes: "N/A"}</span>
                                            <span>{(urinalysisInfo.amorphousUrates)?urinalysisInfo.amorphousUrates: "N/A"}</span>
                                            <span></span>
                                        </div>
                                        <div className='oral-health-three'>
                                            <span className='fw-bold'>Uric Acid:</span>
                                            <span className='fw-bold'>Amorphous Phosphates:</span>
                                            <span className='fw-bold'>Triple Phosphates:</span>
                                        </div>
                                        <div className='oral-health-four'>
                                            <span>{(urinalysisInfo.uricAcid)?urinalysisInfo.uricAcid: "N/A"}</span>
                                            <span>{(urinalysisInfo.amorphousPhosphates)?urinalysisInfo.amorphousPhosphates: "N/A"}</span>
                                            <span>{(urinalysisInfo.triplePhosphate)?urinalysisInfo.triplePhosphate: "N/A"}</span> 
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-start">Miscellaneous Structures</h3>
                                <div className={`oral-health ${
                                        width < 1500 ?
                                        "oral-health-mobile" : null
                                    }`}>
                                    <div className="oral-health-left">
                                        <div className="oral-health-one">
                                            <span className='fw-bold'>Squamous Epithelial Cells:</span>
                                            <span className='fw-bold'>Round Epithelial Cells:</span>
                                            <span></span>
                                        </div>
                                        <div className="oral-health-two">
                                            <span>{(urinalysisInfo.squamousEpithelialCells)?urinalysisInfo.squamousEpithelialCells: "N/A"}</span>
                                            <span>{(urinalysisInfo.roundEpithelialCells)?urinalysisInfo.roundEpithelialCells: "N/A"}</span>
                                            <span></span>
                                        </div>
                                        <div className='oral-health-three'>
                                            <span className='fw-bold'>Bacteria:</span>
                                            <span className='fw-bold'>Mucus Threads:</span>
                                            <span className='fw-bold'>Yeast Cells:</span>
                                        </div>
                                        <div className='oral-health-four'>
                                            <span>{(urinalysisInfo.bacteria)?urinalysisInfo.bacteria: "N/A"}</span>
                                            <span>{(urinalysisInfo.mucusThreads)?urinalysisInfo.mucusThreads: "N/A"}</span>
                                            <span>{(urinalysisInfo.yeastCells)?urinalysisInfo.yeastCells: "N/A"}</span> 
                                        </div>
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

export default UrinalysisSpecificRecord