import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Loader from './Loader';

const Pinterest = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchShow, setSearchShow] = useState(false);

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const searchHandler = (e) => {
    e.preventDefault();
    setPage(1);
    fetchData();
  };

  const nextHandler = () => {
    setPage(page + 1);
    setSearchShow(true);
  };

  const prevHandler = () => {
    if (page > 1) {
      setPage(page - 1);
      setSearchShow(true);
    }
  };

  const fetchHomeData = async () => {
    setLoading(true);
    const URL = `https://api.unsplash.com/photos?page=${page}&per_page=20&client_id=JU7u_DW13aDNw7uWME36YfdBGiawuiCX1RvEnPH1zE8`;
    const response = await fetch(URL);
    const result = await response.json();
    setData(result.slice(0, 20));
    setLoading(false);
  };

  const fetchData = async () => {
    setLoading(true);
    if (search === '') {
      const URL = `https://api.unsplash.com/photos?page=${page}&per_page=20&client_id=JU7u_DW13aDNw7uWME36YfdBGiawuiCX1RvEnPH1zE8`;
      const response = await fetch(URL);
      const result = await response.json();
      setData(result.slice(0, 20)); 
      setLoading(false);
    } else {
      const URL = `https://api.unsplash.com/search/photos?page=${page}&query=${search}&per_page=20&client_id=JU7u_DW13aDNw7uWME36YfdBGiawuiCX1RvEnPH1zE8`;
      const response = await fetch(URL);
      const result = await response.json();
      setData(result.results.slice(0, 20)); 
      setLoading(false);
      setSearchShow(false);
    }
  };

  useEffect(() => {
    if (page === 1 && search === '') {
      fetchHomeData();
    } else if (searchShow) {
      fetchData();
    }
  }, [page, search]);

  return (
    <div className='w-full min-h-screen'>
      <div className='flex justify-center items-center'>
        <input
          type='text'
          placeholder='Describe What You`ve To See'
          onChange={onChange}
          value={search}
          className='w-[250px] border-red-400 border rounded-[50px] p-3'
        />
        <button
          onClick={searchHandler}
          className='ml-3 bg-red-400 p-3 text-white font-semibold border border-red-400 rounded-[10px] uppercase text-lg shadowCustom hover:opacity-80 transition'
        >
          Search
        </button>
      </div>
      <div className='container mx-auto mt-6'>
        {loading ? (
          <Loader />
        ) : (
          <div className='columns-2 md:columns-3 lg:columns-4 gap-4'>
            {data.map((image, index) => (
              <div key={index} className='mb-4 break-inside'>
                <Link to={`/${image.id}`} className='block'>
                  <img
                    src={image.urls.full}
                    alt='Pinterest Image'
                    className='w-full h-auto object-cover rounded-lg shadow-lg transition-all duration-300 hover:opacity-70'
                  />
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className='flex justify-center items-center mt-5 mb-20'>
        {(loading && page < 1) ? <Loader /> : (
          <div>
            <button
              onClick={prevHandler}
              className='p-3 bg-red-400 border rounded-[15px] mx-3 font-semibold text-lg uppercase hover:bg-red-200 text-white transition'
            >
              Previous
            </button>
            <button
              onClick={nextHandler}
              className='p-3 bg-red-400 border rounded-[15px] mx-3 font-semibold text-lg uppercase hover:bg-red-200 text-white transition'
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pinterest;
