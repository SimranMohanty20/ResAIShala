import React, { useState, useRef, useEffect } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Arial, Helvetica, sans-serif',
  headerBgColor: '#714CC2',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#714CC2',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

// Hide the input field by overriding styles
const CustomChatBot = styled(ChatBot)`
  .rsc-input {
    display: none;
  }
`;

const ChatButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #714CC2;
  color: white;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  font-size: 24px;
  cursor: pointer;
  z-index: 1000;
`;

const ChatContainer = styled.div`
  position: fixed;
  bottom: 80px;
  right: 20px;
  z-index: 999;
`;

const steps = [
  {
    id: '1',
    message: 'Welcome to ResAiShala! How can I assist you today?',
    trigger: 'options',
  },
  {
    id: 'options',
    options: [
      { value: 'research_areas', label: 'Tell me about your research areas', trigger: 'research_areas' },
      { value: 'projects', label: 'Show me some of your projects', trigger: 'projects' },
      { value: 'contact', label: 'How can I contact you?', trigger: 'contact' },
    ],
  },
  {
    id: 'research_areas',
    message: 'Our research areas include Experiential Learning, Innovative Teaching Methods, and Competency-Based Education. Would you like to know more about any specific area?',
    trigger: 'research_areas_detail',
  },
  {
    id: 'research_areas_detail',
    options: [
      { value: 'experiential_learning', label: 'Experiential Learning', trigger: 'experiential_learning' },
      { value: 'innovative_teaching', label: 'Innovative Teaching Methods', trigger: 'innovative_teaching' },
      { value: 'competency_based', label: 'Competency-Based Education', trigger: 'competency_based' },
      { value: 'back', label: 'Go Back', trigger: 'options' },
    ],
  },
  {
    id: 'experiential_learning',
    message: 'Experiential Learning involves hands-on, project-based learning to enhance student engagement and achievement.',
    trigger: 'ask_more',
  },
  {
    id: 'innovative_teaching',
    message: 'Innovative Teaching Methods focus on developing and evaluating new strategies that promote active learning and critical thinking.',
    trigger: 'ask_more',
  },
  {
    id: 'competency_based',
    message: 'Competency-Based Education researches frameworks that support individualized learning paths based on skill mastery.',
    trigger: 'ask_more',
  },
  {
    id: 'projects',
    message: 'We have several exciting projects like AI-Driven Learning Systems and Immersive VR/AR Experiences. Would you like to learn more about any specific project?',
    trigger: 'projects_detail',
  },
  {
    id: 'projects_detail',
    options: [
      { value: 'ai_systems', label: 'AI-Driven Learning Systems', trigger: 'ai_systems' },
      { value: 'vr_experiences', label: 'Immersive VR/AR Experiences', trigger: 'vr_experiences' },
      { value: 'back', label: 'Go Back', trigger: 'options' },
    ],
  },
  {
    id: 'ai_systems',
    message: 'Our AI-Driven Learning Systems create personalized learning paths for students by analyzing performance data and recommending effective strategies.',
    trigger: 'ask_more',
  },
  {
    id: 'vr_experiences',
    message: 'Our VR/AR Experiences enhance practical application of theoretical concepts through immersive technologies.',
    trigger: 'ask_more',
  },
  {
    id: 'contact',
    message: 'You can contact us at director@resaiShala.com or call us at +91 89053-46167.',
    trigger: 'ask_more',
  },
  {
    id: 'ask_more',
    message: 'Is there anything else I can help you with?',
    trigger: 'options_repeat',
  },
  {
    id: 'options_repeat',
    options: [
      { value: 'yes', label: 'Yes', trigger: 'options' },
      { value: 'no', label: 'No', trigger: 'end' },
    ],
  },
  {
    id: 'end',
    message: 'Thank you for visiting ResAiShala! Have a great day!',
    end: true,
  },
];

const ResearchChatbot = () => {
  const [showChatBot, setShowChatBot] = useState(false);
  const chatBotRef = useRef(null);

  const handleClickOutside = (event) => {
    if (chatBotRef.current && !chatBotRef.current.contains(event.target)) {
      setShowChatBot(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <ChatButton onClick={() => setShowChatBot(!showChatBot)}>
        💬
      </ChatButton>
      {showChatBot && (
        <ChatContainer ref={chatBotRef}>
          <ThemeProvider theme={theme}>
            <CustomChatBot steps={steps} />
          </ThemeProvider>
        </ChatContainer>
      )}
    </>
  );
};

export default ResearchChatbot;
