import React from 'react';
import ThumbVertical from './thumbVertical';
import '../../styles/teachings.css'

export default function ListVertical() {
  return (
    <>
    <div className='text-lg mt-4 bg-white'>Teachings</div>
     <div className=' min-w-screen overflow-y-auto'>
          <ThumbVertical image={"https://picsum.photos/id/200/200/300"}/>
          <ThumbVertical image={"https://picsum.photos/id/1002/200/300"}/>
     </div>    
    </>
  );
}
