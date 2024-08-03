import React, { useEffect, useState } from 'react'
import { FaComment } from 'react-icons/fa'
import { FcLike } from 'react-icons/fc'
import { PiShareFatFill } from 'react-icons/pi'
import { Link, useParams } from 'react-router-dom'

const PinterestId = () => {
  const { id } = useParams()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  const loadingScreen =() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 4000);
  }

  const fetchApi = async () => {
    loadingScreen();
    const URL = `https://api.unsplash.com/photos/${id}/?client_id=JU7u_DW13aDNw7uWME36YfdBGiawuiCX1RvEnPH1zE8`;
    const response = await fetch(URL);
    const res = await response.json();
    setData({
      dataB: res,
      sponsorS: res.sponsorship,
      tagS: res.tags,
    });
  }
  useEffect(() => {
    fetchApi();
  }, [])
  if (data) {
    console.log(data.tagS);
  }
  return (
    <div>
      <Link to={'/'} className='text-red-400 text-[22px] font-semibold uppercase border border-red-400 rounded-md p-3 ml-3 hover:bg-red-400 hover:text-white shadowCustom'>Back to Homepage</Link>
      <div className='flex justify-center items-center flex-col mb-10 mt-20'>
        {loading ? <h1>Loading...</h1> : !data ? <h1>Loading...</h1> :(
          <div className='border-[2px] border-red-200 rounded-md pb-6 px-1 shadow-2xl bg-gray-200'>
            <img src={data.dataB.links.download} alt="" className='w-[600px] rounded-md' />
            <div className=''>
              <div className='flex justify-between items-center mt-2'>
                <FcLike className='text-[28px] mr-1 cursor-pointer' /><FaComment className='text-[26px] mr-1 text-red-500 cursor-pointer'/><PiShareFatFill className='text-[26px] mr-1 text-red-500 cursor-pointer'/>
              </div>
              <h1 className='font-normal text-[18px] font-serif'> Liked by {data.dataB.likes}k Members</h1>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default PinterestId
