import React from 'react'

const EditResidentProfile = () => {
  return (
    <div className="modal fade" id="editResidentProfileModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Resident Status</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <select class="form-select w-50" id="autoSizingSelect">
                            <option selected disabled>Choose...</option>
                            <option value="1">Active</option>
                            <option value="2">UnActive</option>
                        </select>
                    </div>
                </div>
                </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                <button type="button" className="residentSubmitEditBtn">Edit Resident</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default EditResidentProfile