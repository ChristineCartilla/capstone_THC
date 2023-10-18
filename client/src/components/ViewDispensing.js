import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Worker_Searchbox from './Worker_Searchbox';
import AdditionDispensing from './AdditionDispensing';
import axios from 'axios';

const ViewDispensing = () => {
    const [dispenseList, setDispenseList] = useState([]);

    useEffect(()=>{
        fetchDispenseList();
    },[])
    
    const fetchDispenseList = async () => {
        const list = await axios.get("/dispensing/");
        setDispenseList(list.data);
    }

    const removeDispense = async (disid) => {
        const dispense = await axios.patch(`/dispensing/delete/${disid}`)
        if(dispense){
            alert("Successfully Removed Medication Dispensing Instance");
            window.location.reload(); 
        }
    }

    return ( 
        //create the dispensing page
        <div className="dispensing container-fluid">
            <div className="row">
                <div className="dispensingHeadercont col p-0">
                    <div className="dispensing_pageHeader d-flex justify-content-center">
                        <h3>MEDICATION DISPENSING</h3>
                    </div>
                    <div className="dispensing_addButton d-flex justify-content-end align-items-center">
                        <button type="button" data-bs-toggle="modal" data-bs-target="#AddDispensing">
                        <   FontAwesomeIcon icon={faPlus} />
                        </button>
                    </div>
                    <div className="dispensing_medInfo d-flex justify-content-evenly">
                        <div className="col-3">
                            <h4 className="title">Ibuprofen</h4>
                            <p className='text'>Most Prescribed Medicine</p>
                        </div>
                        <div className="col-3">
                            <h4 className="title">30%</h4>
                            <p className='text'>prescriptions were for pain reliever medications</p>
                        </div>
                        <div className="col-3">
                            <h4 className="title">70%</h4>
                            <p className='text'>prescriptions were for pain tablet formulations</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="dispensingSearchcont col p-0">
                    <div className="dispensing_Searchbox d-flex justify-content-end">
                        <Worker_Searchbox/>  
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="dispensingBodycont col p-0">
                    <div className="dispensing_pageBody">
                        <div className="container table-responsive">
                            <table className="dispensingTable table">
                                <thead>
                                    <tr>
                                        <th scope="col">Date</th>
                                        <th scope="col">Medication Name</th>
                                        <th scope="col">Dosage Type</th>
                                        <th scope="col">Prescription</th>
                                        <th scope="col">BHW Name</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        dispenseList && dispenseList.map((dispense, idx) => (
                                            <tr className="px-5" >
                                                <td>{dispense.dateGiven}</td>
                                                <td>{dispense.medicationName}</td>
                                                <td>{dispense.dosage}</td>
                                                <td>{dispense.prescription}</td>
                                                <td>{dispense.bhwName}</td>
                                                <td>
                                                    <button type="button" className="dispensing_editBtn">
                                                        Edit
                                                    </button>
                                                    <button 
                                                        type="button" 
                                                        className="dispensing_remBtn"
                                                        onClick={() => removeDispense(dispense._id)}>
                                                        Remove
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
            <AdditionDispensing/>
        </div>
    
     );
}
 
export default ViewDispensing;