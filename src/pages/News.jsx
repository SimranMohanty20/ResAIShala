import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { FaRegCalendarAlt, FaTimes } from 'react-icons/fa';

// ✅ Import local images
import newsImg from '../Images/news.png';
import news1Img from '../Images/news1.png';
import news2Img from '../Images/news2.png';

// ✅ Replace imageUrl values with local image imports
const newsItems = [
  {
    id: 1,
    title: 'ResAIShala Launches New Learning Modules',
    date: '2025-05-01',
    summary:
      'We are excited to introduce new project-based modules designed to enhance hands-on learning for students.',
    details:
      'Our new learning modules include interactive projects, real-world problem solving, and collaborative assignments aimed to boost practical skills and critical thinking in students.',
    imageUrl: newsImg,
  },
  {
    id: 2,
    title: 'Upcoming Webinar on AI in Education',
    date: '2025-05-10',
    summary:
      'Join our experts for a webinar discussing the latest trends of Artificial Intelligence applications in the education sector.',
    details:
      'The webinar will cover AI-driven personalized learning, data analytics for student performance, and ethical considerations when implementing AI technologies in classrooms.',
    imageUrl: news1Img,
  },
  {
    id: 3,
    title: 'ResAIShala Community Achieves Milestone',
    date: '2025-05-12',
    summary:
      'Our community has grown to over 10,000 active members worldwide, fostering collaboration and innovation.',
    details:
      'With members from over 50 countries, ResAIShala is now a vibrant hub for educators, students, and tech enthusiasts sharing knowledge, resources, and support for educational advancement.',
    imageUrl: news2Img,
  },
];

const formatDate = (dateStr) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateStr).toLocaleDateString(undefined, options);
};

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 transition-opacity"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-xl max-w-xl w-full p-8 relative shadow-xl max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 focus:outline-none"
          aria-label="Close modal"
        >
          <FaTimes size={24} />
        </button>
        {content}
      </div>
    </div>
  );
};

const News = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);

  const openModal = (newsItem) => {
    setSelectedNews(newsItem);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedNews(null);
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 p-6 md:p-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-900 mb-14 text-center tracking-wide drop-shadow-md">
          Latest News & Updates
        </h1>

        <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map(({ id, title, date, summary, imageUrl }) => (
            <article
              key={id}
              className="flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer group"
              onClick={() => openModal(newsItems.find((item) => item.id === id))}
            >
              <div className="relative h-48 w-full overflow-hidden rounded-t-2xl">
                <img
                  src={imageUrl}
                  alt={title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="flex flex-col flex-1 p-6">
                <h2 className="text-xl font-semibold text-purple-900 mb-2 line-clamp-2">{title}</h2>

                <div className="flex items-center text-gray-500 text-sm mb-3 space-x-2">
                  <FaRegCalendarAlt className="w-4 h-4" />
                  <time dateTime={date}>{formatDate(date)}</time>
                </div>

                <p className="text-gray-700 flex-1 mb-5 line-clamp-3">{summary}</p>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(newsItems.find((item) => item.id === id));
                  }}
                  className="self-start text-white bg-purple-700 hover:bg-purple-900 focus:ring-4 focus:ring-purple-300 font-semibold rounded-lg px-4 py-2 transition-colors"
                >
                  Read More &rarr;
                </button>
              </div>
            </article>
          ))}
        </div>

        <Modal
          isOpen={modalOpen}
          onClose={closeModal}
          content={
            selectedNews && (
              <>
                <h2 className="text-3xl font-bold text-purple-900 mb-5">
                  {selectedNews.title}
                </h2>
                <p className="text-gray-600 mb-6">
                  <time dateTime={selectedNews.date}>
                    {formatDate(selectedNews.date)}
                  </time>
                </p>
                <img
                  src={selectedNews.imageUrl}
                  alt={selectedNews.title}
                  className="w-full rounded-lg mb-8 object-cover max-h-72 mx-auto"
                />
                <p className="text-gray-800 text-lg leading-relaxed">{selectedNews.details}</p>
              </>
            )
          }
        />
      </main>
    </>
  );
};

export default News;