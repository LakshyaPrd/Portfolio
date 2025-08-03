import React from 'react'
import Navbar from '@/components/ui/navbar'
import ProjectCard from '@/components/ui/project-card'

// Example demo data for projects
const projects = [
  {
    title: "Complaint Management System",
    description: "The Complaint Management System is a digital platform for users to register, track, and manage complaints efficiently. It ensures timely resolution through automated workflows and real-time status updates.",
    tech: ["Next.js", "React.js","Tailwind CSS", "Axios","Node.js","Express.js","MongoDB","Mongoose","JWT","bcrypt.js"],
    github: "https://github.com/yourusername/ai-portfolio",
    live: "https://your-ai-portfolio-demo.com",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Weather Insights",
    description: "A real-time weather dashboard featuring beautiful charts and instant location-based updates.",
    tech: ["React", "Tailwind", "Chart.js"],
    github: "https://github.com/yourusername/weather-insights",
    live: "",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Smart Parking Management",
    description: "The Complaint Management System is a digital platform for users to register, track, and manage complaints efficiently. It ensures timely resolution through automated workflows and real-time status updates.",
    tech: ["Next.js", "React.js","Tailwind CSS", "Axios","Node.js","Express.js","MongoDB","Mongoose","JWT","bcrypt.js"],
    github: "https://github.com/yourusername/ai-portfolio",
    live: "https://your-ai-portfolio-demo.com",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Task Management App",
    description: "The Task Management App is a digital platform for users to create, track, and manage tasks efficiently. It ensures timely completion through automated reminders and real-time status updates.",
    tech: ["Next.js", "React.js","Tailwind CSS", "Axios","Node.js","Express.js","MongoDB","Mongoose","JWT","bcrypt.js"],
    github: "https://github.com/yourusername/ai-portfolio",
    live: "https://your-ai-portfolio-demo.com",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Portfolio Website",
    description: "The Portfolio Website is a digital platform showcasing my skills, projects, and experiences. It serves as a personal branding tool and a gateway for potential clients and employers to explore my work.",
    tech: ["Next.js", "React.js","Tailwind CSS", "Axios","Node.js","Express.js","MongoDB","Mongoose","JWT","bcrypt.js"],
    github: "https://github.com/yourusername/ai-portfolio",
    live: "https://your-ai-portfolio-demo.com",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
  },
  // Add more demo projects as needed...
]

const page = () => {
  return (
    <div>
      <div className='py-4 mb-10 '>
        <Navbar />
      </div>
      
      <div className='max-w-6xl mx-auto px-4 md:px-10 flex flex-col items-left gap-3'>
        <h1 className='text-3xl bg-clip-text text-transparent h-14 drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 font-bold tracking-tighter text-left sm:text-4xl md:text-5xl'>Project's</h1>
        <p className='text-gray-200'>Welcome to my projects showcase! Below, you'll find a selection of projects 
          that showcase my skills and passion for building innovative solutions. Each project represents 
          a unique journey of problem-solving, creativity, and continuous learning...</p>
        
        {/* ---- ADD YOUR CARD GRID HERE ---- */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
      
    </div>
  )
}

export default page
