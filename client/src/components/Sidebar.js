import React from 'react'
import THCLogo from '../images/THC_Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGroup, faBriefcaseMedical, faListOl, faRightFromBracket, faTableCellsLarge, faUserNurse, faUser, faBars } from '@fortawesome/free-solid-svg-icons'
import { useNavigate, useParams } from 'react-router-dom'
import $ from 'jquery';
import "jquery-ui-dist/jquery-ui";
import { useEffect } from 'react';

const Sidebar = () => {
    const navigate = useNavigate();
    const profileID = sessionStorage.getItem("profileId");
    
    const viewDashboard = () => {
        navigate('/dashboard');
    }

    const viewResidents = () => {
        navigate('/resident');
    }

    const viewQueue = () => {
        navigate('/queue');
    }

    const viewWorkers = () =>{
        navigate('/workers');
    }

    const viewProfile = () => {
        navigate(`/profile/${profileID}`);
    }

    useEffect(() => {
        $(document).ready(function(){
          $('#sidebarCloseToggle').on('click', function(){
            $('.mainLayout-left').removeClass('mainLayout-left-active');
          })
        })
      },[]);

    const logout = () => {
        alert("Account have been logged out!");
        sessionStorage.removeItem("accountId");
        sessionStorage.removeItem("profileId");
        sessionStorage.clear();
        navigate("/")
    }

    return (
        <div className="mainSideBarDiv sticky-top" style={{width: "280px", padding:"0"}}>
            <button className="btn btn-toggle d-inline-flex align-items-center justify-content-center rounded" id="sidebarCloseToggle" style={{margin: "10px 0 0 220px"}}>
                <FontAwesomeIcon icon={faBars} />
            </button>
            <a href="/" className="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none">
            <img src={THCLogo} alt='THC LOGO' width='225px' className='thcLogo'/>
            </a>
            <hr className='mx-2' style={{color: "#8EC3B0"}}/>
            <ul className="list-unstyled ps-0 mainSideBarDiv_list">
                <li className="mb-1">
                    <button 
                    className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                    onClick={()=> viewDashboard()}>
                    <FontAwesomeIcon icon={faTableCellsLarge} style={{marginRight: "13px"}} />
                    Dashboard
                    </button>
                </li>
                <li className="mb-1">
                    <button 
                        className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                        onClick={() => viewResidents()}>
                    <FontAwesomeIcon icon={faUserGroup} style={{marginRight: "10px"}} />
                    Residents
                    </button>
                </li>
                <li className="mb-1 servicesMainLi">
                    <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#service-collapse" aria-expanded="false" style={{marginLeft: "30px"}}>
                    <FontAwesomeIcon icon={faBriefcaseMedical} style={{marginRight: "13px"}} />
                    Services
                    </button>
                    <div className="collapse" id="service-collapse">
                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small servicesUl">
                        <li><a href="/prenatal" className="d-inline-flex text-decoration-none rounded">Prenatal</a></li>
                        <li><a href="/immunization" className="d-inline-flex text-decoration-none rounded">Immunization</a></li>
                        <li><a href="/dental" className="d-inline-flex text-decoration-none rounded">Dental</a></li>
                        <li><a href="/medicalcheckup" className="d-inline-flex text-decoration-none rounded">Medical Check-up</a></li>
                        <li><a href="/familyplanning" className="d-inline-flex text-decoration-none rounded">Family Planning</a></li>
                        <li>
                    <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed px-0" data-bs-toggle="collapse" data-bs-target="#laboratory-collapse" aria-expanded="false">
                        Laboratory
                        </button>
                            <ul className="collapse list-unstyled fw-normal pb-1 small" id="laboratory-collapse">
                                <li><a href="/hematology" className="d-inline-flex text-decoration-none rounded">Hematology Test</a></li>
                                <li><a href="/urinalysis" className="d-inline-flex text-decoration-none rounded">Urinalysis Test</a></li>
                            </ul>
                        </li>
                    </ul>
                    </div>
                </li>
                <li className="mb-1">
                    <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                        onClick={()=>viewQueue()}>
                    <FontAwesomeIcon icon={faListOl} style={{marginRight: "13px"}} />
                    Queue
                    </button>
                </li>
                <li className="mb-1">
                    <button 
                        className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                        onClick={()=>viewWorkers()}>
                    <FontAwesomeIcon icon={faUserNurse} style={{marginRight: "13px"}} />
                    Workers
                    </button>
                </li>
                <li className="mb-1">
                    <button 
                        className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                        onClick={()=>viewProfile()}>
                    <FontAwesomeIcon icon={faUser} style={{marginRight: "13px"}} />
                    Profile
                    </button>
                </li>
                <hr className='mx-2' style={{color: "#8EC3B0"}}/>
            </ul>
            <div className='bottomBtn'>
                <ul className='list-unstyled ps-0 mainSideBarDiv_list'>
                    <li className='mb-1'>
                        <button 
                            className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed "
                            onClick={logout}>
                            <FontAwesomeIcon icon={faRightFromBracket} style={{marginRight: "13px"}} />
                            Log Out
                        </button>  
                    </li>
                </ul>
                
            </div>
        </div>
    )
}

export default Sidebar