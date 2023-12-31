import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar.js';
import ViewDispensing from '../../components/ViewDispensing.js';
import SidebarOpenBtn from '../../components/SidebarOpenBtn.js';
import axios from 'axios';


const Dashboard = () => {
    const [babiesCount, setBabiesCount] = useState("");
    const [babiesPercentage, setBabiesPercentage] = useState("");
    const [childrenCount, setChildrenCount] = useState("");
    const [childrenPercentage, setChildrenPercentage] = useState("");
    const [teensCount, setTeensCount] = useState("");
    const [teensPercentage, setTeensPercentage] = useState("");
    const [adultsCount, setAdultsCount] = useState("");
    const [adultsPercentage, setAdultsPercentage] = useState("");
    const [seniorsCount, setSeniorsCount] = useState("");
    const [seniorsPercentage, setSeniorsPercentage] = useState("");
    const [monthlyVac, setMonthlyVac] = useState("");
    const [yearlyVac, setYearlyVac] = useState("");
    const [underweight, setUnderWeight] = useState("");
    const [normalweight, setNormalWeight] = useState("");
    const [overweight, setOverWeight] = useState("");
    const [obese, setObese] = useState("");
    const [allPrenatal, setAllPrenatal] = useState("");
    const [newAddedPrenatal, setNewAddedPrenatal] = useState("");
    const [todayPrenatalAssessment, setTodayPrenatalAssessment] = useState("");
    const [allImmunization, setAllImmunization] = useState("");
    const [newAddedImmunization, setNewAddedImmunization] = useState("");
    const [todayImmunizationAssessment, setTodayImmunizationAssessment] = useState("");
    const [methodPills, setMethodPills] = useState(0);
    const [methodDMPA, setMethodDMPA] = useState(0);
    const [methodImplant, setMethodImplant] = useState(0);
    const [methodUID, setMethodUID] = useState(0);

    useEffect(() => {
        getResidentRecords();
        getVaccine();
        getWeightClassification();
        getPrenatalRecords();
        getImmunizationRecords();
        getFPMethodAccepted();
    },[])

    const getResidentRecords = async () => {
        const babiesPercentage = await axios.get("/dashboard/age/percentage/babies");
        setBabiesCount(babiesPercentage.data.count);
        setBabiesPercentage(babiesPercentage.data.percentage);

        const childrenPercentage = await axios.get("/dashboard/age/percentage/children");
        setChildrenCount(childrenPercentage.data.count);
        setChildrenPercentage(childrenPercentage.data.percentage);

        const adultsPercentage = await axios.get("/dashboard/age/percentage/adults");
        setAdultsCount(adultsPercentage.data.count);
        setAdultsPercentage(adultsPercentage.data.percentage);

        const teensPercentage = await axios.get("/dashboard/age/percentage/teens");
        setTeensCount(teensPercentage.data.count);
        setTeensPercentage(teensPercentage.data.percentage);

        const seniorsPercentage = await axios.get("/dashboard/age/percentage/seniors");
        setSeniorsCount(seniorsPercentage.data.count);
        setSeniorsPercentage(seniorsPercentage.data.percentage);
    }

    const getVaccine = async () => {
        const vaccineMonth = await axios.get("/dashboard/vaccine/count/month");
        setMonthlyVac(vaccineMonth.data);

        const vaccineYear = await axios.get("/dashboard/vaccine/count/year");
        setYearlyVac(vaccineYear.data);
    }

    const getWeightClassification = async () => {
        const underweight = await axios.get("/dashboard/bmi/count/underweight/month");
        setUnderWeight(underweight.data);

        const normalweight = await axios.get("/dashboard/bmi/count/normalweight/month");
        setNormalWeight(normalweight.data);

        const overweight = await axios.get("/dashboard/bmi/count/overweight/month");
        setOverWeight(overweight.data);

        const obese = await axios.get("/dashboard/bmi/count/obese/month");
        setObese(obese.data);
    }

    const getPrenatalRecords = async () => {
        const prenatal1 = await axios.get("/dashboard/medicalrec/count/prenatal");
        setAllPrenatal(prenatal1.data);

        const prenatal2 = await axios.get("/dashboard/medicalrec/count/prenatal/month");
        setNewAddedPrenatal(prenatal2.data);

        const prenatal3 = await axios.get("/dashboard/medicalrec/count/prenatal/assessment/today");
        setTodayPrenatalAssessment(prenatal3.data);
    }

    const getImmunizationRecords = async () => {
        const immunization1 = await axios.get("/dashboard/medicalrec/count/immunization");
        setAllImmunization(immunization1.data);

        const immunization2 = await axios.get("/dashboard/medicalrec/count/immunization/month");
        setNewAddedImmunization(immunization2.data);

        const immunization3 = await axios.get("/dashboard/medicalrec/count/immunization/assessment/today");
        setTodayImmunizationAssessment(immunization3.data);
    }

    const getFPMethodAccepted = async () => {
        const data = (await axios.get("/dashboard/medicalrec/count/familyplanning/month")).data;
        data.map((method)=>{
            if(method._id === "Pills"){
                setMethodPills(method.count);
            } else if (method._id === "depot-medroxyprogesterone acetate(DMPA)"){
                setMethodDMPA(method.count);
            } else if ( method._id === "Implant") {
                setMethodImplant(method.count);
            } else {
                setMethodUID(method.count);
            }
        })
    }

    return ( 
        //create a div that will contain the sidebar and the body of the page
        <div className="">
            <SidebarOpenBtn />
            <div className="mainLayout">
                <div className="mainLayout-left">
                    <Sidebar />
                </div>
                <div className="container mainLayout-right p-0">
                <h1 className='text-white'>Barangay Talamban Health Statistics</h1>
                    <div className="dashboardHeader d-flex justify-content-left">
                        {/* <h1>Barangay Talamban Health Statistics</h1> */}
                        <span></span>
                    </div>
                    <div className="dashboardBody">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col">
                                    <div className="dashboardBody_container1">
                                        <div className="dashboardBody_container1_header">
                                            <h1>Total Number of Residents:</h1>
                                            <div className="hr"></div>
                                        </div>
                                        <div className="dashboardBody_container1_body">
                                            <div className="row">
                                                <div className="cardInnerDiv col-sm-12 col-md-3">
                                                    <div className='card'>
                                                        <div className='cardheader'>
                                                            <h5>BABIES</h5>
                                                            <span className='fw-light' style={{fontSize:"13px"}}>(Bellow 1 Yr. Old)</span>
                                                        </div>
                                                        <div className="card-body">
                                                            <div className="row">
                                                                <div className="col">
                                                                    <h5 className="card-title">{babiesCount>=0?babiesCount: "N/A"}</h5>
                                                                    <p className="card-text">Total Count in Records</p>
                                                                </div>
                                                                <div className="col">
                                                                    <h5 className="card-title">{babiesPercentage?babiesPercentage+"%": "N/A"}</h5>
                                                                    <p className="card-text">From all Records</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cardInnerDiv col-sm-12 col-md-3">
                                                    <div className='card'>
                                                        <div className='cardheader'>
                                                            <h5>CHILDREN </h5>
                                                            <span className='fw-light' style={{fontSize:"13px"}}>(Ages from 1 to 17 Yrs. Old)</span> 
                                                        </div>
                                                        <div className="card-body">
                                                            <div className="row">
                                                                <div className="col">
                                                                    <h5 className="card-title">{childrenPercentage?childrenPercentage+"%": "N/A"}</h5>
                                                                    <p className="card-text">Are Children From All Records Ages From 1 to 12 Yrs. Old</p>
                                                                </div>
                                                                <div className="col">
                                                                    <h5 className="card-title">{teensPercentage?teensPercentage+"%": "N/A"}</h5>
                                                                    <p className="card-text">Are Teens From all Records Ages From 13 to 17 Yrs. Old</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cardInnerDiv col-sm-12 col-md-3">
                                                    <div className='card'>
                                                        <div className='cardheader'>
                                                            <h5>ADULTS </h5>
                                                            <span className='fw-light' style={{fontSize:"13px"}}>(Ages from 18 to 64 Yrs. Old)</span> 
                                                        </div>
                                                        <div className="card-body">
                                                            <div className="row">
                                                                <div className="col">
                                                                    <h5 className="card-title">{adultsCount>=0?adultsCount: "N/A"}</h5>
                                                                    <p className="card-text">Total Count in Records</p>
                                                                </div>
                                                                <div className="col">
                                                                    <h5 className="card-title">{adultsPercentage?adultsPercentage+"%": "N/A"}</h5>
                                                                    <p className="card-text">From all Records</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cardInnerDiv col-sm-12 col-md-3">
                                                    <div className='card'>
                                                        <div className='cardheader'>
                                                            <h5>SENIOR CITIZENS </h5>
                                                            <span className='fw-light' style={{fontSize:"13px"}}>(Ages Above 65 Yrs. Old)</span> 
                                                        </div>
                                                        <div className="card-body">
                                                            <div className="row">
                                                                <div className="col">
                                                                    <h5 className="card-title">{seniorsCount>=0?seniorsPercentage: "N/A"}</h5>
                                                                    <p className="card-text">Total Count in Records</p>
                                                                </div>
                                                                <div className="col">
                                                                    <h5 className="card-title">{seniorsPercentage?seniorsPercentage+"%": "N/A"}</h5>
                                                                    <p className="card-text">From all Records</p>
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
                            <div className="row" style={{marginTop: "20px"}}>
                                <div className='content1 col-sm-12 col-md-4 my-2' >
                                    <div className="dashboardBody_container2" style={{minHeight: "264px"}}>
                                        <div className="dashboardBody_container2_body">
                                            <div className="row">
                                                <div className="col">
                                                    <div className="card">
                                                        <div className='cardheader'>
                                                            <h5 className='text-start'>Child Vaccination:</h5>
                                                            <div className="hr"></div>
                                                        </div>
                                                        <div className="card-body">
                                                            <div className="row">
                                                                <div className="col-6 cardInnerDiv">
                                                                    <h5 className="card-title">{monthlyVac>=0?monthlyVac:"N/A"}</h5>
                                                                    <p className="card-text">Vaccines are Given To Children For The Past 30 Days.</p>
                                                                </div>
                                                                <div className="col-6 cardInnerDiv">
                                                                    <h5 className="card-title">{yearlyVac>=0?yearlyVac:"N/A"}</h5>
                                                                    <p className="card-text">Total Count Of Vaccines Administered To Children In The Past Year.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                                <div className='content2 col-sm-12 col-md-8 my-2' >
                                    <div className="dashboardBody_container3" style={{height: "264px" }}>
                                        <div className="dashboardBody_container3_body">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="card">
                                                        <div className='cardheader'>
                                                            <h5 className='text-start'>Weight Classifications:</h5>
                                                            <div className="hr"></div>
                                                        </div>
                                                        <div className="card-body d-flex justify-content-evenly">
                                                            <div className="row py-3">
                                                                <div className="col-sm-3">
                                                                    <h5 className="card-title">{underweight>=0?underweight: "N/A"} <br /> UnderWeight</h5>
                                                                    <p className="card-text">Count For The Past Month</p>
                                                                </div>
                                                                <div className="col-sm-3">
                                                                    <h5 className="card-title">{normalweight>=0?normalweight: "N/A"} <br /> Normal Weight</h5>
                                                                    <p className="card-text">Count For The Past Month</p>
                                                                </div>
                                                                <div className="col-sm-3">
                                                                    <h5 className="card-title">{overweight>=0?overweight: "N/A"} <br /> OverWeight</h5>
                                                                    <p className="card-text">Count For The Past Month</p>
                                                                </div>
                                                                <div className="col-sm-3">
                                                                    <h5 className="card-title">{obese>=0?obese: "N/A"} <br /> Obese</h5>
                                                                    <p className="card-text">Count For The Past Month</p>
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
                                            <div className='row'>
                                                <div className='col-sm-12 col-md-4 my-2'>
                                                    <div className="card m-0">
                                                        <div className='cardheader'><h5>PRENATAL</h5></div>
                                                        <div className="card-body">
                                                            <div className="cardcontent d-flex justify-content-evenly">
                                                                {/*this will contain three rows of data*/}
                                                                <div className="containercontent">
                                                                    <div className="row py-2">
                                                                        <div className="col-3">
                                                                            <h5 className="card-title">{allPrenatal}</h5>
                                                                        </div>
                                                                        <div className="col-9">
                                                                            <h5 className="card-text text-start">Total Prenatal Records In The Health Center.</h5>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row py-2">
                                                                        <div className="col-3">
                                                                            <h5 className="card-title">{newAddedPrenatal}</h5>
                                                                        </div>
                                                                        <div className="col-9">
                                                                            <h5 className="card-text text-start">Number Of Recently Added Prenatal Records Within The Last Month.</h5>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row py-2">
                                                                        <div className="col-3">
                                                                            <h5 className="card-title">{todayPrenatalAssessment}</h5>
                                                                        </div>
                                                                        <div className="col-9">
                                                                            <h5 className="card-text text-start">Number Of Prenatal Assessment Administered Today.</h5>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-sm-12 col-md-4 my-2'>
                                                    <div className="card m-0">
                                                        <div className='cardheader'><h5>IMMUNIZATION</h5></div>
                                                        <div className="card-body">
                                                            <div className="cardcontent d-flex justify-content-evenly">
                                                                {/*this will contain three rows of data*/}
                                                                <div className="containercontent">
                                                                    <div className="row py-2">
                                                                        <div className="col-3">
                                                                            <h5 className="card-title">{allImmunization}</h5>
                                                                        </div>
                                                                        <div className="col-9">
                                                                            <h5 className="card-text text-start">Total Immunization Records In The Health Center.</h5>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row py-2">
                                                                        <div className="col-3">
                                                                            <h5 className="card-title">{newAddedImmunization}</h5>
                                                                        </div>
                                                                        <div className="col-9">
                                                                            <h5 className="card-text text-start">Number Of Recently Added Immunization Records Within The Last Month.</h5>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row py-2">
                                                                        <div className="col-3">
                                                                            <h5 className="card-title">{todayImmunizationAssessment}</h5>
                                                                        </div>
                                                                        <div className="col-9">
                                                                            <h5 className="card-text text-start">Number Of Immunization Assessment Administered Today.</h5>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-sm-12 col-md-4 my-2'>
                                                    <div className="card m-0">
                                                        <div className='cardheader'>
                                                            <h5>FAMILY PLANNING</h5>
                                                            
                                                        </div>
                                                        <div className="card-body">
                                                            <div className="cardcontent d-flex justify-content-evenly">
                                                                {/*this will contain three rows of data*/}
                                                                <div className="containercontent">
                                                                    <div className="row py-4">
                                                                        <div className="col-12">
                                                                            <h5 className="card-text">Method Accepted Within A Month</h5>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row py-2">
                                                                        <div className="col-sm-6 d-flex justify-content-center">
                                                                            <h3>{methodPills} </h3>
                                                                            <h6 className="mx-1"> Residents Took Pills</h6>
                                                                        </div>
                                                                        <div className="col-sm-6 d-flex justify-content-center">
                                                                            <h3>{methodDMPA} </h3>
                                                                            <h6 className="mx-1"> Residents Took DMPA</h6>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row py-2">
                                                                        <div className="col-sm-6 d-flex justify-content-center">
                                                                            <h3>{methodImplant} </h3>
                                                                            <h6 className="mx-1"> Residents Took Implant</h6>
                                                                        </div>
                                                                        <div className="col-sm-6 d-flex justify-content-center">
                                                                            <h3>{methodUID} </h3>
                                                                            <h6 className="mx-1"> Residents Took UID</h6>
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