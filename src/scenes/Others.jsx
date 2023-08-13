import img1 from "./../assets/images/furniture.png";
import img2 from "./../assets/images/siepelunga24.png";
import img3 from "./../assets/images/wallet-app.png";
import img4 from "./../assets/images/sorrentino.png";
import img5 from "./../assets/images/tia-almaz.png";
import img6 from "./../assets/images/littlegreen.png";


export default function Others() {
  return (
    <section className="bg-slate-300">
      <div className="text-center text-darkGrey xxs:text-4xl sm:text-5xl text-6xl font-teko py-10">
        <h5 className="font-bold">OTHER NOTEWORTHY PROJECTS</h5>
      </div>
      <div class="p-10 grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        <div class="rounded-lg bg-white overflow-hidden shadow-lg">
          <img class="w-full" src={img1} alt="Mountain" />
          <div class="px-6 py-4">
            <div class="font-bold font-teko text-xl mb-2">
              FURNITURE MOBILE APP
            </div>
            <p class="text-gray-700 text-base">
              This is a furniture mobile app built with Figma! Feel free to
              purchase whatever you like!
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block font-teko bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #UI UX
            </span>
            <span class="font-teko inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #FIGMA
            </span>
          </div>
          <button className="flex-block mx-6">
            <a
              href="#"
              class="font-teko transition duration-500 inline-flex items-end mb-5 px-3 py-2 text-sm font-regular text-center text-white bg-black rounded hover:bg-slate-800"
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
        <div class="rounded-lg bg-white overflow-hidden shadow-lg">
          <img class="w-full" src={img2} alt="Mountain" />
          <div class="px-6 py-4">
            <div class="font-bold font-teko text-xl mb-2">SIEPELUNGA24</div>
            <p class="text-gray-700 text-base">
              A multi-column, flexbox-based page layout and hero-image with a
              tinted overlay for a restaurant
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block font-teko bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #HTML
            </span>
            <span class="inline-block font-teko bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #CSS
            </span>
          </div>
          <button className="flex-block mx-6">
            <a
              href="#"
              class="font-teko transition duration-500 inline-flex items-end mb-5 px-3 py-2 text-sm font-regular text-center text-white bg-black rounded hover:bg-slate-800"
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
        <div class="rounded-lg bg-white overflow-hidden shadow-lg">
          <img class="w-full" src={img3} alt="Mountain" />
          <div class="px-6 py-4">
            <div class="font-bold font-teko text-xl mb-2">
              WALLET MOBILE APP
            </div>
            <p class="text-gray-700 text-base">
              A wallet mobile app built to ease money transactions. Figma can
              help you create whatever prototype you like!
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block font-teko bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #UI UX
            </span>
            <span class="inline-block font-teko bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #FIGMA
            </span>
          </div>
          <button className="flex-block mx-6">
            <a
              href="#"
              class="font-teko transition duration-500 inline-flex items-end mb-5 px-3 py-2 text-sm font-regular text-center text-white bg-black rounded hover:bg-slate-800"
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
        <div class="rounded-lg bg-white overflow-hidden shadow-lg">
          <img class="w-full" src={img4} alt="Mountain" />
          <div class="px-6 py-4">
            <div class="font-bold font-teko text-xl mb-2">
              PHOTOGRAPHY PORTFOLIO
            </div>
            <p class="text-gray-700 text-base">
              Francesca Sorrentino's photography portfolio. Francesca is a
              photographer based in Palermo, Sicily.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block font-teko bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #HTML
            </span>
            <span class="inline-block font-teko bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #BOOTSTRAP
            </span>
            <span class="inline-block font-teko bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #JavaScript
            </span>
          </div>
          <button className="flex-block mx-6">
            <a
              href="#"
              class="font-teko transition duration-500 inline-flex items-end mb-5 px-3 py-2 text-sm font-regular text-center text-white bg-black rounded hover:bg-slate-800"
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
        <div class="rounded-lg bg-white overflow-hidden shadow-lg">
          <img class="w-full" src={img5} alt="Mountain" />
          <div class="px-6 py-4">
            <div class="font-bold font-teko text-xl mb-2">
              TIA ALMAZ BUSINESS CARD
            </div>
            <p class="text-gray-700 text-base">
              A business card for an african restaurant. Follow tia almaz on
              instagram as well and you'll discover the secrets of coffe!
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block font-teko bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #GRAPHIC DESIGN
            </span>
            <span class="inline-block font-teko bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #PHOTOSHOP
            </span>
          </div>
          <button className="flex-block mx-6">
            <a
              href="#"
              class="font-teko transition duration-500 inline-flex items-end mb-5 px-3 py-2 text-sm font-regular text-center text-white bg-black rounded hover:bg-slate-800"
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
        <div class="rounded-lg bg-white overflow-hidden shadow-lg">
          <img class="w-full" src={img6} alt="Mountain" />
          <div class="px-6 py-4">
            <div class="font-bold font-teko text-xl mb-2">
              VIVI LITTLE GREEN WEBSITE
            </div>
            <p class="text-gray-700 text-base">
              This is Virginia Verdolini's website built by using Wordpress. She
              loves making artisanal soaps using only nature gifts.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block font-teko bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #WORDPRESS
            </span>
            <span class="inline-block font-teko bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #WEB DESIGN
            </span>
          </div>
          <button className="flex-block mx-6">
            <a
              href="#"
              class="font-teko transition duration-500 inline-flex items-end mb-5 px-3 py-2 text-sm font-regular text-center text-white bg-black rounded hover:bg-slate-800"
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
    </section>
  );
}
