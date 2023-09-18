import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { Link } from "react-scroll";


const Navbar = () => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <nav className="z-40 font-teko top-0 w-full py-6 text-slate-200">
      <div className="flex items-center justify-between mx-auto w-4/5">
        <h4 className="xxs:text-lg font-semibold xs:text-xl lg:text-2xl">
          <a href="">ANDREA PENSIERI</a>
        </h4>
        {/* DESKTOP NAV */}
        {isDesktop ? (
          <div className="flex justify-between gap-6 text-[15px]">
            <Link to="/" spy={true} smooth={true} offset={0} duration={500}>
              <a href="">HOME</a>
            </Link>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={170}
              duration={500}
            >
              <a href="">SKILLS</a>
            </Link>
            <Link
              to="works"
              spy={true}
              smooth={true}
              offset={190}
              duration={500}
            >
              <a href="">WORKS</a>
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={1100}
              duration={500}
            >
              <a href="">CONTACT</a>
            </Link>
          </div>
        ) : (
          <button
            className="rounded-full pt-0"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>70 Basic icons by Xicons.co</title>
              <path
                d="M41,14H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,14Z"
                fill="#ffff"
              />
              <path
                d="M41,26H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,26Z"
                fill="#ffff"
              />
              <path
                d="M41,38H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,38Z"
                fill="#ffff"
              />
            </svg>
          </button>
        )}

        {/* MOBILE MENU POPUP */}
        {!isDesktop && isMenuToggled && (
          <div className="fixed font-teko right-0 top-0 h-full bg-white w-[300px]">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-4">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <svg
                  width="25px"
                  height="25px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 5L19 19M5 19L19 5"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="flex flex-col text-darkGrey gap-10 ml-[33%] text-3xl">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                delay={500}
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <a href="">HOME</a>
              </Link>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={20}
                duration={500}
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <a href="">SKILLS</a>
              </Link>
              <Link
                to="works"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <a href="">WORKS</a>
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={20}
                duration={500}
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <a href="">CONTACT</a>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
