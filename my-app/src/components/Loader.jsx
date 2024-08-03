import React from 'react'

const Loader = () => {
    return (
        <div className='flex justify-center item-center'>
            <div className='h-[150px] w-[150px] border-[8px] border-t-red-500 rounded-full animate-spin shadow-lg shadow-red-100'></div>
        </div>
    )
}

export default Loader
