import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from "react";

const Worker_Searchbox = ({ setSearchResults, workers }) => {
  const [searchTerm, setSearchTerm] = useState("");


  const handleChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);

    // Filter workers based on the new search term as the user types
    const filteredWorkers = workers.filter((worker) =>
        
      worker.last_name.toLowerCase().includes(newSearchTerm.toLowerCase()) ||
      worker.first_name.toLowerCase().includes(newSearchTerm.toLowerCase())
      
    );

    setSearchResults(filteredWorkers);
  };

  return (
    <div className="searchInput-wrapper">
        <FontAwesomeIcon icon={faSearch} className='searchIcon' />
      <input
        type="text"
        className='px-1'
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default Worker_Searchbox;
