"use client";

import React, { useState } from 'react';

interface Message {
  type: 'user' | 'bot';
  content: string;
}

interface QuickQuestion {
  id: number;
  text: string;
  answer: string;
}

const MyAI = () => {
  const [chatStarted, setChatStarted] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');

  const quickQuestions: QuickQuestion[] = [
    {
      id: 1,
      text: "Ask About Tech Stack's",
      answer: "I'm proficient in a wide range of technologies including:\n\n**Frontend:** HTML, CSS, JavaScript, React, Next.js, TypeScript, ZOD, Tailwind CSS\n\n**Backend:** Node.js, Express.js, MongoDB, PostgreSQL, TypeScript\n\n**Tools:** Git, Docker, AWS\n\nI specialize in the MERN stack and have experience building scalable, high-performance applications. I'm currently working at Newral, collaborating with US-based clients and Indian edtech startups."
    },
    {
      id: 2,
      text: "Ask About Me",
      answer: "Hi! I'm Lakshya Pradhan, a passionate Full Stack Developer and final year B.Tech student. I'm currently working at Newral, one of India's top tech agencies, where I collaborate with both US-based clients and leading Indian edtech startups.\n\nI love building scalable applications and have experience in freelance development. I speak English and Hindi fluently, and I'm always excited to take on new challenges in web development!"
    },
    {
      id: 3,
      text: "My Education",
      answer: "**Current Education:**\n• Bachelor of Technology (2022 - Present) - Jaypee University of Engineering & Technology, Guna\n• Focusing on software development, algorithms, and modern web technologies\n\n**Previous Education:**\n• Higher Secondary Education (2020-2022) - Mahaveer Public School, Jaipur\n• High School Education (2010-2019) - Mahaveer Public School, Jaipur\n\nMy education has given me a strong foundation in computer science fundamentals, mathematics, physics, and analytical thinking."
    },
    {
      id: 4,
      text: "My Skill's",
      answer: "**Programming Languages:** JavaScript, TypeScript, Python, Java, HTML/CSS\n\n**Frontend Development:** React, Next.js, Redux, Tailwind CSS\n\n**Backend Development:** Node.js, Express.js, REST APIs, Socket.io\n\n**Databases:** MongoDB, PostgreSQL\n\n**Cloud & Tools:** AWS, Docker, Git\n\n**Other Skills:** Full-stack development, API integration, responsive design, database design, cloud deployment, and version control."
    },
    {
      id: 5,
      text: "Anything Related To Me",
      answer: "Feel free to ask me anything! I can tell you about:\n• My projects and work experience\n• My journey in tech\n• My interests and hobbies\n• My freelance work with Coffee Kala\n• My internship at North Western Railways\n• My development process and favorite technologies\n• Career goals and aspirations\n\nWhat specific aspect would you like to know more about?"
    },
    {
      id: 6,
      text: "My Work Status",
      answer: "**Current Status:** Final Year B.TechStudent.\n\n**Recent Projects:**\n• **Coffee Kala (Jan-Feb 2025):** Freelance project - Built a responsive website for a café in Jaipur using React and Tailwind CSS\n• **North Western Railways (May-July 2025):** Summer internship - Gained insights into railway operations and technical documentation\n\n**Availability:** I'm always open to discussing new opportunities and collaborations. Feel free to reach out!"
    }
  ];

  const handleQuickQuestion = (question: QuickQuestion) => {
    if (!chatStarted) {
      setChatStarted(true);
      setMessages([
        { type: 'bot' as const, content: "Hi! I'm Lakshya's Bot. Let me help you with that!" },
        { type: 'user' as const, content: question.text },
        { type: 'bot' as const, content: question.answer }
      ]);
    } else {
      setMessages(prev => [
        ...prev,
        { type: 'user' as const, content: question.text },
        { type: 'bot' as const, content: question.answer }
      ]);
    }
  };

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const newMessages: Message[] = [...messages, { type: 'user' as const, content: inputMessage }];
      
      // Simple hardcoded responses
      let botResponse = "That's an interesting question! While I'm a simple bot, I'd love to chat more about my skills, projects, or experience. Try asking about my tech stack, education, or work experience!";
      
      const lowerInput = inputMessage.toLowerCase();
      if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
        botResponse = "Hello! Nice to meet you! I'm Lakshya's personal bot. What would you like to know about me?";
      } else if (lowerInput.includes('project')) {
        botResponse = "I've worked on several exciting projects! Recently, I built a website for Coffee Kala café and completed an internship at North Western Railways. I also work at Newral on various client projects. Would you like to know more about any specific project?";
      } else if (lowerInput.includes('contact')) {
        botResponse = "You can reach out to Lakshya through the contact form on this website, or connect via GitHub and LinkedIn. I'm always excited to discuss new opportunities and collaborations!";
      }

      setMessages([...newMessages, { type: 'bot' as const, content: botResponse }]);
      setInputMessage('');
    }
  };

  const startChat = () => {
    setChatStarted(true);
    setMessages([{ type: 'bot' as const, content: "Hi! I'm Lakshya's Bot. What would you like to know about me?" }]);
  };

  return (
    <div className="min-h-screen md:pt-32 pt-20 text-white p-4 md:p-8 bg-black">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-center text-3xl bg-clip-text text-transparent h-14 drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 font-bold tracking-tighter sm:text-4xl md:text-5xl">
          My AI
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 text-center">
          Personal Assistant Bot
        </p>

        {!chatStarted ? (
          <div className='bg-black bg-opacity-50 rounded-xl p-8 border border-gray-700'>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Hi! I'm Lakshya's Bot</h2>
              <p className="text-lg text-gray-300 mb-6">Chat now!</p>
              <p className="text-gray-300 mb-8">
                You can ask me about my skills, experiences, projects, or anything related to my journey in tech and beyond. What would you like to know?
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {quickQuestions.map((question) => (
                <button
                  key={question.id}
                  onClick={() => handleQuickQuestion(question)}
                  className="bg-gray-800 hover:bg-gray-700 text-white py-3 px-4 rounded-lg border border-gray-600 transition-colors text-left"
                >
                  {question.text}
                </button>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={startChat}
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Let's Chat
              </button>
            </div>
          </div>
        ) : (
          <div className='bg-black bg-opacity-50 rounded-xl p-6 border border-gray-700'>
            <div className="h-96 overflow-y-auto mb-4 space-y-4 bg-gray-900 rounded-lg p-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg whitespace-pre-line ${
                      message.type === 'user'
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-700 text-gray-300'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button
                onClick={handleSendMessage}
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                Send
              </button>
            </div>

            <div className="text-center">
              <button
                onClick={() => {
                  setChatStarted(false);
                  setMessages([]);
                  setInputMessage('');
                }}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                ← Back to Menu
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyAI;
