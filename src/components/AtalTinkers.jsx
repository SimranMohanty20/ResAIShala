import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const AtalTinkers = () => {
  const controls = useAnimation();
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const impactSection = document.getElementById('impact-section');
      const rect = impactSection.getBoundingClientRect();
      const inView = rect.top >= 0 && rect.bottom <= window.innerHeight;

      setIsInView(inView);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 1 }
      });
    } else {
      controls.start({
        opacity: 0,
        scale: 0.8,
        y: 100,
        transition: { duration: 1 }
      });
    }
  }, [isInView, controls]);

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-gray-600 body-font pb-20 bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="container px-5 py-24 mx-auto backdrop-blur-md bg-white bg-opacity-80 rounded-xl shadow-xl">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col text-center w-full mb-20">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="sm:text-4xl text-3xl font-bold title-font mb-4 text-gray-900">
            Atal Tinkering Labs (ATL) at ResAIShala
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-700">
            At ResAIShala, we are proud to support and enhance the Atal Tinkering Labs (ATL) initiative, a flagship program by the Government of India under the Atal Innovation Mission (AIM). ATLs are dedicated innovation workspaces established in schools to cultivate curiosity, creativity, and imagination in young minds. These labs provide students with the tools and technologies to develop skills in STEM (Science, Technology, Engineering, and Mathematics), enabling them to become future innovators and problem-solvers.
          </motion.p>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center sm:text-4xl text-3xl font-bold title-font mb-10 text-gray-900">
          Objective
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {objectives.map((objective, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <h2 className="text-lg sm:text-xl text-gray-900 font-semibold title-font mb-2">{objective.title}</h2>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                className="leading-relaxed text-base text-gray-700 mb-4">{objective.description}</motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

const ImpactCard = ({ index, title }) => {
  const circleVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { duration: 1 } }
  };

  const crackVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  };

  const portalVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 1 } }
  };

  const blastVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1.5, transition: { duration: 0.3, yoyo: Infinity } }
  };

  const variants = [
    circleVariants,
    crackVariants,
    portalVariants,
    blastVariants
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants[index]}
      className="p-6 bg-white rounded-xl shadow-lg"
    >
      <h2 className="text-lg sm:text-xl text-gray-900 font-semibold title-font mb-2">{title}</h2>
    </motion.div>
  );
};

const objectives = [
  { title: 'Foster Innovation', description: 'Encourage students to experiment with innovative ideas and solutions.' },
  { title: 'Develop Skills', description: 'Equip students with critical 21st-century skills such as design thinking, computational thinking, and adaptive learning.' },
  { title: 'Hands-on Learning', description: 'Provide hands-on learning experiences in cutting-edge technologies like AI, robotics, IoT, and 3D printing.' },
  { title: 'Encourage Collaboration', description: 'Promote collaborative learning and teamwork through project-based activities.' }
];

const facilities = [
  { title: 'State-of-the-Art Equipment', description: 'ATLs are equipped with advanced tools and technology kits, including 3D printers, robotics kits, electronics development tools, and more.' },
  { title: 'Expert Mentorship', description: 'Access to guidance from experienced mentors and industry experts to help students navigate their projects and ideas.' },
  { title: 'Learning Modules', description: 'Comprehensive learning materials and modules designed to enhance students\' understanding of STEM concepts and their practical applications.' },
  { title: 'Workshops and Competitions', description: 'Regular workshops, hackathons, and competitions to stimulate interest and participation in innovative projects.' }
];

const impacts = [
  { title: 'Increased Engagement' },
  { title: 'Enhanced Creativity' },
  { title: 'Improved Problem-Solving Skills' },
  { title: 'Greater Collaboration' }
];

export default AtalTinkers;