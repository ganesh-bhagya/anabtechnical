import React, { useState } from 'react'
import { Title } from '../../components/Typos/Title'
import { Description } from '../../components/Typos/Description'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { vnmCardItems, vnmItems } from '../../utils/dataArrays';
import { useFramerAnimation } from '../../hooks/useFramerAnimation';
import { motion } from "framer-motion";

export const VnM = () => {
  const { titleVariants } = useFramerAnimation();

  const [hoveredIndex, setHoveredIndex] = useState(0);
  const handleHover = (itemIndex) => {
    setHoveredIndex(itemIndex);
  }
  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      className='p-[5%]  md:p-[5%] py-[5%] md:py-[7%]  md:pb-[3%] overflow-x-hidden  flex flex-col md:flex-row md:justify-between md:items-center '>
      <div className='flex flex-wrap md:w-[48%] justify-between '>
        {vnmCardItems.map((item, itemIndex) => {
          return (
            <VnmItem
              key={itemIndex}
              handleHover={handleHover}
              itemIndex={itemIndex}
              img={item.img}
              des={item.des}
              hoveredIndex={hoveredIndex}
            />
          )
        })}
      </div>
      <div
        className='flex flex-col md:items-start gap-10 md:gap-5 md:w-[48%]'>
        <Swiper
          slidesPerView={1}
          loop={true}
          pagination={true}
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          className="mySwiper  "
        >
          {vnmItems.map((item, itemIndex) => {
            return (
              <SwiperSlide key={itemIndex}>
                <div
                  className="flex flex-col justify-center  gap-3">
                  <motion.div variants={titleVariants} className='text-title-color md:text-left'>
                    <Title title={item.title} />
                  </motion.div>
                  <motion.div variants={titleVariants} className=" text-title-color mt-3">
                    <Description des={item.des} />
                  </motion.div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </motion.section>
  )
}


const VnmItem = ({
  img,
  des,
  handleHover,
  itemIndex,
  hoveredIndex }) => {
  const isHovered = hoveredIndex === itemIndex;
  const { cardVariants } = useFramerAnimation();
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
      variants={cardVariants}
      onMouseEnter={() => handleHover(itemIndex)}
      onMouseLeave={() => handleHover(null)}
      className={`md:w-[32%] w-[48%] flex flex-col p-5 py-7 md:py-10 gap-3 ${isHovered ? "bg-[#FFFBE6]" : "md:bg-[#F5F5F5] bg-[#FFFBE6]"} mb-5  cursor-pointer`}>
      <div className=''>
        <img src={img} className=' object-cover' alt="" />
      </div>
      <div className={`font-inter text-[14px]  ${isHovered ? "text-title-color font-bold" : "md:text-[#00000080] md:font-medium text-title-color font-bold"}`}>
        {des}
      </div>
    </motion.div>
  )
}