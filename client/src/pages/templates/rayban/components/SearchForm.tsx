
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchForm = ({ onSearch }) => {

  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term); 
  };

  return (
    <div className="relative flex bg-white mr-6 my-2 rounded-2xl">
      <div className="absolute ml-3 mt-4 cursor-pointer  text-purple-lighter">
        <FaSearch  />
      </div>
      <input type="search" className="bg-purple-white   border-0 p-3 ml-10 w-full rounded-2xl"
              value={searchTerm}
              onChange={handleChange}

      placeholder="Search by name..." />
    </div>
  );
};

export default SearchForm;
