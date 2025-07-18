import React from "react";

const Vision = () => {
  const notes = [
    {
      title: "Our Vision",
      text: `We envision a globally connected ecosystem where innovation, knowledge, and opportunity are accessible to all. Our goal is to bridge the divide between academia and industry by providing a powerful platform that enables students, professionals, and organizations to co-create future technologies.

Through hands-on exposure to AI, IoT, Robotics, and real-world problem solving, we aim to produce not just learners, but future-ready leaders, inventors, and changemakers. Our vision is to ignite curiosity, drive progress, and build a community that continuously evolves through collaboration and purpose.`,
      bg: "bg-yellow-100",
    },
    {
      title: "Our Mission",
      text: `Our mission is to empower individuals at every stage of their academic or professional journey. We support research paper writing, copyright and patent filing, and scholarly publishing — making complex processes accessible and transparent.

We offer end-to-end project assistance, skill-building workshops, innovation consultancy, and mentorship from experienced professionals. Our focus is on delivering meaningful outcomes by fostering creativity, critical thinking, and technical excellence. We also help students and professionals access internships and job placements that match their interests and capabilities.`,
      bg: "bg-green-100",
    },
    {
      title: "Advisory Board",
      text: `Our advisory board is a backbone of wisdom, insight, and experience. Comprising thought leaders from academia, industry, and innovation sectors, they guide our initiatives with strategic oversight.

They help uphold academic integrity, support curriculum development, and ensure that our services are relevant, reliable, and impactful. By providing mentorship and access to valuable opportunities — including national fellowships, research collaborations, and international internships — our advisory board plays a vital role in nurturing the next generation of innovators, researchers, and leaders.`,
      bg: "bg-pink-100",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fdfcfb] flex items-center justify-center px-4 pt-4 pb-10 font-[Fira+Sans]">
      <div className="flex flex-col md:flex-row gap-6 max-w-6xl w-full justify-center items-stretch">
        {notes.map((note, index) => (
          <div
            key={index}
            className={`${note.bg} relative w-full md:w-1/3 rounded-lg p-4 shadow-[4px_4px_15px_rgba(0,0,0,0.08)]`}
          >
            {/* Push pin */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-3.5 h-3.5 bg-red-400 rounded-full shadow-md"></div>
            </div>

            <h2 className="text-xl font-bold mb-3 text-gray-800 text-center">{note.title}</h2>
            <p className="text-gray-700 text-sm text-justify leading-relaxed whitespace-pre-line">
              {note.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vision;
