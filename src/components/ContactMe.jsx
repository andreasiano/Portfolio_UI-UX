import React from 'react'
import { BsFacebook, BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { FaDribbbleSquare } from "react-icons/fa";

export default function ContactMe() {
  return (
    <section className="text-center mb-20" id="contact">
      <h1 className="text-gradient font-dmdisplay font-semibold mt-20 ss:text-[52px] text-[32px]">
        Let's Connect
      </h1>
      <p className="text-dimWhite xxs:text-xl mb-3 lg:text-2xl">
        Feel free to reach out for collaborations or just say a friendly hello
      </p>
      <p className="text-gradient xxs:text-xl lg:text-2xl">
        <a href="mailto:andrejazz2011@gmail.com">andrejazz2011@gmail.com</a>
      </p>
      <div className="flex flex-row items-center mt-10 justify-center">
        <a href="https://www.facebook.com/andrew.onais.9">
          <BsFacebook className="text-white" size={30} />
        </a>
        <a href="https://www.linkedin.com/in/andrea-s-pensieri-9abb73225/">
          <BsLinkedin className="text-white ml-10" size={30} />
        </a>
        <a href="https://dribbble.com/Pensieri90">
          <FaDribbbleSquare className="text-white ml-10" size={30} />
        </a>
        <a href="https://github.com/andreasiano?tab=repositories">
          <BsGithub className="text-white ml-10" size={30} />
        </a>
        <a href="https://www.instagram.com/">
          <BsInstagram className="text-white ml-10" size={30} />
        </a>
      </div>
    </section>
  );
}
