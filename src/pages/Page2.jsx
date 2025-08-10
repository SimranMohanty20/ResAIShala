import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/resailogo.svg';

// Component Imports
import Hero from '../components/Hero.jsx';
import RegisterNow from '../components/RegisterNow.jsx';
import WhoareWe from '../components/WhoareWe.jsx';
import OurApproach from '../components/OurApproach.jsx';
import Pad from '../components/Pad.jsx';
import WhyUs from '../components/WhyUs.jsx';
import Companies from '../components/Companies.jsx';
import Courses from '../components/Courses.jsx';
import Counters from '../components/Counters.jsx';
import JoinUS from '../components/JoinUS.jsx';
import VedioTest from '../components/VedioTest.jsx';
import StudentTestimony from '../components/StudentTestimony.jsx';
import TestimonialCard from '../components/TestimonialCard.jsx';
import Footer from '../components/Footer';

const Page2 = () => {
  const navItems = [
    { path: "/", label: "← Home" },
    { path: "/research", label: "Research" },
    { path: "/olympiad", label: "Olympiad" },
    { path: "/course", label: "Courses" },
    { path: "/atal", label: "ATAL Labs" },
    { path: "/projects", label: "Projects" }
  ];

  return (
    <div className="total-ref">
      {/* Header */}
      <header
        className="py-4 px-6 shadow-md"
        style={{
          background: 'linear-gradient(90deg, #ede9fe 0%, #a78bfa 100%)', // lighter radiant purple gradient for whole navbar
          color: 'black',
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Left side: Logo + Tagline */}
          <div className="flex items-center gap-4">
            <img src={logo} alt="Resai Logo" className="h-20 w-auto" />
            <span className="text-sm sm:text-base font-bold text-black">
              Research Based Experiential Learning
            </span>
          </div>

          {/* Right side: Navigation */}
          <nav className="flex flex-wrap justify-center md:justify-end gap-4 text-black">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="hover:text-gray-700 font-bold text-sm sm:text-base transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Moving scrolling text banner */}
      <div
        style={{
          backgroundColor: '#f5f5f7',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          padding: '8px 0',
          fontWeight: 'normal',
          fontSize: '16px',
          color: '#4b3869',
          borderBottom: '1px solid #ddd',
        }}
      >
        <div
          style={{
            display: 'inline-block',
            animation: 'marquee 15s linear infinite',
          }}
        >
          Explore our Courses, Projects, ATAL Labs, Olympiad — Discover, Learn, Innovate.
        </div>
      </div>

      {/* CSS animation keyframes for marquee */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>

      {/* Hero Section */}
      <Hero />

      {/* Page Content */}
      <main className="text-center mt-10">
        <h1 className="text-4xl font-bold">
          Your Gateway to Research-Driven Learning and Innovation
        </h1>
        <p className="mt-4 text-lg">
          Use the navigation above to explore other sections.
        </p>

        {/* Render Components */}
        <RegisterNow />
        <WhoareWe />
        <OurApproach />
        <Pad />
        <WhyUs />
        <Companies />
        <Courses />
        <Counters />
        <JoinUS />
        <VedioTest />
        <StudentTestimony />
        <TestimonialCard />
        <Footer />
      </main>
    </div>
  );
};

export default Page2;
