"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { HomeIcon, BriefcaseIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import CIcon from '@coreui/icons-react';
import { cilEducation } from '@coreui/icons';
import { SiOpenai } from 'react-icons/si';
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="fixed top-0 left-0 w-full z-40 bg-transparent ">
      {/* Mobile Navbar - Pill Shape */}
      <nav className="
        md:hidden
        max-w-xs mx-auto mt-4
        flex justify-between items-center
        px-4 py-2
        rounded-full
        backdrop-blur-sm
        border border-neutral-300/50

      ">
        {/* Mobile Left Arrow */}
        <button
          aria-label="Back to Home"
          className="flex items-center text-white/70 hover:text-white transition-colors p-1"
          onClick={() => router.push("/")}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
        </button>

        {/* Mobile Nav Links */}
        <div className="flex items-center gap-1">
          <Link href="/" className="p-2 rounded-lg hover:bg-white/10 transition-colors">
            <HomeIcon className="w-4 h-4 text-white/70" />
          </Link>
          <Link href="/projects" className="p-2 rounded-lg hover:bg-white/10 transition-colors">
            <BriefcaseIcon className="w-4 h-4 text-white/70" />
          </Link>
          <Link href="/my-ai" className="p-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
            <SiOpenai className="w-4 h-4 text-white/70" />
          </Link>
          <Link href="/about" className="p-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
            <CIcon icon={cilEducation} className="w-4 h-4 text-white/70" />
          </Link>
          <Link href="/contact" className="p-2 rounded-lg hover:bg-white/10 transition-colors">
            <EnvelopeIcon className="w-4 h-4 text-white/70" />
          </Link>
        </div>
      </nav>

      {/* Desktop/Tablet Navbar - Your Original Styling */}
      <nav className="
        hidden md:flex
        max-w-lg md:max-w-6xl mx-auto justify-between
        py-0.5 px-2 md:px-10 my-2
        rounded-lg shadow-lg items-center
        border border-white/15
        backdrop-blur-sm
      ">
        {/* Desktop Left Arrow */}
        <button
          aria-label="Back to Home"
          className="flex items-center text-white/70 text-sm md:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 p-1"
          onClick={() => router.push("/")}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-3 md:size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
        </button>

        {/* Desktop Nav Links */}
        <div className="flex items-center gap-2 md:gap-10 text-white/80 text-xs md:text-base">
          <Link href="/" className="flex items-center gap-1 focus:outline-none focus:ring-1 p-1">
            <HomeIcon className="h-3 w-3" />
            <span className="hidden md:inline">Home</span>
          </Link>
          <Link href="/projects" className="flex items-center gap-1 focus:outline-none focus:ring-1 p-1">
            <BriefcaseIcon className="h-3 w-3" />
            <span className="hidden md:inline">Projects</span>
          </Link>
          <Link href="/my-ai" className="flex items-center gap-1 cursor-pointer focus:outline-none focus:ring-1 p-1">
            <SiOpenai className="h-3 w-3" />
            <span className="hidden md:inline">My-AI</span>
          </Link>
          <Link href="/about" className="flex items-center gap-1 cursor-pointer focus:outline-none focus:ring-1 p-1">
            <CIcon icon={cilEducation} className="h-3 w-3 text-white/80" />
            <span className="hidden md:inline">Education</span>
          </Link>
          <Link href="/contact" className="flex items-center gap-1 focus:outline-none focus:ring-1 p-1">
            <EnvelopeIcon className="h-3 w-3" />
            <span className="hidden md:inline">Contact</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
