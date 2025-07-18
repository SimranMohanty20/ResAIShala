import React from 'react';
import Navbar from '../components/Navbar';

// ✅ Local image imports
import communityBanner from '../Images/comunity1.png';
import community2 from '../Images/comunity2.png';
import community3 from '../Images/comunity3.png';
import community4 from '../Images/comunity4.png';
import community5 from '../Images/comunity5.png';

const Community = () => {
  const forums = [
    {
      name: 'General Discussion',
      description: 'Chat with fellow tech enthusiasts, share ideas, and explore new trends in development.',
      link: '#',
      image: community2, // ✅ Local image
    },
    {
      name: 'Project Showcase',
      description: 'Post your completed or ongoing projects, get feedback, and inspire others.',
      link: '#',
      image: community3, // ✅ Local image
    },
    {
      name: 'Help & Support',
      description: 'Stuck with code? Ask questions and get help from experienced peers and mentors.',
      link: '#',
      image: community4, // ✅ Local image
    },
    {
      name: 'Hackathon Teams',
      description: 'Find and join teams for upcoming hackathons and competitions.',
      link: '#',
      image: community5, // ✅ Local image
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* Header/banner with local image */}
      <header
        className="relative h-64 flex items-center justify-center text-white text-center font-bold text-4xl"
        style={{
          backgroundImage: `url(${communityBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="bg-black bg-opacity-50 w-full h-full absolute top-0 left-0"></div>
        <h1 className="relative z-10">Community & Forums</h1>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-center text-gray-700 text-lg mb-12 max-w-3xl mx-auto">
          Connect with like-minded developers, share knowledge, and grow together in our vibrant community.
        </p>

        {/* Forums grid */}
        <div className="grid gap-10 md:grid-cols-2">
          {forums.map((forum, idx) => (
            <a
              key={idx}
              href={forum.link}
              className="flex bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-transparent hover:border-purple-400"
            >
              <img
                src={forum.image}
                alt={forum.name}
                className="w-32 object-cover"
                loading="lazy"
              />
              <div className="p-6 flex flex-col justify-center">
                <h2 className="text-2xl font-semibold text-purple-700 mb-2">{forum.name}</h2>
                <p className="text-gray-600">{forum.description}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Join LinkedIn CTA */}
        <div className="mt-20 text-center">
          <p className="text-xl font-medium text-gray-800 mb-6">
            New here? Join our LinkedIn community to stay updated!
          </p>
          <a
            href="https://www.linkedin.com/company/resaishala/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition-colors shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 0h-14c-2.762 0-5 2.238-5 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.762-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.785-1.75-1.75 0-.967.784-1.75 1.75-1.75s1.75.783 1.75 1.75c0 .965-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.338-.026-3.063-1.867-3.063-1.869 0-2.155 1.459-2.155 2.967v5.7h-3v-10h2.882v1.367h.041c.402-.761 1.382-1.562 2.845-1.562 3.041 0 3.605 2.001 3.605 4.6v5.595z" />
            </svg>
            Join LinkedIn
          </a>
        </div>
      </main>
    </div>
  );
};

export default Community;
