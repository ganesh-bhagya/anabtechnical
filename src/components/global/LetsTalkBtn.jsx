/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

export const LetsTalkBtn = () => {
  return (
    <Link to="/contact-us" className='font-inter hidden xl:inline-flex text-lg leading-6 border-[#324589] border-2 rounded-lg w-fit p-8 py-[10px] font-semibold cursor-pointer bg-transparent text-[#324589] hover:bg-[#324589] hover:text-white transition-colors duration-300'>
      Let's Talk
    </Link>
  )
}
