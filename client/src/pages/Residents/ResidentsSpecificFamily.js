import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar'
import Searchbox from '../../components/Services_Searchbox'
import { useNavigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'


const ResidentsSpecificFamily = () => {
    const {familyid} = useParams()
    const [activeFamilyMembers, setActiveFamilyMembers] = useState();
    const [pendingFamilyMembers, setPendingFamilyMembers] = useState();
    const navigate = useNavigate();
    
    useEffect(() => {
        const fetchFamily =  () => {
            fetch("http://localhost:8000/profiles").then((res) => {
                return res.json();
            }).then((response) => {
                const afam = response.filter((member) => {
                    return member.accountId === familyid && member.status === "active";
                })
                setActiveFamilyMembers(afam);
                const bfam = response.filter((member) => {
                    return member.accountId === familyid && member.status !== "active";
                })
                setPendingFamilyMembers(bfam);
            }).catch((error) => {
                console.log(error.message);
            })
        };
        
        fetchFamily();
        // console.log(familyMembers)
    },[])

    const handleViewResident = (id) => {
        navigate(id);
    }

    const handleBack = () => {
        window.history.back()
    }

    return (
        <div className='container-fluid '>
            <div className='row'>
                <Sidebar />
                <div className='col p-0'>
                    <div className="resident_pageHeader d-flex justify-content-around">
                        <h1>Family Profile 02</h1>  
                        <span></span>
                    </div>
                    <div className='container'>
                        <div className='verifiedProfileDiv my-5'>
                            <div className="tableHeading">
                                <h3><span>Verified Profiles</span></h3>
                            </div>
                            <table className="table table-borderless resident_familyTable">
                                <thead>
                                    <tr>
                                        <th>Last Name</th>
                                        <th>First Name</th>
                                        <th>Middle Name</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        activeFamilyMembers && activeFamilyMembers.map((fam,idx) => (
                                            <tr 
                                                className='resident_familyTableRow' 
                                                key={idx}
                                            
                                                >
                                                <td>{fam.last_name}</td>
                                                <td>{fam.first_name}</td>
                                                <td>{fam.middle_name}</td>
                                                <td>{fam.status}</td>
                                                <td>
                                                    <button 
                                                        type="button" 
                                                        className="resident_viewFamilyBtn"
                                                        onClick={() => handleViewResident(fam.id)}
                                                        style={{width: "100px"}}>
                                                            View
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                
                                </tbody>
                            </table>
                        </div>
                        <div className='pendingProfileDiv my-5'>
                            <div className="tableHeading">
                                <h3><span>Pending Profiles</span></h3>
                            </div>
                            <table className="table table-borderless resident_familyTable">
                                <thead>
                                    <tr>
                                        <th>Last Name</th>
                                        <th>First Name</th>
                                        <th>Middle Name</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        pendingFamilyMembers && pendingFamilyMembers.map((fam,idx) => (
                                            <tr 
                                                className='resident_familyTableRow' 
                                                key={idx}
                                            
                                                >
                                                <td>{fam.last_name}</td>
                                                <td>{fam.first_name}</td>
                                                <td>{fam.middle_name}</td>
                                                <td>
                                                    <button type="button" className="btn btn-primary mx-2">View</button>
                                                    <button type="button" className="btn btn-success mx-2">Approve</button>
                                                    <button type="button" className="btn btn-danger mx-2">Reject</button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                
                                </tbody>
                            </table>
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

export default ResidentsSpecificFamily