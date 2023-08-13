import { motion } from "framer-motion";

export default function Landing({setSelectedPage}) {
  return (
    <section>
      <div class="grid md:max-w-screen-md sm:max-w-screen-sm px-4 py-8 mx-auto lg:gap-8 sm:gap-4 lg:py-8 sm:grid-cols-2 lg:grid-cols-12 mb-7">
        <div class="mr-auto place-self-center lg:col-span-7">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <h1 class="max-w-2xl mb-4 text-4xl font-teko font-extrabold tracking-tight leading-none md:text-6xl xl:text-7xl text-white">
              UI UX DESIGNER & FRONT END DEVELOPER
            </h1>
            <p class="max-w-2xl mb-6 font-light font-sans lg:mb-6 md:text-lg lg:text-xl dark:text-gray-400">
              Hello! I'm Andrea a UI UX Designer and Developer based in Italy. I
              can code, design and prototype beautiful and responsive web
              applications!
            </p>
            <a href="">
              <svg
                className="inline-flex mr-3 items-start justify-start"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0,0,256,256"
                width="30px"
                height="30px"
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
                    <path d="M25,3c-12.15,0 -22,9.85 -22,22c0,11.03 8.125,20.137 18.712,21.728v-15.897h-5.443v-5.783h5.443v-3.848c0,-6.371 3.104,-9.168 8.399,-9.168c2.536,0 3.877,0.188 4.512,0.274v5.048h-3.612c-2.248,0 -3.033,2.131 -3.033,4.533v3.161h6.588l-0.894,5.783h-5.694v15.944c10.738,-1.457 19.022,-10.638 19.022,-21.775c0,-12.15 -9.85,-22 -22,-22z"></path>
                  </g>
                </g>
              </svg>
            </a>
            <a href="">
              <svg
                className="inline-flex mr-3 items-start justify-start"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0,0,256,256"
                width="30px"
                height="30px"
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
                  <g transform="scale(5.33333,5.33333)">
                    <path d="M24,4c-11.02793,0 -20,8.97207 -20,20c0,11.02793 8.97207,20 20,20c11.02793,0 20,-8.97207 20,-20c0,-11.02793 -8.97207,-20 -20,-20zM24,7c4.14231,0 7.92952,1.47634 10.875,3.92773c-2.75263,2.42336 -5.90023,4.39541 -9.29492,5.9082c-1.76855,-3.21635 -3.68842,-6.33517 -5.84375,-9.27734c1.36423,-0.3515 2.78785,-0.55859 4.26367,-0.55859zM16.78516,8.61719c2.21238,2.92554 4.16447,6.04707 5.96094,9.26953c-3.69563,1.28391 -7.60838,2.11328 -11.74609,2.11328c-1.16764,0 -2.31866,-0.07784 -3.46094,-0.18945c1.25785,-4.97528 4.69188,-9.05906 9.24609,-11.19336zM37.00195,13.04688c2.45922,2.91805 3.95155,6.67491 3.99023,10.79102c-2.15953,-0.5417 -4.41625,-0.83789 -6.74219,-0.83789c-1.8281,0 -3.59424,0.23597 -5.32422,0.57422c-0.60255,-1.39586 -1.2625,-2.75241 -1.94141,-4.10547c3.65931,-1.65484 7.05608,-3.79252 10.01758,-6.42187zM24.17773,20.57031c0.63352,1.25132 1.27238,2.49353 1.83789,3.7832c-6.0624,1.89613 -11.26637,5.74523 -14.75781,10.88477c-2.64245,-2.99509 -4.25781,-6.91896 -4.25781,-11.23828c0,-0.41439 0.03352,-0.81971 0.0625,-1.22656c1.29529,0.1328 2.60335,0.22656 3.9375,0.22656c4.64338,0 9.0451,-0.93675 13.17773,-2.42969zM34.25,26c2.24879,0 4.41834,0.31937 6.48828,0.88281c-0.78479,4.60653 -3.40219,8.57476 -7.09375,11.11914c-0.8892,-3.93705 -2.13392,-7.73284 -3.55859,-11.43945c1.37421,-0.23657 2.72109,-0.5625 4.16406,-0.5625zM27.0918,27.125c1.57089,4.00063 2.91442,8.11641 3.81445,12.40625c-2.1105,0.9373 -4.44343,1.46875 -6.90625,1.46875c-3.98932,0 -7.64289,-1.37739 -10.53906,-3.66797c3.14794,-4.85467 7.96982,-8.49089 13.63086,-10.20703z"></path>
                  </g>
                </g>
              </svg>
            </a>
            <a href="">
              <svg
                className="inline-flex mr-3 items-start justify-start"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0,0,256,256"
                width="30px"
                height="30px"
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
                    <path d="M25,2c-12.6907,0 -23,10.3093 -23,23c0,12.69071 10.3093,23 23,23c12.69071,0 23,-10.30929 23,-23c0,-12.6907 -10.30929,-23 -23,-23zM25,4c11.60983,0 21,9.39017 21,21c0,11.60983 -9.39017,21 -21,21c-2.12364,0 -4.17229,-0.31786 -6.10352,-0.90234c0.86025,-1.43824 1.97086,-3.49407 2.41211,-5.19141c0.26213,-1.00636 1.33984,-5.11133 1.33984,-5.11133c0.7004,1.33714 2.74684,2.46875 4.92578,2.46875c6.4839,0 11.1582,-5.96299 11.1582,-13.37305c0,-7.1041 -5.79701,-12.41797 -13.25586,-12.41797c-9.27973,0 -14.20508,6.22817 -14.20508,13.00977c0,3.15388 1.67744,7.07977 4.36328,8.33008c0.40684,0.18937 0.62531,0.10733 0.71875,-0.28711c0.07194,-0.29935 0.43475,-1.7586 0.59766,-2.4375c0.0521,-0.21665 0.02687,-0.40384 -0.14844,-0.61719c-0.88894,-1.0783 -1.60156,-3.0589 -1.60156,-4.90625c0,-4.74241 3.59028,-9.33203 9.70703,-9.33203c5.28156,0 8.98047,3.60045 8.98047,8.74805c0,5.81575 -2.9366,9.8457 -6.75781,9.8457c-2.11031,0 -3.6905,-1.74581 -3.18359,-3.88672c0.60779,-2.55519 1.78125,-5.31251 1.78125,-7.1582c0,-1.65054 -0.88576,-3.02734 -2.7207,-3.02734c-2.15744,0 -3.89062,2.23055 -3.89062,5.2207c0,1.90275 0.64453,3.19141 0.64453,3.19141c0,0 -2.13118,9.0105 -2.52148,10.6875c-0.39114,1.67579 -0.28638,3.93285 -0.125,5.61328c-7.6941,-3.11433 -13.11523,-10.64747 -13.11523,-19.4668c0,-11.60982 9.39017,-21 21,-21z"></path>
                  </g>
                </g>
              </svg>
            </a>
            <a href="">
              <svg
                className="inline-flex mr-3 items-start justify-start"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0,0,256,256"
                width="30px"
                height="30px"
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
                    <path d="M16,3c-7.17,0 -13,5.83 -13,13v18c0,7.17 5.83,13 13,13h18c7.17,0 13,-5.83 13,-13v-18c0,-7.17 -5.83,-13 -13,-13zM37,11c1.1,0 2,0.9 2,2c0,1.1 -0.9,2 -2,2c-1.1,0 -2,-0.9 -2,-2c0,-1.1 0.9,-2 2,-2zM25,14c6.07,0 11,4.93 11,11c0,6.07 -4.93,11 -11,11c-6.07,0 -11,-4.93 -11,-11c0,-6.07 4.93,-11 11,-11zM25,16c-4.96,0 -9,4.04 -9,9c0,4.96 4.04,9 9,9c4.96,0 9,-4.04 9,-9c0,-4.96 -4.04,-9 -9,-9z"></path>
                  </g>
                </g>
              </svg>
            </a>
            <a href="">
              <svg
                className="inline-flex mr-3 items-start justify-start"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0,0,256,256"
                width="30px"
                height="30px"
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
                    <path d="M17.791,46.836c0.711,-0.306 1.209,-1.013 1.209,-1.836v-5.4c0,-0.197 0.016,-0.402 0.041,-0.61c-0.014,0.004 -0.027,0.007 -0.041,0.01c0,0 -3,0 -3.6,0c-1.5,0 -2.8,-0.6 -3.4,-1.8c-0.7,-1.3 -1,-3.5 -2.8,-4.7c-0.3,-0.2 -0.1,-0.5 0.5,-0.5c0.6,0.1 1.9,0.9 2.7,2c0.9,1.1 1.8,2 3.4,2c2.487,0 3.82,-0.125 4.622,-0.555c0.934,-1.389 2.227,-2.445 3.578,-2.445v-0.025c-5.668,-0.182 -9.289,-2.066 -10.975,-4.975c-3.665,0.042 -6.856,0.405 -8.677,0.707c-0.058,-0.327 -0.108,-0.656 -0.151,-0.987c1.797,-0.296 4.843,-0.647 8.345,-0.714c-0.112,-0.276 -0.209,-0.559 -0.291,-0.849c-3.511,-0.178 -6.541,-0.039 -8.187,0.097c-0.02,-0.332 -0.047,-0.663 -0.051,-0.999c1.649,-0.135 4.597,-0.27 8.018,-0.111c-0.079,-0.5 -0.13,-1.011 -0.13,-1.543c0,-1.7 0.6,-3.5 1.7,-5c-0.5,-1.7 -1.2,-5.3 0.2,-6.6c2.7,0 4.6,1.3 5.5,2.1c1.699,-0.701 3.599,-1.101 5.699,-1.101c2.1,0 4,0.4 5.6,1.1c0.9,-0.8 2.8,-2.1 5.5,-2.1c1.5,1.4 0.7,5 0.2,6.6c1.1,1.5 1.7,3.2 1.6,5c0,0.484 -0.045,0.951 -0.11,1.409c3.499,-0.172 6.527,-0.034 8.204,0.102c-0.002,0.337 -0.033,0.666 -0.051,0.999c-1.671,-0.138 -4.775,-0.28 -8.359,-0.089c-0.089,0.336 -0.197,0.663 -0.325,0.98c3.546,0.046 6.665,0.389 8.548,0.689c-0.043,0.332 -0.093,0.661 -0.151,0.987c-1.912,-0.306 -5.171,-0.664 -8.879,-0.682c-1.665,2.878 -5.22,4.755 -10.777,4.974v0.031c2.6,0 5,3.9 5,6.6v5.4c0,0.823 0.498,1.53 1.209,1.836c9.161,-3.032 15.791,-11.672 15.791,-21.836c0,-12.682 -10.317,-23 -23,-23c-12.683,0 -23,10.318 -23,23c0,10.164 6.63,18.804 15.791,21.836z"></path>
                  </g>
                </g>
              </svg>
            </a>
          </motion.div>
        </div>
        <div class="mt-6 lg:col-span-5 lg:flex">
          <img
            className="rounded-xl"
            src="https://i.pinimg.com/564x/77/ca/da/77cadac688250809dfd527712db48646.jpg"
            alt="mockup"
          />
        </div>
      </div>
    </section>
  );
}



