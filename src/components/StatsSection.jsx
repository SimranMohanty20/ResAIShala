// src/StatsSection.js
import React from 'react';

const StatsSection = () => {
  return (
    <div className="relative bg-black text-white py-16 overflow-hidden">
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-25 animate-[moveBackground_20s_linear_infinite]"></div>
      </div>
      <div className="relative container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-8">We Take Pride in Our Numbers</h2>
        <div className="flex justify-center space-x-8">
          <div className="stat">
            <p className="text-5xl font-bold">15</p>
            <p className="text-lg">Years of Experience</p>
          </div>
          <div className="stat">
            <p className="text-5xl font-bold">10K</p>
            <p className="text-lg">Business Partners</p>
          </div>
          <div className="stat">
            <p className="text-5xl font-bold">25M</p>
            <p className="text-lg">Products Installed</p>
          </div>
          <div className="stat">
            <p className="text-5xl font-bold">22</p>
            <p className="text-lg">Countries World Wide</p>
          </div>
          <div className="stat">
            <p className="text-5xl font-bold">5</p>
            <p className="text-lg">Industry Awards</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;