import React, { useEffect, useState} from 'react'
import Sidebar from '../../components/Sidebar.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import AdditionVitalSigns from '../../components/AdditionVitalSigns.js'
import ViewVitalSigns from '../../components/ViewVitalSigns.js'
import SidebarOpenBtn from '../../components/SidebarOpenBtn.js'
import axios from 'axios'
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
            console.log(response.data)
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
                                            <span>{urinalysisInfo.color}</span>
                                            <span>{urinalysisInfo.character}</span>
                                            <span>{urinalysisInfo.reagentStrip}</span>
                                            <span>{urinalysisInfo.ketoneLevel}</span>
                                            <span>{urinalysisInfo.specificGravity}</span>
                                            <span>{urinalysisInfo.bloodLevel}</span>
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
                                            <span>{urinalysisInfo.bilirubin}</span>
                                            <span>{urinalysisInfo.glucosLevel}</span>
                                            <span>{urinalysisInfo.phLevel}</span>
                                            <span>{urinalysisInfo.proteinLevel}</span>
                                            <span>{urinalysisInfo.urobilinogenLevel}</span>
                                            <span>{urinalysisInfo.nitrate}</span>
                                            <span>{urinalysisInfo.leukocyteLevel}</span>
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
                                            <span>{urinalysisInfo.redBloodCellLevel}</span> 
                                        </div>
                                        <div className='oral-health-three'>
                                            <span className='fw-bold'>Pus Cells:</span>    
                                        </div>
                                        <div className='oral-health-four'>
                                            <span>{urinalysisInfo.pusLevel}</span>
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
                                            <span>{urinalysisInfo.calciumOxaletes}</span>
                                            <span>{urinalysisInfo.amorphousUrates}</span>
                                            <span></span>
                                        </div>
                                        <div className='oral-health-three'>
                                            <span className='fw-bold'>Uric Acid:</span>
                                            <span className='fw-bold'>Amorphous Phosphates:</span>
                                            <span className='fw-bold'>Triple Phosphates:</span>
                                        </div>
                                        <div className='oral-health-four'>
                                            <span>{urinalysisInfo.uricAcid}</span>
                                            <span>{urinalysisInfo.amorphousPhosphates}</span>
                                            <span>{urinalysisInfo.triplePhosphate}</span> 
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
                                            <span>{urinalysisInfo.squamousEpithelialCells}</span>
                                            <span>{urinalysisInfo.roundEpithelialCells}</span>
                                            <span></span>
                                        </div>
                                        <div className='oral-health-three'>
                                            <span className='fw-bold'>Bacteria:</span>
                                            <span className='fw-bold'>Mucus Threads:</span>
                                            <span className='fw-bold'>Yeast Cells:</span>
                                        </div>
                                        <div className='oral-health-four'>
                                            <span>{urinalysisInfo.bacteria}</span>
                                            <span>{urinalysisInfo.mucusThreads}</span>
                                            <span>{urinalysisInfo.yeastCells}</span> 
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