import { motion } from "framer-motion";
import img1 from "./../assets/images/icons8-ui-ux-design-50 (1).png";
import img2 from "./../assets/images/icons8-coding-50.png";
import img3 from "./../assets/images/icons8-art-50.png";


export default function Others() {
  return (
    <section id="skills">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div class="py-8 mx-auto w-4/5">
          <div class="max-w-screen-lg lg:mb-16">
            <h2 class="mb-4 text-center xxs:text-4xl sm:text-5xl font-teko text-6xl tracking-tight font-extrabold text-white">
              OTHER PROJECTS
            </h2>
          </div>
          <div class="space-y-8 sm:grid mb-10 md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div className="border-4 p-5 rounded-lg">
              <div class="flex justify-center  items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  className="xxs:h-[30px] xxs:w-[30px] md:h-[40px] md:w-[40px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0,0,256,256"
                  fill-rule="nonzero"
                >
                  <g
                    fill="#ffffff"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                  >
                    <g transform="scale(5.12,5.12)">
                      <path d="M5,4c-1.654,0 -3,1.346 -3,3v6h1h44h1v-2c0,-1.654 -1.346,-3 -3,-3l-26.95508,0.00586c-0.279,-0.101 -0.85602,-1.01967 -1.16602,-1.51367c-0.767,-1.224 -1.56191,-2.49219 -2.87891,-2.49219zM3,15c-0.552,0 -1,0.448 -1,1v27c0,1.657 1.343,3 3,3h40c1.657,0 3,-1.343 3,-3v-27c0,-0.552 -0.448,-1 -1,-1z"></path>
                    </g>
                  </g>
                </svg>
              </div>
              <h3 class="mb-2 text-white font-teko text-2xl font-bold ">
                FURNITURE MOBILE APP
              </h3>
              <div class="pt-4 pb-2">
                <span class="inline-block font-teko bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #UI UX
                </span>
                <span class="inline-block font-teko bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #FIGMA
                </span>
              </div>
              <p class="text-gray-400 mb-4">
                This is a furniture mobile app built with Figma full of
                different sections! Click on the button to see the entire
                project.
              </p>
              <button className="flex-block">
                <a
                  href="https://www.figma.com/file/qk2lDHC6NrzNS51sWw3YKt/Furniture-Mobile-App?type=design&node-id=0-1&mode=design&t=R020c9Lhtgq97XnY-0"
                  class="font-teko bg-transparent inline-flex hover:bg-white text-white font-regular hover:text-black transition duration-500 py-2 px-4 border border-white hover:border-transparent rounded"
                >
                  LEARN MORE
                  <svg
                    class="w-3.5 h-5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </button>
            </div>
            <div className="border-4 p-5 rounded-lg">
              <div class="flex justify-center  items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  className="xxs:h-[30px] xxs:w-[30px] md:h-[40px] md:w-[40px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0,0,256,256"
                  fill-rule="nonzero"
                >
                  <g
                    fill="#ffffff"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                  >
                    <g transform="scale(5.12,5.12)">
                      <path d="M5,4c-1.654,0 -3,1.346 -3,3v6h1h44h1v-2c0,-1.654 -1.346,-3 -3,-3l-26.95508,0.00586c-0.279,-0.101 -0.85602,-1.01967 -1.16602,-1.51367c-0.767,-1.224 -1.56191,-2.49219 -2.87891,-2.49219zM3,15c-0.552,0 -1,0.448 -1,1v27c0,1.657 1.343,3 3,3h40c1.657,0 3,-1.343 3,-3v-27c0,-0.552 -0.448,-1 -1,-1z"></path>
                    </g>
                  </g>
                </svg>
              </div>
              <h3 class="mb-2 text-white font-teko text-2xl font-bold ">
                MOBILE WALLET APP
              </h3>
              <div class="pt-4 pb-2">
                <span class="inline-block font-teko bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #UI UX
                </span>
                <span class="inline-block font-teko bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #FIGMA
                </span>
              </div>
              <p class="text-gray-400 mb-4">
                This is a wallet app prototype built by using figma. Click on
                the button to see the entire project.
              </p>
              <button className="flex-block">
                <a
                  href="https://www.figma.com/file/lz1iEHveQYDxKmOdyb2yH3/Wallet-mobile-app-(Copy)?type=design&node-id=0-1&mode=design&t=R020c9Lhtgq97XnY-0"
                  class="font-teko bg-transparent inline-flex hover:bg-white text-white font-regular hover:text-black transition duration-500 py-2 px-4 border border-white hover:border-transparent rounded"
                >
                  LEARN MORE
                  <svg
                    class="w-3.5 h-5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </button>
            </div>
            <div className="border-4 p-5 rounded-lg">
              <div class="flex justify-center  items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0,0,256,256"
                  className="xxs:h-[30px] xxs:w-[30px] md:h-[40px] md:w-[40px]"
                  fill-rule="nonzero"
                >
                  <g
                    fill="#ffffff"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                  >
                    <g transform="scale(5.12,5.12)">
                      <path d="M5,4c-1.654,0 -3,1.346 -3,3v6h1h44h1v-2c0,-1.654 -1.346,-3 -3,-3l-26.95508,0.00586c-0.279,-0.101 -0.85602,-1.01967 -1.16602,-1.51367c-0.767,-1.224 -1.56191,-2.49219 -2.87891,-2.49219zM3,15c-0.552,0 -1,0.448 -1,1v27c0,1.657 1.343,3 3,3h40c1.657,0 3,-1.343 3,-3v-27c0,-0.552 -0.448,-1 -1,-1z"></path>
                    </g>
                  </g>
                </svg>
              </div>
              <h3 class="mb-2 text-white font-teko text-2xl font-bold ">
                SIEPELUNGA24
              </h3>
              <div class="pt-4 pb-2">
                <span class="inline-block font-teko bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #HTML
                </span>
                <span class="inline-block font-teko bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #CSS
                </span>
              </div>
              <p class="text-gray-400 mb-4">
                Cigar Club and Cocktail bar website. Famous coktail bar in
                Bologna when you can taste marvellous italian cigars.
              </p>
              <button className="flex-block">
                <a
                  href="https://siepelunga24.netlify.app/"
                  class="font-teko bg-transparent inline-flex hover:bg-white text-white font-regular hover:text-black transition duration-500 py-2 px-4 border border-white hover:border-transparent rounded"
                >
                  LEARN MORE
                  <svg
                    class="w-3.5 h-5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </button>
            </div>
            <div className="border-4 p-5 rounded-lg">
              <div class="flex justify-center  items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0,0,256,256"
                  className="xxs:h-[30px] xxs:w-[30px] md:h-[40px] md:w-[40px]"
                  fill-rule="nonzero"
                >
                  <g
                    fill="#ffffff"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                  >
                    <g transform="scale(5.12,5.12)">
                      <path d="M5,4c-1.654,0 -3,1.346 -3,3v6h1h44h1v-2c0,-1.654 -1.346,-3 -3,-3l-26.95508,0.00586c-0.279,-0.101 -0.85602,-1.01967 -1.16602,-1.51367c-0.767,-1.224 -1.56191,-2.49219 -2.87891,-2.49219zM3,15c-0.552,0 -1,0.448 -1,1v27c0,1.657 1.343,3 3,3h40c1.657,0 3,-1.343 3,-3v-27c0,-0.552 -0.448,-1 -1,-1z"></path>
                    </g>
                  </g>
                </svg>
              </div>
              <h3 class="mb-2 text-white font-teko text-2xl font-bold ">
                TIA ALMAZ BUSINESS CARD
              </h3>
              <div class="pt-4 pb-2">
                <span class="inline-block font-teko bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #PHOTOSHOP
                </span>
                <span class="inline-block font-teko bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #GRAPHIC DESIGN
                </span>
              </div>
              <p class="text-gray-400 mb-4">
                Tia Almaz is an artist an cook based in Bologna. Follow her on
                instagram to discover the secrets of ethiopian coffe!
              </p>
              <button className="flex-block">
                <a
                  href="#"
                  class="font-teko bg-transparent inline-flex hover:bg-white text-white font-regular hover:text-black transition duration-500 py-2 px-4 border border-white hover:border-transparent rounded"
                >
                  LEARN MORE
                  <svg
                    class="w-3.5 h-5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </button>
            </div>
            <div className="border-4 p-5 rounded-lg">
              <div class="flex justify-center  items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0,0,256,256"
                  className="xxs:h-[30px] xxs:w-[30px] md:h-[40px] md:w-[40px]"
                  fill-rule="nonzero"
                >
                  <g
                    fill="#ffffff"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                  >
                    <g transform="scale(5.12,5.12)">
                      <path d="M5,4c-1.654,0 -3,1.346 -3,3v6h1h44h1v-2c0,-1.654 -1.346,-3 -3,-3l-26.95508,0.00586c-0.279,-0.101 -0.85602,-1.01967 -1.16602,-1.51367c-0.767,-1.224 -1.56191,-2.49219 -2.87891,-2.49219zM3,15c-0.552,0 -1,0.448 -1,1v27c0,1.657 1.343,3 3,3h40c1.657,0 3,-1.343 3,-3v-27c0,-0.552 -0.448,-1 -1,-1z"></path>
                    </g>
                  </g>
                </svg>
              </div>
              <h3 class="mb-2 text-white font-teko text-2xl font-bold ">
                PHOTOGRAPHY PORTFOLIO
              </h3>
              <div class="pt-4 pb-2">
                <span class="inline-block font-teko bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #HTML
                </span>
                <span class="inline-block font-teko bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #JAVA SCRIPT
                </span>
                <span class="inline-block font-teko bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #BOOTSTRAP
                </span>
              </div>
              <p class="text-gray-400 mb-4">
                Francesca Sorrentino is an italian sociologist and photographer,
                fond of nature and people. Click on the button to see her
                portfolio!
              </p>
              <button className="flex-block">
                <a
                  href="https://sorrentinoportfolio.netlify.app/"
                  class="font-teko bg-transparent inline-flex hover:bg-white text-white font-regular hover:text-black transition duration-500 py-2 px-4 border border-white hover:border-transparent rounded"
                >
                  LEARN MORE
                  <svg
                    class="w-3.5 h-5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </button>
            </div>
            <div className="border-4 p-5 rounded-lg">
              <div class="flex justify-center  items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0,0,256,256"
                  className="xxs:h-[30px] xxs:w-[30px] md:h-[40px] md:w-[40px]"
                  fill-rule="nonzero"
                >
                  <g
                    fill="#ffffff"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                  >
                    <g transform="scale(5.12,5.12)">
                      <path d="M5,4c-1.654,0 -3,1.346 -3,3v6h1h44h1v-2c0,-1.654 -1.346,-3 -3,-3l-26.95508,0.00586c-0.279,-0.101 -0.85602,-1.01967 -1.16602,-1.51367c-0.767,-1.224 -1.56191,-2.49219 -2.87891,-2.49219zM3,15c-0.552,0 -1,0.448 -1,1v27c0,1.657 1.343,3 3,3h40c1.657,0 3,-1.343 3,-3v-27c0,-0.552 -0.448,-1 -1,-1z"></path>
                    </g>
                  </g>
                </svg>
              </div>
              <h3 class="mb-2 text-white font-teko text-2xl font-bold ">
                VIVILITTLEGREEN
              </h3>
              <div class="pt-4 pb-2">
                <span class="inline-block font-teko bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #WORDPRESS
                </span>
                <span class="inline-block font-teko bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #WEB DESIGN
                </span>
              </div>
              <p class="text-gray-400 mb-4">
                Virginia Verdolini is a beautycare professional specialized in
                artisanal soaps. You'll find only natural ingredients in her
                products!
              </p>
              <button className="flex-block">
                <a
                  href="https://dev-vivilittlegreen.pantheonsite.io/"
                  class="font-teko bg-transparent inline-flex hover:bg-white text-white font-regular hover:text-black transition duration-500 py-2 px-4 border border-white hover:border-transparent rounded"
                >
                  LEARN MORE
                  <svg
                    class="w-3.5 h-5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
