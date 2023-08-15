import React from 'react'

export default function Contact() {
  return (
    <div className="px-10 flex flex-col mt-20 items-center">
      <h1 className="md:text-6xl mt-10 text-white xxs:text-4xl sm:text-5xl font-teko py-5">
        CONTACT ME
      </h1>
      <p className="md:w-[500px] xxs:w-[300px] mb-6 font-light font-sans lg:mb-6 xxs:text-sm md:text-lg lg:text-xl text-gray-400">
        I’m currently taking on new clients, and would love to hear about your
        project. Please include as much information as possible about the scope
        of your project, your timelines, and your budget.
      </p>
      <a href="">
        <p className="text-gray-400 md:w-[500px] xxs:w-[300px] hover:text-white xxs:text-[20px] lg:text-2xl mb-20 font-teko underline transition duration-500">
          Email me at andrejazz2011@gmail.com
        </p>
      </a>
    </div>
  );
}
