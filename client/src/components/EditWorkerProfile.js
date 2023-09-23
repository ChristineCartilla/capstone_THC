import React from 'react'

const EditWorkerProfile = () => {
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
                                <select className="form-select w-50" id="autoSizingSelect">
                                    <option selected disabled>Choose...</option>
                                    <option value="1">Active</option>
                                    <option value="2">Inactive</option>
                                </select>
                            </div>
                        </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" className="workerSubmitEditBtn">Edit Status</button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default EditWorkerProfile