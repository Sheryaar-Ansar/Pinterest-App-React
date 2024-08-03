import React, { useState } from 'react';

const CreatePin = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  return (
    <div className='flex justify-center items-center mt-10'>
      <form className='w-full max-w-lg p-8 border rounded-[15px] shadow-lg'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Create a Pin</h2>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='w-full p-3 border rounded-[10px]'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='w-full p-3 border rounded-[10px]'
            required
          ></textarea>
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>Image URL</label>
          <input
            type='text'
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className='w-full p-3 border rounded-[10px]'
            required
          />
        </div>
      </form>
    </div>
  );
};

export default CreatePin;
