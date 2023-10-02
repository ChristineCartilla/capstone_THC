import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery';
import "jquery-ui-dist/jquery-ui";
import { useEffect } from 'react';

function SidebarOpenBtn() {
  useEffect(() => {
    $(document).ready(function(){
      $('#sidebarOpenToggle').on('click', function(){
        $('.mainLayout-left').addClass('mainLayout-left-active');
        $('#sidebarOpenToggle').hide();
      })
    })
  },[]);
  
  return (
    <button className="btn btn-toggle d-inline-flex align-items-center justify-content-center rounded" id="sidebarOpenToggle">
        <FontAwesomeIcon icon={faBars} />
    </button>
  )
}

export default SidebarOpenBtn