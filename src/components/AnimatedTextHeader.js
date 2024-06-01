import React from 'react'
import { motion } from 'framer-motion'

const quote = {
    initial:{
        opacity: 0,
        y: -20,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
    
}

const AnimatedTextHeader = ({text, className=''}) => {
  return (
    <div>
        <motion.h1 className={`inline-block w-full text-white font-bold uppercase text-6xl md:text-5xl sm:text-4xl ${className}`}
        variants={quote}
        initial='initial'
        animate='animate'
        
        >
            {
                text.split(' ').map((word, index) => 
                <span key={word+'-'+index} className='inline-block'>
                    {word}&nbsp;

                </span>
                )
            }

        </motion.h1>
    </div>
  )
}

export default AnimatedTextHeader