import React, { useEffect, useState } from 'react'
import './Navbar.css'

const Pinterest = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('')

  const onChange = (e) => {
    setSearch(e.target.value)
  }
  const searchHandler = (e) => {
    e.preventDefault();
    search;
  }
  const nextHandler = () => {
    setPage(page + 1);

  }
  const prevHandler = () => {
    setPage(page - 1);
  }
  const fetchData = async () => {
    if (search == '') {
      const URL = `https://api.unsplash.com/photos?page=${page}&client_id=JU7u_DW13aDNw7uWME36YfdBGiawuiCX1RvEnPH1zE8`;
      const response = await fetch(URL);
      const result = await response.json()
      console.log(result);
      setData(result)
    }
    else {
      const URL = `https://api.unsplash.com/search/photos?page=${page}&query=${search}&client_id=JU7u_DW13aDNw7uWME36YfdBGiawuiCX1RvEnPH1zE8&per_page=10`;
      const response = await fetch(URL);
      const result = await response.json();
      setData(result.results);
    }
  }
  useEffect(() => {
    setTimeout(() => {
      fetchData()
    }, 6000)

  }, [page, search])
  return (
    <div>
      <div className='flex justify-center items-center'>
        <input type="text" placeholder='Describe What You`ve To See' onChange={onChange} value={search} className='w-[250px] border-red-400 border rounded-[50px] p-3'/>
        <button onClick={searchHandler} className='ml-3 bg-red-400 p-3 text-white font-semibold border border-red-400 rounded-[10px] uppercase text-lg shadowCustom hover:opacity-80 transition'>Search</button>
      </div>
      <div className='flex flex-wrap justify-center mt-6'>
        {(data == '' || !search) ? <h2>Loading...</h2> : data.map((image, index) => (
          <div className='flex' key={index}>
            <img src={image.urls.full} className='w-[400px] mx-3 my-3 border rounded-[10px] shadow-2xl cursor-pointer hover:opacity-50 hover:transition-opacity' />
          </div>
        ))}
      </div>
      <div className='flex justify-center items-center mt-5 mb-20'>
        {(data == '') ? <></> : (
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
