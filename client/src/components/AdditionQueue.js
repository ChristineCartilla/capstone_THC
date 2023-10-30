import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from 'react-hot-toast'

const AdditionQueue = () => {
    const [residentList, setResidentList] = useState([]);
    const [queueResidents, setQueueResidents] = useState('');
    const [queueResId, setQueueResId] = useState('');
    const [queueServiceName, setQueueServiceName] = useState('');

    useEffect(() => {
        fetchResidents();
    },[])

    const fetchResidents = async () => {
        const data = await axios.get("/profile/fetchresident");
        setResidentList(data.data);
    }

    const onChange = (event) => {
        setQueueResidents(event.target.value);
    }

    const onSearch = (searchTerm, searchId) => {
        setQueueResidents(searchTerm);
        setQueueResId(searchId);
    }

    const addQueue = async () => {
        if(queueServiceName == ""){
            toast.error("Cannot Add Queue... Select Service");
        } else {
            const addQueueData = await axios.post(`/queue/addqueue/${queueResId}`,{service_name: queueServiceName});
            if(addQueueData.status === 200){
                toast.success("Resident Successfully Added to Queue");
                setTimeout(() => {
                    window.location.reload();
                  }, 500);
            } else {
                toast.error("Error Occurred When Adding to Queue");
            }
        }
    }

    return ( 
        <div className="modal fade" id="AddQueue" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog ">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Add Queuing</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form className='px-3'>
                            <div className="row mb-3">
                                <label htmlFor="queueService" className="col-sm-4 col-form-label text-start">Service:</label>
                                <div className="col-sm-8">
                                    <select 
                                        className="form-control" 
                                        id="serviceName" 
                                        required
                                        onChange={e => setQueueServiceName(e.target.value)}>
                                        <option defaultValue={"N/A"}>Choose Service...</option>
                                        <option value="Prenatal">Prenatal</option>
                                        <option value="Immunization">Immunization</option>
                                        <option value="Dental">Dental</option>
                                        <option value="MedicalCheckup">Medical Checkup</option>
                                        <option value="FamilyPlanning">Family Planning</option>
                                        <option value="Hematology">Hematology</option>
                                        <option value="Urinalysis">Urinalysis</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="queueService" className="col-sm-4 col-form-label text-start">Resident Name:</label>
                                <div className="col-sm-8">
                                    <input type='text' className="form-control" value={queueResidents} onChange={onChange} />
                                    <div className='dropdown'>
                                    {
                                        residentList
                                        .filter(item => {
                                            const searchTerm = queueResidents.toLowerCase();
                                            const firstname = item.first_name.toLowerCase();
                                            const lastname = item.last_name.toLowerCase();
                                            return searchTerm && firstname.startsWith(searchTerm) || searchTerm && lastname.startsWith(searchTerm);
                                        })
                                        .map((item) => (
                                            <div 
                                                key={item._id}
                                                className="dropdown-row"
                                                onClick={() => onSearch(item.first_name+" "+item.last_name, item._id)}>{item.first_name+" "+item.last_name}</div>
                                        ))
                                    }
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" className="workerSubmitEditBtn" onClick={addQueue}>Add</button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default AdditionQueue;