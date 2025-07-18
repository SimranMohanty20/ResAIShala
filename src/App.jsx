import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Pages
import Home from './pages/Home.jsx';
import Atal from './pages/Atal.jsx';
import About from './pages/About.jsx';
import Research from './pages/Research.jsx';
import Olympiad from './pages/Olympiad.jsx';
import Projects from './pages/Projects.jsx';
import Career from './pages/Carrer.jsx';
import Intership from './pages/Intership.jsx';
import Apply from './pages/Apply.jsx';
import Course from './pages/Course.jsx';
import Page2 from './pages/Page2.jsx';
import Events from './pages/Events.jsx';
import Community from './pages/Community.jsx';
import MembershipSubscription from './pages/MembershipSubscription.jsx';
import Testimonials from './pages/Testimonials.jsx';
import News from './pages/News.jsx';
import Resources from './pages/Resources.jsx';
import LoginPanel from './pages/LoginPanel.jsx';
import ResearchGuide from './pages/ResearchGuide.jsx';

// Components
import QueryPage from './components/QueryPage.jsx'; // ✅ Newly added query page

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/atal" element={<Atal />} />
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<Research />} />
          <Route path="/olympiad" element={<Olympiad />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/carrer" element={<Career />} />
          <Route path="/internship" element={<Intership />} />
          <Route path="/apply/:role" element={<Apply />} />
          <Route path="/course" element={<Course />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/events" element={<Events />} />
          <Route path="/community" element={<Community />} />
          <Route path="/membership" element={<MembershipSubscription />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/news" element={<News />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/login" element={<LoginPanel />} />
          <Route path="/research-guide" element={<ResearchGuide />} />
          <Route path="/query" element={<QueryPage />} /> {/* ✅ Added route for query page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
