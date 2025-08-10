import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import PreLoader from '../components/PreLoader.jsx';
import ResearchInfoSection from '../components/ResearchInfoSection';

const Home = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const hasPreloaderShown = localStorage.getItem('hasPreloaderShown');
    if (hasPreloaderShown) {
      setShowPreloader(false);
    } else {
      setShowPreloader(true);
      localStorage.setItem('hasPreloaderShown', 'true');
    }
  }, []);

  return (
    <div className='total-ref'>
      {showPreloader && <PreLoader />}

      {/* ✅ Header/Navbar */}
      <Navbar />

      {/* ✅ START of moving sentence (scrolling text banner) */}
      <div
        style={{
          backgroundColor: '#f5f5f7', // soft neutral that pairs well with purple
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          padding: '8px 0',
          fontWeight: 'normal',
          fontSize: '16px',
          color: '#4b3869', // plum-toned dark gray for harmony with purple
          borderBottom: '1px solid #ddd'
        }}
      >
        <div
          style={{
            display: 'inline-block',
            animation: 'marquee 30s linear infinite' // ⬅️ slowed down from 15s to 30s
          }}
        >
          What we do at ResAIShala: We assist in writing research papers, offer copyright and
          patent support, and take on projects at local, global, government, and private levels.
        </div>
      </div>

      {/* ✅ CSS animation keyframes for scrolling effect */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>
      {/* ✅ END of moving sentence */}

      {/* ✅ Hero Section */}
      <Hero />

      {/* ✅ Combined Research Info Section */}
      <ResearchInfoSection />

      {/* ✅ Footer */}
      <Footer />
    </div>
  );
};

export default Home;
