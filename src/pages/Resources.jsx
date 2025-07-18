import React, { useState, useMemo } from 'react';
import Navbar from '../components/Navbar';
import resImage from '../Images/res.png';
import res1Image from '../Images/res1.png';
import res2Image from '../Images/res2.png';

const blogs = [
  {
    title: 'How Resaishala Transforms Learning',
    excerpt:
      'Discover how experiential learning makes a difference in education at Resaishala.',
    image: resImage, // local image
    author: 'Jane Doe',
    date: 'April 10, 2025',
    tags: ['Experiential Learning', 'Research'],
    details: `Resaishala is revolutionizing education through hands-on, experiential learning models. We believe
that active engagement in real-world projects enhances understanding and retention. Our approach
integrates research-based methods to ensure students gain deep knowledge along with practical skills.
Join us in transforming traditional education paradigms for the better.`,
  },
  {
    title: 'Top 5 Tips for Research-Based Projects',
    excerpt:
      'Boost your project outcomes with these practical tips and strategies from Resaishala experts.',
    image: res1Image, // local image
    author: 'John Smith',
    date: 'March 21, 2025',
    tags: ['Research', 'Project Tips'],
    details: `Effective research-based projects require proper planning, clear objectives, and
reliable data collection methods. Our experts recommend setting realistic goals,
collaborating with peers, and continuously refining your approach based on feedback.
Applying these tips can dramatically improve your project’s quality and success rate.`,
  },
];

