import React from 'react'

export const ContactButton = () => {
  const handleContactClick = () => {
    window.location.href = 'mailto:info@anabtechnical.com';
  };
  return (
    <a href="mailto:info@anabtechnical.com" onClick={handleContactClick}
      style={{ background: "linear-gradient(90deg, #3A2651 0%, rgba(58, 38, 81, 0.73) 100%)" }}
      className='font-dm text-lg text-white font-semibold p-2 px-7 transition-colors duration-300'>
      Contact us
    </a>
  )
}


