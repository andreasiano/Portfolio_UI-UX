import React from 'react'
import { rowData1 } from "../constants";

export default function ImageCard() {
  return (
      <div>
        {rowData1.map((row) => (
        <div
          className="relative mb-10 cursor-pointer overflow-hidden rounded-xl shadow-lg group"
        >
          <img src={row.img} alt="" className='transition-transform group-hover:scale-110 duration-1000' />
          <div className='absolute inset-0 flex items-start bg-gradient-to-t from-black/40 to-transparent'>
            <div className='p-4 text-white'>
                <h3>{row.title}</h3> 
                <p>{row.description}</p>    
            </div>
          </div>
        </div>
        ))}
    </div>
  );
}
