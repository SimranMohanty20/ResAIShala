import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import CoursesSection from '../components/Courses'
import CoursesSection2 from '../components/Courses2';




const Course = () => {
  const handleclick = () => {
    settoggle(!Toggle);
    console.log("hmh");
  }
  const [Toggle, settoggle] = useState(false);
  return (
    <div>
      
        <Navbar />
        <div className='w-100 h-100 bg-black text-white' onClick={handleclick}>toggle</div>
        {Toggle ? 
        <CoursesSection />:
        <CoursesSection2/>};
    </div>
  )
}

export default Course;