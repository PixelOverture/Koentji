import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Clients = () => {
  const marqueeVariants = {
    animate: {
      x: [0, -1366],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 25,
          ease: 'linear',
        },
      },
    },
  }

  return (
    <div className="marquee flex items-center h-[150px]">
      <motion.div
        className="track"
        variants={marqueeVariants}
        animate="animate"
      >
        <div className="flex text-3xl gap-28">
          {Array.from([1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8]).map(
            (item) => (
              <Image
                key={item}
                src={`/client/Img-${item}.jpg`}
                alt="Client"
                height={50}
                width={100}
                className="h-[40px] w-auto"
              />
            )
          )}
        </div>
      </motion.div>
    </div>
  )
}

export default Clients
