import React from 'react'
import { imgData } from "../constants";

export default function ImageCards() {
  return (
    <div id='works' className="grid lg:grid-cols-2 gap-10">
      {imgData.map((item, index) => (
        <a href={item.link}>
          <div
            key={index}
            className="shadow-xl font-dmdisplay relative overflow-hidden rounded-xl group"
          >
            <img
              className="transition-transform group-hover:scale-110 duration-1000 object-contain"
              src={item.img}
              lt={item.title}
            />
            <div className="absolute lg:mt-7 sm:mt-5 lg:mx-4 p-4 text-slate-900 inset-0 flex flex-col items-start">
              <h1 className="lg:text-[50px] sm:text-[50px] xxs:text-xl xxs:mb-4 font-bold">
                {item.title}
              </h1>
              <p className="max-w-[500px] font-semibold lg:text-xl sm:text-2 xxs:text-md sm:mb-5 sm:mt-5 lg:mb-5 xxs:mb-2">
                {item.description}
              </p>
              <button
                type="button"
                className="inline-flex font-extrabold sm:text-2xl items-center lg:text-xl"
              >
                {item.button}
                <a href={item.link} className="ml-3">
                  {item.icon}
                </a>
              </button>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
