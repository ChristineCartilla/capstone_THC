import React from 'react'

const EditUserProfile = () => {
    return ( 
        <div className="modal fade" id="editUserProfileModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Profile</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form className='px-3'>
                        <div className="row mb-5">
                            <div  className="col-md-4 text-start">
                                <label htmlFor="exampleFormControlTextarea1"  className="form-label">First Name</label>
                                <input type="text"   className="form-control" 
                                    id="exampleFormControlTextarea1" 
                                    style={{backgroundColor: "#CCE8DE"}}/>
                            </div>
                            <div  className="col-md-4 text-start">
                                <label htmlFor="exampleFormControlTextarea1"  className="form-label">Last Name</label>
                                <input type="text"   className="form-control " 
                                    id="exampleFormControlTextarea1" 
                                    style={{backgroundColor: "#CCE8DE"}}/>
                            </div>
                            <div  className="col-md-4 text-start">
                                <label htmlFor="exampleFormControlTextarea1"  className="form-label">Middle Name</label>
                                <input type="text"   className="form-control " 
                                    id="exampleFormControlTextarea1" 
                                    style={{backgroundColor: "#CCE8DE"}}/>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div  className="col-md-3 text-start">
                                <label htmlFor="exampleFormControlTextarea1"  className="form-label">Birth Date</label>
                                <input type="text"   className="form-control" 
                                    id="exampleFormControlTextarea1" 
                                    style={{backgroundColor: "#CCE8DE"}}/>
                            </div>
                            <div  className="col-md-4 text-start">
                                <label htmlFor="exampleFormControlTextarea1"  className="form-label">Birth Place</label>
                                <input type="text"   className="form-control " 
                                    id="exampleFormControlTextarea1" 
                                    style={{backgroundColor: "#CCE8DE"}}/>
                            </div>
                            <div  className="col-md-3 text-start">
                                <label htmlFor="exampleFormControlTextarea1"  className="form-label">Civil Status</label>
                                <input type="text"   className="form-control " 
                                    id="exampleFormControlTextarea1" 
                                    style={{backgroundColor: "#CCE8DE"}}/>
                            </div>
                            <div  className="col-md-2 text-start">
                                <label htmlFor="exampleFormControlTextarea1"  className="form-label">Gender</label>
                                <input type="text"   className="form-control " 
                                    id="exampleFormControlTextarea1" 
                                    style={{backgroundColor: "#CCE8DE"}}/>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div  className="col-md-4 text-start">
                                <label htmlFor="exampleFormControlTextarea1"  className="form-label">Nationality</label>
                                <input type="text"   className="form-control" 
                                    id="exampleFormControlTextarea1" 
                                    style={{backgroundColor: "#CCE8DE"}}/>
                            </div>
                            <div  className="col-md-4 text-start">
                                <label htmlFor="exampleFormControlTextarea1"  className="form-label">PhilHealth Number</label>
                                <input type="text"   className="form-control " 
                                    id="exampleFormControlTextarea1" 
                                    style={{backgroundColor: "#CCE8DE"}}/>
                            </div>
                            <div  className="col-md-4 text-start">
                                <label htmlFor="exampleFormControlTextarea1"  className="form-label">Educational Attainment</label>
                                <input type="text"   className="form-control " 
                                    id="exampleFormControlTextarea1" 
                                    style={{backgroundColor: "#CCE8DE"}}/>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div  className="col-md-4 text-start">
                                <label htmlFor="exampleFormControlTextarea1"  className="form-label">Password</label>
                                <input type="text"   className="form-control " 
                                    id="exampleFormControlTextarea1" 
                                    style={{backgroundColor: "#CCE8DE"}}/>
                            </div>
                            <div  className="col-md-4 text-start">
                                <label htmlFor="exampleFormControlTextarea1"  className="form-label">Confirm Password</label>
                                <input type="text"   className="form-control " 
                                    id="exampleFormControlTextarea1" 
                                    style={{backgroundColor: "#CCE8DE"}}/>
                            </div>
                        </div>
                        <h6 className="text-start mb-3" id="">Current Address</h6>
                        <div className="row mb-5">
                            <div  className="col-md-3 text-start">
                                <label htmlFor="exampleFormControlTextarea1"  className="form-label">Street</label>
                                <input type="text"   className="form-control" 
                                    id="exampleFormControlTextarea1" 
                                    style={{backgroundColor: "#CCE8DE"}}/>
                            </div>
                            <div  className="col-md-3 text-start">
                                <label htmlFor="exampleFormControlTextarea1"  className="form-label">Barangay</label>
                                <input type="text"   className="form-control " 
                                    id="exampleFormControlTextarea1" 
                                    style={{backgroundColor: "#CCE8DE"}}/>
                            </div>
                            <div  className="col-md-3 text-start">
                                <label htmlFor="exampleFormControlTextarea1"  className="form-label">Municipality</label>
                                <input type="text"   className="form-control " 
                                    id="exampleFormControlTextarea1" 
                                    style={{backgroundColor: "#CCE8DE"}}/>
                            </div>
                            <div  className="col-md-3 text-start">
                                <label htmlFor="exampleFormControlTextarea1"  className="form-label">Province</label>
                                <input type="text"   className="form-control " 
                                    id="exampleFormControlTextarea1" 
                                    style={{backgroundColor: "#CCE8DE"}}/>
                            </div>
                            <div  className="col-md-3 text-start">
                                <label htmlFor="exampleFormControlTextarea1"  className="form-label">Zipcode</label>
                                <input type="text"   className="form-control " 
                                    id="exampleFormControlTextarea1" 
                                    style={{backgroundColor: "#CCE8DE"}}/>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" className="workerSubmitEditBtn">Save Changes</button>
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default EditUserProfile