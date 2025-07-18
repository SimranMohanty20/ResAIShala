import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Pad = () => {
  const padSectionRef = useRef(null);

  useEffect(() => {
    const elements = padSectionRef.current.querySelectorAll('.anim-element');
    gsap.fromTo(elements, {
      y: 100,
      opacity: 0,
     
    },{
      opacity:1,
      y:0,
      duration: 1.5,
      ease: 'power4.out',
      stagger: 0.3,
      scrollTrigger: {
        trigger: padSectionRef.current,
        start: 'top 70%',
        markers: false,
        scrub: false,
      },
    });
  }, []);

  return (
    <section ref={padSectionRef} className="bg-gray-100 py-12 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h2 className="anim-element text-3xl font-bold mb-10 text-center">Discover ResAIShala's Approach</h2>
          <p className="anim-element text-lg mb-6 -mt-2 text-center">
            Watch our video to learn more about ResAIShala's innovative approach to AI, Robotics, and IoT education.
          </p>
          <p className="anim-element text-lg mb-6 text-center">
            See how we are empowering students and educators with cutting-edge technology and hands-on learning experiences.
          </p>
          <div className="anim-element text-center">
            <a 
              href="https://www.youtube.com/watch?v=G5sQCp6anMA&t=16s" target='_blank' 
              className="inline-block btt1 bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300"
            >
              Watch Video
            </a>
          </div>
        </div>
        <div className="anim-element md:w-1/2 mt-6 md:mt-0 md:ml-6">
          <div className="relative" style={{ paddingBottom: "56.25%" }}>
            <iframe 
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/G5sQCp6anMA"
              title="ResAIShala Video"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pad;
