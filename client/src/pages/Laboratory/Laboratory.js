import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar.js'
import Services_Searchbox from '../../components/Services_Searchbox.js'
import Card from "react-bootstrap/Card";

const Laboratory = () => {
    const [patient, setPatient] = useState([]);

    const mystyle = {
        color: "white",
        backgroundColor: "#8EC3B0",
        textAlign: 'center'
         
    }

    return (
        <div className='container-fluid '>
            <div className='row'>
                <Sidebar />
                <div className='col p-0'>
                    <div className="sp1-pageHeader d-flex justify-content-around">
                        <h1 className="">Laboratory</h1>  
                        <Services_Searchbox setSearchResults={setPatient}  />
                    </div>
                    <div className='sp1-pageBody mt-5'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-md-6 mt-5'>
                                    <a href='#' className='text-decoration-none'>
                                        <Card style={{ height: '11rem' }}>
                                            <Card.Body style={mystyle}>
                                                <Card.Title></Card.Title>
                                                <Card.Text className='fs-2 fw-bold mt-5'>
                                                Hematology Test
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </a>
                                </div>
                                <div className='col-md-6 mt-5'>
                                    <a href='#' className='text-decoration-none'>
                                        <Card style={{ height: '11rem' }}>
                                            <Card.Body style={mystyle}>
                                                <Card.Title></Card.Title>
                                                <Card.Text className='fs-2 fw-bold mt-5'>
                                                Urinalysis Test
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    )
}

export default Laboratory