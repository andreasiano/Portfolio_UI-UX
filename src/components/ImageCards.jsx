import React from 'react'
import { imgData } from "../constants";

export default function ImageCards() {
  return (
    <div className="grid lg:grid-cols-2 gap-10">
      {imgData.map((item, index) => (
        <div
          key={index}
          className="shadow-lg font-dmdisplay relative overflow-hidden rounded-xl group"
        >
          <img
            className="transition-transform group-hover:scale-110 duration-1000 object-contain"
            src={item.img}
            lt={item.title}
          />
          <div className="absolute p-4 text-slate-900 inset-0 flex flex-col items-start bg-gradient-to-t from-black/40 to transparent">
            <h1 className="text-[50px] font-bold">{item.title}</h1>
            <p className="max-w-[500px] text-xl mb-5">{item.description}</p>
            <button className="bg-white hover:bg-slate-100 text-slate-900 font-bold py-2 px-4 rounded">
              <a
                className="text-xl"
                href="https://east-asian-blog.netlify.app/"
              >
                {item.button}
              </a>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
