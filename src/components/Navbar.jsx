import React from 'react'
import { useState } from 'react'
import { navLinks } from "../constants";
import close from '../assets/close.svg'
import menu from '../assets/icons8-hamburger-menu.svg'


export default function Navbar() {
const [toggle, setToggle] = useState(false)
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <h1 className="text-2xl xxs:text-[20px] text-dimWhite font-bold tracking-tighter">
        ANDREA PENSIERI
      </h1>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            className={`text-dimWhite ${
              index === navLinks.length - 1 ? "mr-0" : "mr-5"
            } text-[16px] cursor-pointer`}
            key={nav.id}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden cursor-pointer flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[40px] h-[40px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-16 right-0 mx-4 my-5 w-full rounded-xl sidebar`}
        >
          <ul className="list-none flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                className={`text-dimWhite ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                } text-[35px] text-center cursor-pointer`}
                key={nav.id}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
