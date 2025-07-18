import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Form from '../components/Form.jsx';

const olympiads = [
  { name: 'AI Olympiad', dates: ['2024-07-10', '2024-08-15'] },
];

const Olympiad = () => {
  const [selectedOlympiad, setSelectedOlympiad] = useState(null);

  const handleSelectChange = (event) => {
    const selected = olympiads.find(olympiad => olympiad.name === event.target.value);
    setSelectedOlympiad(selected);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Form />
      <div className='mt-6 min-h-[60vh]'>
        <h1 className='text-[4vw] fira-sans-bold text-center text-gray-800'>Exam Dates</h1>
        <div className="flex justify-center min-h-[40vh] bg-gray-100 pb-10 pt-10">
          <div className="w-11/12 max-w-2xl p-6 bg-white rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105">
            <div className="mb-4">
              <label htmlFor="olympiad" className="block text-lg font-medium text-gray-700 mb-2">Select Olympiad:</label>
              <select
                id="olympiad"
                className="border-2 mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                onChange={handleSelectChange}
              >
                <option value="">Select an Olympiad</option>
                {olympiads.map((olympiad) => (
                  <option key={olympiad.name} value={olympiad.name}>
                    {olympiad.name}
                  </option>
                ))}
              </select>
            </div>

            {selectedOlympiad && (
              <div className="mt-6">
                <h2 className="text-xl font-medium text-gray-900 mb-4">Available Dates for {selectedOlympiad.name}:</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {selectedOlympiad.dates.map((date, index) => (
                        <tr key={index} className="transition-colors hover:bg-gray-100">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Olympiad;
