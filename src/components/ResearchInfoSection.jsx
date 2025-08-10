import React from 'react';
import ieeeLogo from '../Images/ieee.png';
import springerLogo from '../Images/springer.png';
import home1Img from '../Images/Home1.png';
import home2Img from '../Images/Home2.png';
import home3Img from '../Images/Home3.png';
import home4Img from '../Images/Home4.png';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';


const ResearchInfoSection = () => {
 const services = [
  {
    title: 'Research Paper Writing',
    desc: 'Expert help from topic selection to publishing in reputed journals.',
    img: 'https://img.icons8.com/color/96/000000/document--v1.png'
  },
  {
    title: 'Patent & Copyright Filing',
    desc: 'Legal support for filing patents and copyrights nationally & internationally.',
    img: 'https://img.icons8.com/color/96/000000/privacy-policy.png'
  },
  {
    title: 'Project Execution',
    desc: 'Complete takeover of emerging tech projects for industries and academia.',
    img: 'https://img.icons8.com/color/96/000000/engineering.png'
  },
  {
    title: 'Research Consultation',
    desc: 'Assistance for scholars in thesis writing, proposal, and viva support.',
    img: 'https://img.icons8.com/color/96/000000/graduation-cap.png'
  },
  {
    title: 'Plagiarism Checking',
    desc: 'Thorough plagiarism detection and correction support for academic writing.',
    img: 'https://img.icons8.com/color/96/000000/search--v1.png'
  },
  {
    title: 'IEEE Paper Support',
    desc: 'Formatting, standards compliance, and publication in IEEE journals.',
    img: ieeeLogo
  },
  {
    title: 'Springer Format Support',
    desc: 'Help with formatting and submitting to Springer journals as per guidelines.',
    img: springerLogo
  },
  {
    title: 'AI-Powered Research Insights',
    desc: 'Leverage AI tools to discover trends, generate summaries, and enhance your literature review process.',
    img: 'https://img.icons8.com/color/96/000000/artificial-intelligence.png'
  },
  {
    title: 'Customized Research Dashboards',
    desc: 'Interactive dashboards for live data visualization and project monitoring using modern web technologies.',
    img: 'https://img.icons8.com/color/96/000000/combo-chart--v1.png'
  },
  {
    title: 'Grant Proposal Writing',
    desc: 'Professional assistance in writing compelling research proposals for government and private funding.',
    img: 'https://img.icons8.com/color/96/000000/agreement.png'
  },
  {
    title: 'Academic Branding Support',
    desc: 'Help researchers create personal websites, CVs, and academic profiles to boost visibility and citations.',
    img: 'https://img.icons8.com/color/96/000000/id-verified--v1.png'
  },
  {
    title: 'Conference Presentation Design',
    desc: 'Design and coaching for visually engaging and persuasive research presentations and posters.',
    img: 'https://img.icons8.com/color/96/000000/conference-call.png'
  },
  {
    title: 'Ethics and IRB Documentation',
    desc: 'Support with preparing Institutional Review Board (IRB) and ethical clearance documentation.',
    img: 'https://img.icons8.com/color/96/000000/certificate.png'
  },
  {
    title: 'Multilingual Research Translation',
    desc: 'Translation and localization of academic papers into multiple languages with subject accuracy.',
    img: 'https://img.icons8.com/color/96/000000/language.png'
  },
  {
    title: 'Retraction Recovery Support',
    desc: 'Consulting for researchers whose work was retracted and need help restructuring and republishing.',
    img: 'https://img.icons8.com/color/96/000000/restart.png'
  },
  {
    title: 'Journal Recommendation Engine',
    desc: 'AI-based journal matching service based on your paper’s scope, impact factor, and open-access criteria.',
    img: 'https://img.icons8.com/color/96/000000/decision.png'
  },
  {
    title: 'Research Collaboration Matching',
    desc: 'We connect you with global collaborators or co-authors aligned with your domain and goals.',
    img: 'https://img.icons8.com/color/96/000000/handshake.png'
  },
  {
    title: 'Data Cleaning & Preprocessing',
    desc: 'Comprehensive support in preparing raw research data for analysis using industry-standard tools and methods.',
    img: 'https://img.icons8.com/color/96/000000/data-configuration.png'
  }
];
  const techs = [
  "Neuro-Symbolic AI",
  "Edge-AI on Microcontrollers",
  "Decentralized Identity (DID)",
  "Federated Learning",
  "AI-Generated Code (AGC)",
  "Bioinformatics Platforms",
  "Space Tech Systems",
  "Ambient Computing",
  "AI in Drug Discovery",
  "Quantum Cryptography",
  "Synthetic Data Engines",
  "Emotion Recognition AI",
  "Digital Therapeutics",
  "Zero Trust Architecture",
  "Smart Dust & Nano IoT",
  "Explainable AI (XAI)",
  "Generative Agents",
  "Swarm Robotics",
  "Ambient Intelligence",
];


  const testimonials = [
    { quote: "They took over our AI-based final year project and delivered it professionally.", name: "Dr. Kamalkant Hiran", role: "Faculty at Sir Padampat Singhania University" },
    { quote: "Thanks to them, I got my research paper published and patent filed!", name: "Dr. Kavita", role: "Faculty at Private University" },
  ];

  const SectionHeader = ({ title, emoji, dividerClass = 'from-purple-400 to-purple-600' }) => (
    <>
      <h2 className="text-4xl font-extrabold text-purple-800 mb-4">{emoji} {title}</h2>
      <div className={`w-28 h-1 bg-gradient-to-r ${dividerClass} rounded mx-auto mb-12 shadow-lg`}></div>
    </>
  );

  const Card = ({ children, className = '', hoverEffect = true }) => (
    <div className={`bg-white p-8 rounded-3xl shadow-lg border border-gray-200 transition duration-300 ${hoverEffect ? 'hover:shadow-2xl hover:border-purple-500 transform hover:-translate-y-2' : ''} ${className}`}>
      {children}
    </div>
  );

  const navigate = useNavigate();
  return (
    <div className="pt-20 bg-white text-gray-900 font-sans">

  {/* Hero Section */}
   
<section className="py-20 bg-gradient-to-r from-purple-200 via-purple-100 to-white">
  <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">

    {/* Left Side */}
    <div className="lg:w-1/2 space-y-6">
      <h1 className="text-5xl font-extrabold text-purple-900 leading-tight">
        🎓 Welcome to <span className="text-purple-800">ResAIShala's</span> Research Hub
      </h1>
      <p className="text-lg text-gray-700 mt-2">
        Where ideas become discoveries — and research meets real-world impact.
      </p>

      <p className="text-lg text-purple-800 font-semibold">
        🧠 Level up your knowledge. 📊 Unlock academic tools. 🏆 Conquer publication challenges.
      </p>

      <p className="text-gray-700">
        Embark on a mission where you're the lead researcher, and your ideas are your superpower.
        Whether you're a first-timer or a PhD warrior, we guide you from spark to submission.
      </p>

      <div className="bg-white p-4 rounded-xl shadow-md border-l-4 border-purple-500">
        <p className="text-purple-900 font-medium mb-2">🧭 Your Research Quest Includes:</p>
        <ul className="text-gray-800 space-y-2 list-disc pl-5">
          <li>🎯 Define your problem statement & research path</li>
          <li>📚 Gather intel — references, reviews, insights</li>
          <li>🧪 Run experiments, collect and analyze data</li>
          <li>📝 Polish your paper — citations, ethics, formatting</li>
          <li>🚀 Submit to high-impact journals & win your defense</li>
        </ul>
      </div>

      <p className="text-purple-700 font-semibold italic mt-4">
        "Real research isn’t a task — it’s an epic journey of asking bold questions and seeking real answers."
      </p>

      {/* Start Research Journey Button */}
      <div className="mt-6">
        <Link
          to="/research-guide"
          className="inline-flex items-center gap-3 px-6 py-3 bg-purple-700 text-white text-md font-semibold rounded-full shadow hover:bg-purple-800 transition"
        >
          🎓 Start Your Research Journey
        </Link>
      </div>

      {/* Line + View Services Button */}
      <div className="mt-10 space-y-4">
        <p className="text-purple-800 text-md font-medium">
          💼 At <span className="font-bold text-purple-900">ResAIShala</span>, we offer a wide range of specialized research services to support every step of your journey.
        </p>
        <a
          href="#services"
          className="inline-block px-6 py-3 bg-purple-700 text-white text-md font-semibold rounded-full shadow hover:bg-purple-800 transition"
        >
          🚀 Explore Our Services
        </a>
      </div>
    </div>

    {/* Right Side: 2x2 Image Grid */}
    <div className="lg:w-1/2 grid grid-cols-2 gap-4">
      <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-purple-100">
        <img
          src={home1Img}
          alt="Research Visual 1"
          className="w-full h-full object-cover aspect-[4/3]"
        />
      </div>
      <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-purple-100">
        <img
          src={home2Img}
          alt="Research Visual 2"
          className="w-full h-full object-cover aspect-[4/3]"
        />
      </div>
      <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-purple-100">
        <img
          src={home3Img}
          alt="Research Visual 3"
          className="w-full h-full object-cover aspect-[4/3]"
        />
      </div>
      <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-purple-100">
        <img
          src={home4Img}
          alt="Research Visual 4"
          className="w-full h-full object-cover aspect-[4/3]"
        />
      </div>
    </div>

  </div>
</section>

      {/* Hero Section end*/}

     {/* Services Section */}
       <section id="services" className="relative py-20 bg-gradient-to-br from-[#fdf4ff] via-[#fafafa] to-[#ecfdf5] overflow-hidden">
  {/* Decorative SVG background blob */}
  <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
    <svg
      className="absolute opacity-10 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      viewBox="0 0 1200 120"
      fill="none"
    >
      <path d="M0,0 C600,100 600,0 1200,100 L1200,0 L0,0 Z" fill="#d8b4fe" />
    </svg>
  </div>

  {/* Main Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
    <SectionHeader title="Our Services" emoji="📚" />
    <p className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg font-medium">
      We offer a wide range of services to support your academic and industrial research journey.
    </p>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
      {services.map((s, idx) => {
        const gradients = [
          'from-yellow-100 to-white',
          'from-pink-100 to-white',
          'from-purple-100 to-white',
          'from-green-100 to-white',
          'from-blue-100 to-white',
          'from-orange-100 to-white',
        ];
        const gradient = gradients[idx % gradients.length];

        return (
          <Card
            key={idx}
            className={`bg-gradient-to-b ${gradient} shadow-md border border-purple-100 rounded-2xl transition hover:shadow-xl hover:scale-[1.03] duration-300`}
          >
            <img
              src={s.img}
              alt={s.title}
              className={`mx-auto mb-6 ${
                s.title.includes('IEEE') || s.title.includes('Springer') ? 'w-28 h-28' : 'w-20 h-20'
              } object-contain`}
            />
            <h3 className="text-2xl font-semibold text-purple-900 mb-3">{s.title}</h3>
            <p className="text-gray-700">{s.desc}</p>
          </Card>
        );
      })}
    </div>

    {/* CTA Box */}
    <div className="mt-24 text-center bg-white shadow-lg rounded-3xl p-10 max-w-3xl mx-auto border border-purple-100">
      <h3 className="text-3xl font-extrabold text-purple-800 mb-4">
        Let’s Create Something Amazing Together 💡
      </h3>
      <p className="text-gray-700 text-lg mb-6 leading-relaxed">
        Got an idea, a question, or a vision? Don’t let it stay in your head — share it with us!
        Whether you're exploring a breakthrough research concept or need help with a specific challenge, we’re here to support you at every step.
      </p>
      <p className="text-gray-600 text-base mb-8 italic">
        Start the conversation today — great things often begin with a simple query.
      </p>
      <button
        onClick={() => navigate("/query")}
        className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300"
      >
        Send Your Query ✉️
      </button>
    </div>
  </div>
</section>

      {/* Services Section end */}

      {/* new  */}
    <section className="py-24 bg-gradient-to-br from-[#ede9fe] via-[#f3e8ff] to-[#e9d5ff] relative overflow-hidden">
  {/* Decorative blurred blob background */}
  <div className="absolute top-[-60px] right-[-60px] w-96 h-96 bg-purple-300 rounded-full opacity-30 filter blur-[120px] -z-10" />
  <div className="absolute bottom-[-80px] left-[-60px] w-80 h-80 bg-pink-200 rounded-full opacity-30 filter blur-[100px] -z-10" />
  <div className="absolute top-[50%] left-[40%] w-72 h-72 bg-yellow-100 rounded-full opacity-20 blur-[90px] -z-10" />

  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-purple-900 text-center mb-4 leading-tight">
      Our Research Stack
    </h2>
    <p className="text-purple-800 text-lg text-center max-w-2xl mx-auto mb-12">
      Every impactful research project begins with a spark — a question, an idea, a possibility. Here's how our tech stack empowers your journey from curious thought to published success.
    </p>

    {/* Horizontal Scroll Cards */}
    <div className="relative overflow-x-auto flex gap-10 px-4 py-6 scrollbar-hide snap-x scroll-smooth">
      {[
        {
          stage: "Ideation",
          tech: "Notion, Obsidian",
          desc: "We begin by capturing ideas, organizing literature, and drafting initial thoughts. These tools help researchers turn scattered inspiration into structured plans.",
          icon: "🧠",
        },
        {
          stage: "Exploration",
          tech: "Google Scholar, ResearchGate",
          desc: "We navigate academic landscapes, explore related work, and narrow our focus with credible insights from researchers worldwide.",
          icon: "🔍",
        },
        {
          stage: "Writing",
          tech: "Overleaf, LaTeX",
          desc: "Structured writing with collaborative editing, citation management, and templates like IEEE, ACM, or Springer to give your paper a professional finish.",
          icon: "✍️",
        },
        {
          stage: "Analysis",
          tech: "Python, R, SPSS",
          desc: "We dive deep into data — applying statistical models, visualizing trends, and drawing evidence-based conclusions.",
          icon: "📊",
        },
        {
          stage: "Citing & Referencing",
          tech: "Zotero, Mendeley",
          desc: "Effortlessly manage your references with tools that ensure proper citation formats, accurate bibliographies, and seamless integrations.",
          icon: "📚",
        },
        {
          stage: "Submission",
          tech: "EasyChair, Editorial Manager",
          desc: "Finalize your manuscript, choose the right venue, and submit your work while tracking peer-review progress.",
          icon: "📤",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="min-w-[280px] max-w-xs bg-gradient-to-b from-white via-purple-50 to-white border border-purple-200 rounded-3xl shadow-md p-6 flex-shrink-0 snap-center hover:shadow-xl hover:scale-[1.03] transition-all"
        >
          <div className="text-5xl mb-4">{item.icon}</div>
          <h4 className="text-xl font-semibold text-purple-900 mb-1">{item.stage}</h4>
          <p className="text-sm text-purple-700 font-medium mb-2">{item.tech}</p>
          <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>

    {/* Closing Message */}
    <div className="mt-16 max-w-3xl mx-auto text-center">
      <p className="text-purple-800 text-lg font-semibold">
        Whether you're just brainstorming or ready to publish —<br />
        we offer end-to-end support with the tools researchers love.
      </p>
      <p className="text-purple-600 text-sm mt-2">
        Your journey deserves the right tools — and we’re here to equip you every step of the way.
      </p>
    </div>
  </div>
</section>

      {/* new end  */}
    
      {/* Technology Section */}
      <section className="py-24 bg-gradient-to-tr from-purple-100 to-purple-50 relative overflow-hidden">
  {/* Decorative blurred background blobs */}
  <div className="absolute top-[-60px] right-[-60px] w-96 h-96 bg-purple-300 rounded-full opacity-30 blur-[100px] -z-10" />
  <div className="absolute bottom-[-80px] left-[-60px] w-80 h-80 bg-pink-200 rounded-full opacity-30 blur-[90px] -z-10" />

  <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
    <h2 className="text-4xl font-extrabold text-purple-800 mb-4">
      💻 Technologies We Work With
    </h2>

    <p className="text-purple-800 text-lg max-w-2xl mx-auto mb-12 font-medium">
      These are more than buzzwords — they’re the future we help build, one innovation at a time.
    </p>

    {/* Tech Chips */}
    <div className="flex flex-wrap justify-center gap-4">
      {techs.map((tech, i) => {
        const gradients = [
          'from-purple-100 via-white to-purple-50',
          'from-pink-100 via-white to-pink-50',
          'from-yellow-100 via-white to-yellow-50',
          'from-blue-100 via-white to-blue-50',
          'from-green-100 via-white to-green-50',
          'from-orange-100 via-white to-orange-50',
        ];
        const gradient = gradients[i % gradients.length];

        return (
          <span
            key={i}
            className={`bg-gradient-to-r ${gradient} px-5 py-3 rounded-full text-purple-700 text-sm font-semibold shadow hover:shadow-md hover:scale-105 transition-all duration-300 cursor-default animate-float`}
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            {tech}
          </span>
        );
      })}
    </div>
  </div>

  {/* Floating animation style */}
  <style jsx>{`
    @keyframes float {
      0% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-4px);
      }
      100% {
        transform: translateY(0px);
      }
    }
    .animate-float {
      animation: float 3s ease-in-out infinite;
    }
  `}</style>
</section>

      {/* Technology Section end */}

      {/* Brainprints  */}
      <section className="py-24 bg-gradient-to-br from-[#e9d5ff] via-[#f3e8ff] to-[#e0c3fc] relative overflow-hidden">
  {/* Background Blobs */}
  <div className="absolute top-[-60px] right-[-30px] w-80 h-80 bg-purple-400 rounded-full opacity-30 blur-[100px] -z-10" />
  <div className="absolute bottom-[-70px] left-[-50px] w-72 h-72 bg-pink-300 rounded-full opacity-20 blur-[100px] -z-10" />

  <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
    <h2 className="text-4xl font-extrabold text-purple-900 mb-4">
      🧭 Brainprints: How We Think
    </h2>
    <p className="text-purple-800 text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
      Every team has a fingerprint. Ours is made of questions, curiosity, and clarity.
      Here's a peek into our thinking patterns — what guides our decisions and builds our innovation DNA.
    </p>

    {/* Card Grid */}
    <div className="grid md:grid-cols-3 gap-10 text-left">
      {[
        {
          icon: "🌀",
          title: "Systems First",
          desc: "We map before we move. Everything we build is rooted in mental models, not just features.",
        },
        {
          icon: "🧪",
          title: "Experimentation Over Perfection",
          desc: "Version 1 is better than version none. We validate fast and iterate smarter.",
        },
        {
          icon: "🔍",
          title: "Depth > Speed",
          desc: "Speed is important. But depth wins long-term. We pause to ask better questions.",
        },
        {
          icon: "🧠",
          title: "Learning as a Habit",
          desc: "We journal insights. Share research. Build in public. Curiosity is our fuel.",
        },
        {
          icon: "📡",
          title: "Signals, Not Noise",
          desc: "We focus on data that matters. Every experiment has a hypothesis — or it doesn’t ship.",
        },
        {
          icon: "💡",
          title: "Play with Purpose",
          desc: "We explore with childlike wonder but execute with mission-level clarity.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-white border border-purple-200 p-6 rounded-3xl shadow-lg hover:shadow-xl transition-colors duration-200"
        >
          <div className="text-3xl mb-3">{item.icon}</div>
          <h3 className="text-xl font-semibold text-purple-800 mb-2">
            {item.title}
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>

    {/* Closing Line */}
    <p className="mt-16 text-sm text-purple-700 italic">
      Brainprints evolve as we grow — but our compass always points to purpose-driven innovation.
    </p>
  </div>
</section>

      {/* brainprints  Section end*/}


      {/* Why Choose Us */}
          <section className="py-24 bg-gradient-to-bl from-white via-purple-50 to-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-extrabold text-purple-800 mb-4">✨ What Sets Us Apart?</h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              We're not just about papers—we're about empowering your entire research journey with experience, precision, and heart.
            </p>

            <div className="grid md:grid-cols-3 gap-10 mt-10">
              <div className="bg-white shadow-lg border-t-8 border-purple-400 rounded-xl p-8 hover:shadow-xl transition duration-300">
                <div className="text-5xl mb-4 text-purple-600 animate-pulse">🧠</div>
                <h3 className="text-3xl font-bold text-purple-900">500+ Projects</h3>
                <p className="text-gray-700 mt-2 text-base">Guided with expert mentorship and real-world relevance</p>
              </div>

              <div className="bg-white shadow-lg border-t-8 border-purple-400 rounded-xl p-8 hover:shadow-xl transition duration-300">
                <div className="text-5xl mb-4 text-purple-600 animate-bounce">📖</div>
                <h3 className="text-3xl font-bold text-purple-900">100+ Journals</h3>
                <p className="text-gray-700 mt-2 text-base">Published in high-impact platforms like IEEE, Springer, Elsevier</p>
              </div>

              <div className="bg-white shadow-lg border-t-8 border-purple-400 rounded-xl p-8 hover:shadow-xl transition duration-300">
                <div className="text-5xl mb-4 text-purple-600 animate-spin-slow">⏳</div>
                <h3 className="text-3xl font-bold text-purple-900">98% On-Time</h3>
                <p className="text-gray-700 mt-2 text-base">Our structured process ensures punctual and polished delivery</p>
              </div>
            </div>
          </div>
        </section>
      {/* Why Choose Us */}
      
      {/* How We Work */}
      <section className="py-20 bg-gradient-to-tr from-purple-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
              <SectionHeader title="How We Work" emoji="⚙️" />
              <div className="flex flex-col space-y-12">

                {[
                  {
                    title: 'Share Your Requirement',
                    desc: 'Tell us your topic or idea, and let’s get started!',
                    icon: '📝',
                  },
                  {
                    title: 'Get Free Consultation',
                    desc: 'We plan the project timeline and milestones.',
                    icon: '💬',
                  },
                  {
                    title: 'Work Execution',
                    desc: 'We execute the project with regular updates.',
                    icon: '🚀',
                  },
                  {
                    title: 'Final Delivery',
                    desc: 'We deliver the final output, ready for submission.',
                    icon: '🎉',
                  },
                ].map(({ title, desc, icon }, i) => (
                  <div key={i} className="flex items-start space-x-6 hover:shadow-xl hover:border-purple-500 p-6 rounded-3xl bg-white border border-gray-200 transition transform hover:-translate-y-1 cursor-pointer">
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-tr from-purple-500 to-purple-700 text-white text-2xl rounded-full shadow-lg mb-2">
                        {icon}
                      </div>
                      {i !== 3 && <div className="h-20 w-1 bg-purple-300"></div>}
                    </div>
                    <div className="text-left">
                      <h4 className="text-2xl font-bold text-purple-900 mb-2">Step {i + 1}: {title}</h4>
                      <p className="text-gray-700 text-lg">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
      </section>
      {/*How we work end */}

      {/* Mission & Vision - Highlight Cards with Accent */}
        <section className="relative py-24 bg-gradient-to-br from-purple-50 to-white overflow-hidden">
  <div className="absolute top-0 left-0 w-1/2 h-full bg-white transform -skew-x-12 shadow-xl z-0"></div>

  <div className="relative z-10 max-w-6xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-purple-800 text-center mb-20">
      Our Mission & Vision
    </h2>

    <div className="flex flex-col md:flex-row items-center gap-20">
      {/* Mission */}
      <div className="flex-1 bg-white rounded-3xl shadow-md p-10 transform hover:-translate-y-2 transition duration-300">
        <div className="flex items-center mb-4">
          <div className="text-purple-600 text-4xl mr-3">🎯</div>
          <h3 className="text-2xl font-semibold text-purple-900">Our Mission</h3>
        </div>
        <p className="text-gray-700 text-base leading-relaxed">
          We aim to <span className="text-purple-700 font-medium">bridge the gap</span> between brilliant ideas and academic excellence by offering research support that empowers scholars and industries globally.
        </p>
      </div>

      {/* Vertical Separator on larger screens */}
      <div className="hidden md:block h-32 w-[2px] bg-purple-200 rotate-12"></div>

      {/* Vision */}
      <div className="flex-1 bg-purple-50 border border-purple-200 rounded-3xl shadow-md p-10 transform hover:-translate-y-2 transition duration-300">
        <div className="flex items-center mb-4">
          <div className="text-purple-600 text-4xl mr-3">👁️</div>
          <h3 className="text-2xl font-semibold text-purple-900">Our Vision</h3>
        </div>
        <p className="text-gray-700 text-base leading-relaxed">
          To evolve into the <span className="text-purple-700 font-medium">most trusted research partner</span>, recognized for advancing innovation, integrity, and global societal impact.
        </p>
      </div>
    </div>
  </div>
</section>


    {/*new part */}
    <section className="relative py-28 bg-gradient-to-bl from-white via-purple-50 to-purple-100 overflow-hidden">
  {/* Blurred background blobs */}
  <div className="absolute top-10 left-10 w-72 h-72 bg-purple-300 opacity-30 rounded-full blur-3xl animate-pulse z-0"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200 opacity-40 rounded-full blur-2xl animate-ping-slow z-0"></div>

  <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold text-purple-800 mb-6">
      Every Researcher Has a Story ✨
    </h2>
    <p className="text-gray-700 text-lg mb-20 max-w-2xl mx-auto">
      From first spark to final submission — explore how students, mentors, and dreamers shaped their research journeys with us.
    </p>

    {/* Story Highlights with restored emoji style */}
    <div className="space-y-20">
      {[
        {
          emoji: "🧠",
          title: "The Curious Freshman",
          quote: `"I just wanted to explore... now I'm co-authoring my first research paper."`,
          borderColor: "border-purple-300",
          textColor: "text-purple-800",
        },
        {
          emoji: "⚙️",
          title: "The Final-Year Builder",
          quote: `"From idea to prototype to patent — I had guidance at every step."`,
          borderColor: "border-indigo-300",
          textColor: "text-indigo-800",
        },
        {
          emoji: "🚀",
          title: "The Startup Dreamer",
          quote: `"With support on documentation and pitching, we’re now building for real-world impact."`,
          borderColor: "border-pink-300",
          textColor: "text-pink-800",
        },
      ].map((story, i) => (
        <div
          key={i}
          className={`relative bg-white px-8 py-10 rounded-3xl shadow-xl border-l-8 ${story.borderColor} text-left max-w-3xl mx-auto hover:shadow-2xl transition`}
        >
          <div className="absolute -top-6 -left-6 text-5xl drop-shadow-md">
            {story.emoji}
          </div>
          <h3 className={`text-xl font-bold ${story.textColor} mb-2`}>
            {story.title}
          </h3>
          <p className="text-gray-600 italic">{story.quote}</p>
        </div>
      ))}
    </div>

    {/* CTA Block */}
    <div className="mt-28 bg-white/80 backdrop-blur-xl px-8 py-14 rounded-3xl shadow-2xl border border-purple-200 relative overflow-hidden">
      <div className="absolute -top-10 right-10 w-32 h-32 bg-purple-300 opacity-20 blur-2xl rounded-full animate-pulse"></div>
      <div className="absolute -bottom-10 left-10 w-40 h-40 bg-pink-300 opacity-20 blur-2xl rounded-full animate-ping"></div>
      <div className="relative z-10">
        <h2 className="text-3xl font-extrabold text-purple-800 mb-4">
          Your Journey Begins Here.
        </h2>
        <p className="text-lg text-gray-700 mb-2">
          Be it your first paper or your tenth — ResAIShala supports you with tools, mentors, and community.
        </p>
        <p className="text-gray-600 italic mb-6">No idea is too early. No dream is too big.</p>
        <button
          onClick={() => navigate("/login")}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-10 py-3 rounded-full font-semibold text-lg shadow-md hover:scale-105 transform transition"
        >
          ✨ Join ResAIShala Now
        </button>
      </div>
    </div>
  </div>
</section>
    {/*new part end  */}
    
    </div>
  );
};

export default ResearchInfoSection;
