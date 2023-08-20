import { motion } from "framer-motion";
import img1 from "./../assets/images/icons8-ui-ux-design-50 (1).png";
import img2 from "./../assets/images/icons8-coding-50.png";
import img3 from "./../assets/images/icons8-art-50.png";

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-300">
      <div class="py-8 mx-auto w-4/5">
        <div class="max-w-screen-lg mb-8 lg:mb-16">
          <h2 class="mb-4 xxs:text-4xl sm:text-5xl font-teko text-6xl tracking-tight font-extrabold text-darkGrey">
            MY SKILLS
          </h2>
        </div>
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
          <div class="space-y-8 sm:grid mb-10 md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div className="bg-white shadow-lg p-5 rounded-lg">
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12">
                <img className="w-8 h-8 lg:w-8 lg:h-8" src={img1} alt="" />
              </div>
              <h3 class="mb-2 font-teko text-2xl font-bold text-darkGrey">
                UI UX DESIGN
              </h3>
              <p class="text-gray-400">
                A UX designer thinks about how the experience makes the user
                feel and how easy it is for the user to accomplish their desired
                tasks. They also observe and conduct task analyses to see how
                users actually complete tasks in a user flow.
              </p>
            </div>
            <div className="bg-white shadow-lg p-5 rounded-lg">
              <div class="flex justify-center  items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <img className="w-8 h-8 lg:w-8 lg:h-8" src={img2} alt="" />
              </div>
              <h3 class="mb-2 text-darkGrey font-teko text-2xl font-bold ">
                FRONT END DEVELOPMENT
              </h3>
              <p class="text-gray-400">
                The main benefit of front-end development is its speed because
                of the modern framework and innovations. The quick development
                makes the entire process simple. For example, when you work on
                an app for which the backend is ready, development can be done
                easily
              </p>
            </div>
            <div className="bg-white shadow-lg p-5 rounded-lg">
              <div class="flex justify-center  items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <img className="w-8 h-8 lg:w-8 lg:h-8" src={img3} alt="" />
              </div>
              <h3 class="mb-2 text-darkGrey font-teko text-2xl font-bold ">
                VECTOR ART
              </h3>
              <p class="text-gray-400">
                Have you ever tried to resize an image and it got distorted or
                lost a bit of quality? Vector graphics are the answer, as they
                are composed of things such as lines and shapes based on
                mathematical formulas. It’s hard to explain, but, in short, they
                allow you to work with them without having to worry about
                quality loss.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
