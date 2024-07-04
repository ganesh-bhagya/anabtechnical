import React from 'react'
import background from "./../../assets/images/footer-back.png"
import backgroundTwo from "./../../assets/images/services-back.png"
import { motion } from "framer-motion";

export const ServicesHero = () => {
  return (
    <section  className='w-full  md:bg-[#FFFBE7] bg-[#F7FCDF] relative'>
      <div className="md:w-[30%] w-[40%] absolute left-[-5%] bottom-0 md:opacity-45">
        <img
          src={background}
          className=" object-cover"
          style={{ transform: 'scaleX(-1)' }}
          alt=""
        />
      </div>
      <div className="md:w-[30%] w-[50%] absolute right-0 md:right-[-10%] bottom-0 md:opacity-80">
        <img
          src={backgroundTwo}
          className=" object-cover"
          alt=""
        />
      </div>
      <div className='px-[5%] md:px-[5%] md:p-[15%] p-[40%] w-full flex flex-col md:items-center'>
        <motion.div
          initial={{
            opacity: 0,
            y: 50
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1
          }}
          className='w-[90%] font-messiri font-bold text-[30px] leading-[40px] md:text-[80px] md:leading-[90px] md:text-center text-title-color'>
          Our Services
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 50
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1
          }}
          className=' font-inter font-semibold text-[20px] leading-[32px] text-title-color md:text-center md:w-[70%] mt-5'>
          We offer a wide range of maintenance and cleaning services to meet all your needs. Our skilled team of professionals is committed to delivering top-notch solutions with precision and expertise. Explore our services below
        </motion.div>
      </div>
    </section>
  )
}
