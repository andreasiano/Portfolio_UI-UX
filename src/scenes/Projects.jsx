import img1 from "./../assets/images/travel-app.png";
import img2 from "./../assets/images/east-asian-blog.png";

export default function Projects() {
    return (
      <div>
        <section>
          <div class="relative xs:max-w-[500px] md:max-w-[1100px] sm:max-w-[900px] xxs:max-w-[360px] mx-auto mb-4 mt-20">
            <img
              class="md:h-[50vh] lg:h-[60vh] sm:h-[70vh] xxs:h-[60vh] w-full object-cover rounded-md"
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
              <p className="font-sans text-white pb-5 font-regular max-w-[400px] xxs:text-[15px] text-[20px] ">
                This is a complete travel mobile app experience built with
                figma. You can take a look at it if you want to!
              </p>
              <button class="font-teko bg-transparent hover:bg-white text-white font-regular hover:text-black transition duration-500 py-2 px-4 border border-white hover:border-transparent rounded">
                SEE MY PROTOTYPE
              </button>
            </div>
          </div>
          <div class="relative xs:max-w-[500px] md:max-w-[1100px] sm:max-w-[900px] xxs:max-w-[360px] mx-auto mb-20 mt-10">
            <img
              class="md:h-[50vh] lg:h-[60vh] sm:h-[70vh] xxs:h-[60vh] w-full object-cover rounded-md"
              src={img2}
            ></img>
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
              <button class=" font-teko bg-transparent hover:bg-white text-white font-regular hover:text-black transition duration-500 py-2 px-4 border border-white hover:border-transparent rounded">
                SEE MY PROJECT
              </button>
            </div>
          </div>
        </section>
      </div>
    );
}
