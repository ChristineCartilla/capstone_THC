import React, { useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';


const EditWorkerProfile = () => {
    const { workerId } = useParams();
    const [prof_status, setProf_Status] = useState('');

    const saveWorkerSubmit = async (e) =>{
        e.preventDefault();
        if (workerId) {
            
            try {
                const response = await axios.patch(`/profile/worker/edit/${workerId}`,{
                    prof_status
                });

                if(response.status===200){
                    alert("Worker Status Updated");
                    window.location.reload();
                }
                
            } catch (error) {
                console.log(error)
            }
        }
    }
        

    return ( 
        <div className="modal fade" id="editWorkerProfileModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Worker Status</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form> 
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Status</label>
                            <div className="col-sm-10">
                                <select className="form-select"  style={{backgroundColor: "#CCE8DE"}}
                                    onChange={(e) => {
                                        setProf_Status(e.target.value);
                                      }}
                                >
                                    <option value="#" disabled style={{backgroundColor: "white"}}>Choose...</option>
                                    <option value="Active"  style={{backgroundColor: "white"}}>Active</option>
                                    <option value="Inactive"  style={{backgroundColor: "white"}}>Inactive</option>
                                </select>
                            </div>
                        </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" className="workerSubmitEditBtn" onClick={saveWorkerSubmit} disabled={prof_status === ""}>Edit Status</button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default EditWorkerProfile