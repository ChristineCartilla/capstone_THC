import React from 'react'
import Sidebar from '../../components/Sidebar.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { useLocation, useNavigate } from 'react-router-dom'

const MedicalCheckUpSpecificRecord = (props) => {
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
        address: "Minoza St. Tigbao, Talamban, Cebu City"
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
                            <h1 className='text-start'>Medical Checkup 1</h1>  
                        </div>
                        <div className='sp3-pageBody'>
                            <div className='container'>
                                <div className='topDiv'>
                                    <h4 className="text-start">Personal Information</h4>
                                    <div className='sp3-personalInfoDiv'>
                                        <table className="table table-borderless">
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
                                </div>
                                <div className='buttomDiv'>
                                    <div>
                                        <h4 className="text-start">Findings</h4>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                            when an unknown printer took a galley of type and scrambled it to make a type 
                                            specimen book. It has survived not only five centuries, but also the leap into 
                                            electronic typesetting, remaining essentially unchanged. It was popularised in 
                                            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                                            and more recently with desktop publishing software like Aldus PageMaker including 
                                            versions of Lorem Ipsum.
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-start">Medical Prescription</h4>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                            when an unknown printer took a galley of type and scrambled it to make a type 
                                            specimen book. It has survived not only five centuries, but also the leap into 
                                            electronic typesetting, remaining essentially unchanged. It was popularised in 
                                            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                                            and more recently with desktop publishing software like Aldus PageMaker including 
                                            versions of Lorem Ipsum.
                                        </p>
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

export default MedicalCheckUpSpecificRecord