import React, { useEffect } from "react";
import { motion } from "framer-motion";
import background from "./../../assets/images/hero-back.png";
import { AngleArrowIcon } from "../../utils/icons";
import { useInView } from "react-intersection-observer";

export const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      document.getElementById("home").classList.add("text-theme-color");
    } else {
      document.getElementById("home").classList.remove("text-theme-color");
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      className="w-full min-h-[80vh] md:min-h-[140vh] overflow-hidden md:bg-[#FFFBE7] bg-[#F7FCDF] relative"
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        className=" absolute bottom-0 w-full"
      >
        <img src={background} className=" object-cover" alt="" />
      </motion.div>
      <div className="px-[5%] md:px-[5%] md:pt-[10%] pt-[30%] w-full flex flex-col md:items-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="md:w-[90%] font-messiri font-bold text-[30px] leading-[40px] md:text-[80px] md:leading-[90px] md:text-center text-title-color"
        >
          Your Premier Choice for Maintenance and <br className="md:hidden" />{" "}
          Cleaning Services in Dubai
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className=" font-inter font-semibold text-[20px] leading-[32px] md:text-center text-title-color md:w-[60%] mt-5"
        >
          We pride ourselves on top-tier solutions for maintenance and cleaning
          needs. From expert HVAC installation to impeccable cleaning services,
          experience our dedication to excellence today.
        </motion.div>
        <motion.a
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.5,
            type: "spring",
            stiffness: 260,
            damping: 21,
          }}
          href="mailto:info@anabtechnical.com"
          className="flex justify-center w-fit items-center font-semibold p-2 px-5 gap-2 bg-black font-inter text-[14px] leading-6 md:text-[20px] md:leading-8 text-center mt-10 "
        >
          <span>
            <AngleArrowIcon />
          </span>

          <span className="text-theme-color">Get a Quote</span>
        </motion.a>
      </div>
    </section>
  );
};
