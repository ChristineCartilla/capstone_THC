import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import AdditionDispensing from './AdditionDispensing';
import axios from 'axios';
import toast from 'react-hot-toast'

const ViewDispensing = () => {
    const [dispenseList, setDispenseList] = useState([]);
    const [dispenseTop, setDispenseTop] = useState([]);

    useEffect(()=>{
        fetchDispenseList();
        getDispenseTop();
    },[])
    
    const fetchDispenseList = async () => {
        const list = await axios.get("/dispensing/");
        setDispenseList(list.data);
    }

    const removeDispense = async (disid) => {
        const dispense = await axios.patch(`/dispensing/delete/${disid}`)
        if(dispense){
            toast.success("Successfully Removed Medication Dispensing Instance");
            setTimeout(() => {
            window.location.reload();
            }, 1500);
        }
    }

    const getDispenseTop = async () => {
        const data = await axios.get("/dashboard/medicaldispensing");
        setDispenseTop(data.data);
    }

    return ( 
        //create the dispensing page
        <div className="dispensing container-fluid">
            <div className="row">
                <div className="dispensingHeadercont col p-0">
                    <div className='d-flex justify-content-between '>
                        <div className="dispensing_pageHeader px-5 py-2">
                            <h3>MEDICATION DISPENSING</h3>
                        </div>
                        <div className="dispensing_addButton d-flex justify-content-end align-items-center">
                            <button type="button" data-bs-toggle="modal" data-bs-target="#AddDispensing">
                            <   FontAwesomeIcon icon={faPlus} />
                            </button>
                        </div>
                    </div>
                    <hr className='py-3 w-75 mx-auto' style={{color:"#FFF"}} />
                    <div className="dispensing_medInfo ">
                        <div className='row d-flex justify-content-evenly'>
                            <div className="col-sm-12 col-md-3">
                                <h4 className="title">{dispenseTop.medication? dispenseTop.medication : "N/A"}</h4>
                                <p className='text'>Most Prescribed Medicine</p>
                            </div>
                            <div className="col-sm-12 col-md-3">
                                <h4 className="title">{dispenseTop.percentage? dispenseTop.percentage+"%" : "N/A"}</h4>
                                <p className='text'>Percentage of {dispenseTop.medication} From all Dispensed Medications</p>
                            </div>
                            <div className="col-sm-12 col-md-3">
                                <h4 className="title" >{dispenseTop.count? dispenseTop.count : "N/A"}</h4>
                                <p className='text'>Occurrences of the medication being administered to patients.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="dispensingSearchcont col p-0">
                    <div className="dispensing_Searchbox d-flex justify-content-end">
                     
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="dispensingBodycont col p-0">
                    <div className="dispensing_pageBody">
                        <div className="container table-responsive dispensingTableDiv">
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
                                            <tr className="px-5" key={dispense._id}>
                                                <td>{dispense.dateGiven}</td>
                                                <td>{dispense.medicationName}</td>
                                                <td>{dispense.dosage}</td>
                                                <td style={{width: "100px", fontSize: "1rem"}}><p>{dispense.prescription}</p></td>
                                                <td>{dispense.bhwName}</td>
                                                <td>
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