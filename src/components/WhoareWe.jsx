import React, { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import 'tailwindcss/tailwind.css';
gsap.registerPlugin(ScrollTrigger);

const WhoWeAre = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const elements = sectionRef.current.querySelectorAll('.anim-element');
    gsap.from(elements, {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: 'power4.out',
      stagger: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        markers: false,
        scrub: false,
      },
    });
  }, []);

  return (
    <section ref={sectionRef} className="aa py-2 md:py-12 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="anim-element text-[4vw] fira-sans-bold mb-6">Who We Are</h2>
        <p className="anim-element text-lg mb-6">
          We are a passionate and dedicated team of educators, innovators, and professionals committed to transforming the landscape of education.
          Our mission is to inspire and empower learners of all ages by providing high-quality, hands-on learning experiences in emerging technologies.
        </p>
        <div className="space-y-4 text-center">
          <ul className="list-inside text-lg flex flex-row fira-sans-semibold mt-10 mb-10 justify-center items-center gap-4 md:gap-20">
            <li className="anim-element flex text-center flex-col gap-4 w-1/4">
              <i className="fa-solid fa-graduation-cap text-main"></i>
              Integrating cutting-edge AI into STEM curricula
            </li>
            <li className="anim-element flex text-center flex-col gap-4 w-1/4">
              <i className="fa-solid fa-graduation-cap text-main"></i>
              Offering hands-on projects and real-world applications
            </li>
            <li className="anim-element flex text-center flex-col gap-4 w-1/4">
              <i className="fa-solid fa-graduation-cap text-main"></i>
              Interactive courses designed to inspire and empower learners
            </li>
          </ul>
        </div>
        <p className="anim-element text-lg mt-6 mx-2 md:mx-24 text-center">
          Join us in revolutionizing education and equipping the next generation with the skills they need to excel in the rapidly evolving fields of science, technology, engineering, and mathematics.
        </p>
        <div className="mt-8">
          <a href="#learn-more" className="anim-element btt1 inline-block bg-main text-white px-6 py-3 rounded-full transition duration-300">
            Learn More About Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
