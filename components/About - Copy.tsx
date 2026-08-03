
import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const About: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const revealRef = useScrollReveal();

  return (
    <section id="about" className={`py-40 px-6 relative overflow-hidden ${isDarkMode ? 'bg-[#000000]' : 'bg-slate-50'}`}>
      <div className={`absolute top-0 left-0 w-full h-px ${isDarkMode ? 'bg-gradient-to-r from-transparent via-white/10 to-transparent' : 'bg-gradient-to-r from-transparent via-black/10 to-transparent'}`}></div>
      
      <div ref={revealRef} className="max-w-7xl mx-auto fade-in-up">
        <div className="flex flex-col md:flex-row gap-20 items-center">
          <div className="w-full md:w-5/12">
            <div className="relative group">
              <div className={`absolute -inset-4 ${isDarkMode ? 'bg-white' : 'bg-black'} opacity-5 blur-3xl rounded-[3rem] transition-opacity group-hover:opacity-10`}></div>
              <div className={`relative aspect-square rounded-full overflow-hidden shadow-2xl border transition-all duration-700 hover:-translate-y-2 ${isDarkMode ? 'border-white/10 bg-black/40' : 'border-black/5 bg-white'}`}>
                <img
                  src="/Suv.jpg"
                  alt="Suvin Brettlee Roy B Profile"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 grayscale contrast-125 brightness-75 hover:grayscale-0 hover:contrast-100 hover:brightness-100"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${isDarkMode ? 'from-black/50' : 'from-white/50'} via-transparent to-transparent opacity-30 group-hover:opacity-0 transition-opacity duration-700`}></div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-7/12 space-y-10">
            <div className="space-y-4">
              <span className={`${isDarkMode ? 'text-white/40' : 'text-slate-400'} font-black uppercase tracking-[0.4em] text-xs shimmer`}>A Bit About Me</span>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-glow">Beyond the Code</h2>
            </div>
            
            <div className={`space-y-8 text-xl md:text-2xl font-light leading-relaxed ${isDarkMode ? 'text-white/70' : 'text-slate-600'}`}>
              <p className={`font-bold text-3xl md:text-4xl ${isDarkMode ? 'text-white' : 'text-black'}`}>
                I'm a third-year Computer Science and Engineering student specializing in Artificial Intelligence and Data Science.
              </p>
              <p>
                My journey is fueled by a relentless passion for <strong>data analytics, machine learning, and full-stack engineering</strong>. I don't just build software; I create intelligent experiences that solve real-world complexities.
              </p>
              <p>
                Currently, I'm bridging the gap between theoretical AI and practical, high-impact user interfaces, always pushing for the perfect balance of form and function.
              </p>
              
              <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                 {[
                   { label: 'Focus', val: 'AI & ML | Data Analyst' },
                   { label: 'Domain', val: 'AI Automation and Full Stack' },
                   { label: 'Degree', val: 'B.Tech CSE (AI&DS)' }
                 ].map((stat, i) => (
                   <div key={i} className={`p-8 min-h-[210px] rounded-[2rem] border transition-all border-glow hover:scale-105 ${isDarkMode ? 'bg-white/5 border-white/10 hover:border-white/50' : 'bg-white border-black/5 shadow-xl hover:border-black/30'}`}>
                      <div className="text-[10px] opacity-40 uppercase tracking-[0.3em] font-black mb-2">{stat.label}</div>
                      <div className="text-xl font-black">{stat.val}</div>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
