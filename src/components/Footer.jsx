import React, { useEffect, useRef } from 'react';
import resailogo from '../assets/resailogo.svg';

function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const points = [];
    const numPoints = 100;
    const maxDistance = 100;

    function resizeCanvas() {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    for (let i = 0; i < numPoints; i++) {
      points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
      });
    }

    function distance(p1, p2) {
      return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
    }

    function updatePoints() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < points.length; i++) {
        const p1 = points[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x <= 0 || p1.x >= canvas.width) p1.vx *= -1;
        if (p1.y <= 0 || p1.y >= canvas.height) p1.vy *= -1;

        ctx.beginPath();
        ctx.arc(p1.x, p1.y, 3, 0, 2 * Math.PI);
        ctx.fillStyle = '#A63892';
        ctx.fill();

        for (let j = i + 1; j < points.length; j++) {
          const p2 = points[j];
          const dist = distance(p1, p2);
          if (dist < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(166, 56, 146, ${1 - dist / maxDistance})`;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(updatePoints);
    }

    updatePoints();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div>
      <footer className="relative bg-gray-900 text-[#fafafa] overflow-hidden px-6 py-10">
        {/* Container with max width */}
        <div className="max-w-5xl mx-auto flex flex-col space-y-10 md:flex-row md:space-y-0 md:space-x-12 items-center md:items-start text-center md:text-left">
          {/* Logo & tagline */}
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
            <img
              src={resailogo}
              alt="RESA Logo"
              className="h-20 w-auto mb-3"
            />
            <h1 className="text-sm md:text-base italic leading-snug">
              Research Based Experiential Learning
            </h1>
          </div>

          {/* Contact Us */}
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-center">
            <h2 className="font-semibold text-xl mb-4">Contact Us</h2>
            <p className="text-sm md:text-base mb-1">Phone No:</p>
            <p className="font-semibold text-base md:text-lg">+91 89053-46167</p>
            <p className="text-sm md:text-base mt-6 mb-1">Email:</p>
            <p className="font-semibold text-base md:text-lg">director@resaishala.com</p>
          </div>

          {/* Follow Us */}
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <h2 className="font-semibold text-xl mb-4">Follow Us</h2>
            <div className="flex flex-col space-y-3 text-base md:text-lg">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 hover:text-pink-400 transition"
              >
                <i className="fa-brands fa-facebook text-2xl"></i> Facebook
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 hover:text-pink-400 transition"
              >
                <i className="fa-brands fa-linkedin text-2xl"></i> LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 text-center text-xs md:text-sm text-white opacity-70">
          &copy; 2024 ResAIShala
        </div>

        {/* Canvas for animation */}
        <canvas
          id="animationCanvas"
          ref={canvasRef}
          className="pointer-events-none absolute top-0 left-0 w-full h-full z-0"
        ></canvas>
      </footer>
    </div>
  );
}

export default App;
