import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-gray-400" : ""
      } hover:text-gray-400 transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <nav className="z-40 sticky top-0 w-full py-6">
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-teko text-2xl text-white">ANDREA PENSIERI</h4>

        {/* DESKTOP NAV */}
        {isDesktop ? (
          <div className="flex font-teko justify-between text-white gap-6 text-md font-semibold">
            <Link
              page="HOME"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="SKILLS"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="W0RKS"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="CONTACT"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
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
                page="HOME"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="ABOUT"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="WORKS"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="CONTACT"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
