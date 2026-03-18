
import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const Skills: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const revealRef = useScrollReveal();

  const skillGroups = [
    {
      title: 'Programming',
      skills: [
        { name: 'Python', value: 95 },
        { name: 'C / C++', value: 75 },
        { name: 'SQL', value: 85 },
        { name: 'JavaScript', value: 70 }
      ]
    },
    {
      title: 'Data Science',
      skills: [
        { name: 'Data Analysis', value: 92 },
        { name: 'Machine Learning', value: 88 },
        { name: 'TensorFlow', value: 55 },
        { name: 'Pandas', value: 90 }
      ]
    },
    {
      title: 'Web Dev',
      skills: [
        { name: 'React.js', value: 80 },
        { name: 'Node.js', value: 65 },
        { name: 'HTML/CSS', value: 95 },
        { name: 'Flask', value: 70 }
      ]
    },
    {
      title: 'Architecture',
      skills: [
        { name: 'System Design', value: 75 },
        { name: 'Git/GitHub', value: 85 },
        { name: 'Power BI', value: 80 },
        { name: 'Jupyter', value: 95 }
      ]
    }
  ];

  return (
    <section id="skills" className={`py-40 px-6 ${isDarkMode ? 'bg-[#000000]' : 'bg-white'}`}>
      <div ref={revealRef} className="max-w-7xl mx-auto fade-in-up">
        <div className="text-center mb-32">
          <span className={`${isDarkMode ? 'text-white/40' : 'text-slate-400'} font-black uppercase tracking-[0.4em] text-xs shimmer`}>Capabilities</span>
          <h2 className="text-5xl md:text-7xl font-black mt-4 mb-6 tracking-tighter text-glow">Technical Arsenal</h2>
          <div className={`w-20 h-1 ${isDarkMode ? 'bg-white' : 'bg-black'} mx-auto rounded-full pulse-glow`}></div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {skillGroups.map((group, idx) => (
            <div 
              key={idx} 
              style={{ transitionDelay: `${idx * 150}ms` }}
              className={`stagger-card group p-10 rounded-[3rem] border transition-all duration-700 hover:-translate-y-4 border-glow ${
                isDarkMode 
                ? 'bg-white/[0.03] border-white/5 hover:border-white/30' 
                : 'bg-white border-black/5 shadow-2xl hover:border-black/30'
              }`}
            >
              <h3 className="text-2xl font-black mb-12 flex items-center justify-between">
                {group.title}
                <span className={`w-8 h-8 rounded-full ${isDarkMode ? 'bg-white/10' : 'bg-black/10'} flex items-center justify-center`}>
                   <div className={`w-1.5 h-1.5 ${isDarkMode ? 'bg-white' : 'bg-black'} rounded-full`}></div>
                </span>
              </h3>
              
              <div className="space-y-10">
                {group.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-4">
                    <div className="flex justify-between items-end">
                      <span className="text-sm font-bold opacity-80">{skill.name}</span>
                      <span className={`text-[10px] font-black ${isDarkMode ? 'text-white' : 'text-black'}`}>{skill.value}%</span>
                    </div>
                    <div className={`h-1 w-full rounded-full overflow-hidden ${isDarkMode ? 'bg-white/5' : 'bg-slate-100'}`}>
                      <div 
                        className={`h-full ${isDarkMode ? 'bg-white shadow-[0_0_10px_rgba(255,255,255,0.4)]' : 'bg-black shadow-[0_0_10px_rgba(0,0,0,0.2)]'} rounded-full transition-all duration-[1.5s] ease-out`}
                        style={{ 
                          width: revealRef.current?.classList.contains('visible') ? `${skill.value}%` : '0%',
                          transitionDelay: `${(idx * 200) + (sIdx * 100)}ms` 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
