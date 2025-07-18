import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'tailwindcss/tailwind.css';

gsap.registerPlugin(ScrollTrigger);

const areas = [
  {
    title: "Robotics",
    icon: "🤖",
    description: "Robotics is the engineering field that deals with designing, building, and using robots. It combines disciplines like Mechanical Engineering, Computer Engineering, and Electrical Engineering.",
  },
  {
    title: "Artificial Intelligence",
    icon: "🧠",
    description: "Artificial Intelligence (AI) is a branch of computer science focused on creating intelligent machines. AI is a rapidly evolving field with the potential to revolutionize many aspects of our lives.",
  },
  {
    title: "Computer and Coding",
    icon: "💻",
    description: "This is the process of writing instructions for computers to understand. Coders use programming languages, which are sets of rules and symbols that tell the computer what to do step-by-step.",
  },
  {
    title: "IoT",
    icon: "🌐",
    description: "IoT, or the Internet of Things, is a network of everyday objects equipped with sensors and software that connect and exchange data with each other. Imagine your thermostat adjusting based on your phone's location.",
  },
  {
    title: "Olympiads",
    icon: "📊",
    description: "Olympiads are international competitive examinations or contests in various subjects or fields.",
  },
  {
    title: "Cloud & Edge Computing",
    icon: "☁️",
    description: "Cloud & Edge Technologies involve the use of remote servers hosted on the Internet to store, manage, and process data, as well as bringing computation and data storage closer to the location where it is needed to improve response times and save bandwidth.",
  },
];

const WhyUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedArea, setSelectedArea] = useState(null);
  const whyUsSectionRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 3) % areas.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const elements = whyUsSectionRef.current.querySelectorAll('.anim-element');
    gsap.fromTo(elements, {
      y: 50,
      opacity: 0,
    },{
      opacity:1,
      y:0,
      duration: 1.5,
      ease: 'power4.out',
      stagger: 0.3,
      scrollTrigger: {
        trigger: whyUsSectionRef.current,
        start: 'top 70%',
        markers: false,
        scrub: false,
      },
    });
  }, []);

  const showPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 3 + areas.length) % areas.length);
  };

  const showNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % areas.length);
  };

  const currentAreas = [
    areas[currentIndex],
    areas[(currentIndex + 1) % areas.length],
    areas[(currentIndex + 2) % areas.length],
  ];

  return (
    <section ref={whyUsSectionRef} className="py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 px-2 lg:px-8">
        <h1 className="text-[4vw] fira-sans-bold text-center mb-8 anim-element">What Areas We Work</h1>
        <p className="md:px-20 px-2 text-center fira-sans-regular text-lg mb-8 anim-element">
          We are at the forefront of innovation, working in fields that are rapidly changing the world.
          We connect devices to the Internet of Things (IoT), allowing them to share data and automate tasks.
          Our engineers design and build robots that mimic human actions or assist us in various ways.
        </p>
        <p className="px-2 md:px-20 text-center text-lg mb-12 anim-element"> 
          We create intelligent machines through artificial intelligence (AI), enabling them to learn, solve problems, and make decisions.
          Finally, we write the code, the language that unlocks the potential of computers, and allows us to build the technologies that shape our digital world.
        </p>
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={showPrevious}
            className="p-2 bg-gray-300 rounded-full mr-2 hover:bg-gray-400 transition anim-element"
          >
            &#8592; 
          </button>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative anim-element">
            <AnimatePresence>
              {currentAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-[#ebe1ffcd] rounded-lg shadow-sm shadow-black p-6 text-center h-[400px] cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedArea(area)}
                >
                  <div className="text-5xl mb-6">{area.icon}</div>
                  <h2 className="text-[5vw] md:text-[1.5vw] font-bold mb-8">{area.title}</h2>
                  <p className="text-[4vw] md:text-[1.1vw] text-gray-600">{area.description}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <button
            onClick={showNext}
            className="p-2 bg-gray-300 ml-2 rounded-full hover:bg-gray-400 transition anim-element"
          >
           &#8594;
          </button>
        </div>
        {selectedArea && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-6 text-center w-full md:w-1/3 mx-auto mt-8 anim-element"
          >
            <div className="text-5xl mb-4">{selectedArea.icon}</div>
            <h2 className="text-2xl font-bold mb-2">{selectedArea.title}</h2>
            <p className="text-gray-600">{selectedArea.description}</p>
            <button
              onClick={() => setSelectedArea(null)}
              className="mt-4 p-2 bg-gray-300 rounded-full hover:bg-gray-400 transition"
            >
              Close
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default WhyUs;
