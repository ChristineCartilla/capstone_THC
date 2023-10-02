import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar'
import Resident_Searchbox from '../../components/Resident_Searchbox'
import { useNavigate } from 'react-router-dom'
import SidebarOpenBtn from '../../components/SidebarOpenBtn'

const Residents = () => {
    const [family, setFamily] = useState([]);
    const navigate = useNavigate();

    const handleViewFam = (famId) => {
        navigate(`/resident/${famId}`);
    }

    return (
        <div className=''>
            <SidebarOpenBtn />
            <div className='mainLayout'>
                <div className='mainLayout-left'>
                    <Sidebar />    
                </div>
                
                <div className='container mainLayout-right residentLayout'>
                    <div className=''>
                        <div className="resident_pageHeader d-flex justify-content-around">
                            <h1>Residents</h1>  
                            <Resident_Searchbox setSearchResults={setFamily} />
                        </div>
                        <div className='resident_pageBody'>
                            <div className='container table-responsive'>
                                <table className="table ResidentFamilyTable ">
                                    <thead>
                                        <tr>
                                            <th scope="col">Family #</th>
                                            <th scope="col">Family Name</th>
                                            <th scope="col">Status</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            family && family.map((fam,idx) => (
                                                <tr className='px-5' key={idx}>
                                                    <td>Family {idx+1}</td>
                                                    <td>{fam.profiles[0].last_name}</td>
                                                    <td>{fam.status}</td>
                                                    <td>
                                                        <button 
                                                            type="button" 
                                                            className="resident_viewFamilyBtn"
                                                            onClick={() => handleViewFam(fam.id)}>
                                                                View Family Profiles
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default Residents