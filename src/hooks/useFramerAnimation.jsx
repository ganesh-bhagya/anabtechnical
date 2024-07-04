import React from 'react'

export const useFramerAnimation = () => {
  const cardVariants = {
    offscreen: {
      opacity: 0,
      x: 75
    },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1, delay: 0.1
      }
    }
  }
  const cardLeftVariants = {
    offscreen: {
      opacity: 0,
      x: -75
    },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1, delay: 0.1
      }
    }
  }
  const imageVariants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        duration: 1, delay: 0.1
      }
    }
  }

  const titleVariants = {
    offscreen: {
      opacity: 0,
      y: 50
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5, delay: 0.1
      }
    }
  }

  return { cardVariants, cardLeftVariants, imageVariants, titleVariants }
}
