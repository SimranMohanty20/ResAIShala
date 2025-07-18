import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';

const JobCard = ({ title, description, location }) => {
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [isDescOpen, setIsDescOpen] = useState(false);

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <h3 className="text-lg font-bold">{title} ({location})</h3>
      <p className="mt-2">{description}</p>
      <div className="mt-4 flex space-x-2">
        <button
          onClick={() => setIsApplyOpen(true)}
          className="bg-teal-500 text-white px-4 py-2 rounded"
        >
          APPLY NOW
        </button>
        <button
          onClick={() => setIsDescOpen(true)}
          className="border border-teal-500 text-teal-500 px-4 py-2 rounded"
        >
          JOB DESCRIPTION
        </button>
      </div>

      <Dialog open={isApplyOpen} onClose={() => setIsApplyOpen(false)} className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen px-4">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full p-6">
            <div className="flex justify-end">
              <button onClick={() => setIsApplyOpen(false)}></button>
            </div>
            <Dialog.Title className="text-lg font-medium text-gray-900">Apply for {title}</Dialog.Title>
            <form className="mt-4 space-y-4">
              <input type="text" placeholder="Your Name" className="w-full border border-gray-300 p-2 rounded" />
              <input type="email" placeholder="Your Email" className="w-full border border-gray-300 p-2 rounded" />
              <textarea placeholder="Your Resume" className="w-full border border-gray-300 p-2 rounded" rows="4"></textarea>
              <button type="submit" className="w-full bg-teal-500 text-white px-4 py-2 rounded">Submit</button>
            </form>
          </div>
        </div>
      </Dialog>

      <Dialog open={isDescOpen} onClose={() => setIsDescOpen(false)} className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen px-4">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full p-6">
            <div className="flex justify-end">
              <button onClick={() => setIsDescOpen(false)}></button>
            </div>
            <Dialog.Title className="text-lg font-medium text-gray-900">Job Description</Dialog.Title>
            <p className="mt-4">{description}</p>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default JobCard;
