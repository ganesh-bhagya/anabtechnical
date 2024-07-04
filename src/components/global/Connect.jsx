import React from 'react'
import connect from "./../../assets/images/connect.png"
import { motion } from "framer-motion";
import { useFramerAnimation } from '../../hooks/useFramerAnimation';


export const Connect = () => {
 const { imageVariants, titleVariants,cardVariants } = useFramerAnimation();
  return (
    <motion.section
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.2 }}
    
      className='h-[80vh] md:h-auto overflow-x-hidden p-[5%] md:p-[5%] py-[15%] md:py-[5%] relative flex flex-col md:flex-row  bg-[#FFFBE6]'>
      <motion.div style={imageVariants} className='hidden md:block absolute top-[-10%] bottom-0 right-[10%]'>
        <img src={connect} className='object-cover w-full h-full' alt="" />
      </motion.div>
      <div className='flex flex-col gap-5 md:w-[65%]'>
        <motion.div  variants={titleVariants} className='font-inter font-bold text-[30px] leading-[48px] md:text-[64px] md:leading-[85px] text-title-color'>
          Let's Connect and <br className='md:hidden' /> Bring Your Vision to Life!
        </motion.div>
        
        <motion.a variants={titleVariants} href="mailto:info@anabtechnical.com" className='flex items-center justify-center p-2 px-8 w-fit font-inter font-semibold text-[16px] leading-8 md:text-[20px]  text-black bg-theme-color'>
          Let’s Talk
        </motion.a>
      </div>
      <motion.div
        variants={cardVariants}
        className='md:hidden absolute w-[70%] bottom-0 right-0 '>
        <img src={connect} className='object-cover w-full h-full' alt="" />
      </motion.div>
    </motion.section>
  )
}
