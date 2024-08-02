import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

const Pinterest = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchShow, setSearchShow] = useState(false)

  const onChange = (e) => {
    setSearch(e.target.value)
  }
  const searchHandler = (e) => {
    e.preventDefault();
    setPage(1)
    fetchData()
  }
  const nextHandler = () => {
    setPage(page + 1);
    setSearchShow(true)

  }
  const prevHandler = () => {
    if (page > 1) {
      setPage(page - 1);
      setSearchShow(true)
    }
  }
  const fetchHomeData = async () => {
    setLoading(true);
    const URL = `https://api.unsplash.com/photos?page=${page}&client_id=JU7u_DW13aDNw7uWME36YfdBGiawuiCX1RvEnPH1zE8`;
    const response = await fetch(URL);
    const result = await response.json()
    setData(result)
    setLoading(false)
  }
  const fetchData = async () => {
    setLoading(true);
    if (search == '') {
      const URL = `https://api.unsplash.com/photos?page=${page}&client_id=JU7u_DW13aDNw7uWME36YfdBGiawuiCX1RvEnPH1zE8`;
      const response = await fetch(URL);
      const result = await response.json()
      setData(result)
      setLoading(false)

    }
    else {
      const URL = `https://api.unsplash.com/search/photos?page=${page}&query=${search}&client_id=JU7u_DW13aDNw7uWME36YfdBGiawuiCX1RvEnPH1zE8&per_page=10`;
      const response = await fetch(URL);
      const result = await response.json();
      setData(result.results);
      setLoading(false)
      setSearchShow(false)


    }
  }

  useEffect(() => {
    setTimeout(() => {
      if (page === 1 && search === '') {
        fetchHomeData()
      }
      else if (searchShow) {
        fetchData()
      }
    }, 6000)

  }, [page, search])
  return (
    <div>
      <div className='flex justify-center items-center'>
        <input type="text" placeholder='Describe What You`ve To See' onChange={onChange} value={search} className='w-[250px] border-red-400 border rounded-[50px] p-3' />
        <button onClick={searchHandler} className='ml-3 bg-red-400 p-3 text-white font-semibold border border-red-400 rounded-[10px] uppercase text-lg shadowCustom hover:opacity-80 transition'>Search</button>
      </div>
      <div className='flex flex-wrap justify-center mt-6'>
        {loading ? (
          <h2>Loading...</h2>
        ) : data.length === 0 && !search ? (
          <h2>No Results Found</h2>
        ) : data.map((image, index) => (
          <div className='flex' key={index}>
            <Link to={`/${image.id}`} className='flex'>
              <img src={image.urls.full} className='w-[400px] mx-3 my-3 border rounded-[10px] shadow-2xl cursor-pointer hover:opacity-50 hover:transition-opacity' />
            </Link>
          </div>
        ))}
      </div>
      <div className='flex justify-center items-center mt-5 mb-20'>
        {(loading && page < 1) ? <h1>Loading...</h1> : (
          <div>
            <button onClick={prevHandler} className='p-3 bg-red-400 border rounded-[15px] mx-3 font-semibold text-lg uppercase hover:bg-red-200 text-white transition'>Previous</button>
            <button onClick={nextHandler} className='p-3 bg-red-400 border rounded-[15px] mx-3 font-semibold text-lg uppercase hover:bg-red-200 text-white transition'>Next</button>
          </div>
        )}

      </div>
    </div>
  )
}

export default Pinterest

