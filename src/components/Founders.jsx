import React from 'react';
import Founder from '../assets/Founder.jpg';
import {
  FaWhatsapp,
  FaLinkedinIn,
  FaRegCommentDots,
} from 'react-icons/fa';

const Founders = () => {
  return (
    <section className="relative bg-gradient-to-tr from-[#fef3c7] via-[#fef9f9] to-[#d1fae5] py-24 px-4 sm:px-6 font-[Poppins] overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center z-10 relative">

        {/* Founder Card */}
        <div className="relative bg-white rounded-3xl p-6 shadow-2xl border border-gray-200 flex flex-col items-center">
          <div className="relative w-full flex justify-center -mt-8 mb-2">
            <div className="bg-pink-500 text-white text-xs px-4 py-1 rounded-full shadow-md uppercase tracking-wide">
              Founder
            </div>
          </div>

          <img
            src={Founder}
            alt="Founder"
            className="w-[260px] h-[320px] object-cover rounded-xl shadow-md border-4 border-white"
          />
          <h3 className="text-2xl font-semibold mt-6 text-gray-800">Dr. Ruchi Doshi</h3>
          <p className="text-gray-500 text-sm mb-4 text-center">Founder & CEO, ResAiShala</p>

          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/918905346167"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 bg-white p-4 rounded-full shadow-lg hover:scale-110 hover:bg-green-50 transition text-2xl"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.linkedin.com/in/dr-ruchi-doshi-96bb63b4/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 bg-white p-4 rounded-full shadow-lg hover:scale-110 hover:bg-blue-50 transition text-2xl"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Founder's Message */}
        <div className="bg-white bg-opacity-90 backdrop-blur-md p-8 sm:p-10 rounded-3xl shadow-2xl border border-gray-200 relative overflow-hidden">
          {/* Green Message Icon */}
          <div className="absolute top-6 right-6 text-green-400 text-3xl z-20 animate-bounce">
            <FaRegCommentDots />
          </div>

          {/* Decorative Quote Icon */}
          <div className="absolute text-[120px] text-pink-100 top-4 left-6 font-serif opacity-20 z-0 leading-none select-none">
            &ldquo;
          </div>

          {/* Background blobs */}
          <div className="absolute -top-8 -left-6 w-16 h-16 bg-pink-100 rounded-full blur-3xl opacity-30 z-0"></div>
          <div className="absolute bottom-[-20px] right-[-30px] w-24 h-24 bg-green-100 rounded-full blur-3xl opacity-30 z-0"></div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-6 relative z-10">
            Founder's Message
          </h2>
          <p className="text-gray-700 text-[17px] text-justify leading-loose relative z-10">
            At <strong>ResAiShala</strong>, innovation isn’t just a buzzword — it’s our blueprint. We exist to transform potential into purpose by empowering students, researchers, startups, and visionaries to bring bold ideas to life.
            <br /><br />
            Whether you're penning your first research paper, filing groundbreaking patents, or building the next big tech product — we’re right there with you. We’re not just a support system; we’re your innovation engine.
            <br /><br />
            Our expertise lies in the frontiers of technology — <strong>Artificial Intelligence, IoT, Robotics, Blockchain</strong>, and beyond. From project takeovers to hands-on mentorship, from copyright and patent filing to real-world internships — we connect ambition with execution.
            <br /><br />
            <span className="block italic text-lg font-medium text-gray-600">
              This isn’t just a platform. It’s a launchpad. It’s a mindset. It’s a movement.
            </span>
          </p>

          <p className="italic text-right text-sm mt-4 text-gray-500 relative z-10">
            "Together, we’re not just adapting to the future — we’re building it."
          </p>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-purple-200 rounded-full opacity-20 blur-3xl z-0"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-yellow-300 rounded-full opacity-20 blur-2xl z-0"></div>
    </section>
  );
};

export default Founders;
