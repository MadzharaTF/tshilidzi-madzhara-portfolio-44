
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const CapstoneShowcase: React.FC = () => {
  return (
    <section id="capstone" className="px-6 py-32 bg-slate-950 scroll-mt-24 border-y border-white/5 relative overflow-hidden">
      {/* Decorative Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 blur-[140px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-blue-500/10 text-cyan-400 text-[10px] font-black border border-cyan-500/20 mb-10 uppercase tracking-[0.4em]">
          <i className="fa-solid fa-microchip"></i>
          CORE_ARCHITECTURE_LOG
        </div>
        <h2 className="text-5xl md:text-8xl font-black mb-10 uppercase tracking-tighter leading-none italic">
          RSA <span className="text-blue-500">SENTINEL</span>
        </h2>
        <p className="text-xl text-slate-300 mb-16 leading-relaxed max-w-2xl mx-auto font-medium">
          Sentinel is a high-resolution autonomous safety platform, synthesized for urban navigation and real-time biometric situational awareness.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16 text-left">
          <div className="p-10 rounded-2xl bg-slate-900/30 backdrop-blur-xl border border-white/5 hover:border-cyan-500/30 transition-all group">
            <div className="w-16 h-16 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-cyan-400 mb-8 group-hover:scale-110 transition-transform shadow-2xl shadow-blue-500/10">
              <i className="fa-solid fa-wave-square text-2xl"></i>
            </div>
            <h4 className="font-black text-white text-xl mb-4 uppercase tracking-tighter">Biometric Synthesis</h4>
            <p className="text-sm text-slate-400 leading-relaxed font-medium">Multi-modal enrollment protocols for high-integrity identification within dense metropolitan sectors.</p>
          </div>
          <div className="p-10 rounded-2xl bg-slate-900/30 backdrop-blur-xl border border-white/5 hover:border-cyan-500/30 transition-all group">
            <div className="w-16 h-16 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-cyan-400 mb-8 group-hover:scale-110 transition-transform shadow-2xl shadow-blue-500/10">
              <i className="fa-solid fa-radar text-2xl"></i>
            </div>
            <h4 className="font-black text-white text-xl mb-4 uppercase tracking-tighter">Tactical Telemetry</h4>
            <p className="text-sm text-slate-400 leading-relaxed font-medium">Real-time situational mapping and responder routing, optimized for zero-latency urban oversight.</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-16">
          <a 
            href="https://drive.google.com/file/d/1aS8nSBP7-EXRGPF3VZc4iWmeSmNErGC3/view?usp=sharing" 
            target="_blank" rel="noopener noreferrer"
            className="px-12 py-6 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-lg transition-all shadow-2xl shadow-blue-600/30 flex items-center gap-4 uppercase tracking-[0.2em] text-[10px]"
          >
            TECHNICAL_DOCS <i className="fa-solid fa-code-commit text-[9px]"></i>
          </a>
          <a 
            href="https://rsa-agent.vercel.app/" 
            target="_blank" rel="noopener noreferrer"
            className="px-12 py-6 border border-slate-800 hover:bg-slate-900 text-white font-black rounded-lg transition-all flex items-center gap-4 uppercase tracking-[0.2em] text-[10px]"
          >
            LIVE_DEPLOYMENT <i className="fa-solid fa-bolt-lightning text-[9px]"></i>
          </a>
        </div>

        <div className="bg-blue-950/20 border border-blue-500/10 p-10 rounded-2xl italic text-lg text-blue-100/70 leading-relaxed border-l-8 border-l-cyan-500 mono">
           "Integrating validated tactical hubs for high-integrity safety routing during critical urban operations."
        </div>
      </div>
    </section>
  );
};

export default CapstoneShowcase;
