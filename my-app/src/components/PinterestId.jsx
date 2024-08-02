import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PinterestId = () => {
    const { id } = useParams()
    const [data, setData] = useState([])

    const fetchApi = async () => {
        const URL = `https://api.unsplash.com/photos/${id}/?client_id=JU7u_DW13aDNw7uWME36YfdBGiawuiCX1RvEnPH1zE8`;
        const response = await fetch(URL);
        const res= await response.json();
        setData(res);
        
    }
    useEffect(()=>{
        fetchApi();
    },[])
  return (
    <div>
        <img src={data.urls.full} alt="" className='w-[500px]'/>
    </div>
  )
}

export default PinterestId
