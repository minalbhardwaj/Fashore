import React, { useState } from 'react';
import { HiMagnifyingGlass, HiMiniXMark } from 'react-icons/hi2';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setFilters } from './../../redux/slices/productsSlice';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Toggle search input
  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
  }

  // Handle search submission
  const handleSearch = (e) => {
    e.preventDefault();

    const trimmedTerm = searchTerm.trim();
    if (!trimmedTerm) return; // prevent empty search

    // Update Redux filter
    dispatch(setFilters({ search: trimmedTerm }));

    // Navigate to search results page
    navigate(`/collections/all?search=${encodeURIComponent(trimmedTerm)}`);

    // Close search bar
    setIsOpen(false);
  }

  return (
    <div className={`flex items-center justify-center w-full transition-all duration-300 
      ${isOpen ? "absolute top-0 left-0 w-full bg-white h-24 z-50" : "w-auto"}`}>
      
      {isOpen ? (
        <form onSubmit={handleSearch} className='relative flex items-center justify-center w-full'>
          <div className='relative w-1/2'>
            <input 
              type="text" 
              placeholder='Search products...' 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)}
              className='bg-gray-200 px-4 py-2 pl-2 pr-12 rounded focus:outline-none w-full placeholder:text-gray-700'
            />

            {/* Search button */}
            <button type='submit'
              className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800'>
              <HiMagnifyingGlass className='h-6 w-6' />
            </button>
          </div>

          {/* Close button */}
          <button type='button'
            onClick={handleSearchToggle}
            className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800 cursor-pointer'>
            <HiMiniXMark className='h-6 w-6' />
          </button>
        </form>
      ) : (
        <button onClick={handleSearchToggle}>
          <HiMagnifyingGlass className='h-6 w-6 cursor-pointer' />
        </button>
      )}
    </div>
  );
}

export default SearchBar;
