import React from 'react';
import { ContainerTextFlip } from '@/components/ui/container-text-flip';
import Galaxy from './galaxy';

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Galaxy Background */}
      <div className="absolute inset-0 bg-black">
        <Galaxy 
          mouseRepulsion={true}
          mouseInteraction={true}
          density={1.9}
          glowIntensity={0.1}
          saturation={0}
          hueShift={0}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 h-full">
        <div>
          {/* Navigation Menu */}
          <div className='text-white/50 text-xs md:text-sm mb-24 flex items-center justify-center gap-6 md:gap-8'>
            <a href="/projects" className="hover:text-gray-300 transition-colors duration-300 cursor-pointer">
              Projects
            </a>
            <a href="/my-ai" className="hover:text-gray-300 transition-colors duration-300 cursor-pointer">
              My-Ai
            </a>
            <a href="/about" className="hover:text-gray-300 transition-colors duration-300 cursor-pointer">
              About-Me
            </a>
            <a href="/contact" className="hover:text-gray-300 transition-colors duration-300 cursor-pointer">
              Contact
            </a>
          </div>

          {/* Main Greeting */}
          <div className="mb-6 flex items-baseline justify-center">
            <ContainerTextFlip
              words={["HolaAmigo", "नमस्ते"]}
              interval={3000}
              animationDuration={1000}
              className="text-transparent bg-clip-text"
              textClassName="text-white bg-clip-text"
            />
            <p className="text-3xl md:text-5xl text-white max-w-2xl">
              ,I&apos;m
            </p>
          </div>

          {/* Name */}
          <p className="text-3xl md:text-5xl text-white max-w-4xl mb-28">
            Lakshya Pradhan
          </p>
          
          {/* Description */}
          <div className="items-center ">
            <p className="text-xs md:text-sm text-gray-300/80 max-w-4xl leading-relaxed">
              Building innovative solutions with a passion for full-stack development, AI, and cutting-edge tech.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
