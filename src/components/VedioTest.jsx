import React, { useRef, useEffect, useState } from 'react';

const videos = [
  'https://www.youtube.com/embed/EzydN98qiig',
  'https://www.youtube.com/embed/mxT233EdY5c',
  'https://www.youtube.com/embed/WIlQukiXs-E',
  'https://www.youtube.com/embed/4k2T5sfGIP4',
  'https://www.youtube.com/embed/ad79nYk2keg',
  'https://www.youtube.com/embed/07T3i2Kax14',
];

const VideoTest = () => {
  const scrollRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(true);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollInterval;

    if (isScrolling) {
      scrollInterval = setInterval(() => {
        scrollContainer.scrollLeft += 1;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }, 20);
    } else {
      clearInterval(scrollInterval);
    }

    return () => clearInterval(scrollInterval);
  }, [isScrolling]);

  const handlePlay = () => setIsScrolling(false);
  const handlePause = () => setIsScrolling(true);

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={scrollRef}
        className="flex space-x-4 p-4 overflow-x-auto whitespace-nowrap no-scrollbar"
      >
        {videos.map((video, index) => (
          <div key={index} className="flex-shrink-0 w-[400px] rounded-lg">
            <iframe
              className="w-full h-60 rounded-lg"
              src={video}
              title={`video-${index}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onPlay={handlePlay}
              onPause={handlePause}
              onEnded={handlePause}
            ></iframe>
          </div>
        ))}
        {/* Duplicate the videos for seamless scrolling */}
        {videos.map((video, index) => (
          <div key={index} className="flex-shrink-0 w-[400px] rounded-lg">
            <iframe
              className="w-full h-60 rounded-lg"
              src={video}
              title={`video-${index}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onPlay={handlePlay}
              onPause={handlePause}
              onEnded={handlePause}
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoTest;
