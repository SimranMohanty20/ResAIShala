import React from 'react'
import ResAIX from '../assets/ResAIX.jpeg'
import jpg from '../assets/jpg.png'
import ballon from '../assets/ballon.png'
import { motion } from 'framer-motion'

const Trail2 = () => {
  return (
    <div className='relative'>
        <img className='' src={ResAIX} alt="" />
        <motion.img 
          initial={{ x:'10vw', scale:0.3 }}
          animate={{ x:'0vw',scale:0.3 }}
          transition={{ duration:8,repeatDelay:0, repeat: Infinity, repeatType: "reverse" }}

            className='hidden lg:block absolute top-[-50vh] right-[5vw] z-7' src={jpg} />

        <motion.img
        initial={{ y:'20vh',scale:0.4 }}
        animate={{ y:'0vh',scale:0.4 }}
        transition={{ duration:10, repeat: Infinity, repeatType: "reverse" }}
        className='hidden lg:block absolute top-0 scale-[.4]' src={ballon}/>
    </div>
  )
}

export default Trail2