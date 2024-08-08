import React, { useEffect, useState } from 'react'
import Loader from './Loader'
import imgGenerate from '../assets/imgenerate.jpg'

const ImageGenerator = () => {
  const [search, setSearch] = useState('')
  const [image, setImage] = useState('')
  const [loading, setLoading] = useState(false)
  const onChange = (e) => {
    setSearch(e.target.value);
  }
  const fetchApi = async (data) =>{
    setLoading(true)
    const response = await fetch(
      "https://api-inference.huggingface.co/models/Melonie/text_to_image_finetuned",
      {
        headers: {
          Authorization: "Bearer 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",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const result = await response.blob();
    setLoading(false)
    return URL.createObjectURL(result);
  }
  // API DOCUMENTATION => i am using async await (not .then)

  // query({"inputs": "Astronaut riding a horse"}).then((response) => {
  //   // Use image
  // });

  const handleClick = async(e) =>{
    e.preventDefault();
    const imageURL = await fetchApi({'inputs': search});
    setImage(imageURL);   
  }
  return (
    <div className='block md:flex flex-col justify-center items-center'>
      <div className='flex justify-center items-center'>
        <input type="text" 
        placeholder='Astronaut riding a horse'
        onChange={onChange}
        value={search}
        className='w-[250px] border-red-400 border rounded-[50px] p-3'
        />
        <button onClick={handleClick} className='ml-3 bg-red-400 p-3 text-white font-semibold border border-red-400 rounded-[10px] uppercase text-lg shadowCustom hover:opacity-80 transition'>Generate</button>
      </div>
      <div className='my-8'>
        {loading ? <Loader/> : !image ? <img src={imgGenerate}  className='w-[500px] shadow-lg rounded-md'/> : <img src={image} className='w-[500px] shadow-lg rounded-md'/>}
      </div>
    </div>
  )
}

export default ImageGenerator
