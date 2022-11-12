import React from 'react'
import { PlayCircleIcon } from "@heroicons/react/24/solid";

export default function ThumbVertical({image}) {

  const bkground = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "300px",
  };
  return (
    <>
    
    <div className="mt-3">
      <div className="w-96 h-56 rounded-xl" 
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "auto",
        backgroundColor: "red",
        }}>
          <div className='flex flex-col p-16'>
              <h2 className=' text-lg font-bold'>Main Title</h2>
              <span className='font-bold'>Sub-title</span>
              <span className='text-xs'>lesson tag</span>
              <button className='flex items-center mt-2 bg-slate-900 px-4 py-1 rounded w-40'>
              <div className='mr-2 text-white font-semibold'>Listen now</div>
                <div>
                  <PlayCircleIcon className="h-6 w-6 text-white" />
                </div>
              </button>
          </div>
      </div>
    </div>
    </>
  )
}
