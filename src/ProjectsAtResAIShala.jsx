import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const ProjectCard = ({ title, objective, activities, impact, imageUrl, imagePosition, index }) => {
  const controls = useAnimation();

  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.2 }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden my-4 w-4/5"
    >
      <div className={`md:flex ${imagePosition === 'left' ? 'flex-row' : 'flex-row-reverse'}`}>
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:h-full md:w-48" src={imageUrl} alt={title} />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-black fira-sans-semibold">{title}</div>
          <p className="mt-2 text-gray-600 fira-sans-regular"><strong>Objective:</strong> {objective}</p>
          <p className="mt-2 text-gray-600 fira-sans-regular"><strong>Activities:</strong> {activities}</p>
          <p className="mt-2 text-gray-600 fira-sans-regular"><strong>Impact:</strong> {impact}</p>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsAtResAIShala = () => {
  const projects = [
    {
      title: "AI-Driven Personalized Learning Platform",
      objective: "Develop an AI-powered platform that customizes learning experiences based on individual student needs and learning styles.",
      activities: "Designing adaptive learning algorithms, implementing AI tutors, and creating a user-friendly interface.",
      impact: "Enhances student engagement and improves learning outcomes by tailoring educational content to each student’s unique requirements.",
      imageUrl: "https://via.placeholder.com/150",
      imagePosition: 'left',
    },
    {
      title: "Smart Classroom Initiative",
      objective: "Transform traditional classrooms into smart connected learning environments using IoT and AI technologies.",
      activities: "Installing smart boards, integrating IoT devices for real-time data collection, and using AI to monitor and enhance classroom interactions.",
      impact: "Creates interactive and efficient learning spaces that foster better student-teacher collaboration and resource management.",
      imageUrl: "https://via.placeholder.com/150",
      imagePosition: 'right',
    },
    {
      title: "Robotics for All",
      objective: "Make robotics education accessible to students of all ages and backgrounds.",
      activities: "Providing robotics kits, conducting workshops, and developing curriculum materials that cover basic to advanced robotics concepts.",
      impact: "Encourages interest in STEM fields, enhances problem-solving skills, and prepares students for future careers in technology.",
      imageUrl: "https://via.placeholder.com/150",
      imagePosition: 'left',
    },
    {
      title: "STEM Explorer Program",
      objective: "Provide immersive STEM learning experiences through hands-on projects and experiments.",
      activities: "Creating and distributing STEM project kits, organizing science fairs, and offering mentorship from industry experts.",
      impact: "Engages students in practical STEM applications, promoting curiosity, creativity, and innovation.",
      imageUrl: "https://via.placeholder.com/150",
      imagePosition: 'right',
    },
    {
      title: "Community IoT Projects",
      objective: "Empower students to design and implement IoT solutions that address local community issues.",
      activities: "Identifying community problems, brainstorming IoT-based solutions, and developing prototypes with support from mentors.",
      impact: "Encourages civic engagement, teaches practical IoT skills, and improves community life through technology.",
      imageUrl: "https://via.placeholder.com/150",
      imagePosition: 'left',
    },
    {
      title: "AI for Sustainable Development",
      objective: "Explore how AI can be used to achieve sustainable development goals (SDGs).",
      activities: "Partnering with academic institutions and NGOs to research AI applications in areas like clean energy, agriculture, and healthcare.",
      impact: "Contributes to global sustainability efforts and provides students with opportunities to work on meaningful impactful projects.",
      imageUrl: "https://via.placeholder.com/150",
      imagePosition: 'right',
    },
    {
      title: "Next-Gen EdTech Solutions",
      objective: "Develop innovative educational technologies that enhance teaching and learning.",
      activities: "Collaborating with edtech companies to pilot new tools and platforms, conducting user research, and evaluating educational outcomes.",
      impact: "Accelerates the adoption of effective edtech solutions and improves educational experiences across diverse settings.",
      imageUrl: "https://via.placeholder.com/150",
      imagePosition: 'left',
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl text-center fira-sans-bold text-gray-800 mb-8">Projects at ResAIShala</h1>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          objective={project.objective}
          activities={project.activities}
          impact={project.impact}
          imageUrl={project.imageUrl}
          imagePosition={project.imagePosition}
          index={index}
        />
      ))}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden my-8 p-8">
        <h2 className="text-2xl fira-sans-bold text-gray-800 mb-4">How to Get Involved</h2>
        <p className="text-gray-500 fira-sans-regular">Students and Educators: Join our projects through school programs, extracurricular clubs, or special workshops. Gain hands-on experience and mentorship while working on cutting-edge technologies.</p>
        <p className="text-gray-500 mt-2 fira-sans-regular">Schools and Institutions: Partner with us to implement and support these projects in your educational programs. Enhance your curriculum and provide unique learning opportunities for your students.</p>
        <p className="text-gray-500 mt-2 fira-sans-regular">Industry Experts and Volunteers: Contribute your expertise and support by mentoring students, conducting workshops, and collaborating on research projects.</p>
        <p className="text-gray-500 mt-4 fira-sans-regular">At ResAIShala, we are committed to empowering the next generation of innovators through our diverse range of projects. By participating in our initiatives, you can gain valuable skills, make meaningful contributions, and be part of a dynamic community dedicated to educational excellence and innovation.</p>
        <p className="text-gray-500 mt-4 fira-sans-regular"><strong>Warm regards,</strong></p>
        <p className="text-gray-500 fira-sans-regular"><strong>Resaishala (Research based Experiential Learning)</strong></p>
      </div>
    </div>
  );
};

export default ProjectsAtResAIShala;
