import React from 'react';
import { MdOutlineStar } from "react-icons/md";
import telescopee from './telescopee.png';

function Icon() {
  return (
    <div className='image bg-white w-40 h-48 rounded-2xl mt-6 mx-2'>
    <MdOutlineStar className='text-yellow-500 text-2xl rounded-xl ml-32 mt-2 shadow-lg bg-white p-1' />

      <img src={telescopee} alt="Telescope" />

      <div className="w-24 ml-8 mt-2 h-1 bg-gray-200 rounded overflow-hidden">
        <div className="h-full bg-sky-300" style={{ width: '50%' }}></div>
      </div>
    </div>
  );
}

export default Icon;
