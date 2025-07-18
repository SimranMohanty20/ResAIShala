import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';
import { Link } from 'react-router-dom';


const RegisterNow = () => {


  useGSAP(() => {
    gsap.from(".reg", {
      backgroundColor:"#fff",
      y:100,
    scrollTrigger:{
        trigger:".reg",
        start:"10% 80%",
        markers:false,
        scrub:false,
      }
    })
},[]);

  return (
    <div className='reg md:h-[150px] w-[95%] border-2 border-black inset-10 mx-[2.5%] p-4 md:p-20 my-2 md:my-10 shadow-lg rounded-lg bg-secondary flex justify-between items-center transform transition duration-500 hover:scale-105 hover:shadow-2xl'>
    <div className='w-2/4'>
      <h1 className='text-[4vw] md:text-[3vw] fira-sans-semibold text-black'>
        International A.I Olympiad
      </h1>
      <h3 className='text-[2.4vw] md:text-[1.8vw] fira-sans-medium text-gray-800'>
        1st Time In India
      </h3>
    </div>
    <Link to="/olympiad" className='btt1 text-white bg-blue-500 px-6 py-2 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:bg-blue-600 hover:scale-110'>
      Register Now
    </Link>
  </div>
  );
};

export default RegisterNow;

