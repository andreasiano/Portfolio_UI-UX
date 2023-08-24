import img1 from "./../assets/images/travel-app.png";
import img2 from "./../assets/images/Blog.png";
import img3 from "./../assets/images/GamingApp.png";
import { motion } from "framer-motion";

export default function Projects() {
    return (
      <section id="works">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div class="relative w-4/5 mx-auto mb-4 mt-20">
            <img
              class="md:h-[60vh] lg:h-[80vh] sm:h-[70vh] xxs:h-[60vh] w-full object-cover rounded-md"
              src={img1}
            ></img>
            <div class="absolute inset-0 bg-black opacity-70 rounded-md"></div>
            <div class="absolute inset-0 flex items-start flex-col justify-center px-6">
              <h4 className="font-teko text-gray-400 pb-5 font-regular max-w-[400px] text-[20px] ">
                UI UX DESIGN
              </h4>
              <h1 class="text-white max-w-[500px] xxs:text-2xl sm:text-3xl md:text-4xl leading-10 font-teko lg:text-5xl mb-2 font-bold">
                TRAVEL MOBILE APP ADVENTURE-VIBES
              </h1>
              <p className="font-sans text-white pb-5 font-regular max-w-[400px] xxs:text-[15px] lg:text-[20px] ">
                This is a complete travel mobile app experience built with
                figma. You can take a look at it if you want to!
              </p>
              <button class="font-teko lg:p-6 xxs:p-2 xxs:text-xl lg:text-2xl bg-transparent hover:bg-white text-white font-regular hover:text-black transition duration-500 py-2 px-4 border border-white hover:border-transparent rounded">
                <a href="https://www.figma.com/file/bohhBEUAqAzkZO6bV7XcxC/Travel-Mobile-App?type=design&node-id=0-1&mode=design&t=UzkrEtZFTmOzgoWA-0">
                  SEE MY PROTOTYPE
                </a>
              </button>
            </div>
          </div>
          <div class="relative w-4/5 mx-auto mb-10 mt-10">
            <img
              class="md:h-[50vh] lg:h-[80vh] sm:h-[70vh] xxs:h-[60vh] w-full object-cover rounded-md"
              src={img2}
            ></img>
            <div class="absolute inset-0 bg-black opacity-30 rounded-md"></div>
            <div class="absolute inset-0 flex items-start flex-col justify-center px-6">
              <h4 className="font-teko text-gray-400 pb-5 font-regular max-w-[400px] text-[20px] ">
                FRONT END DEVELOPMENT
              </h4>
              <h1 class="text-white xxs:text-2xl sm:text-3xl md:text-4xl max-w-[400px] leading-10 font-teko lg:text-5xl mb-2 font-bold">
                EAST ASIAN CURIOSITIES BLOG
              </h1>
              <p className="font-sans text-white pb-5 font-regular max-w-[400px] xxs:text-[15px] lg:text-[20px] ">
                East Asian Curiosities will allow you to go deep in the
                understanding of marvellous places, where ghosts, gods and
                spirits dwell.
              </p>
              <button class="lg:p-6 xxs:p-2 xxs:text-xl lg:text-2xl font-teko bg-transparent hover:bg-white text-white font-regular hover:text-black transition duration-500 py-2 px-4 border border-white hover:border-transparent rounded">
                <a href="https://east-asian-blog.netlify.app/">
                  SEE MY PROJECT
                </a>
              </button>
            </div>
          </div>
          <div class="relative w-4/5 mx-auto mb-10 mt-10">
            <img
              class="md:h-[50vh] lg:h-[80vh] sm:h-[70vh] xxs:h-[60vh] w-full object-cover rounded-md"
              src={img3}
            ></img>
            <div class="absolute inset-0 bg-black opacity-70 rounded-md"></div>
            <div class="absolute inset-0 flex items-start flex-col justify-center px-6">
              <h4 className="font-teko text-gray-400 pb-5 font-regular max-w-[400px] text-[20px] ">
                UI UX DESIGN
              </h4>
              <h1 class="text-white xxs:text-2xl sm:text-3xl md:text-4xl max-w-[400px] leading-10 font-teko lg:text-5xl mb-2 font-bold">
                GAMING APP
              </h1>
              <p className="font-sans text-white pb-5 font-regular max-w-[400px] xxs:text-[15px] lg:text-[20px] ">
                Here's my latest project! This is a concept for a gaming shop
                platform with a section for live events!
              </p>
              <button class="lg:p-6 xxs:p-2 xxs:text-xl lg:text-2xl font-teko bg-transparent hover:bg-white text-white font-regular hover:text-black transition duration-500 py-2 px-4 border border-white hover:border-transparent rounded">
                <a href="https://www.figma.com/file/eyj3oXiTlGgjXyoN5vP95w/Gaming-Desktop-App?type=design&node-id=0-1&mode=design&t=2WvHlNpjBwmi5Tdx-0">
                  SEE MY PROTOTYPE
                </a>
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    );
}
