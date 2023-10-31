import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Sidebar from '../../components/Sidebar'
import SidebarOpenBtn from '../../components/SidebarOpenBtn'



const ResidentsSpecificFamily = () => {
    const {familyid} = useParams()
    const [familyMembers, setFamilyMembers] = useState();
    const navigate = useNavigate();
    
    useEffect(() => {
        fetchFamily();
    },[familyid])

    const fetchFamily = async () => {
        try {
            const fetchMembers = await axios.get(`/account/fetchmember/${familyid}`);
            setFamilyMembers(fetchMembers.data.profile);
        } catch (error) {
            console.log(error)
        }
    };

    const handleViewResident = (id) => {
        navigate(id);
        // console.log(id)
    }

    const handleBack = () => {
        window.history.back()
    }

    const handleResidentApprove = async (id) => {
        try {
            const approveRes = await axios.patch(`/profile/resident/approve/${id}`);
            if(approveRes.status === 200){
                toast.success("Resident Profile Successfully Activated")
                window.location.reload();
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleResidentDisapprove = async (id) => {
        try {
            const approveRes = await axios.patch(`/profile/resident/disapprove/${id}`);
            if(approveRes.status === 200){
                toast.success("Resident Profile Rejected")
                window.location.reload();
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className=''>
            <SidebarOpenBtn />
            <div className='mainLayout'>
                <div className='mainLayout-left'>
                    <Sidebar />    
                </div>
                
                <div className='container mainLayout-right residentLayout'>
                    <div className="resident_pageHeader d-flex justify-content-around">
                        <h1>Family Profile: </h1>  
                        <span></span>
                    </div>
                    <div className='container'>
                        <div className='verifiedProfileDiv my-5'>
                            <div className="tableHeading">
                                <h3><span>Verified Profiles</span></h3>
                            </div>
                            <table className="table table-borderless resident_familyTable" style={{ backgroundColor: '#000 !important'}}>
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
                                        familyMembers && familyMembers.filter((fam) => fam.prof_status === "Active").map((fam,idx) => (
                                            <tr 
                                                className='resident_familyTableRow' 
                                                key={idx}
                                            
                                                >
                                                <td>{fam.last_name}</td>
                                                <td>{fam.first_name}</td>
                                                <td>{fam.middle_name}</td>
                                                <td>{fam.prof_status}</td>
                                                <td>
                                                    <button 
                                                        type="button" 
                                                        className="resident_viewFamilyBtn"
                                                        onClick={() => handleViewResident(fam._id)}
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
                                        familyMembers && familyMembers.filter((fam) => fam.prof_status === "Pending").map((fam,idx) => (
                                            <tr 
                                                className='resident_familyTableRow' 
                                                key={idx}
                                            
                                                >
                                                <td>{fam.last_name}</td>
                                                <td>{fam.first_name}</td>
                                                <td>{fam.middle_name}</td>
                                                <td>
                                                    <button 
                                                        type="button" 
                                                        className="resident_viewFamilyBtn mx-2"
                                                        onClick={() => handleViewResident(fam._id)}>View</button>
                                                    <button 
                                                        type="button" 
                                                        className="btn btn-success mx-2"
                                                        onClick={() => handleResidentApprove(fam._id)}>Approve</button>
                                                    <button 
                                                        type="button" 
                                                        className="btn btn-danger mx-2"
                                                        onClick={() => handleResidentDisapprove(fam._id)}>Reject</button>
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