import { motion } from "framer-motion";
import img1 from "./../assets/images/laptop.png";

export default function Landing() {
  return (
    <section id="home">
      <div class="grid xxs:w-4/5 md:w-4/5 sm:w-2/3 py-8 mx-auto lg:gap-8 sm:gap-4 lg:py-20 md:grid-cols-2 lg:grid-cols-12 mb-7">
        <div class="mr-auto lg:mt-10 md:text-start lg:text-start lg:col-span-7">
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
            <h1 class="max-w-2xl xxs:mt-3 xs:mt-8 xxs:text-5xl xs:text-5xl mb-4 text-4xl font-teko font-extrabold tracking-tight leading-none md:text-6xl xl:text-7xl text-white">
              I am ANDREA S. <span className="text-blue-300">PENSIERI.</span>
            </h1>
            <p class="lg:max-w-[500px] mb-6 font-light xs:text-3xl font-sans lg:mb-6 xxs:text-2xl md:text-lg lg:text-4xl text-gray-400">
              A Front End Developer based in Italy. I can code, design and
              prototype beautiful and responsive web applications!
            </p>
            <div className="">
              <a href="https://www.facebook.com/andrew.onais.9/?paipv=0&eav=Afa5uhlGs_onh2HMqBdvsaEiFm8mMpnhcXeALi7FbXXEzvqkhVzfxGC_-cvJZ5TcBPM&_rdr">
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
              <a href="https://www.instagram.com/andy_s.thought/">
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
              <a href="https://github.com/andreasiano?tab=repositories">
                <svg
                  className="inline-flex mr-3 items-start justify-start"
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
              <a href="https://www.linkedin.com/in/andrea-siano-023a46243/">
                <svg
                  className="inline-flex mr-3 items-start justify-start"
                  viewBox="0,0,256,256"
                  width="33px"
                  height="33px"
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
                    <g transform="scale(4,4)">
                      <path d="M48,8h-32c-4.418,0 -8,3.582 -8,8v32c0,4.418 3.582,8 8,8h32c4.418,0 8,-3.582 8,-8v-32c0,-4.418 -3.582,-8 -8,-8zM24,47h-5v-20h5zM24.029,23.009c-0.647,0.66 -1.491,0.991 -2.529,0.991c-1.026,0 -1.865,-0.341 -2.519,-1.023c-0.654,-0.682 -0.981,-1.519 -0.981,-2.509c0,-1.02 0.327,-1.852 0.981,-2.498c0.654,-0.647 1.493,-0.97 2.519,-0.97c1.038,0 1.882,0.323 2.529,0.969c0.647,0.646 0.971,1.479 0.971,2.499c0,1.034 -0.324,1.881 -0.971,2.541zM47,47h-5v-11.113c0,-3.099 -1.786,-4.887 -4,-4.887c-1.067,0 -2.274,0.648 -2.965,1.469c-0.691,0.821 -1.035,1.862 -1.035,3.125v11.406h-5v-20h5v3.164h0.078c1.472,-2.435 3.613,-3.644 6.426,-3.652c3.996,-0.012 6.496,2.988 6.496,8.242z"></path>
                    </g>
                  </g>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
        <div class="xxs:mt-6 md:mt-0 lg:col-span-5 lg:flex">
          <img className="rounded-xl" src={img1} alt="mockup" />
        </div>
      </div>
    </section>
  );
}


