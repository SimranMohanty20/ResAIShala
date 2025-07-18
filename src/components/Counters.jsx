import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const Counters = () => {
  const countersRef = useRef([]);

  useEffect(() => {
    countersRef.current = [];
    const counterElements = document.querySelectorAll('.text-c');
    counterElements.forEach((counter) => {
      const target = +counter.getAttribute('data-target');
      const hasPlus = counter.getAttribute('data-plus') === 'true';
      
      gsap.fromTo(counter, 
        { scale: 0.5, opacity: 0 },
        {
          scrollTrigger: {
            trigger: "#count-trig",
            start: "0% 80%",
            scrub: false,
            markers: false,
          },
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: 'power1.out',
        }
      );
      
      gsap.to(counter, {
        scrollTrigger: {
          trigger: "#count-trig",
          start: "0% 80%",
          scrub: false,
          markers: false,
        },
        innerText: target,
        duration: 3,
        ease: 'power1.inOut',
        snap: { innerText: 1 },
        onUpdate: function () {
          counter.innerText = Math.ceil(counter.innerText) + (hasPlus ? '+' : '');
        }
      });
    });
  }, []);

  return (
    <div id='count-trig' className='bg-purple-200 border-2 border-black md:w-[95%] w-[85%] rounded-xl m-10 shadow-lg transform transition duration-500 hover:scale-[1.01] hover:shadow-2xl'>
      <div className='flex md:flex-row flex-col p-12 justify-between text-center'>
        {[
          { target: 750, text: "Students Trained", plus: true },
          { target: 70, text: "Teachers", plus: true },
          { target: 20, text: "Courses", plus: true },
          { target: 250, text: "Internship/Projects", plus: true }
        ].map((item, index) => (
          <div key={index} className='hover:bg-purple-300 hover:shadow-lg transition duration-500 ease-in-out transform hover:scale-105 p-4 rounded-lg'>
            <h1
              ref={(el) => el && countersRef.current.push(el)}
              className='fira-sans-semibold text-[2.5rem] text-c'
              data-target={item.target}
              data-plus={item.plus}
            >
              0{item.plus ? '+' : ''}
            </h1>
            <h3 className='fira-sans-semibold text-[1.5rem] text-gray-600'>{item.text}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counters;