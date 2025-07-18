import { useEffect } from 'react';
import gsap from 'gsap';
import React from 'react';
import logo1 from '../assets/Logos/logo1.png';
import logo2 from '../assets/Logos/logo2.png';
import logo3 from '../assets/Logos/logo3.png';
import logo4 from '../assets/Logos/logo4.png';
import logo6 from '../assets/Logos/logo6.png';
import logo7 from '../assets/Logos/logo7.png';
import logo8 from '../assets/Logos/logo8.png';
import logo9 from '../assets/Logos/logo9.png';
import logo10 from '../assets/Logos/logo10.png';


const Companies = () => {


  let repet;
  let duration;
  let time;
  let x;
  if (window.innerWidth<640){
    repet = "0";
    duration = 3.5;
    time=15;
    x="-140vw"
  }
  else{
    repet=-1
    duration=2.5;
    time = 22.5
    x="-120vw"
  }


  useEffect(() => {
    gsap.to('.item', {
      x: x,
      duration: time,
      stagger: {
        repeat: repet,
        each: duration,
      },
      ease: "none",
    });
  }, []);

  return (
    <div className='wrapper-1 relative h-[140px] md:h-[200px] mt-5 md:mb-5 gap-10 justify-center w-full overflow-hidden'>
      <div className="item item-1 p-5 border-2 rounded-2xl flex shadow-lg items-center absolute left-[100vw]"><img src={logo1} alt="" className="w-full h-full object-contain" /></div>
      <div className="item item-2 p-5 border-2 rounded-2xl flex shadow-lg items-center absolute left-[100vw]"><img src={logo2} alt="" className="w-full h-full object-contain" /></div>
      <div className="item item-3 p-5 border-2 rounded-2xl flex shadow-lg items-center absolute left-[100vw]"><img src={logo3} alt="" className="w-full h-full object-contain" /></div>
      <div className="item item-4 p-5 border-2 rounded-2xl flex shadow-lg items-center absolute left-[100vw]"><img src={logo4} alt="" className="w-full h-full object-contain" /></div>
      <div className="item item-5 p-5 border-2 rounded-2xl flex shadow-lg items-center absolute left-[100vw]"><img src={logo6} alt="" className="w-full h-full object-contain" /></div>
      <div className="item item-6 p-5 border-2 rounded-2xl flex shadow-lg items-center absolute left-[100vw]"><img src={logo7} alt="" className="w-full h-full object-contain" /></div>
      <div className="item item-7 p-5 border-2 rounded-2xl flex shadow-lg items-center absolute left-[100vw]"><img src={logo8} alt="" className="w-full h-full object-contain" /></div>
      <div className="item item-8 p-5 border-2 rounded-2xl flex shadow-lg items-center absolute left-[100vw]"><img src={logo9} alt="" className="w-full h-full object-contain" /></div>
      <div className="item item-9 p-5 border-2 rounded-2xl flex shadow-lg items-center absolute left-[100vw]"><img src={logo10} alt="" className="w-full h-full object-contain" /></div>
    </div>
  );
};

export default Companies;