const faqs = [
  {
    question: 'What is Resaishala?',
    answer:
      'Resaishala stands for Research Based Experiential Learning, a platform to enhance hands-on education.',
  },
  {
    question: 'How can I join Resaishala?',
    answer: 'You can join by signing up on our website and choosing a membership plan that fits your needs.',
  },
  {
    question: 'Are the webinars free?',
    answer: 'Some webinars are free while others require membership or a registration fee.',
  },
  {
    question: 'What kind of projects can I expect?',
    answer: 'Projects span multiple disciplines focusing on research and experiential learning with real-world applications.',
  },
  {
    question: 'Is prior experience necessary?',
    answer: 'No prior experience is required. We provide guidance and resources for learners of all levels.',
  },
  {
    question: 'Can I collaborate with others?',
    answer: 'Yes! Collaboration and team projects are encouraged to foster better learning outcomes.',
  },
];

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-purple-200 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-4 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-purple-600"
        aria-expanded={open}
        aria-controls={question.replace(/\s+/g, '-').toLowerCase()}
      >
        <div className="flex items-center gap-3">
          {/* FAQ Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 text-purple-600 transform transition-transform duration-300 ${
              open ? 'rotate-45' : ''
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 10h.01M12 14h.01M16 10h.01M12 18h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-purple-900 font-semibold text-lg">{question}</span>
        </div>
        <span className="text-purple-600 text-2xl select-none">{open ? '−' : '+'}</span>
      </button>
      <div
        id={question.replace(/\s+/g, '-').toLowerCase()}
        className={`text-gray-700 max-w-3xl overflow-hidden transition-max-height duration-500 ease-in-out ${
          open ? 'max-h-96 mt-2 pb-4' : 'max-h-0'
        }`}
        aria-hidden={!open}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

const Resources = () => {
  // Search states
  const [blogSearch, setBlogSearch] = useState('');
  const [faqSearch, setFaqSearch] = useState('');

  // Modal state for blog details
  const [modalOpen, setModalOpen] = useState(false);
  const [activeBlog, setActiveBlog] = useState(null);

  // Filtered lists based on search
  const filteredBlogs = useMemo(() => {
    return blogs.filter(({ title, excerpt, tags }) => {
      const search = blogSearch.toLowerCase();
      return (
        title.toLowerCase().includes(search) ||
        excerpt.toLowerCase().includes(search) ||
        tags.some((tag) => tag.toLowerCase().includes(search))
      );
    });
  }, [blogSearch]);

  const filteredFaqs = useMemo(() => {
    return faqs.filter(({ question, answer }) => {
      const search = faqSearch.toLowerCase();
      return (
        question.toLowerCase().includes(search) ||
        answer.toLowerCase().includes(search)
      );
    });
  }, [faqSearch]);

  // Open modal with blog details
  const openModal = (blog) => {
    setActiveBlog(blog);
    setModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setModalOpen(false);
    setActiveBlog(null);
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#fdf9ff] p-6 md:p-12 max-w-7xl mx-auto relative">
        {/* Header Image */}
        <div className="mb-16">
          <img
            src={res2Image} // local header image
            alt="Learning banner"
            className="w-full rounded-lg shadow-lg object-cover max-h-64 mx-auto"
          />
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold text-center text-purple-800 mb-8 tracking-tight">
          Resources — Blogs & FAQs
        </h1>

        {/* Blogs Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-4 border-b-4 border-purple-800 pb-2 max-w-max mx-auto">
            Blogs
          </h2>

          {/* Blog Search */}
          <input
            type="search"
            placeholder="Search blogs..."
            value={blogSearch}
            onChange={(e) => setBlogSearch(e.target.value)}
            className="mb-8 w-full max-w-xl mx-auto block p-3 rounded-md border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
            aria-label="Search blogs"
          />

          <div className="grid gap-10 md:grid-cols-2">
            {filteredBlogs.length ? (
              filteredBlogs.map(({ title, excerpt, image, author, date, tags, details }, index) => (
                <article
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row items-center gap-6"
                >
                  <img
                    src={image}
                    alt={title}
                    className="w-full md:w-40 rounded-lg object-cover flex-shrink-0"
                    loading="lazy"
                  />
                  <div className="flex flex-col">
                    <h3 className="text-xl font-semibold text-purple-900 mb-1">{title}</h3>
                    <p className="text-sm text-gray-500 mb-2">
                      By {author} · {date}
                    </p>
                    <div className="mb-3 flex flex-wrap gap-2">
                      {tags.map((tag, i) => (
                        <span
                          key={i}
                          className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-700 leading-relaxed">{excerpt}</p>
                    <button
                      onClick={() => openModal({ title, details })}
                      className="text-purple-700 font-semibold hover:underline mt-3 inline-block text-left"
                      aria-label={`Read more about ${title}`}
                    >
                      Read More →
                    </button>
                  </div>
                </article>
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-2">No blogs found.</p>
            )}
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4 border-b-4 border-purple-800 pb-2 max-w-max mx-auto">
            Frequently Asked Questions
          </h2>

          {/* FAQ Search */}
          <input
            type="search"
            placeholder="Search FAQs..."
            value={faqSearch}
            onChange={(e) => setFaqSearch(e.target.value)}
            className="mb-6 w-full max-w-xl mx-auto block p-3 rounded-md border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
            aria-label="Search FAQs"
          />

          <div className="max-w-4xl mx-auto space-y-4">
            {filteredFaqs.length ? (
              filteredFaqs.map(({ question, answer }, index) => (
                <FAQItem key={index} question={question} answer={answer} />
              ))
            ) : (
              <p className="text-center text-gray-500">No FAQs found.</p>
            )}
          </div>
        </section>

        {/* Modal for Blog Details */}
        {modalOpen && activeBlog && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            aria-describedby="modal-desc"
            onClick={closeModal}
          >
            <div
              className="bg-white rounded-lg max-w-3xl w-11/12 p-6 relative shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                aria-label="Close modal"
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-600 rounded"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <h3
                id="modal-title"
                className="text-2xl font-bold text-purple-900 mb-4"
              >
                {activeBlog.title}
              </h3>
              <p id="modal-desc" className="text-gray-700 whitespace-pre-line">
                {activeBlog.details}
              </p>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default Resources;
