import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CardImg1 from '../assets/course1.jpg';
import CardImg4 from '../assets/course3.jpg';
import CardImg5 from '../assets/course4.jpg';
import CardImg6 from '../assets/course5.jpg';
import kids2 from "../assets/testi1.jpg";
import kids3 from "../assets/kids3.jpg";
import kids4 from "../assets/kids4.jpg";
import { Button } from 'react-scroll';
 

gsap.registerPlugin(ScrollTrigger);

const courses = [
  {
    title: "Computer Classes: MS-Office with AI tools",
    descriptionShort:"This course teaches essential skills in Microsoft Word, Excel, PowerPoint, Outlook, and Teams, enhanced by AI tools. Students will learn to create documents, analyze data, design presentations, and collaborate effectively, using AI for automation and productivity.",
    
    description: "This course on MS-Office with AI tools equips students with essential skills in Microsoft Word, Excel, PowerPoint, Outlook, and Teams, enhanced by AI capabilities. Participants will learn to create and manage documents, analyze data, design presentations, and collaborate effectively, while leveraging AI tools for automation, intelligent suggestions, and productivity enhancements. Practical exercises and projects ensure hands-on experience, preparing students to efficiently use these tools in professional settings.",
    image: CardImg1,
  },
  {
    title: "Coding (Scratch Programming)",

    descriptionShort:"This Scratch Programming course introduces coding fundamentals using a visual, block-based language. Students will create interactive stories, games, and animations, emphasizing logical thinking, problem-solving, and creativity. Practical projects and collaborative activities ensure an engaging, hands-on experience",

    description: "This course on Scratch Programming introduces students to the fundamentals of coding through a visual, block-based programming language. Participants will learn to create interactive stories, games, and animations by snapping together code blocks, making programming accessible and fun. The course emphasizes logical thinking, problem-solving, and creativity, providing a strong foundation for future coding endeavors. Practical projects and collaborative activities ensure an engaging and hands-on learning experience.",
    image: kids2,
  },
  {
    title: "Robotics Projects",

    descriptionShort:"In the Robotics Projects course, you’ll learn to design, build, and program robots. You’ll gain hands-on experience with sensors, microcontrollers, and navigation algorithms. The course includes practical projects like line-following, obstacle avoidance, and remote-controlled robots, providing a solid foundation for advanced robotics challenges and real-world applications.",

    description: "Robotics Projects course, you’ll learn how to design, build, and program various types of robots. You’ll gain hands-on experience with sensor integration, microcontroller programming, and robotic navigation algorithms. The course will cover practical projects like line-following robots, obstacle avoidance robots, and remote-controlled robots, providing you with a solid foundation in robotics and preparing you for more advanced challenges and real-world applications.",
    image: kids3,
  },
  {
    title: "Python Programming",

    descriptionShort:"learn the essentials of programming using Python. The course will cover key concepts such as variables, data structures, loops, and functions. You’ll also gain practical experience in writing, testing, and debugging Python code through hands-on projects involving file handling, data analysis, and web scraping.",
  
    description: "learn the essentials of programming using Python. The course will cover key concepts such as variables, data structures, loops, and functions. You’ll also gain practical experience in writing, testing, and debugging Python code through hands-on projects involving file handling, data analysis, and web scraping.",
    image: CardImg4,
  },
  {
    title: "Website and Mobile App. Development",
    description: "In the Website and Mobile App Development course, you’ll learn to design and build responsive, user-friendly websites and mobile applications. The course covers essential technologies like HTML, CSS, JavaScript, and frameworks such as React Native. You’ll gain hands-on experience in creating interactive web pages, implementing functionality, and developing cross-platform mobile apps.",
    descriptionShort: "In the Website and Mobile App Development course, you’ll learn to design and build responsive, user-friendly websites and mobile applications. The course covers essential technologies like HTML, CSS, JavaScript, and frameworks such as React Native. You’ll gain hands-on experience in creating interactive web pages, implementing functionality, and developing cross-platform mobile apps.",
    image: CardImg5,
  },
  {
    title: "Maths Classes",
      
    description: "In Maths Classes, you’ll explore a variety of mathematical concepts ranging from basic arithmetic to advanced topics like algebra, geometry, and calculus. The classes are designed to build a strong foundation in problem-solving and analytical thinking. You’ll engage in interactive lessons, practice exercises, and real-world applications to enhance your understanding and proficiency in mathematics.",
    descriptionShort: "In Maths Classes, you’ll explore a variety of mathematical concepts ranging from basic arithmetic to advanced topics like algebra, geometry, and calculus. The classes are designed to build a strong foundation in problem-solving and analytical thinking. You’ll engage in interactive lessons, practice exercises, and real-world applications to enhance your understanding and proficiency in mathematics.",
    image: CardImg6,
  },
];

const CoursesSection2 = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [toggle, settoggle] = useState(true);
  const coursesSectionRef = useRef(null);

  useEffect(() => {
    const elements = coursesSectionRef.current.querySelectorAll('.anim-element');
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
        trigger: coursesSectionRef.current,
        start: 'top 70%',
        markers: false,
        scrub: false,
      },
    });
  }, []);

  return (

    <section ref={coursesSectionRef} className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-[4vw] fira-sans-bold text-center mb-2 anim-element">Our Courses</h1>
        <p className="text-[1.1vw] fira-sans-regular text-center mb-8 anim-element">Here are some of our courses that you can take to get closure toward AI in todays world</p>
        <div className="flex bg-black">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden anim-element"
              whileHover={{
                scale: 1.05,
                rotate: 1,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)"
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedCourse(course)}
            >
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-6 text-center">
                <h2 className="text-[1.5vw] fira-sans-bold mb-2">{course.title}</h2>
                <p className="text-gray-600 mb-4">{course.descriptionShort}</p>
                <button className="btt1 bg-blue-500 transition">Read More..</button>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedCourse && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto anim-element">
              <h2 className="text-2xl font-bold mb-4">{selectedCourse.title}</h2>
              <p className="text-gray-600">{selectedCourse.description}</p>
              <button
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                onClick={() => setSelectedCourse(null)}
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CoursesSection2;
