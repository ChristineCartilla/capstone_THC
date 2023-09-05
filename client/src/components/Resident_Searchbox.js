import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Resident_Searchbox = ({setSearchResults}) => {
    const [filterData, setFilterData] = useState([]);

    useEffect(() => {
        const fetchdata = () => {
            fetch("http://localhost:8000/accounts?_embed=profiles")
            .then((response) => response.json())
            .then((list) => {
                setSearchResults(list)
                setFilterData(list);
            })
            .catch(err => console.log(err));
            
        }
        
        fetchdata();
    },[])


    const handleSearchChange = (value) => {
        value = value.toLowerCase();
        const res = filterData.filter((patient) => {
            return (
                patient && 
                patient.profiles[0].last_name && patient.profiles[0].last_name.toLowerCase().includes(value)
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