import React from 'react';
import Navbar from '../components/Navbar';

const Internship = () => {
  return (
    <div>
        <Navbar />
    <div className="container mx-auto p-6">
      <h1 className="text-4xl fira-sans-bold text-center mb-8">Internship & Training</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl fira-sans-semibold mb-4">Internship Opportunities</h2>
          <p className="mb-4">At ResAIShala we offer enriching internship opportunities for students and professionals eager to gain hands-on experience in cutting-edge fields like artificial intelligence, robotics, IoT, and STEM education. Our internships are designed to provide practical skills, real-world project experience, and mentorship from industry experts.</p>
          <h3 className="text-xl fira-sans-semibold mb-2">Why Intern with Us?</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Hands-On Experience: Work on real projects and apply your knowledge in practical settings.</li>
            <li>Mentorship: Learn from experienced professionals and industry leaders.</li>
            <li>Skill Development: Gain valuable skills in AI, robotics, IoT, and more.</li>
            <li>Networking: Connect with like-minded peers and professionals in the field.</li>
          </ul>
          <h3 className="text-xl fira-sans-semibold mb-2">Available Internships:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>AI Development Intern: Assist in developing AI algorithms and applications.</li>
            <li>Robotics Engineering Intern: Work on designing and building robotic systems.</li>
            <li>IoT Solutions Intern: Help create and implement IoT-based solutions for various applications.</li>
            <li>STEM Education Intern: Support the development of STEM curricula and learning materials.</li>
          </ul>
          <h3 className="text-xl fira-sans-semibold mb-2">How to Apply:</h3>
          <ol className="list-decimal list-inside mb-4">
            <li>Submit Your Application: Visit our <a href="#" className="text-blue-500">Internship Page</a> and fill out the online application form.</li>
            <li>Attach Your Resume: Include your resume and a cover letter explaining your interest and qualifications.</li>
            <li>Interview Process: Selected candidates will be contacted for an interview.</li>
            <li>Start Your Journey: Begin your internship and start gaining valuable experience.</li>
          </ol>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl fira-sans-semibold mb-4">Training Programs</h2>
          <p className="mb-4">Our training programs are tailored for educators, students, and professionals looking to enhance their skills in emerging technologies and innovative teaching methods. These programs are designed to provide deep insights and hands-on experience in AI, robotics, IoT, and more.</p>
          <h3 className="text-xl fira-sans-semibold mb-2">Key Features:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Comprehensive Curriculum: Courses designed to cover fundamental to advanced topics.</li>
            <li>Expert Instructors: Learn from industry experts and experienced educators.</li>
            <li>Practical Workshops: Engage in hands-on projects and real-world scenarios.</li>
            <li>Certification: Receive a certificate upon successful completion of the training program.</li>
          </ul>
          <h3 className="text-xl fira-sans-semibold mb-2">Training Courses Offered:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>AI and Machine Learning: Understand the basics and advanced concepts of AI and ML.</li>
            <li>Robotics: Learn about robotic design, programming, and applications.</li>
            <li>IoT Fundamentals: Explore the principles and applications of the Internet of Things.</li>
            <li>STEM Education Techniques: Discover innovative methods to teach STEM subjects.</li>
          </ul>
          <h3 className="text-xl fira-sans-semibold mb-2">Enrollment Process:</h3>
          <ol className="list-decimal list-inside mb-4">
            <li>Choose Your Course: Visit our <a href="#" className="text-blue-500">Training Page</a> and select the course that interests you.</li>
            <li>Register Online: Complete the registration form and submit the necessary documents.</li>
            <li>Attend Classes: Participate in interactive sessions, workshops, and projects.</li>
            <li>Earn Your Certificate: Successfully complete the program to receive your certification.</li>
          </ol>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Internship;
