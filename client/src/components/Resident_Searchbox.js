import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Resident_Searchbox = ({setSearchResults}) => {
    const [filterData, setFilterData] = useState([]);

    useEffect(() => {
        fetchdata();
    },[])

    const fetchdata = () => {
        fetch("http://localhost:8001/account/fetchresident")
        .then((response) => response.json())
        .then((list) => {
            setSearchResults(list)
            setFilterData(list);
        })
        .catch(err => console.log(err));
    }
    
    const handleSearchChange = (value) => {
        value = value.toLowerCase();
        const res = filterData.filter((patient) => {
            return (
                patient && 
                (patient.profile[0].first_name ||patient.profile[0].last_name) && 
                (patient.profile[0].first_name.toLowerCase().includes(value) ||
                patient.profile[0].last_name.toLowerCase().includes(value))
            )
        });
        setSearchResults(res)
    }

    return (
    <div className='searchInput-wrapper'>
        <FontAwesomeIcon icon={faSearch} className='searchIcon' />
        <input 
            className='px-1'
            placeholder='Search...'
            onChange={e => handleSearchChange(e.target.value)} />
    </div>
  )
}

export default Resident_Searchbox