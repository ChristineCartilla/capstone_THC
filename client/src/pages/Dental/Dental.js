import React from 'react'
import Sidebar from '../../components/Sidebar'
import Searchbox from '../../components/Searchbox'

const Dental = () => {
    return (
        <div className='container-fluid '>
            <div className='row'>
                <Sidebar />
                <div className='col p-0'>
                    <div className="pageHeader d-flex justify-content-around">
                        <h1>Dental</h1>  
                        <Searchbox />
                    </div>
                    <div className='pageBody'>
                        <div className='container'>
                            <ul className="list-group">
                                <li className="list-group-item d-flex justify-content-between px-5 align-middle">
                                    <h6>Patient Name</h6>
                                    
                                </li>
                                <li className="list-group-item d-flex justify-content-between px-5 py-3 align-middle">
                                    <h6>John Doe S.</h6>
                                    <button type="button" className="btn viewBtn">View Medical History</button>
                                </li>
                                <li className="list-group-item d-flex justify-content-between px-5 py-3 align-middle">
                                    <h6>Joan Doe S.</h6>
                                    <button type="button" className="btn viewBtn">View Medical History</button>
                                </li>
                                <li className="list-group-item d-flex justify-content-between px-5 py-3 align-middle">
                                    <h6>Joshua Doe S.</h6>
                                    <button type="button" className="btn viewBtn">View Medical History</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default Dental