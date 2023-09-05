
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ResidentsSpecificResident = () => {
  const { profile_id } = useParams();
  const [resident, setResident] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/profiles/"+ profile_id).then((res) => {
      return res.json();
    }).then((resp) => {
      setResident(resp);
    }).catch((err) => {
      console.log(err.message);
    })


  }, []);


  return (
    <>
      <div>{resident.first_name}</div>
      <div>ResidentsSpecificResident</div>
    </>
    
  )
}

export default ResidentsSpecificResident