import React, { useEffect } from 'react';
import resailogo from '../assets/resailogo.svg';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger, TextPlugin } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger, TextPlugin);

const WhyChooseUS = () => {

  useGSAP(() => {

      gsap.from(".cont-wc", {
        backgroundColor:"#fff",
        y:100,
      scrollTrigger:{
          trigger:".cont-wc",
          start:"top 80%",
          markers:false,
          scrub:false,
        }
      })

    gsap.from(".cont-wcu", {
    scrollTrigger:{
        trigger:".cont-wc",
        start:"top 70%",
        markers:false,
        scrub:false,
    },
      x: -100,
      opacity: 0,
      stagger: 0.3
    });

    // Hover effect
    const containers = document.querySelectorAll('.cont-wcu');
    containers.forEach(container => {
      container.addEventListener('mouseenter', () => {
        const tl = gsap.timeline();
        const textElement = container.querySelector('h1');
        const originalText = textElement.innerHTML;
        const newText = container.getAttribute('data-new-text');
        container.setAttribute('data-original-text', originalText);

        tl.to(textElement, {
          duration: 0.5,
          opacity: 0,
          onComplete: () => {
            textElement.innerHTML = newText;
          }
        }).to(textElement, {
          duration: 0.5,
          opacity: 1
        });
      });

      container.addEventListener('mouseleave', () => {
        const tl = gsap.timeline();
        const textElement = container.querySelector('h1');
        const originalText = container.getAttribute('data-original-text');

        tl.to(textElement, {
          duration: 0.5,
          opacity: 0,
          onComplete: () => {
            textElement.innerHTML = originalText;
          }
        }).to(textElement, {
          duration: 0.5,
          opacity: 1
        });
      });
    });
  }, []);

  return (
    <div className='cont-wc flex flex-col md:flex-row h-[50vh] md:h-[60vh]  w-[95%] mx-2 md:mx-10 rounded-xl bg-secondary border-2 border-black shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl'>
      <div className='w-[100%] md:w-[30%] flex justify-center md:justify-center items-center '>
        <div className='bg-background h-[150px] w-[150px] md:h-[300px] md:w-[300px] rounded-full relative'>
          <img src={resailogo} className='scale-150 absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]' alt="Resai Logo" />
        </div>
      </div>
      <div className='w-[100%] md:w-[70%] flex flex-row h-[50%] md:h-auto md:flex-col justify-between md:gap-0 gap-2 p-2 md:p-10'>
        <div className='cont-wcu wc1 bg-background rounded-xl w-[250px] h-[100px] md:w-4/5 md:h-1/5 flex items-center justify-center md:justify-normal' data-new-text='Implement new technology'><i className="mr-1 md:mr-0 fa-solid fa-chalkboard-user text-[3vw] ml-3"></i><h1 className='text-[2.5vw] fira-sans-semibold md:ml-4'>Technology Integration</h1></div>
        <div className='cont-wcu bg-background rounded-xl w-[250px] h-[100px] md:w-4/5 md:h-1/5 mt-40 md:mt-0  md:ml-40 flex items-center justify-center md:justify-normal' data-new-text='Exponential Learning'><i className="mr-1 md:mr-0 fa-solid fa-chalkboard text-[3vw]  ml-3"></i><h1 className='text-[2.5vw] fira-sans-semibold md:ml-4'>Research Based</h1></div>
        <div className='cont-wcu bg-background rounded-xl w-[250px] h-[100px] md:w-4/5 md:h-1/5 mt-40 md:mt-0 md md:ml-40 flex items-center justify-center md:justify-normal' data-new-text='Training and Internship'><i className="mr-1 md:mr-0 fa-regular fa-clock text-[3vw]  ml-3"></i><h1 className='text-[2.5vw] fira-sans-semibold md:ml-4'>Make your Carrer</h1></div>
        <div className='cont-wcu bg-background rounded-xl w-[250px] h-[100px] md:w-4/5 md:h-1/5 flex items-center justify-center md:justify-normal' data-new-text='Create good network'><i className="mr-1 md:mr-0 fa-regular fa-handshake text-[3vw]  ml-3"></i><h1 className='text-[2.5vw] fira-sans-semibold md:ml-4'>Supportive Community</h1></div>
      </div>
    </div>
  );
}

export default WhyChooseUS;
