import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import gsap from 'gsap';
import axios from 'axios';

const Apply = () => {
  const { role } = useParams();
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    full_name: '',
    mobile_no: '',
    institute: '',
    email: '',
    location: '',
    resume: null,
    cover_letter: '',
    cover_letter_file: null,
  });

  useEffect(() => {
    gsap.fromTo(formRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
  }, []);

  const handleFocus = (e) => {
    gsap.to(e.target, { scale: 1.05, duration: 0.3 });
  };

  const handleBlur = (e) => {
    gsap.to(e.target, { scale: 1, duration: 0.3 });
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new URLSearchParams();
    data.append('role', 'heelo');
    data.append('full_name', formData.full_name);
    data.append('mobile_no', formData.mobile_no);
    data.append('institute', formData.institute);
    data.append('email', formData.email);
    data.append('location', formData.location);
    data.append('cover_letter', formData.cover_letter);

    // Handling file inputs
    if (formData.resume) {
      data.append('resume', formData.resume.name); // Send file name
    }
    if (formData.cover_letter_file) {
      data.append('cover_letter_file', formData.cover_letter_file.name); // Send file name
    }

    try {
      const response = await axios.post('https://resaishala.com/api/apply.php', data.toString(), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      console.log(response.data);
      alert('Application submitted successfully');
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('Failed to submit application. Please try again.');
    }
  };

  return (
    <div className="container mx-auto my-8 p-8 border-2 border-gray-300 rounded-xl shadow-lg w-[70%] bg-white">
      <h2 className="text-3xl font-semibold mb-6">Apply for {role.replace('-', ' ')}</h2>
      <form className="space-y-6" ref={formRef} onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input
            type="text"
            name="full_name"
            className="mt-1 block w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Mobile No</label>
          <input
            type="number"
            name="mobile_no"
            className="mt-1 block w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Institute</label>
          <input
            type="text"
            name="institute"
            className="mt-1 block w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email Address</label>
          <input
            type="email"
            name="email"
            className="mt-1 block w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Location</label>
          <input
            type="text"
            name="location"
            className="mt-1 block w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Resume</label>
          <input
            type="file"
            name="resume"
            required
            className="mt-1 block w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleFileChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Cover Letter (Text or File) (Optional)</label>
          <textarea
            name="cover_letter"
            className="mt-1 block w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <input
            type="file"
            name="cover_letter_file"
            className="mt-1 block w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleFileChange}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default Apply;
