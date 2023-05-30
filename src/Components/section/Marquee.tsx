import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Marquee = () => {
  const marqueeVariants = {
    animate: {
      x: [0, -window.innerWidth],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 20,
          ease: 'linear',
        },
      },
    },
  }

  return (
    <div className="marquee bg-[#4F6A7D] text-white flex items-center px-20 h-[130px]">
      <motion.div
        className="track"
        variants={marqueeVariants}
        animate="animate"
      >
        <div className="flex gap-5 text-3xl">
          <p className="whitespace-nowrap">
            Strive For Excellence, Integrity and Improvement
          </p>
          <Image src="/circle.svg" alt="circle" height={16} width={16} />
          <p className="whitespace-nowrap">
            Strive For Excellence, Integrity and Improvement
          </p>
          <Image src="/circle.svg" alt="circle" height={16} width={16} />
          <p className="whitespace-nowrap">
            Strive For Excellence, Integrity and Improvement
          </p>
          <Image src="/circle.svg" alt="circle" height={16} width={16} />
          <p className="whitespace-nowrap">
            Strive For Excellence, Integrity and Improvement
          </p>
          <Image src="/circle.svg" alt="circle" height={16} width={16} />
          <p className="whitespace-nowrap">
            Strive For Excellence, Integrity and Improvement
          </p>
          <Image src="/circle.svg" alt="circle" height={16} width={16} />
        </div>
      </motion.div>
    </div>
  )
}

export default Marquee
