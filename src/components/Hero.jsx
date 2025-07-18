import React, { useState, useEffect } from 'react';
import ab from '../assets/ab.png';
import ab2 from '../assets/ab2.png';
import ab21 from '../assets/ab2.1.png';
import ab3 from '../assets/ab3.png';
import ab4 from '../assets/ab4.png';
import ab5 from '../assets/ab5.png';
import ab6 from '../assets/ab6.png';
import ab7 from '../assets/ab7.png';
import ab8 from '../assets/ab8.png';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const images = [ab, ab2,ab6,ab7,ab8, ab21, ab3, ab4,ab5];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setPrevIndex(currentIndex);
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 6000);
    return () => clearInterval(intervalId);
  }, [currentIndex, images.length]);

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="relative overflow-hidden h-[60vh] sm:h-[70vh] md:h-[75vh] lg:h-[80vh]"
    >
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <img
            key={index}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10' : index === prevIndex ? 'opacity-0 z-0' : 'opacity-0'
            }`}
            src={image}
            alt={`Slide ${index}`}
          />
        ))}
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 w-full flex justify-center z-20">
        {images.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => {
              setPrevIndex(currentIndex);
              setCurrentIndex(index);
            }}
            className={`mx-1 w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white scale-110' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
