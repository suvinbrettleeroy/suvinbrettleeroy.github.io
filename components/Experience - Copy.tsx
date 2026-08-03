
import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const Experience: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const revealRef = useScrollReveal();

  const experiences = [
    {
      id: 'shiash',
      year: 'Aug 2024 – Nov 2024',
      role: 'Machine Learning Intern',
      company: 'Shiash Info Solutions',
      location: 'Onsite',
      desc: 'Applied machine learning techniques to real-world image datasets with focus on model development and evaluation.',
      contributions: [
        'Built image classification models using supervised learning.',
        'Preprocessed datasets with resizing and augmentation.',
        'Implemented models using TensorFlow and Scikit-learn.',
        'Evaluated performance using confusion matrices.'
      ],
      tech: ['Python', 'TensorFlow', 'ML', 'Scikit-learn'],
      color: isDarkMode ? 'from-white/30 to-white/10' : 'from-black/20 to-black/10'
    },
    {
      id: 'plasmid',
      year: 'Mar 2024 – May 2024',
      role: 'AI Intern',
      company: 'Plasmid',
      location: 'Online',
      desc: 'Worked on unsupervised learning and classification projects improving model accuracy and reliability.',
      contributions: [
        'Implemented K-Means clustering for pattern analysis.',
        'Developed a Spam vs Not Spam classification model.',
        'Performed feature extraction and text vectorization.',
        'Improved model accuracy through normalization.'
      ],
      tech: ['AI', 'K-Means', 'Python', 'Classification'],
      color: isDarkMode ? 'from-white/20 to-white/5' : 'from-black/15 to-black/5'
    },
    {
      id: 'hdlc',
      year: 'June 2025 – June 2025',
      role: 'Web Development Intern',
      company: 'HDLC Info Technologies',
      location: 'Onsite',
      desc: 'Worked on real-world full-stack projects using Ruby on Rails and ERB, building dynamic and scalable applications.',
      contributions: [
        'Mini Project: Developed a dynamic personal portfolio website using ERB templates and Rails MVC.',
        'Major Project: Built a scalable online application form system for institutional use.',
        'Implemented user authentication, email confirmation, and secure document upload.',
        'Enabled admin workflows for reviewing submissions and generating reports.'
      ],
      tech: ['RoR', 'ERB', 'JS', 'Xampp', 'SQL'],
      color: isDarkMode ? 'from-white/10 to-transparent' : 'from-black/10 to-transparent'
    }
  ];

  return (
    <section id="experience" className={`py-32 px-6 overflow-hidden ${isDarkMode ? 'bg-[#000000]' : 'bg-slate-50'}`}>
      <div ref={revealRef} className="max-w-7xl mx-auto fade-in-up">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-glow">Internship Experience</h2>
          <div className={`w-24 h-1.5 ${isDarkMode ? 'bg-white' : 'bg-black'} mx-auto rounded-full opacity-20 pulse-glow`}></div>
          <p className="mt-8 text-lg opacity-60 max-w-2xl mx-auto font-medium">
            Professional industry exposure spanning Machine Learning, AI Research, and Full-Stack Development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, idx) => (
            <div 
              key={idx} 
              style={{ transitionDelay: `${idx * 150}ms` }}
              className={`stagger-card group relative p-8 rounded-[2.5rem] border transition-all duration-500 hover:-translate-y-4 border-glow ${
                isDarkMode 
                ? 'bg-[#121212]/80 border-white/5 backdrop-blur-xl hover:border-white/20 shadow-2xl' 
                : 'bg-white border-black/5 shadow-xl hover:border-black/20'
              }`}
            >
              <div className="mb-8">
                <div className={`inline-block px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 bg-gradient-to-r ${exp.color} ${isDarkMode ? 'text-white' : 'text-black'} shadow-sm`}>
                  {exp.year}
                </div>
                <h3 className={`text-2xl font-black mb-1 group-hover:${isDarkMode ? 'text-white' : 'text-black'} transition-colors`}>
                  {exp.role}
                </h3>
                <div className="flex items-center gap-2 opacity-60 font-bold text-sm uppercase tracking-wider">
                  <span>{exp.company}</span>
                  <span className="w-1 h-1 rounded-full bg-current"></span>
                  <span>{exp.location}</span>
                </div>
              </div>

              <div className="space-y-4 mb-10">
                {exp.contributions.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex gap-3 items-start">
                    <div className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${isDarkMode ? 'bg-white/40' : 'bg-black/40'}`}></div>
                    <p className="text-sm opacity-70 leading-relaxed font-medium">
                      {bullet}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-6 border-t border-current/5">
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t, tIdx) => (
                    <span 
                      key={tIdx} 
                      className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-tighter ${
                        isDarkMode ? 'bg-white/5 text-white/60' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`absolute -bottom-10 -right-10 w-32 h-32 ${isDarkMode ? 'bg-white' : 'bg-black'} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
