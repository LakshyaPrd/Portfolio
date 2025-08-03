// components/about-me.tsx
import React from 'react';
import Image from 'next/image';

const AboutMe = () => {
    return (
    <div className="min-h-screen md:pt-32 pt-20 text-white p-4 md:p-8 bg-black">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-4">
        {/* Left: Profile Image + Tech and Spoken Language */}
        <div className="lg:col-span-2 flex flex-col items-left space-y-6">
          <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/20 mb-4">
            <Image src="/lakshya.jpg" alt="Lakshya Pradhan" className="object-cover w-full h-full" width={100} height={100}/>
          </div>

          <div className='bg-black bg-opacity-50 rounded-xl p-6 border border-gray-700 w-full max-w-md'>
            <h3 className='text-xl font-bold mb-4'>Spoken Language</h3>
            <div className='flex flex-wrap gap-2'>
              <span className='px-3 py-1 bg-gray-800 rounded-full text-sm'>English</span>
              <span className='px-3 py-1 bg-gray-800 rounded-full text-sm'>Hindi</span>
            </div>
          </div>

          <div className='bg-black bg-opacity-50 rounded-xl p-6 border border-gray-700 w-full max-w-md'>
            <h3 className='text-xl font-bold mb-4'>Tech Stack</h3>

            {/* Frontend */}
            <div className='mb-4'>
              <h4 className='font-semibold text-gray-300'>Frontend</h4>
              <div className='flex flex-wrap gap-2 mt-2'>
                {["HTML", "CSS", "JavaScript", "React", "ZOD", "Next.js", "TypeScript"].map(tech => (
                  <span key={tech} className='px-2 py-1 bg-gray-800 rounded-md text-xs'>{tech}</span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className='mb-4'>
              <h4 className='font-semibold text-gray-300'>Backend</h4>
              <div className='flex flex-wrap gap-2 mt-2'>
                {["Node.js", "Express.js", "MongoDB", "PostgreSQL", "ZOD", "Next.js", "TypeScript"].map(tech => (
                  <span key={tech} className='px-2 py-1 bg-gray-800 rounded-md text-xs'>{tech}</span>
                ))}
              </div>
            </div>

            {/* UI Libraries */}
            <div className='mb-4'>
              <h4 className='font-semibold text-gray-300'>UI Libraries</h4>
              <div className='flex flex-wrap gap-2 mt-2'>
                {["HTML", "CSS", "JavaScript", "React", "ZOD", "Next.js", "TypeScript"].map(tech => (
                  <span key={tech} className='px-2 py-1 bg-gray-800 rounded-md text-xs'>{tech}</span>
                ))}
              </div>
            </div>

            {/* Storage */}
            <div className='mb-4'>
              <h4 className='font-semibold text-gray-300'>Storage</h4>
              <div className='flex flex-wrap gap-2 mt-2'>
                <span className='px-2 py-1 bg-gray-800 rounded-md text-xs'>MongoDB</span>
                <span className='px-2 py-1 bg-gray-800 rounded-md text-xs'>PostgreSQL</span>
              </div>
            </div>

            {/* Tools */}
            <div className='mb-4'>
              <h4 className='font-semibold text-gray-300'>Tools</h4>
              <div className='flex flex-wrap gap-2 mt-2'>
                <span className='px-2 py-1 bg-gray-800 rounded-md text-xs'>Git</span>
                <span className='px-2 py-1 bg-gray-800 rounded-md text-xs'>Docker</span>
                <span className='px-2 py-1 bg-gray-800 rounded-md text-xs'>AWS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Name, About, Social, Work Experience, Education */}
        <div className="lg:col-span-3 flex flex-col items-left justify-start mt-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Lakshya Pradhan</h1>
          <h2 className="text-xl md:text-2xl text-gray-300 mb-6">Final Year B.Tech Student</h2>

          {/* Social icons */}
          <div className='flex gap-4 mb-8'>
            <a 
                href="https://github.com/bhanupratapsingh21" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-black bg-opacity-50 rounded-lg border border-gray-700 hover:bg-purple-900 transition-colors"
                >
                <svg 
                    stroke="currentColor" 
                    fill="currentColor" 
                    strokeWidth="0" 
                    viewBox="0 0 496 512" 
                    height="24" 
                    width="24" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                </svg>
            </a>
            <a 
                href="https://linkedin.com/in/your-linkedin-profile" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-black bg-opacity-50 rounded-lg border border-gray-700 hover:bg-blue-600 transition-colors"
                >
                <svg 
                    stroke="currentColor" 
                    fill="currentColor" 
                    strokeWidth="0" 
                    viewBox="0 0 448 512" 
                    height="24" 
                    width="24" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                </svg>
            </a>
            <a 
                href="mailto:your-email@example.com" 
                className="p-3 bg-black bg-opacity-50 rounded-lg border border-gray-700 hover:bg-red-600 transition-colors"
                >
                <svg 
                    stroke="currentColor" 
                    fill="currentColor" 
                    strokeWidth="0" 
                    viewBox="0 0 512 512" 
                    height="24" 
                    width="24" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>
                </svg>
            </a>
          </div>

          {/* About Paragraph */}
          <div className="max-w-5xl space-y-2 text-gray-300 text-lg mb-10">
            <p>
              I&apos;m a passionate and results-driven Full Stack Developer with strong expertise in the MERN stack, TypeScript, Next.js, and cloud-based technologies. Currently working at Newral, one of India&apos;s top tech agencies, I collaborate with both US-based clients and leading Indian edtech startups to build scalable, high-performance applications.
            </p>
          </div>

          {/* Work Experience */}
          <div className='bg-black bg-opacity-50 rounded-xl p-6 border border-gray-700 mb-10 w-full'>
            <h3 className='text-2xl font-bold mb-6'>Work Experience</h3>

            {/* North Western Railways */}
            <div className='mb-2'>
              <div className='flex justify-between items-start'>
                <h3 className='text-xl font-semibold text-purple-300'>North Western Railways</h3>
                <span className='text-gray-400 text-sm'>May 2025 - July 2025</span>
              </div>
              <div className='mt-4 text-gray-300'>
                <p className='text-neutral-200 text-xs md:text-sm font-normal mb-6'>I have worked here as a summer intern, where I gained insight into the functioning of one of India’s major public transport systems. The experience offered a closer look at how large-scale railway operations are managed across departments.</p>
                  <p className='text-neutral-200 text-xs md:text-sm font-normal mb-6'>My work involved observing signaling systems, maintenance workflows, and understanding how data is handled for scheduling and operations. I also got hands-on exposure to technical documentation and process monitoring.</p>
                  <p className='text-neutral-200 text-xs md:text-sm font-normal mb-6'>Collaborating with engineers and officials, I enhanced my skills in analysis, documentation, and system understanding. This internship gave me a strong foundation in infrastructure coordination and public sector technology operations.</p>
                <div className='grid grid-cols-2 gap-4'>
                  {["/main.png", "/submit.png", "/track.png", "/main.png"].map((src, i) => (
                    <Image key={i} src={src} alt="CMS" className='rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-lg' width={100} height={100} />
                  ))}
                </div>
              </div>
            </div>

            {/* Coffee Kala */}
            <div>
              <div className='flex justify-between items-start'>
                <h3 className='text-xl font-semibold text-purple-300'>Coffee Kala</h3>
                <span className='text-gray-400 text-sm'>January 2025 - February 2025</span>
              </div>
              <div className='mt-4 text-gray-300'>
                <p className='text-neutral-200 text-xs md:text-sm font-normal mb-6'>As a freelance developer, I worked with Coffee Kala, a cozy and aesthetic café based in Jaipur, to design and build their official website. The goal was to create a digital presence that reflected the café’s unique vibe and allowed customers to engage more easily online.</p>
                <div className='grid grid-cols-2 gap-4'>
                  {["/coffee1.png", "/coffee2.png", "/coffee3.png", "/coffee4.png"].map((src, i) => (
                    <Image key={i} src={src} alt="CK" className='rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-lg' width={100} height={100} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className='bg-black bg-opacity-50 rounded-xl p-6 border border-gray-700 mb-10'>
            <h3 className='text-2xl font-bold mb-6'>Education</h3>
            
            {/* Bachelor of Technology */}
            <div className='mb-b last:mb-0'>
              <div className='flex justify-between items-start '>
                <h3 className='text-xl font-semibold text-purple-300'>Bachelor of Technology</h3>
                <span className='text-gray-400 text-sm'>2022 - Present</span>
              </div>
              <div className='mt-4 text-gray-300 max-w-md'>
                <div>
                  <p className='text-neutral-200 text-xs md:text-sm font-normal mb-6 text-justify'>Currently pursuing my undergraduate degree in Engineering at Jaypee University of Engineering & Technology, Guna. Focusing on software development, algorithms, and modern web technologies while gaining comprehensive knowledge in computer science fundamentals.</p>

                </div>
              </div>
            </div>

            {/* Higher Secondary Education */}
            <div className='mb-b last:mb-0'>
              <div className='flex justify-between items-start '>
                <h3 className='text-xl font-semibold text-purple-300'>Higher Secondary Education</h3>
                <span className='text-gray-400 text-sm'>2020 - 2022</span>
              </div>
              <div className='mt-4 text-gray-300 max-w-md'>
                <div>
                  <p className='text-neutral-200 text-xs md:text-sm font-normal mb-6 text-justify'>Completed my higher secondary education at Mahaveer Public School, Jaipur, with a strong foundation in mathematics, physics, and computer science. This period was crucial in developing my analytical thinking and problem-solving abilities.</p>
                  
                </div>
              </div>
            </div>

            {/* High School Education */}
            <div className='mb-b last:mb-0'>
              <div className='flex justify-between items-start '>
                <h3 className='text-xl font-semibold text-purple-300'>High School Education</h3>
                <span className='text-gray-400 text-sm'>2010 - 2019</span>
              </div>
              <div className='mt-4 text-gray-300 max-w-md'>
                <div>
                  <p className='text-neutral-200 text-xs md:text-sm font-normal mb-6 text-justify'>Completed my foundational education at Mahaveer Public School, Jaipur, where I developed core academic skills across various subjects. This formative period helped me discover my interests and build fundamental knowledge.</p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-6xl pt-14 px-4'>
        <div className='mt-8'>
          <h3 className='text-xl font-semibold text-white text-center mb-8'>Key Skills Gained</h3>
          <div className='flex flex-wrap justify-center gap-4'>
            <span className='px-4 py-2 bg-neutral-800 text-gray-300 rounded-full hover:bg-neutral-700 transition-colors'>Problem Solving </span>
            <span className='px-4 py-2 bg-neutral-800 text-gray-300 rounded-full hover:bg-neutral-700 transition-colors'>Team Collaboration</span>
            <span className='px-4 py-2 bg-neutral-800 text-gray-300 rounded-full hover:bg-neutral-700 transition-colors'>Project Management</span>
            <span className='px-4 py-2 bg-neutral-800 text-gray-300 rounded-full hover:bg-neutral-700 transition-colors'>Technical Leadership</span>
            <span className='px-4 py-2 bg-neutral-800 text-gray-300 rounded-full hover:bg-neutral-700 transition-colors'>Communication</span>
            <span className='px-4 py-2 bg-neutral-800 text-gray-300 rounded-full hover:bg-neutral-700 transition-colors'>Time Management</span>
          </div>
        </div>
      </div>
      <div className='max-w-6xl mx-auto pt-16 px-4 mt-10'>
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <span className='text-blue-600 font-medium text-sm tracking-wider uppercase'>Why Hire Me</span>
          <h2 className='mt-3 text-4xl font-bold bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20'>
            What Makes Me Stand Out
          </h2>
          <p className='mt-4 text-gray-400'>
            A unique blend of technical expertise, business acumen, and creative problem-solving
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
          <div className='group bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-8 hover:border-blue-600/50 transition-all duration-300'>
            <div className='flex items-center gap-4 mb-4'>
              <div className='p-3 bg-blue-600/10 rounded-lg'>
                <svg
                  className='w-8 h-8 text-blue-600'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z'
                  />
                </svg>
              </div>
              <h3 className='text-lg font-semibold text-white'>Problem Solving</h3>
            </div>
            <p className='text-gray-400 text-sm'>
              B.Tech background with technical skills provides unique insights into problem solving.
            </p>
          </div>
          <div className='group bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-8 hover:border-blue-600/50 transition-all duration-300'>
            <div className='flex items-center gap-4 mb-4'>
              <div className='p-3 bg-blue-600/10 rounded-lg'>
                <svg
                  className='w-8 h-8 text-blue-600'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z'
                  />
                </svg>
              </div>
              <h3 className='text-lg font-semibold text-white'>Early Adopter</h3>
            </div>
            <p className='text-gray-400 text-sm'>
              B.Tech background with technical skills provides unique insights into problem solving.
            </p>
          </div>
          <div className='group bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-8 hover:border-blue-600/50 transition-all duration-300'>
            <div className='flex items-center gap-4 mb-4'>
              <div className='p-3 bg-blue-600/10 rounded-lg'>
                <svg
                  className='w-8 h-8 text-blue-600'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z'
                  />
                </svg>
              </div>
              <h3 className='text-lg font-semibold text-white'>Full Stack Mastery</h3>
            </div>
            <p className='text-gray-400 text-sm'>
              B.Tech background with technical skills provides unique insights into problem solving.
            </p>
          </div>
          <div className='group bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-8 hover:border-blue-600/50 transition-all duration-300'>
            <div className='flex items-center gap-4 mb-4'>
              <div className='p-3 bg-blue-600/10 rounded-lg'>
                <svg
                  className='w-8 h-8 text-blue-600'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z'
                  />
                </svg>
              </div>
              <h3 className='text-lg font-semibold text-white'>Future-Ready</h3>
            </div>
            <p className='text-gray-400 text-sm'>
              B.Tech background with technical skills provides unique insights into problem solving.
            </p>
          </div>
          <div className='group bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-8 hover:border-blue-600/50 transition-all duration-300'>
            <div className='flex items-center gap-4 mb-4'>
              <div className='p-3 bg-blue-600/10 rounded-lg'>
                <svg
                  className='w-8 h-8 text-blue-600'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z'
                  />
                </svg>
              </div>
              <h3 className='text-lg font-semibold text-white'>Good Communication</h3>
            </div>
            <p className='text-gray-400 text-sm'>
              B.Tech background with technical skills provides unique insights into problem solving.
            </p>
          </div>
          <div className='group bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-8 hover:border-blue-600/50 transition-all duration-300'>
            <div className='flex items-center gap-4 mb-4'>
              <div className='p-3 bg-blue-600/10 rounded-lg'>
                <svg
                  className='w-8 h-8 text-blue-600'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z'
                  />
                </svg>
              </div>
              <h3 className='text-lg font-semibold text-white'>Problem Solving</h3>
            </div>
            <p className='text-gray-400 text-sm'>
              B.Tech background with technical skills provides unique insights into problem solving.
            </p>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default AboutMe;
