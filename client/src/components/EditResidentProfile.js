import React, { useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast'

const EditResidentProfile = ({residentId}) => {
    
    const [prof_status, setProf_Status] = useState('');
    const saveResidentSubmit = async (e) =>{
        e.preventDefault();
        if (residentId) {
            
            try {
                if(!(prof_status === "#")){
                    const response = await axios.patch(`/profile/resident/edit/${residentId}`,{
                        prof_status
                    });
                    if(response.status===200){
                        toast.success("Resident Status Updated");
                        setTimeout(() => {
                            window.location.reload();
                          }, 500);
                    }
                } else{
                    toast.error("Incorrect Status... Try Again");
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
  return (
    <div className="modal fade" id="editResidentProfileModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Resident Status</h1>
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
                                    <option value="#"  style={{backgroundColor: "white"}}>Choose...</option>
                                    <option value="Active"  style={{backgroundColor: "white"}}>Active</option>
                                    <option value="Inactive"  style={{backgroundColor: "white"}}>Inactive</option>
                                </select>
                            </div>
                        </div>
                </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                <button type="button" className="residentSubmitEditBtn"  onClick={saveResidentSubmit} disabled={prof_status === ""}>Edit Resident</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default EditResidentProfile