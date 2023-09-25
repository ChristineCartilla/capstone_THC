import React from 'react';
import Sidebar from '../../components/Sidebar.js';
import ViewDispensing from '../../components/ViewDispensing.js';


const Dashboard = () => {
    return ( 
        //create a div that will contain the sidebar and the body of the page
        <div className="container-fluid">
            <div className="row">
                <Sidebar />
                <div className="col p-0">
                    <div className="dashboardHeader d-flex justify-content-left">
                        <h1>Barangay Talamban Health Statistics</h1>
                        <span></span>
                    </div>
                    <div className="dashboardBody">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col">
                                    <div className="dashboardBody_container1">
                                        <div className="dashboardBody_container1_header">
                                            <h1>Vital Signs Statistics</h1>
                                            <div className="hr"></div>
                                        </div>
                                        <div className="dashboardBody_container1_body">
                                            <div className="row">
                                                <div className="col d-flex justify-content-between">
                                                    <div className="card">
                                                        <div className='cardheader'><h5>Blood Pressure</h5></div>
                                                        <div className="card-body">
                                                            <div className="row">
                                                                <div className="col">
                                                                    <h5 className="card-title">120 mmhg</h5>
                                                                    <p className="card-text">Average Systolic Blood Pressure</p>
                                                                </div>
                                                                <div className="col">
                                                                    <h5 className="card-title">15%</h5>
                                                                    <p className="card-text">patients with elevated blood pressure</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="vl"></div>
                                                    <div className="card">
                                                        <div className='cardheader'><h5>Temperature</h5></div>
                                                        <div className="card-body">
                                                            <div className="row">
                                                                <div className="col">
                                                                    <h5 className="card-title">37°C</h5>
                                                                    <p className="card-text">Average Body Temperature</p>
                                                                </div>
                                                                <div className="col">
                                                                    <h5 className="card-title">5%</h5>
                                                                    <p className="card-text">patients with fever</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="vl"></div>
                                                    <div className="card">
                                                        <div className='cardheader'><h5>Height/Weight</h5></div>
                                                        <div className="card-body">
                                                            <div className="row">
                                                                <div className="col">
                                                                    <h5 className="card-title">160 cm</h5>
                                                                    <p className="card-text">Average Height</p>
                                                                </div>
                                                                <div className="col">
                                                                    <h5 className="card-title">160 cm</h5>
                                                                    <p className="card-text">Average Height</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="vl"></div>
                                                    <div className="card">
                                                        <div className='cardheader'><h5>Pulse Rate</h5></div>
                                                        <div className="card-body">
                                                                    <h5 className="card-title">70 BPM</h5>
                                                                    <p className="card-text">Average Heart Rate</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className='content1 col-sm-4'>
                                    <div className="dashboardBody_container2">
                                        <div className="dashboardBody_container2_body">
                                            <div className="row">
                                                <div className="col">
                                                    <div className="card">
                                                        <div className='cardheader d-flex justify-content-left'><h5>ADULT BODY MASS INDEX</h5></div>
                                                        <div className="card-body d-flex justify-content-evenly">
                                                            <div className="row">
                                                                <div className="col">
                                                                    <h5 className="card-title">25 <br /> Overweight</h5>
                                                                    <p className="card-text">Average Adult BMI</p>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="vl"></div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col">
                                                                    <h5 className="card-title">20%</h5>
                                                                    <p className="card-text">Patient's BMI <br /> indicating obesity</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                                <div className='content2 col-sm-8'>
                                <div className="dashboardBody_container3">
                                        <div className="dashboardBody_container3_body">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="card">
                                                        <div className='cardheader d-flex justify-content-left'><h5>Children Body Mass Index</h5></div>
                                                        <div className="card-body d-flex justify-content-evenly">
                                                        <div className="row">
                                                                <div className="col">
                                                                    <h5 className="card-title">18.5 <br /> Normal</h5>
                                                                    <p className="card-text">Average Adult BMI</p>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="vl"></div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col">
                                                                    <h5 className="card-title">30%</h5>
                                                                    <p className="card-text">Children BMI <br /> indicating obesity</p>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="vl"></div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col">
                                                                    <h5 className="card-title">10%</h5>
                                                                    <p className="card-text">Children BMI <br /> indicating underweight</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                            </div> 
                            <div className="row">
                                <div className="col">
                                    <div className="dashboardBody_container4">
                                        <div className="col d-flex justify-content-evenly">
                                            <div className="card">
                                                <div className='cardheader'><h5>PRENATAL</h5></div>
                                                <div className="card-body">
                                                    <div className="cardcontent d-flex justify-content-evenly">
                                                        {/*this will contain three rows of data*/}
                                                        <div className="containercontent">
                                                            <div className="row p-1">
                                                                <div className="col">
                                                                    <h5 className="card-title">10.2 weeks</h5>
                                                                </div>
                                                                <div className="col">
                                                                    <h5 className="card-text"> Average gestational age at first visit</h5>
                                                                </div>
                                                            </div>
                                                            <div className="row p-1">
                                                                <div className="col">
                                                                    <h5 className="card-title"> 25 cm</h5>
                                                                </div>
                                                                <div className="col">
                                                                    <h5 className="card-text">Average fundal height measurements throughout pregnancy</h5>
                                                                </div>
                                                            </div>
                                                            <div className="row p-1">
                                                                <div className="col">
                                                                    <h5 className="card-title">140 bpm</h5>
                                                                </div>
                                                                <div className="col">
                                                                    <h5 className="card-text">Average fetal heart rate</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                            
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className='cardheader'><h5>IMMUNIZATION</h5></div>
                                                <div className="card-body">
                                                    <div className="cardcontent d-flex justify-content-evenly">
                                                        {/*this will contain three rows of data*/}
                                                        <div className="containercontent">
                                                            <div className="row p-1">
                                                                <div className="col">
                                                                    <h5 className="card-title">10.2 weeks</h5>
                                                                </div>
                                                                <div className="col">
                                                                    <h5 className="card-text"> Average gestational age at first visit</h5>
                                                                </div>
                                                            </div>
                                                            <div className="row p-1">
                                                                <div className="col">
                                                                    <h5 className="card-title"> 25 cm</h5>
                                                                </div>
                                                                <div className="col">
                                                                    <h5 className="card-text">Average fundal height measurements throughout pregnancy</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                            
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className='cardheader'><h5>FAMILY PLANNING</h5></div>
                                                <div className="card-body">
                                                    <div className="cardcontent d-flex justify-content-evenly">
                                                        {/*this will contain three rows of data*/}
                                                        <div className="containercontent">
                                                            <div className="row p-1">
                                                                <div className="col">
                                                                    <h5 className="card-title">10.2 weeks</h5>
                                                                </div>
                                                                <div className="col">
                                                                    <h5 className="card-text"> Average gestational age at first visit</h5>
                                                                </div>
                                                            </div>
                                                            <div className="row p-1">
                                                                <div className="col">
                                                                    <h5 className="card-title"> 25 cm</h5>
                                                                </div>
                                                                <div className="col">
                                                                    <h5 className="card-text">Average fundal height measurements throughout pregnancy</h5>
                                                                </div>
                                                            </div>
                                                            <div className="row p-1">
                                                                <div className="col">
                                                                    <h5 className="card-title">140 bpm</h5>
                                                                </div>
                                                                <div className="col">
                                                                    <h5 className="card-text">Average fetal heart rate</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                            
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                            <div className="row">
                                <div className="col">
                                    <div className="dashboardBody_container5">
                                        <div className="col d-flex justify-content-evenly">
                                            <div className="card">
                                                <div className='cardheader'><h5>DENTAL</h5></div>
                                                <div className="card-body">
                                                    <div className="cardcontent d-flex justify-content-evenly">
                                                        {/*this will contain three rows of data*/}
                                                        <div className="containercontent">
                                                            <div className="row p-1">
                                                                <div className="col">
                                                                    <h5 className="card-title">300</h5>
                                                                </div>
                                                                <div className="col">
                                                                    <h5 className="card-text">Number of cleaning procedure done</h5>
                                                                </div>
                                                            </div>
                                                            <div className="row p-1">
                                                                <div className="col">
                                                                    <h5 className="card-title">100</h5>
                                                                </div>
                                                                <div className="col">
                                                                    <h5 className="card-text">Number of extraction procedure done</h5>
                                                                </div>
                                                            </div>
                                                            <div className="row p-1">
                                                                <div className="col">
                                                                    <h5 className="card-title">2.5</h5>
                                                                </div>
                                                                <div className="col">
                                                                    <h5 className="card-text">Average decayed, missing, or filled tooth</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                            
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className='cardheader'><h5>MEDICAL CHECKUP</h5></div>
                                                <div className="card-body">
                                                    <div className="cardcontent d-flex justify-content-evenly">
                                                        {/*this will contain three rows of data*/}
                                                        <div className="containercontent">
                                                            <div className="row p-1">
                                                                <div className="col">
                                                                    <h5 className="card-title">300</h5>
                                                                </div>
                                                                <div className="col">
                                                                    <h5 className="card-text"> Number of medical check-ups conducted</h5>
                                                                </div>
                                                            </div>
                                                            <div className="row p-1">
                                                                <div className="col">
                                                                    <h5 className="card-title">20 %</h5>
                                                                </div>
                                                                <div className="col">
                                                                    <h5 className="card-text">Patients were diagnosed with hypertension</h5>
                                                                </div>
                                                            </div>
                                                            <div className="row p-1">
                                                                <div className="col">
                                                                    <h5 className="card-title">10 %</h5>
                                                                </div>
                                                                <div className="col">
                                                                    <h5 className="card-text">Patients were diagnosed with food allergies</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                            
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="cardcontent d-flex justify-content-evenly">
                                                        {/*this will contain three rows of data*/}
                                                        <div className="containercontent">
                                                            <div className="row p-1">
                                                                <div className="col">
                                                                    <h5 className="card-title"> 8 %</h5>
                                                                </div>
                                                                <div className="col">
                                                                    <h5 className="card-text"> Patients were diagnosed with asthma</h5>
                                                                </div>
                                                            </div>
                                                            <div className="row p-1">
                                                                <div className="col">
                                                                    <h5 className="card-title"> 8 %</h5>
                                                                </div>
                                                                <div className="col">
                                                                    <h5 className="card-text">Patients were diagnosed with skin infections</h5>
                                                                </div>
                                                            </div>
                                                            <div className="row p-1">
                                                                <div className="col">
                                                                    <h5 className="card-title"> 7 %</h5>
                                                                </div>
                                                                <div className="col">
                                                                    <h5 className="card-text">Patients were diagnosed with diarrhea</h5>
                                                                </div>
                                                            </div>
                                                            <div className="row p-1">
                                                                <div className="col">
                                                                    <h5 className="card-title"> 25 %</h5>
                                                                </div>
                                                                <div className="col">
                                                                    <h5 className="card-text">Patients were referred to other institutions</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                            
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>    
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="dashboardBody_container6">
                                        <div className="col d-flex justify-content-evenly">
                                            <div className="card">
                                                <div className='cardheader'><h5>HEMATOLOGY</h5></div>
                                                <div className="card-body">
                                                    <div className="cardcontent d-flex justify-content-evenly">
                                                        {/*this will contain three rows of data*/}
                                                        <div className="containercontent">
                                                            <div className="row p-1">
                                                                <div className="col">
                                                                    <h5 className="card-title">150</h5>
                                                                </div>
                                                                <div className="col">
                                                                    <h5 className="card-text">Number of hematology tests performed</h5>
                                                                </div>
                                                            </div>
                                                            <div className="row p-1">
                                                                <div className="col">
                                                                    <h5 className="card-title"> 5 %</h5>
                                                                </div>
                                                                <div className="col">
                                                                    <h5 className="card-text">Patients had anemia</h5>
                                                                </div>
                                                            </div>
                                                            <div className="row p-1">
                                                                <div className="col">
                                                                    <h5 className="card-title">2 %</h5>
                                                                </div>
                                                                <div className="col">
                                                                    <h5 className="card-text">Patients had leukocytosis</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                            
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className='cardheader'><h5>URINALYSIS</h5></div>
                                                <div className="card-body">
                                                    <div className="cardcontent d-flex justify-content-evenly">
                                                        {/*this will contain three rows of data*/}
                                                        <div className="containercontent">
                                                            <div className="row p-1">
                                                                <div className="col">
                                                                    <h5 className="card-title">200</h5>
                                                                </div>
                                                                <div className="col">
                                                                    <h5 className="card-text">Number of urinalysis tests conducted</h5>
                                                                </div>
                                                            </div>
                                                            <div className="row p-1">
                                                                <div className="col">
                                                                    <h5 className="card-title">6</h5>
                                                                </div>
                                                                <div className="col">
                                                                    <h5 className="card-text">Average pH value</h5>
                                                                </div>
                                                            </div>
                                                            <div className="row p-1">
                                                                <div className="col">
                                                                    <h5 className="card-title">8 %</h5>
                                                                </div>
                                                                <div className="col">
                                                                    <h5 className="card-text">Patients tested positive for urinary tract infection</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>    
                            </div> 
                            <ViewDispensing />
                        </div>
                    </div>
                </div>
            </div>

        </div>

     );
}
 
export default Dashboard;