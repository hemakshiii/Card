import React from 'react';
import { RxAvatar } from "react-icons/rx";
import { IoTimeOutline } from "react-icons/io5";

//avatar
function AvatarComponent() {
  return (
    <div className='avatar flex items-center'>
      <RxAvatar className='text-blue-400 text-xl font-bold' />
      <p className='ml-1 text-blue-400 font-bold'>Vishal Pulikotti</p>
    </div>
  );
}

//time 
function TimeComponent() {
  return (
    <div className='time flex items-center'>
      <IoTimeOutline className='text-blue-400 text-xl font-bold' />
      <p className='text-blue-400 font-bold'>15 minutes</p>
    </div>
  );
}

function MainContent() {
  return (
    <div className='heading ml-6 mt-3'>
      <p className='text-orange-600 text-sm font-bold mt-8 bg-white w-32 px-5 rounded-lg'>After Effects</p>
      <h1 className='text-3xl font-bold text-blue-600 mt-3'>Animation in UI</h1>
      <h1 className='text-3xl font-bold text-blue-600'>Design (Part 2)</h1>
      <div className='small-content flex justify-between text-blue-600 text-sm mt-8'>
      <AvatarComponent />
      <TimeComponent />
      </div>
    </div>
  );
}

export default MainContent;
