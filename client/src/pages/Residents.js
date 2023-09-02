import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Searchbox from '../components/Searchbox'
import { useNavigate } from 'react-router-dom'

const Residents = () => {
    const [family, setFamily] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchFamily =  () => {
            fetch("http://localhost:8000/accounts").then((res) => {
                return res.json();
            }).then((response) => {
                setFamily(response);
            }).catch((error) => {
                console.log(error.message);
            })
        };

        fetchFamily();
    },[])
    const handleViewFam = (famId) => {
        navigate(`/resident/${famId}`);
    }

    return (
        <div className='container-fluid '>
            <div className='row'>
                <Sidebar />
                <div className='col p-0'>
                    <div className="pageHeader d-flex justify-content-around">
                        <h1>Residents</h1>  
                        <Searchbox />
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
                                                <td>Doe</td>
                                                <td>{fam.status}</td>
                                                <td>
                                                    <button 
                                                        type="button" 
                                                        className="resident_viewFamilyBtn"
                                                        onClick={() => handleViewFam(fam.acc_id)}>
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
    )
}

export default Residents