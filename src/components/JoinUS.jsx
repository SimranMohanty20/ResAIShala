import React, { useEffect, useRef } from 'react';
import Macc from "../assets/Macc.png";
import phone from "../assets/phone.png";
import tablet from "../assets/tablet.png";
import ailabs from "../assets/ailabs.png";
import handson from "../assets/handson.png";
import aikits from "../assets/aikits.jpg";
import lms from "../assets/lms.jpg";
import cir from "../assets/cir.jpg";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const JoinUS = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements = sectionRef.current.querySelectorAll('.anim-element');

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
          trigger: sectionRef.current,
          start: 'top 80%',
          markers: false,
          scrub: false,
        },
    });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#mact',
        start: '20% center',
        scrub: false,
        markers: false,
      }
    });

    tl.fromTo('#macs', 
        { y: 500 }, 
        { y: 0, duration: 1 }
    )
    .fromTo('#iphone', 
        { x: -500 }, 
        { x: 0, duration: 1 }, 
        '+=0.1' // 0.1 seconds delay after the previous animation
    )
    .fromTo('#tabs', 
        { x: 500 }, 
        { x: 0, duration: 1 }, 
        '-=1' // Start this animation at the same time as the '#iphone' animation
    );
  }, []);

  return (
    <div ref={sectionRef}>
      <h1 className='bg-[#FAFAFA] fira-sans-bold text-center text-[4vw] anim-element'>How we do it</h1>
      <section className="bg-[#FAFAFA] pb-20 anim-element">
        <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
            {/*-- AI Labs Section --*/}
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col anim-element">
              <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                <img src={ailabs} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-9 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">AI labs</h3>
              </a>
            </div>

            {/* <!-- DIY Kits Section --> */}
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50 anim-element">
              <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
                <img src={aikits} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-9 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">DIY Kits</h3>
              </a>

              {/* <!-- Hands On and LMS Portal Section --> */}
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 anim-element">
                  <img src={handson} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="z-9 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Hands On</h3>
                </a>
                <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 anim-element">
                  <img src={lms} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="z-9 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">LMS Portal</h3>
                </a>
              </div>
            </div>

            {/* <!-- Courses Section --> */}
            <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col anim-element">
              <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                <img src={cir} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-9 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Courses</h3>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <h1 className='uppercase bg-[#FAFAFA] bebas-neue-regular text-center -mb-[100px] pt-[40px] text-[4rem] anim-element'>Join Us</h1> */}
      {/* <div className='w-full overflow-hidden relative bg-[#FAFAFA]'>
        <div id='mact' className='mact m-auto justify-center relative'>
          <img id="iphone" className='absolute scale-[1] z-[2] left-[10vw] top-[50vh]' src={phone} alt="iPhone" />
          <img id='macs' className="mack scale-[.8] z-0" src={Macc} alt="Mac" />
          <img id="tabs" className='absolute z-[3] scale-[0.4] left-[26vw] top-[40vh]' src={tablet} alt="Tablet" />
        </div>
      </div> */}
    </div>
  );
}

export default JoinUS;
