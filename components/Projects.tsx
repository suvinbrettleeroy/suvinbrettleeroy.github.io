
import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const Projects: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const revealRef = useScrollReveal();

  const projects = [
    {
      title: 'FARM-AI: Smart Agriculture',
      type: 'AI & Full Stack • 2025',
      desc: 'An end-to-end intelligent recommendation engine leveraging soil parameters and historical weather patterns to optimize crop yields through precision farming algorithms.',
      initials: 'F-AI',
      grad: isDarkMode ? 'from-white/10 via-white/5 to-transparent' : 'from-black/10 via-black/5 to-transparent',
      tags: ['Python', 'Machine Learning', 'Flask', 'React'],
      link: '/FARM-AI.pdf',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: 'PATHGUIDE: Smart Navigation & Assistance System',
      type: 'AI & Full Stack • 2025',
      desc: 'An intelligent navigation and guidance system designed to provide real-time path recommendations using location data, user preferences, and environmental conditions. PathGuide enhances travel efficiency by delivering optimized routes, safety insights, and voice-based assistance.',
      initials: 'PG',
      grad: isDarkMode ? 'from-white/15 via-white/5 to-transparent' : 'from-black/15 via-black/5 to-transparent',
      tags: ['Python', 'Machine Learning', 'Flask', 'React', 'GPS APIs'],
      link: '#',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2a7 7 0 017 7c0 4.5-7 13-7 13S5 13.5 5 9a7 7 0 017-7zm0 10a3 3 0 100-6 3 3 0 000 6z" />
        </svg>
      )
    },
    {
      title: 'Image Classification System',
      type: 'Machine Learning • 2024',
      desc: 'Advanced CNN-based architecture designed for high-accuracy categorical identification. Features an automated data augmentation pipeline and real-time inference capabilities.',
      initials: 'ICS',
      grad: isDarkMode ? 'from-white/20 via-white/10 to-transparent' : 'from-black/15 via-black/5 to-transparent',
      tags: ['TensorFlow', 'NumPy', 'OpenCV', 'Keras'],
      link: '#',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Tourist Budget Planner',
      type: 'Desktop Application • 2025',
      desc: 'A sophisticated trip itinerary generator that harmonizes user financial parameters with destination metadata to curate optimized travel experiences.',
      initials: 'TBP',
      grad: isDarkMode ? 'from-white/5 via-white/2 to-transparent' : 'from-black/5 via-black/2 to-transparent',
      tags: ['Python', 'Tkinter', 'JSON', 'Algorithm'],
      link: '/SMART-TRAVEL-PLANNER.pptx',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0121 18.382V7.618a1 1-0 01-1.447-.894L15 4m0 13V4m0 4L9 7" />
        </svg>
      )
    }
  ];

  return (
    <section id="projects" className={`py-32 px-6 transition-colors duration-700 ${isDarkMode ? 'bg-[#000000]' : 'bg-slate-50'}`}>
      <div ref={revealRef} className="max-w-7xl mx-auto fade-in-up">
        <div className="flex flex-col items-center text-center mb-24">
          <span className={`font-black uppercase tracking-[0.3em] text-xs mb-4 shimmer ${isDarkMode ? 'text-white/40' : 'text-slate-400'}`}>Portfolio Highlights</span>
          <h2 className={`text-5xl md:text-7xl font-black mb-8 text-glow ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Featured Projects
          </h2>
          <div className={`w-32 h-2 ${isDarkMode ? 'bg-white' : 'bg-black'} rounded-full mb-10 opacity-20`}></div>
          <p className="text-lg opacity-60 max-w-2xl font-medium leading-relaxed">
            A fusion of Artificial Intelligence, Data Engineering, and robust software architecture. 
            Each project represents a unique challenge solved with modern technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              style={{ transitionDelay: `${idx * 200}ms` }}
              className={`stagger-card group relative rounded-[3rem] overflow-hidden transition-all duration-700 hover:-translate-y-6 border-glow ${
                isDarkMode 
                ? 'bg-[#121212]/40 border border-white/5 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.7)] backdrop-blur-3xl' 
                : 'bg-white border border-black/5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)]'
              }`}
            >
              {/* Card Header Background - Grayscale */}
              <div className={`h-56 relative overflow-hidden bg-gradient-to-br ${project.grad} flex items-center justify-center p-12`}>
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className={`w-16 h-16 rounded-2xl ${isDarkMode ? 'bg-white/10' : 'bg-black/10'} backdrop-blur-md flex items-center justify-center border border-current/20 shadow-2xl transform group-hover:rotate-12 transition-transform duration-500`}>
                    {project.icon}
                  </div>
                  <span className={`text-5xl font-black tracking-tighter opacity-20 select-none transform group-hover:scale-110 transition-transform duration-1000 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                    {project.initials}
                  </span>
                </div>
              </div>

              {/* Card Content Area */}
              <div className="p-10 flex flex-col h-[calc(100%-14rem)]">
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className={`text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-xl transition-all duration-300 ${
                        isDarkMode 
                        ? 'bg-white/5 text-white/60 border border-white/5 group-hover:border-white/40' 
                        : 'bg-black/5 text-black/60 border border-black/10 group-hover:border-black/30'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mb-6">
                  <h3 className={`text-2xl font-black mb-2 transition-colors duration-300 ${isDarkMode ? 'text-white group-hover:text-white/80' : 'text-slate-900 group-hover:text-black'}`}>
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${isDarkMode ? 'bg-white' : 'bg-black'} opacity-40`}></span>
                    <p className="text-[10px] uppercase tracking-[0.25em] font-black opacity-30">
                      {project.type}
                    </p>
                  </div>
                </div>

                <p className="opacity-50 text-base leading-relaxed mb-10 line-clamp-3 font-medium">
                  {project.desc}
                </p>

                <div className="mt-auto flex items-center justify-between border-t border-current/5 pt-8">
                  <a 
                    href={project.link} 
                    className={`flex items-center gap-3 text-sm font-black uppercase tracking-widest group/btn transition-all ${
                      isDarkMode ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    <span>View Details</span>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border border-current/10 transition-all group-hover/btn:scale-110 ${isDarkMode ? 'bg-white text-black' : 'bg-black text-white'}`}>
                      <svg className="w-5 h-5 transform transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5-5 5M6 7l5 5-5 5" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>

              {/* Bottom Project Shadow Glow - Grayscale */}
              <div className={`absolute -bottom-20 -left-20 w-40 h-40 ${isDarkMode ? 'bg-white' : 'bg-black'} opacity-0 group-hover:opacity-10 blur-[80px] transition-opacity duration-700`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
