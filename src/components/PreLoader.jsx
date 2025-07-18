import React, { useEffect, useState } from 'react';
import resaiLogo from '../assets/resailogo.svg';

const PreLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = 'auto';
    }, 8000);  // Now preloader stays for 12 seconds

    document.body.style.overflow = 'hidden';

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader-container">
      <img src={resaiLogo} alt="Loading..." className="preloader-logo" />
      <style>{`
        .preloader-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: white;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }

        .preloader-logo {
          width: 40vw;
          max-width: 200px;
          height: auto;
          animation: pulse 1.5s infinite ease-in-out;
        }

        @keyframes pulse {
          0% { opacity: 0.6; transform: scale(0.95); }
          50% { opacity: 1; transform: scale(1.05); }
          100% { opacity: 0.6; transform: scale(0.95); }
        }

        @media (max-width: 600px) {
          .preloader-logo {
            width: 60vw;
            max-width: 150px;
          }
        }
      `}</style>
    </div>
  );
};

export default PreLoader;
