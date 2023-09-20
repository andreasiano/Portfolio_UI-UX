import React from 'react'
import styles from '../style';
import coding from '../assets/coding.svg'


const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-2 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 mt-5 font-poppins font-semibold ss:text-[72px] text-[42px] text-white ss:leading-[100.8px] leading-[55px]">
            Building <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Digital Products</span>,{" "}
          </h1>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[42px] text-white ss:leading-[100.8px] leading-[55px] w-full">
          Coding and More...
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          I am <span className="text-gradient">Andrea S. Pensieri</span>, a
          Front End Developer with two years of experience as a freelancer.
        </p>
      </div>
      <div
        className={`flex-1 flex ${styles.flexCenter} pb-6 md:my-0 my-10 relative`}
      >
        <img
          src={coding}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
    </section>
  );
};

export default Hero