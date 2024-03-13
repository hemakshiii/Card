import React from 'react';
import Icon from './Icon';
import MainContent from './MainContent';
import OptionsComponent from './option';


function Card() {
  return (
    <div className='card bg-blue-50 mx-auto rounded-3xl border-2 border-zinc-900 hover:border-blue-500 shadow-lg mt-48' style={{ width: '600px', height: '250px' }}>
      <div className='main-content flex'>
        <Icon />
        <MainContent />
        <OptionsComponent />
      </div>
    </div>
  );
}

export default Card;
