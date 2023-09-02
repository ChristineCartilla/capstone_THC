import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Searchbox = ({setSearchResults}) => {
    const [filterData, setFilterData] = useState([]);

    useEffect(() => {
        const fetchdata = () => {
            fetch("http://localhost:8000/profiles")
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
                (patient.first_name ||patient.last_name) && 
                (patient.first_name.toLowerCase().includes(value) ||
                patient.last_name.toLowerCase().includes(value))
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

export default Searchbox