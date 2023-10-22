
import React from 'react'

const ViewVitalSigns = ({recordid, record}) => {
    return (
        <div className="modal fade" id="VitalSignView" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Vital Sign</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form >
                            <div className="row mb-5">
                                <div className="col text-start">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Weight</label>
                                    <input type="text"  className="form-control Addition_Prenatal_textarea" 
                                        id="exampleFormControlTextarea1" disabled
                                        defaultValue={record? record.weight+" kg." : ""}
                                        style={{backgroundColor: "#CCE8DE"}}/>
                                </div>
                                <div className="col text-start">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Blood Pressure</label>
                                    <input type="text"  className="form-control Addition_Prenatal_textarea" 
                                        id="exampleFormControlTextarea1" disabled
                                        defaultValue={record? record.bloodpressure : ""}
                                        style={{backgroundColor: "#CCE8DE"}}/>
                                </div>
                            </div>
                            <div className="row mb-5">
                                <div className="col text-start">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Height</label>
                                    <input type="text"  className="form-control Addition_Vital_textarea" 
                                        id="exampleFormControlTextarea1" disabled
                                        defaultValue={record? record.height+ " cm." : ""}
                                        style={{backgroundColor: "#CCE8DE"}}/>
                                </div>
                                <div className="col text-start">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Pulse Rate</label>
                                    <input type="number"  className="form-control Addition_Vital_textarea" 
                                        id="exampleFormControlTextarea1" disabled
                                        defaultValue={record? record.pulseRate : ""}
                                        style={{backgroundColor: "#CCE8DE"}}/>
                                </div>
                            </div>
                            <div className="row mb-5">
                                <div className="col-6 text-start">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Temperature</label>
                                    <input type="text"  className="form-control Addition_Vital_textarea" 
                                        id="exampleFormControlTextarea1" disabled
                                        defaultValue={record? record.temp+ " °C" : ""}
                                        style={{backgroundColor: "#CCE8DE"}}/>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewVitalSigns