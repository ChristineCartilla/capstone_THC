import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Worker_Searchbox from './Worker_Searchbox';
import AdditionDispensing from './AdditionDispensing';

const ViewDispensing = () => {
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
                                        <tr className="px-5" >
                                            <td>adad</td>
                                            <td>asdas</td>
                                            <td>asdasd</td>
                                            <td>asdad</td>
                                            <td>asdad</td>
                                            <td>
                                            <button type="button" className="dispensing_editBtn">
                                                Edit
                                            </button>
                                            <button type="button" className="dispensing_remBtn">
                                                Remove
                                            </button>
                                            </td>
                                        </tr>
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