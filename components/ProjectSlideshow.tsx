
import React, { useState, useEffect } from 'react';
import { Project } from '../types';

interface ProjectSlideshowProps {
  projects: Project[];
  onViewDetails: (p: Project) => void;
}

const ProjectSlideshow: React.FC<ProjectSlideshowProps> = ({ projects, onViewDetails }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [projects.length]);

  const currentProject = projects[currentIndex];

  return (
    <div className="relative w-full h-[600px] overflow-hidden rounded-2xl border border-white/10 bg-black group shadow-2xl">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 transform scale-110 group-hover:scale-105"
        style={{ backgroundImage: `url(${currentProject.images[0]})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full p-10 md:p-20 max-w-2xl">
        <div className="flex items-center gap-3 mb-6">
           <span className="w-10 h-1 bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.6)]"></span>
           <span className="text-cyan-400 font-mono text-[10px] font-black tracking-[0.4em] uppercase">
            {currentProject.category}
          </span>
        </div>
        <h2 className="text-5xl md:text-7xl font-black mb-8 text-white uppercase tracking-tighter leading-none italic">
          {currentProject.title}
        </h2>
        <p className="text-slate-400 text-lg mb-12 leading-relaxed font-medium">
          {currentProject.description}
        </p>
        
        <div className="flex gap-6">
          <a 
            href={currentProject.demoUrl}
            target="_blank"
            className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-lg transition-all shadow-xl shadow-blue-600/30 uppercase tracking-widest text-[10px]"
          >
            BOOT_DEMO
          </a>
          <button 
            onClick={() => onViewDetails(currentProject)}
            className="px-10 py-5 border border-white/10 hover:bg-white/5 text-white font-black rounded-lg transition-all uppercase tracking-widest text-[10px]"
          >
            INSPECT_LOGS
          </button>
        </div>
      </div>

      {/* Navigation Indicators */}
      <div className="absolute bottom-10 right-10 flex gap-4 z-20">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1 transition-all duration-500 rounded-full ${
              idx === currentIndex ? 'bg-cyan-500 w-16 shadow-[0_0_10px_rgba(6,182,212,0.8)]' : 'bg-white/10 w-8 hover:bg-white/20'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSlideshow;
