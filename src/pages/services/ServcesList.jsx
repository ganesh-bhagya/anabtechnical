import React from 'react'
import { Description } from '../../components/Typos/Description'
import { servicesItems } from '../../utils/dataArrays'

import { motion } from "framer-motion";
import { useFramerAnimation } from '../../hooks/useFramerAnimation';

export const ServcesList = () => {
  return (
    <section className='p-[5%]  md:p-[5%] py-[15%] md:py-[5%] overflow-hidden  flex flex-col md:flex-row items-center justify-center '>
      <div className='flex flex-wrap w-full justify-between  md:mt-10'>
        {servicesItems.map((item, itemIndex) => {
          return (
            <ServiceItem
              key={itemIndex}
              itemIndex={itemIndex}
              title={item.title}
              des={item.des}
              icon={item.icon}
            />
          )
        })}
      </div>
    </section>
  )
}


const ServiceItem = ({ icon, title, des, itemIndex }) => {
  const IconComponent = icon
  const { titleVariants } = useFramerAnimation();
  return (
    <motion.div 
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.1 }}
    variants={titleVariants}
    className='flex flex-col md:w-[49%] gap-5 p-7 bg-[#F5F5F5] mb-10 md:mb-6 ' key={itemIndex}>
      <div className=' bg-white p-2 w-fit'>
        <IconComponent />
      </div>
      <div className=' text-title-color font-inter font-semibold text-[20px] leading-8'>
        {title}
      </div>
      <div className=' text-black md:w-[80%]'>
        <Description des={des} />
      </div>
    </motion.div>
  )
}