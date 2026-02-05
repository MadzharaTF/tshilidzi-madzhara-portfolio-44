
import React, { useState } from 'react';
import { PROJECTS, SKILLS, PERSONAL_INFO, CAREER_HISTORY } from './constants';
import { Project } from './types';
import ProjectSlideshow from './components/ProjectSlideshow';
import ProjectCard from './components/ProjectCard';
import CapstoneShowcase from './components/CapstoneShowcase';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [copied, setCopied] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Core', href: '#home' },
    { name: 'Capstone', href: '#capstone' },
    { name: 'Analytics', href: '#projects' },
    { name: 'Expertise', href: '#skills' },
    { name: 'History', href: '#career' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadResume = (e: React.MouseEvent) => {
    e.preventDefault();
    
    const resumeHTML = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Resume - ${PERSONAL_INFO.name}</title>
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
          <style>
              :root { --primary: #0ea5e9; --text: #1e293b; --light: #64748b; }
              body { font-family: 'Inter', sans-serif; line-height: 1.5; color: var(--text); margin: 0; padding: 40px; background: #f8fafc; }
              .page { background: white; max-width: 850px; margin: auto; padding: 60px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); border-radius: 4px; position: relative; overflow: hidden; }
              .page::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 6px; background: var(--primary); }
              header { margin-bottom: 40px; }
              h1 { margin: 0; color: #0f172a; font-size: 32px; font-weight: 800; letter-spacing: -0.02em; }
              .role { color: var(--primary); font-weight: 600; font-size: 18px; margin-top: 4px; }
              .contact { display: flex; flex-wrap: wrap; gap: 20px; font-size: 13px; color: var(--light); margin-top: 15px; border-top: 1px solid #f1f5f9; padding-top: 15px; }
              .section { margin-bottom: 35px; }
              h2 { font-size: 13px; text-transform: uppercase; color: var(--primary); font-weight: 700; border-bottom: 2px solid #e0f2fe; padding-bottom: 8px; margin-bottom: 18px; letter-spacing: 0.1em; }
              .job { margin-bottom: 25px; }
              .job-header { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 6px; }
              .job-title { font-weight: 700; font-size: 15px; color: #0f172a; }
              .company { font-weight: 500; color: var(--primary); font-size: 14px; }
              .period { color: var(--light); font-size: 12px; font-weight: 500; }
              ul { padding-left: 18px; margin: 8px 0; list-style-type: square; }
              li { margin-bottom: 6px; font-size: 13px; color: #475569; }
          </style>
      </head>
      <body>
          <div class="page">
              <header>
                  <h1>${PERSONAL_INFO.name}</h1>
                  <div class="role">${PERSONAL_INFO.role}</div>
                  <div class="contact">
                      <span>${PERSONAL_INFO.email}</span>
                      <span>${PERSONAL_INFO.phone || '0677218406'}</span>
                      <span>${PERSONAL_INFO.location}</span>
                  </div>
              </header>
              <div class="section">
                  <h2>Expert Summary</h2>
                  <p style="font-size: 14px; color: #475569;">${PERSONAL_INFO.bio}</p>
              </div>
              <div class="section">
                  <h2>Technical Matrix</h2>
                  <p style="font-size: 13px; color: #475569;">${SKILLS.map(s => s.category + ": " + s.items.map(i => i.name).join(', ')).join(' | ')}</p>
              </div>
              <div class="section">
                  <h2>Core Experience</h2>
                  ${CAREER_HISTORY.map(exp => `
                      <div class="job">
                          <div class="job-header">
                              <span class="job-title">${exp.role}</span>
                              <span class="period">${exp.period}</span>
                          </div>
                          <div class="company">${exp.company}</div>
                          <ul>${exp.description.map(b => `<li>${b}</li>`).join('')}</ul>
                      </div>
                  `).join('')}
              </div>
          </div>
      </body>
      </html>
    `;

    const blob = new Blob([resumeHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${PERSONAL_INFO.name.replace(/\s+/g, '_')}_DataAnalyst_CV.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen selection:bg-cyan-500 selection:text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 font-black text-xl tracking-tighter cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]">F</div>
            <span className="tracking-tighter uppercase font-mono text-sm">FAITH<span className="text-cyan-400">.</span>ANALYSIS</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-cyan-400 transition-colors uppercase tracking-[0.2em] text-[10px] font-black"
              >
                {link.name}
              </a>
            ))}
            <a href="#" onClick={downloadResume} className="text-cyan-400 hover:text-cyan-300 transition-colors font-black flex items-center gap-2 group uppercase tracking-[0.2em] text-[10px]">
              <i className="fa-solid fa-cloud-arrow-down text-xs"></i> EXPORT_CV
            </a>
            <div className="flex items-center gap-4 pl-4 border-l border-white/10">
              <a href={PERSONAL_INFO.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                <i className="fa-brands fa-linkedin text-lg"></i>
              </a>
              <button 
                onClick={copyEmail}
                className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all text-[10px] font-black uppercase tracking-widest shadow-[0_0_20px_rgba(37,99,235,0.2)]"
              >
                {copied ? 'ACKNOWLEDGED' : 'CONNECT'}
              </button>
            </div>
          </div>

          <button className="md:hidden text-2xl text-slate-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-code-branch'}`}></i>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="pt-48 pb-20 px-6 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-900/30 text-cyan-400 text-[10px] font-black border border-cyan-500/20 mb-8 uppercase tracking-[0.3em]">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                AUTONOMOUS DATA ARCHITECT
              </div>
              <h1 className="text-6xl lg:text-9xl font-black mb-10 tracking-tighter leading-[0.8] uppercase">
                {PERSONAL_INFO.name.split(' ')[0]} <br/> 
                <span className="text-blue-500">{PERSONAL_INFO.name.split(' ').slice(1).join(' ')}</span>
              </h1>
              
              <div className="bg-slate-900/40 border border-slate-800 p-4 rounded-md mb-12 flex items-center justify-between max-w-sm backdrop-blur-md mono border-l-4 border-l-cyan-500">
                <div className="flex items-center gap-3 overflow-hidden">
                  <span className="text-cyan-400 font-bold">>_</span>
                  <span className="text-[11px] truncate text-slate-300 lowercase">{PERSONAL_INFO.email}</span>
                </div>
                <button onClick={copyEmail} className="ml-4 p-2 hover:bg-slate-800 rounded text-slate-400 hover:text-white transition-all">
                  <i className={`fa-solid ${copied ? 'fa-check text-cyan-400' : 'fa-copy'}`}></i>
                </button>
              </div>

              <div className="flex flex-wrap gap-6">
                <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')} className="px-12 py-6 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-lg transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)] flex items-center gap-4 uppercase tracking-[0.2em] text-xs">
                  INSPECT_PORTFOLIO <i className="fa-solid fa-arrow-down-long"></i>
                </a>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-lg blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
              <div className="relative bg-slate-950/60 backdrop-blur-2xl border border-white/5 rounded-2xl p-12 lg:p-16 shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-3xl pointer-events-none"></div>
                
                <div className="flex gap-2 mb-10 opacity-40">
                  <div className="w-3 h-3 rounded-full bg-slate-800"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-800"></div>
                  <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
                </div>
                <p className="text-2xl text-slate-100 leading-tight font-black mb-10 tracking-tight uppercase italic">
                  Systems <span className="text-cyan-400">&</span> Logic
                </p>
                <p className="text-lg text-slate-400 leading-relaxed font-medium mb-10 mono text-justify">
                  {PERSONAL_INFO.bio}
                </p>
                <div className="pt-8 border-t border-white/5">
                  <p className="text-[10px] text-cyan-400/60 font-black uppercase tracking-[0.4em] mono">
                    CORE_INITIALIZED: TRUE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Dashboard */}
      <section className="px-6 py-20 relative">
        <div className="max-w-7xl mx-auto">
          <ProjectSlideshow projects={PROJECTS} onViewDetails={setSelectedProject} />
        </div>
      </section>

      {/* Capstone Showcase */}
      <CapstoneShowcase />

      {/* Projects Grid */}
      <section id="projects" className="px-6 py-32 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-6xl font-black uppercase tracking-tighter mb-4">Tactical <span className="text-cyan-400">Analysis</span></h2>
            <div className="flex flex-col gap-2">
              <p className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.5em]">// DATA_INGESTION_MODULE_4.0</p>
              <a 
                href="https://arena-berry-21220384.figma.site/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-400/40 hover:text-cyan-400 font-mono text-[9px] uppercase tracking-[0.3em] transition-colors flex items-center gap-2 group"
              >
                <i className="fa-brands fa-figma group-hover:animate-pulse"></i> [ACCESS_INTERFACE_URL]
              </a>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {PROJECTS.map(project => (
              <ProjectCard key={project.id} project={project} onViewDetails={setSelectedProject} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Matrix */}
      <section id="skills" className="px-6 py-32 bg-slate-950/60 backdrop-blur-md scroll-mt-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-8xl font-black mb-6 uppercase tracking-tighter">Stack <span className="text-cyan-400">Matrix</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SKILLS.map(skillGroup => (
              <div key={skillGroup.category} className="bg-slate-900/40 border border-white/5 p-12 rounded-lg hover:border-cyan-500/40 transition-all group">
                <h3 className="text-[10px] font-mono text-cyan-400 mb-12 uppercase tracking-[0.4em] font-black border-b border-cyan-500/10 pb-6">
                  {skillGroup.category}
                </h3>
                <div className="space-y-12">
                  {skillGroup.items.map(skill => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-[10px] mb-4 mono font-black">
                        <span className="text-slate-300 uppercase">{skill.name}</span>
                        <span className="text-cyan-400/40">{skill.level}%</span>
                      </div>
                      <div className="h-0.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-cyan-500 transition-all duration-1000 ease-out group-hover:bg-cyan-300 shadow-[0_0_8px_rgba(6,182,212,0.4)]" style={{ width: `${skill.level}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="career" className="px-6 py-32 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-24 uppercase tracking-tighter text-center">Historical <span className="text-cyan-400">Log</span></h2>
          <div className="space-y-16 max-w-5xl mx-auto">
            {CAREER_HISTORY.map((exp, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-10 border-l-2 border-slate-800 pl-10 relative">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.6)]"></div>
                <div className="md:w-1/4">
                  <time className="font-mono text-[11px] font-black text-cyan-400 tracking-widest">{exp.period}</time>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-black text-white uppercase mb-2 tracking-tight">{exp.role}</h3>
                  <div className="text-blue-400 font-bold mb-6 text-sm mono uppercase tracking-widest">{exp.company}</div>
                  <ul className="space-y-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm text-slate-400 leading-relaxed flex gap-4">
                        <span className="text-cyan-600 text-[10px] mt-1.5"><i className="fa-solid fa-chevron-right"></i></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-32 px-6 border-t border-white/5 bg-slate-950/90">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-20">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 font-black text-3xl mb-8 justify-center md:justify-start">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-2xl shadow-blue-600/30">F</div>
              <span className="uppercase tracking-tighter">FAITH<span className="text-cyan-400">.</span>ANALYSIS</span>
            </div>
            <p className="text-slate-500 text-[11px] font-mono uppercase tracking-[0.5em]">{PERSONAL_INFO.email}</p>
          </div>
          <div className="flex gap-6">
            <a href={PERSONAL_INFO.social.github} target="_blank" className="w-16 h-16 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center hover:bg-blue-600 hover:scale-105 transition-all text-white text-2xl shadow-xl">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href={PERSONAL_INFO.social.linkedin} target="_blank" className="w-16 h-16 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center hover:bg-blue-600 hover:scale-105 transition-all text-white text-2xl shadow-xl">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-32 pt-12 border-t border-white/5 text-center">
          <p className="text-[9px] font-mono text-slate-700 uppercase tracking-[0.6em]">2025 Faith Madzhara • Architecting Autonomous Solutions • RSA_SOUTH_AFRICA</p>
        </div>
      </footer>

      {/* Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
          <div className="absolute inset-0 bg-slate-950/98 backdrop-blur-3xl" onClick={() => setSelectedProject(null)}></div>
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden bg-slate-900 border border-white/10 rounded-2xl shadow-2xl flex flex-col animate-in zoom-in duration-300">
             <div className="flex items-center justify-between p-8 border-b border-white/5 bg-slate-900/50">
              <div>
                <span className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.4em] mb-2 block">{selectedProject.category}</span>
                <h3 className="text-3xl font-black uppercase tracking-tighter">{selectedProject.title}</h3>
              </div>
              <button onClick={() => setSelectedProject(null)} className="p-3 hover:bg-white/5 rounded-full transition-colors text-slate-400 hover:text-white">
                <i className="fa-solid fa-xmark text-2xl"></i>
              </button>
            </div>
            <div className="flex-grow overflow-y-auto p-10 space-y-12">
               <section>
                  <h4 className="text-[11px] font-black text-cyan-400 uppercase tracking-widest mb-6">Technical Architecture</h4>
                  <div className="bg-black/40 p-8 rounded-xl border border-white/5 mono text-blue-300/80 leading-relaxed text-sm">
                    {selectedProject.documentation.architecture}
                  </div>
                </section>
                <div className="grid md:grid-cols-2 gap-10">
                  <section>
                    <h4 className="text-[11px] font-black text-cyan-400 uppercase tracking-widest mb-6">System Overview</h4>
                    <p className="text-slate-300 leading-relaxed text-sm font-medium">{selectedProject.longDescription}</p>
                  </section>
                  <section>
                    <h4 className="text-[11px] font-black text-cyan-400 uppercase tracking-widest mb-6">Verified Results</h4>
                    <p className="text-cyan-400/80 font-mono text-sm leading-relaxed">{selectedProject.documentation.results}</p>
                  </section>
                </div>
            </div>
            <div className="p-8 border-t border-white/5 bg-slate-950/50 flex justify-end gap-4">
               <a href={selectedProject.demoUrl} target="_blank" className="px-8 py-3 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-lg hover:bg-blue-700 transition-all">DECRYPT_LIVE_DEMO</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
