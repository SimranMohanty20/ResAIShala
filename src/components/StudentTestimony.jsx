import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import testi1 from '../assets/testi1.jpg'
import testi2 from '../assets/testi2.jpg'
import test3 from '../assets/test3.jpg'

const testimonials = [
  {
    text: "I had a great experience with the Full Stack Placement Guarantee course. The curriculum and subjects were top-notch, and Internshala helped her secure a placement. The instructors were excellent",
    author: "Anjali Bajpal",
    img: testi1, // Replace with the actual path to the image
  },
  {
    text: "I had a wonderful internship experience, feeling supported and comfortable. The employer genuinely cared about their growth.",
    author: "Hiyaz Nabi",
    img: testi2, // Replace with the actual path to the image
  },
  {
    text: "Excellent! So there was a sudden spike in audience from YT redirected to our site after the collaboration and that was really good to see.",
    author: "Prabhjyot Kaur",
    img: test3, // Replace with the actual path to the image
  },
  // {
  //   text: "Excellent! So there was a sudden spike in audience from YT redirected to our site after the collaboration and that was really good to see.",
  //   author: "Prabhjyot Kaur",
  //   img: "path/to/image.png", // Replace with the actual path to the image
  // },
  // Add more testimonials here
];

const StudentTestimony = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const nextTestimonial = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setFade(true);
    }, 300);
  };

  const prevTestimonial = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
      setFade(true);
    }, 300);
  };

  const goToTestimonial = (index) => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(index);
      setFade(true);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000); // Auto-switch every 5 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const { text, author, img } = testimonials[currentIndex];

  return (
    <div className='mb-4 pb-10'>
      <h1 className='mb-2 text-center text-[3vw] fira-sans-bold'>Testimonial</h1>
      <div className="relative w-[70%] mx-auto p-6 border border-gray-300 rounded-lg shadow-lg text-center bg-white transition-transform transform hover:scale-105 hover:shadow-lg">
        
        <div className={`transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
          <img
            src={img}
            alt={author}
            className="w-36 h-36 rounded-full mx-auto mb-4 object-cover border-4 border-main"
          />
          <p className="mb-4 text-gray-700 italic text-lg fira-sans-regular p-8">"{text}"</p>
          <p className="font-semibold text-main fira-sans-regular">{author}</p>
        </div>
       
        <div className="flex justify-center mt-4 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-main' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentTestimony;
