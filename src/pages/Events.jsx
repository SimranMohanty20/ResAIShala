import React from 'react';
import Navbar from '../components/Navbar';
import aiImage from '../Images/AI.png';
import event2 from '../Images/event2.png';
import event3 from '../Images/event3.png';
import event4 from '../Images/event4.png';
import event5 from '../Images/event5.png';
import event6 from '../Images/event6.png';

const pastEvents = [
  {
    title: 'AI & ML Bootcamp',
    date: 'March 12, 2023',
    type: 'Workshop',
    description: 'A hands-on workshop on building ML models using Python and TensorFlow.',
    image: aiImage,
  },
  {
    title: 'Frontend Web Dev Webinar',
    date: 'November 18, 2024',
    type: 'Webinar',
    description: 'Learn the latest in frontend development, including React and Tailwind CSS.',
    image: event2,
  },
  {
    title: 'Hackathon Prep Training',
    date: 'February 5, 2025',
    type: 'Training',
    description: 'Train with mentors to build real-world projects and pitch effectively in hackathons.',
    image: event3,
  },
  {
    title: 'Cybersecurity Awareness Session',
    date: 'December 2, 2023',
    type: 'Seminar',
    description: 'An expert session on modern-day cyber threats and how to protect digital assets.',
    image: event4,
  },
  {
    title: 'Cloud Computing Crash Course',
    date: 'May 10, 2024',
    type: 'Crash Course',
    description: 'A fast-paced course on cloud platforms like AWS, Azure, and Google Cloud.',
    image: event5,
  },
  {
    title: 'Data Analytics with Python',
    date: 'January 25, 2023',
    type: 'Workshop',
    description: 'Learn how to collect, clean, and analyze data using pandas, matplotlib, and seaborn.',
    image: event6,
  },
];

const Events = () => {
  return (
    <div className="bg-gradient-to-tr from-white via-purple-50 to-white min-h-screen">
      <Navbar />
      <div className="px-6 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-purple-800 mb-4 tracking-tight">
            Events & Webinars
          </h1>
          <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
            Dive into the highlights of our past events. We’ve hosted impactful workshops, expert webinars, and insightful training sessions. Stay tuned for our upcoming ones!
          </p>

          {/* Pastel yellow banner with bold text */}
          <div className="bg-yellow-100 text-yellow-800 text-center py-4 px-6 rounded-xl shadow-sm mb-12 font-semibold">
            📅 These events are completed. Stay tuned for our next announcement!
          </div>

          {/* Event Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {pastEvents.map((event, idx) => (
              <div
                key={idx}
                className="bg-white/60 backdrop-blur-md border border-purple-100 shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300"
              >
                <div className="overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 text-left">
                  <h2 className="text-xl font-bold text-purple-800 mb-2">{event.title}</h2>

                  {/* Colored badge for event type */}
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm text-gray-500">{event.date}</p>
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded-full
                        ${
                          event.type === 'Workshop'
                            ? 'bg-purple-100 text-purple-800'
                            : event.type === 'Webinar'
                            ? 'bg-blue-100 text-blue-800'
                            : event.type === 'Training'
                            ? 'bg-green-100 text-green-800'
                            : event.type === 'Seminar'
                            ? 'bg-orange-100 text-orange-800'
                            : event.type === 'Crash Course'
                            ? 'bg-red-100 text-red-800'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                    >
                      {event.type}
                    </span>
                  </div>

                  <p className="text-gray-700 text-sm mb-4">{event.description}</p>
                  <div className="inline-block px-4 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium">
                    🔒 Registration Closed
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stay in loop + LinkedIn CTA */}
          <div className="mt-20 bg-purple-200/60 py-8 px-8 rounded-xl shadow-lg inline-block text-center max-w-2xl mx-auto">
            <p className="text-gray-700 text-lg font-medium mb-2">
              Want to stay in the loop for future events?
            </p>
            <p className="text-purple-800 font-semibold mb-6">
              Follow us on Instagram & LinkedIn or check back here soon!
            </p>
            <a
              href="https://www.linkedin.com/company/resaishala/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white px-5 py-2.5 rounded-md hover:bg-blue-800 transition-colors shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 0h-14c-2.762 0-5 2.238-5 5v14c0 
                2.762 2.238 5 5 5h14c2.762 0 5-2.238 
                5-5v-14c0-2.762-2.238-5-5-5zm-11 
                19h-3v-10h3v10zm-1.5-11.268c-.966 
                0-1.75-.785-1.75-1.75 0-.967.784-1.75 
                1.75-1.75s1.75.783 1.75 1.75c0 
                .965-.784 1.75-1.75 1.75zm13.5 
                11.268h-3v-5.604c0-1.338-.026-3.063-1.867-3.063-1.869 
                0-2.155 1.459-2.155 2.967v5.7h-3v-10h2.882v1.367h.041c.402-.761 
                1.382-1.562 2.845-1.562 3.041 0 3.605 2.001 
                3.605 4.6v5.595z" />
              </svg>
              Join LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;