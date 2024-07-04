import React from 'react'
import projects from "./../../assets/images/projects.jpeg";

export const ProjectContent = () => {
  return (
    <section
      className="w-full h-auto md:h-auto py-[10%] pt-[35%] md:pt-[12%] md:py-[7%] md:pb-[10%] bg-white px-[5%] flex flex-col items-center "
    >
      <div className=' font-inter font-medium text-lg text-center text-black mb-2'>
        Overview of Project
      </div>
      <div className=' font-inter font-bold text-[36px] leading-[60px] md:text-[80px] lmd:eading-[90px] text-center text-title-color md:w-[70%]'>
        Electrical Fittings & Fixtures Repairing & Maintenance
      </div>

      <div className='md:w-[80%] overflow-hidden rounded-xl mt-[6%]'>
        <img src={projects} className='object-cover' alt="" />
      </div>
      <div className='flex flex-col gap-6 md:w-[80%] mt-[8%] md:mt-[5%] font-inter font-normal text-lg'>
        <p>
          Sustainability is a core value that permeates every aspect of our operations.
          We prioritize environmental responsibility by implementing eco-friendly
          practices and reducing our carbon footprint. Our commitment extends to social impact,
          where we actively engage in philanthropic initiatives and ethical business practices,
          fostering trust and accountability.
        </p>
        <p>
          Sustainability is a core value that permeates every aspect of our operations.
          We prioritize environmental responsibility by implementing eco-friendly
          practices and reducing our carbon footprint. Our commitment extends to social impact,
          where we actively engage in philanthropic initiatives and ethical business practices,
          fostering trust and accountability.
        </p>
        <p>
          Sustainability is a core value that permeates every aspect of our operations.
          We prioritize environmental responsibility by implementing eco-friendly
          practices and reducing our carbon footprint. Our commitment extends to social impact,
          where we actively engage in philanthropic initiatives and ethical business practices,
          fostering trust and accountability.
        </p>
        <p>
          Sustainability is a core value that permeates every aspect of our operations.
          We prioritize environmental responsibility by implementing eco-friendly
          practices and reducing our carbon footprint. Our commitment extends to social impact,
          where we actively engage in philanthropic initiatives and ethical business practices,
          fostering trust and accountability.
        </p>
        <p>
          Sustainability is a core value that permeates every aspect of our operations.
          We prioritize environmental responsibility by implementing eco-friendly
          practices and reducing our carbon footprint. Our commitment extends to social impact,
          where we actively engage in philanthropic initiatives and ethical business practices,
          fostering trust and accountability.
        </p>
      </div>
    </section>
  )
}
