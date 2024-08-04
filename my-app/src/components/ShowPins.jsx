import React from 'react';

const ShowPins = ({pins}) => {
  return (
    <div className='flex flex-wrap justify-center mt-10'>
      {pins.length === 0 ? (
        <h2>No pins to display</h2>
      ) : (
        pins.map((pin, index) => (
          <div className='flex flex-col m-4 p-4 border rounded-[10px] shadow-lg' key={index}>
            <img src={pin.image} alt={pin.title} className='w-[300px] h-[200px] object-cover rounded-[10px]' />
            <h3 className='mt-4 text-xl font-semibold'>{pin.title}</h3>
            <p className='mt-2 text-gray-700'>{pin.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ShowPins;