import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Sidebar from '../../components/Sidebar'
import SidebarOpenBtn from '../../components/SidebarOpenBtn'
import axios from 'axios'

const ResidentMedicalHistory = () => {
    const [serviceName, setServiceName] = useState('');
    const navigate = useNavigate();


    const handleBack = () => {
        window.history.back()
    }

    return (
        <div className=''>
             <SidebarOpenBtn />
            <div className='mainLayout'>
                <div className='mainLayout-left'>
                   <Sidebar />
                </div>

                <div className='container mainLayout-right residentLayout'>
                    <div className='resident_pageHeader d-flex mx-5'>
                        <h1>Medical Records</h1>
                    </div>

                    <div className='container'>
                        <div className='verifiedProfileDiv my-5'>
                            {/* Prenatal */}
                            <div className='tableHeading mt-5 pt-3'>
                                <h3><span>Prenatal</span></h3>
                                 {/* card */}
                                <div className='card shadow-sm mt-4 pt-2 border border-0' style={{ height: '50px', backgroundColor: '#FAFAFA' }}>
                                    <div className='row fw-normal fs-6' style={{ color: '#8EC3B0' }} >
                                        <div className='col text-center'>
                                            <button
                                                type='button'
                                                className='resident_viewFamilyBtn '
                                            >
                                                View Medical Record
                                            </button>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                            {/* Immunization */}
                            <div className='tableHeading mt-5 pt-3'>
                                <h3><span>Immunization</span></h3>
                            </div>
                             {/* Dental */}
                            <div className='tableHeading mt-5 pt-3'>
                                <h3><span>Dental</span></h3>
                                {/* card */}
                                <div className='card shadow-sm mt-4 pt-2 border border-0' style={{ height: '50px', backgroundColor: '#FAFAFA' }}>
                                    <div className='row fw-normal fs-6' style={{ color: '#8EC3B0' }} >
                                        <div className='col text-center'>
                                            01-22-23
                                        </div>
                                        <div className='col text-center'>
                                            <button
                                                type='button'
                                                className='resident_viewFamilyBtn '
                                            >
                                                View Medical Record
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                             {/* Medical Check-up */}
                             <div className='tableHeading mt-5 pt-3'>
                                <h3><span>Medical Checkup</span></h3>
                                 {/* card */}
                                <div className='card shadow-sm mt-4 pt-2 border border-0' style={{ height: '50px', backgroundColor: '#FAFAFA' }}>
                                    <div className='row fw-normal fs-6' style={{ color: '#8EC3B0' }} >
                                        <div className='col text-center'>
                                            01-22-23
                                        </div>
                                        <div className='col text-center'>
                                        <button
                                                type='button'
                                                className='resident_viewFamilyBtn '
                                            >
                                                View Medical Record
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                             {/* Family Planning */}
                             <div className='tableHeading mt-5 pt-3'>
                                <h3><span>Family Planning</span></h3>
                                 {/* card */}
                                <div className='card shadow-sm mt-4 pt-2 border border-0' style={{ height: '50px', backgroundColor: '#FAFAFA' }}>
                                    <div className='row fw-normal fs-6' style={{ color: '#8EC3B0' }} >
                                        <div className='col text-center'>
                                            01-22-23
                                        </div>
                                        <div className='col text-center'>
                                        <button
                                                type='button'
                                                className='resident_viewFamilyBtn '
                                            >
                                                View Medical Record
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                             {/* Hematology */}
                             <div className='tableHeading mt-5 pt-3'>
                                <h3><span>Hematology</span></h3>
                                {/* <div className='card shadow-sm mt-4 pt-2 border border-0' style={{ height: '50px', backgroundColor: '#FAFAFA' }}>
                                    <div className='row fw-normal fs-6' style={{ color: '#8EC3B0' }} >
                                        <div className='col text-center'>
                                            01-22-23
                                        </div>
                                        <div className='col text-center'>
                                            View Medical History
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                             {/* Urinalysis */}
                             <div className='tableHeading mt-5 pt-3'>
                                <h3><span>Urinalysis</span></h3>
                                {/* card */}
                                <div className='card shadow-sm mt-4 pt-2 border border-0' style={{ height: '50px', backgroundColor: '#FAFAFA' }}>
                                    <div className='row fw-normal fs-6' style={{ color: '#8EC3B0' }} >
                                        <div className='col text-center'>
                                            01-22-23
                                        </div>
                                        <div className='col text-center'>
                                        <button
                                                type='button'
                                                className='resident_viewFamilyBtn '
                                            >
                                                View Medical Record
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                    </div>
                    <button 
                        type="button"
                        className="residentBackBtn float-start"
                        onClick={() => handleBack()}>
                            <FontAwesomeIcon icon={faArrowLeft}/> Back
                    </button>
                </div>
            </div>
        </div>
    
    )
}

export default ResidentMedicalHistory