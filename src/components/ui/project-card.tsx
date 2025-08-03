// components/project-card.tsx
"use client";
import React from "react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tech,
  github,
  live,
  image,
}) => (
  <div className="bg-neutral-900 border border-white/10 rounded-2xl shadow-xl p-6 flex flex-col transition hover:border-blue-500">
    {/* Image */}
    <Image
      src={image}
      alt={title}
      className="rounded-lg mb-4 object-cover h-[300px] w-full border border-white/10"
      width={500}
      height={300}
    />
    {/* Title */}
    <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
    {/* Tech Badges */}
    <div className="flex flex-wrap gap-2 mb-4">
      {tech.map((t) => (
        <span
          key={t}
          className="bg-stone-700/40 text-blue-500 px-2 py-1.5 rounded text-xs font-medium"
        >
          {t}
        </span>
      ))}
    </div>
    {/* Description */}
    <p className="text-gray-300 text-sm mb-4">{description}</p>
    {/* Links */}
    <div className="flex gap-4 mt-auto justify-center">
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 font-medium bg-stone-700/40 px-4 py-2 rounded hover:bg-blue-500/10 transition-colors"
        >
          Code
        </a>
      )}
      {live && (
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 font-medium"
        >
          Live
        </a>
      )}
    </div>
  </div>
);

export default ProjectCard;
