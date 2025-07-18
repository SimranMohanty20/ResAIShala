import React from 'react';
import CardsContainer from '../components/CardContainer';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import ResearchChatbot from '../components/ResearchChatbot.jsx';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const Research = () => {
  return (
    <div>
      <Navbar />
      <div className='fixed bottom-4 right-4'><ResearchChatbot /></div>
      <motion.div
        className="flex flex-col text-center w-full mb-20 mt-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="sm:text-[3vw] text-2xl fira-sans-bold mb-4 text-gray-900"
          variants={fadeInUp}
        >
          Research at ResAIShala
        </motion.h1>
        <motion.p
          className="lg:w-2/3 mx-auto leading-relaxed text-base"
          variants={fadeInUp}
        >
          At ResAIShala, we are at the forefront of educational research and innovation. Our mission is to advance knowledge, inform policy, and improve practice through rigorous and impactful research. Our multidisciplinary team works across various domains to explore emerging trends, address key challenges, and develop innovative solutions in education and technology.
        </motion.p>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="sm:text-[2vw] text-2xl fira-sans-semibold mb-4 text-center text-gray-900"
          variants={fadeInUp}
        >
          Research Areas
        </motion.h1>
        <motion.div variants={fadeInUp}>
          <CardsContainer />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Research;