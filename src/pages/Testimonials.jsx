import React from 'react';
import Navbar from '../components/Navbar.jsx';

const testimonials = [
  {
    name: 'Vikram Mali',
    title: 'Former Web Developer Intern, ResAIshala',
    quote:
      'Contributing to both research and development projects at ResAIshala taught me how real-world applications are built and deployed. I worked closely on responsive layouts and dynamic features, understanding the importance of both performance and user experience. It helped me bridge the gap between theory and hands-on implementation.',
  },
  {
    name: 'Vedant',
    title: 'Former Web Developer Intern, ResAIshala',
    quote:
      'At ResAIshala, I was given real responsibility — not just shadowing. I collaborated on building web components and optimizing existing workflows, which sharpened my debugging and design-thinking skills. It was a space where learning came from doing, failing, and improving.',
  },
  {
    name: 'Suman Jain',
    title: 'Web Developer',
    quote:
      'Building the official ResAIshala website was a transformative experience. I explored frontend frameworks, backend integration, and even dabbled in graphic design to create a seamless user journey. It was more than coding — it was about understanding user needs and delivering with purpose.',
  },
  {
    name: 'Meera Kapoor',
    title: 'UI/UX Designer Intern',
    quote:
      'My internship here wasn’t just about making things look pretty. I researched user behavior, redesigned interfaces for accessibility, and worked closely with developers to align design with functionality. It deepened my understanding of how thoughtful UX can elevate the impact of a product.',
  },
  {
    name: 'Rahul Bansal',
    title: 'Backend Developer',
    quote:
      'At ResAIshala, I dove into scalable backend systems and learned how APIs support real-time applications. From database schemas to server performance tuning, I touched every layer of the stack. It challenged me to think structurally and plan for growth.',
  },
  {
    name: 'Sneha Iyer',
    title: 'ML Intern',
    quote:
      'Working on machine learning tasks with real datasets pushed me beyond textbook knowledge. I built, trained, and evaluated models that actually contributed to research outcomes. It gave me a strong foundation in both theoretical concepts and practical deployment.',
  },
  {
    name: 'Kunal Joshi',
    title: 'Cloud Infrastructure Trainee',
    quote:
      'I handled tasks ranging from containerization to setting up cloud-based monitoring systems. It was my first time building DevOps pipelines in a real project environment, and I learned to maintain stability under load. The experience made cloud concepts click for me.',
  },
  {
    name: 'Tanya Verma',
    title: 'Content Strategist',
    quote:
      'Turning technical information into clear, compelling content was the core of my role. I created documentation, research blogs, and outreach posts that helped explain our work to a broader audience. It taught me how communication drives the reach of innovation.',
  },
  {
    name: 'Rohit Chawla',
    title: 'Frontend Developer Intern',
    quote:
      'I worked on rebuilding frontend components from scratch and helped integrate them into a broader design system. This hands-on work taught me how structure, consistency, and accessibility affect usability. I gained confidence in writing clean, scalable, and reusable code.',
  },
];

const getInitials = (name) =>
  name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

const bgVariants = [
  'bg-gradient-to-br from-purple-100 via-white to-purple-50',
  'bg-gradient-to-br from-pink-100 via-white to-purple-50',
  'bg-gradient-to-br from-blue-100 via-white to-purple-50',
  'bg-gradient-to-br from-violet-100 via-white to-purple-50',
  'bg-gradient-to-br from-fuchsia-100 via-white to-purple-50',
];

const TestimonialsSwayamStyle = () => {
  return (
    <>
      <Navbar />
      <section className="py-24 px-6 md:px-16 bg-gradient-to-tr from-white via-purple-50 to-white min-h-screen font-sans">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-700 via-fuchsia-500 to-pink-500 text-transparent bg-clip-text drop-shadow-2xl tracking-tight">
            Hear from Achievers
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mt-4 font-medium">
            Real experiences from learners who built their journey at ResAIshala.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {testimonials.map(({ name, title, quote }, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 shadow-md border hover:shadow-xl transition duration-300 ${bgVariants[idx % bgVariants.length]}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-lg shadow-md ring-2 ring-white">
                  {getInitials(name)}
                </div>
                <div>
                  <p className="font-semibold text-purple-900">{name}</p>
                  <p className="text-sm text-purple-700">{title}</p>
                </div>
              </div>
              <p className="text-gray-800 text-base leading-relaxed text-justify italic">
                “{quote}”
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default TestimonialsSwayamStyle;
