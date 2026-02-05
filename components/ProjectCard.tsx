
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onViewDetails: (p: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewDetails }) => {
  const isTalu = project.title.toLowerCase().includes('talu');

  return (
    <div className={`bg-slate-900/40 backdrop-blur-xl border ${isTalu ? 'border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.05)]' : 'border-white/5'} rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all group flex flex-col relative`}>
      {isTalu && (
        <div className="absolute top-0 right-0 p-4 overflow-hidden pointer-events-none opacity-20 group-hover:opacity-60 transition-opacity">
          <div className="text-[9px] font-mono text-cyan-400 animate-pulse whitespace-nowrap rotate-12">
            NEURAL_CORE::ONLINE<br/>
            DATA_RAIN_ACTIVE<br/>
            AUTH::VERIFIED<br/>
            SYSCALL::OK
          </div>
        </div>
      )}
      
      <div className="h-56 overflow-hidden relative block">
        <img 
          src={project.images[0]} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100"
        />
        <div className={`absolute top-6 left-6 ${isTalu ? 'bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.4)]' : 'bg-slate-800'} text-white text-[9px] font-black px-3 py-1.5 rounded uppercase tracking-widest backdrop-blur-md`}>
          {project.category}
        </div>
      </div>
      
      <div className="p-10 flex-grow flex flex-col">
        <h3 className={`text-2xl font-black mb-4 text-white uppercase tracking-tighter group-hover:text-cyan-400 transition-colors ${isTalu ? 'tracking-widest italic' : ''}`}>
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm mb-10 leading-relaxed font-medium line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-10">
          {project.techStack.map(tech => (
            <span key={tech} className="text-[9px] font-mono bg-white/5 text-slate-300 px-3 py-1 rounded-md border border-white/5">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-8 flex items-center justify-between border-t border-white/5">
          <button 
            onClick={() => onViewDetails(project)}
            className="text-cyan-400 text-[10px] font-black uppercase tracking-widest hover:text-cyan-200 flex items-center gap-2 transition-all"
          >
            VIEW_SPECS <i className="fa-solid fa-arrow-right-long text-xs"></i>
          </button>
          <div className="flex gap-5">
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-500 hover:text-cyan-400 transition-colors"
              title="Repository"
            >
              <i className="fa-brands fa-github text-xl"></i>
            </a>
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-500 hover:text-cyan-400 transition-colors"
              title="Live Link"
            >
              <i className="fa-solid fa-satellite-dish text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
