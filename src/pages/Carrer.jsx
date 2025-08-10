import React from 'react';
import Navbar from '../components/Navbar';

const opportunities = [
  { title: 'Research Department', color: 'bg-yellow-100', desc: 'Dive into real-world research in AI, ML, and emerging tech. Collaborate with global experts and publish impactful papers.' },
  { title: 'Web Development', color: 'bg-blue-100', desc: 'Build stunning, scalable, and secure web solutions. From front-end to full-stack — we do it all.' },
  { title: 'Graphic Designing', color: 'bg-pink-100', desc: 'Transform ideas into visuals. Work on brand identities, product graphics, and marketing content.' },
  { title: 'UI/UX Design', color: 'bg-green-100', desc: 'Design interfaces that are intuitive, engaging, and user-centered across web and mobile.' },
  { title: 'AI / ML', color: 'bg-purple-100', desc: 'Work on cutting-edge Artificial Intelligence and Machine Learning models to solve real-world problems.' },
  { title: 'Data Science', color: 'bg-orange-100', desc: 'Analyze complex data, uncover insights, and help drive decisions with statistical models and tools.' },
  { title: 'Cloud Computing', color: 'bg-indigo-100', desc: 'Deploy, manage, and optimize scalable cloud infrastructure using AWS, Azure, and GCP.' },
  { title: 'Cybersecurity', color: 'bg-red-100', desc: 'Protect critical systems and data. Work on threat detection, prevention, and ethical hacking.' },
  { title: 'DevOps', color: 'bg-teal-100', desc: 'Automate deployment, CI/CD pipelines, monitoring, and streamline development operations.' },
];

const Career = () => {
  return (
    <div className="bg-gradient-to-br from-[#fefce8] via-[#fdfdfd] to-[#ecfdf5] min-h-screen relative overflow-hidden">
      <Navbar />

      {/* Header Section */}
      <div className="text-center py-16 relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          🚀 Career @{' '}
          <span style={{ color: '#228B22' }}>Res</span>
          <span style={{ color: '#f6ac92' }}>AI</span>
          <span style={{ color: '#a63892' }}>Shala</span>
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto text-lg mb-10">
          Explore roles, redefine innovation, and grow with a purpose. Your next opportunity starts here.
        </p>

        {/* Opportunity Cards */}
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 z-10">
          {opportunities.map((job, index) => (
            <div
              key={index}
              className={`rounded-3xl shadow-xl p-6 transition-all duration-300 ease-in-out transform hover:shadow-2xl cursor-pointer ${job.color}`}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">{job.title}</h3>
              <p className="text-sm text-gray-700">{job.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA - Clickable Google Form Link */}
        <div className="text-center pt-10 text-lg font-medium text-gray-800">
          📩 Fill out{' '}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdXmpK5YXt_ZE8BLwLpZFchzc13Ivh03_CFu7AZUSJfzg3IAQ/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            this Google Form
          </a>{' '}
          or email your CV to{' '}
          <a href="mailto:director@resaishala.com" className="text-blue-600 underline">
            director@resaishala.com
          </a>{' '}
          to be part of our family.
        </div>
      </div>

      {/* 🌟 What Powers Our Impact? */}
      <div className="bg-white py-16 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 mb-10">
          🌟 What Powers Our Impact?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
          {[
            {
              title: '🔬 Hands-On Research',
              desc: 'Step into the frontier of AI and robotics — where your ideas turn into publications, patents, and real-world impact.',
              bg: 'bg-yellow-50',
            },
            {
              title: '🚀 1-on-1 Mentorship',
              desc: 'Accelerate your learning with tailored guidance from top-tier engineers, researchers, and innovators.',
              bg: 'bg-blue-50',
            },
            {
              title: '🎯 Idea-First Culture',
              desc: 'We don’t follow trends — we make them. Pitch bold ideas, join hackathons, and bring visions to life.',
              bg: 'bg-green-50',
            },
            {
              title: '📚 Learn by Doing',
              desc: 'Workshops, live simulations, team projects — everything is designed to boost your resume and confidence.',
              bg: 'bg-pink-50',
            },
            {
              title: '🫱🏽‍🫲🏿 Radical Inclusivity',
              desc: 'From diverse teams to open forums, every voice matters here. Build without fear, grow without limits.',
              bg: 'bg-purple-50',
            },
            {
              title: '🏅 Recognition That Matters',
              desc: 'Earn shoutouts, LinkedIn features, certifications, and leadership roles — because your work *deserves* the spotlight.',
              bg: 'bg-orange-50',
            },
          ].map((item, i) => (
            <div key={i} className={`${item.bg} rounded-2xl p-6 shadow-md`}>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 🧪 Inside the Innovation Lab */}
      <div className="bg-[#f1f5f9] py-20 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 mb-6">
          🧪 Inside the Innovation Lab
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 mb-12 text-lg">
          Peek behind the scenes — explore the kind of groundbreaking experiments, rapid prototyping, and creative collisions that happen daily at ResAiShala.
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: '🛠️',
              title: 'Build Fast, Fail Smarter',
              desc: 'From idea to MVP in days — not months. Use GitHub, Figma, and dev stacks to iterate like a pro.',
            },
            {
              icon: '🌐',
              title: 'Decode the Earth',
              desc: 'Use satellite data to track climate change, disasters, and land shifts. Code meets real-world crisis response.',
            },
            {
              icon: '📡',
              title: 'Dashboards That Speak',
              desc: 'Design intelligent interfaces for smart labs, cities, and systems — powered by React, Recharts, and creativity.',
            },
          ].map((card, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                {card.icon} {card.title}
              </h3>
              <p className="text-gray-700 text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
