import React from 'react';

const AdditionDispensing = () => {
    return ( 
        <div className="modal fade" id="AddDispensing" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Medication Dispensing</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form className='px-3'>
                        <div className="row mb-5">
                            <div  className="col-md-6 text-start">
                                <label htmlFor="exampleFormControlTextarea1"  className="form-label">Date Given</label>
                                <input type="text"   className="form-control" 
                                    id="exampleFormControlTextarea1" 
                                    style={{backgroundColor: "#CCE8DE"}}/>
                            </div>
                            <div  className="col-md-6 text-start">
                                <label htmlFor="exampleFormControlTextarea1"  className="form-label">Medication Name</label>
                                <input type="text"   className="form-control " 
                                    id="exampleFormControlTextarea1" 
                                    style={{backgroundColor: "#CCE8DE"}}/>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div  className="col-md-6 text-start">
                                <label htmlFor="exampleFormControlTextarea1"  className="form-label">Dosage</label>
                                <input type="text"   className="form-control" 
                                    id="exampleFormControlTextarea1" 
                                    style={{backgroundColor: "#CCE8DE"}}/>
                            </div>
                            <div  className="col-md-6 text-start">
                                <label htmlFor="exampleFormControlTextarea1"  className="form-label">BHW Name</label>
                                <input type="text"   className="form-control " 
                                    id="exampleFormControlTextarea1" 
                                    style={{backgroundColor: "#CCE8DE"}}/>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div  className="col-md-12 text-start">
                                <label htmlFor="exampleFormControlTextarea1"  className="form-label">Prescription</label>
                                <textarea 
                                    className="form-control" 
                                    id="exampleFormControlTextarea1" 
                                    rows="3" 
                                    style={{backgroundColor: "#CCE8DE"}}></textarea>
                            </div>
                        </div>
                        
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" className="workerSubmitEditBtn">Add</button>
                </div>
            </div>
        </div>
    </div>
     );
}
 
export default AdditionDispensing;