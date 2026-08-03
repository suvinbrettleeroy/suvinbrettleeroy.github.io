
import React, { useMemo, useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const Projects: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const revealRef = useScrollReveal();

  type ProjectDetail = {
    title: string;
    overview: string;
    problemStatement: string;
    keyFeatures: string[];
    technologiesUsed: string[];
    myRole: string[];
    outcome: string;
  };

  const projects = [
    {
      title: 'DeepTwinMed: AI-Powered Medical Education Platform',
      type: 'Generative AI • AI Agents • RAG',
      duration: 'Jul 2026 – Present',
      desc: 'An intelligent medical education platform that combines Generative AI, AI Agents, Retrieval-Augmented Generation (RAG), and Large Language Models to create personalized learning experiences, evaluate student performance, and provide AI-driven clinical guidance through an interactive digital twin ecosystem.',
      initials: 'DTM',
      grad: isDarkMode ? 'from-white/15 via-white/5 to-transparent' : 'from-black/15 via-black/5 to-transparent',
      tags: ['Generative AI', 'AI Agents', 'RAG', 'LLMs', 'Machine Learning', 'Deep Learning', 'Flask', 'React'],
      link: '#',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6M10 6h4m-7 14h10a2 2 0 002-2V6a2 2 0 00-2-2H9l-5 5v9a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'FARM-AI: Smart Agriculture',
      type: 'AI & Full Stack',
      duration: 'Jul 2025 – Nov 2025',
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
      type: 'AI & Full Stack',
      duration: 'Nov 2025 – Apr 2026',
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
      type: 'Machine Learning',
      duration: '2024',
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
      type: 'Desktop Application',
      duration: 'Jan 2025 – Apr 2025',
      desc: 'A travel planning application that helps users estimate travel expenses and organize trips efficiently while integrating weather information and destination details.',
      initials: 'TBP',
      grad: isDarkMode ? 'from-white/5 via-white/2 to-transparent' : 'from-black/5 via-black/2 to-transparent',
      tags: ['Python', 'Tkinter', 'JSON', 'Algorithm'],
      link: '#',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0121 18.382V7.618a1 1-0 01-1.447-.894L15 4m0 13V4m0 4L9 7" />
        </svg>
      )
    }
  ];

  const projectDetails: Record<string, ProjectDetail> = useMemo(() => ({
    'DeepTwinMed: AI-Powered Medical Education Platform': {
      title: 'DeepTwinMed: An Intelligent AI-Powered Digital Twin Platform for Personalized Medical Education',
      overview: 'DeepTwinMed is an AI-powered medical education platform designed to enhance the learning experience of medical students through intelligent technologies. The platform integrates Generative AI, AI Agents, Machine Learning, and Retrieval-Augmented Generation (RAG) to provide personalized learning, AI-assisted clinical reasoning, and performance evaluation. Its goal is to bridge the gap between theoretical medical education and real-world clinical practice by offering adaptive, data-driven learning support.',
      problemStatement: 'Traditional medical education often provides the same learning experience to every student, making it difficult to identify individual strengths and learning gaps. Students also receive limited personalized guidance and feedback during their academic journey.',
      keyFeatures: [
        'AI-powered personalized learning recommendations',
        'Digital Twin-based student performance tracking',
        'AI Agent for academic assistance',
        'Intelligent question-answering using RAG',
        'Clinical case simulation and reasoning support',
        'Student progress analytics dashboard',
        'Personalized feedback and recommendations'
      ],
      technologiesUsed: ['Python', 'React.js', 'Flask', 'Generative AI', 'AI Agents', 'Machine Learning', 'Large Language Models (LLMs)', 'RAG'],
      myRole: [
        'Designed the complete AI solution architecture',
        'Developed the AI workflow and system design',
        'Planned the RAG and AI Agent pipeline',
        'Integrated frontend and backend components',
        'Conducted AI research and feature planning'
      ],
      outcome: 'DeepTwinMed demonstrates how modern AI technologies can create an intelligent medical learning environment that supports personalized education, improves learning outcomes, and assists students throughout their academic journey.'
    },
    'FARM-AI: Smart Agriculture': {
      title: 'FARM-AI: Smart Agriculture Platform',
      overview: 'FARM-AI is an intelligent agriculture platform that helps farmers make informed farming decisions using Artificial Intelligence and Machine Learning. The system analyzes soil characteristics, environmental conditions, and weather information to recommend suitable crops and improve farming productivity.',
      problemStatement: 'Farmers often struggle to select the right crops because of changing weather conditions, soil quality, and limited access to data-driven agricultural insights.',
      keyFeatures: [
        'AI-based crop recommendation',
        'Soil and climate analysis',
        'Weather-based predictions',
        'Fertilizer recommendations',
        'Yield prediction',
        'Farmer-friendly dashboard',
        'Smart decision support'
      ],
      technologiesUsed: ['Python', 'Flask', 'React.js', 'Machine Learning', 'Pandas', 'NumPy'],
      myRole: [
        'Developed the machine learning workflow',
        'Designed the recommendation logic',
        'Built frontend and backend modules',
        'Processed agricultural datasets',
        'Integrated prediction models'
      ],
      outcome: 'The project provides intelligent crop recommendations that support precision farming and help farmers improve productivity through data-driven decision-making.'
    },
    'PATHGUIDE: Smart Navigation & Assistance System': {
      title: 'PathGuide: AI Career Guidance System',
      overview: 'PathGuide is an AI-powered career guidance platform that assists students in choosing suitable career paths based on their interests, skills, and academic background. The platform also provides government exam guidance, learning roadmaps, and career planning resources.',
      problemStatement: 'Many students face uncertainty when selecting careers because they lack personalized guidance, structured learning plans, and access to reliable career information.',
      keyFeatures: [
        'AI-based career recommendations',
        'Government exam guidance',
        'Personalized learning roadmap',
        'Resume guidance',
        'Skill development suggestions',
        'Student dashboard',
        'Interactive user interface'
      ],
      technologiesUsed: ['Python', 'Flask', 'Machine Learning', 'HTML', 'CSS', 'JavaScript'],
      myRole: [
        'Designed the recommendation workflow',
        'Developed backend functionalities',
        'Built the user interface',
        'Managed datasets and career information',
        'Integrated AI-based recommendations'
      ],
      outcome: 'PathGuide helps students make informed career decisions by providing personalized recommendations and structured learning guidance through an intelligent platform.'
    },
    'Image Classification System': {
      title: 'Image Classification System',
      overview: 'Advanced CNN-based architecture designed for high-accuracy categorical identification. Features an automated data augmentation pipeline and real-time inference capabilities.',
      problemStatement: 'Manual image categorization can be slow, inconsistent, and difficult to scale when working with large visual datasets.',
      keyFeatures: [
        'CNN-based image classification',
        'Automated data augmentation',
        'High-accuracy predictions',
        'Real-time inference support',
        'Model evaluation pipeline'
      ],
      technologiesUsed: ['TensorFlow', 'NumPy', 'OpenCV', 'Keras'],
      myRole: [
        'Built the classification pipeline',
        'Prepared and augmented the dataset',
        'Trained and evaluated the model',
        'Optimized inference performance'
      ],
      outcome: 'The system improves the reliability and speed of image-based classification tasks through a streamlined machine learning workflow.'
    },
    'Tourist Budget Planner': {
      title: 'Tourist Budget Planner',
      overview: 'Tourist Budget Planner is a travel planning application that helps users estimate travel expenses and organize trips efficiently. The system calculates transportation, accommodation, food, and other travel costs while integrating weather information and destination details to support better travel planning.',
      problemStatement: 'Planning a trip often involves managing multiple expenses and gathering information from different sources, making budgeting difficult and time-consuming.',
      keyFeatures: [
        'Budget estimation',
        'Expense calculation',
        'Destination planning',
        'Weather information',
        'Cost breakdown',
        'Travel itinerary',
        'User-friendly interface'
      ],
      technologiesUsed: ['Python', 'Tkinter', 'JSON', 'Weather API', 'Maps API'],
      myRole: [
        'Designed the application workflow',
        'Developed the desktop application',
        'Integrated APIs',
        'Built the budget calculation module',
        'Tested and optimized the application'
      ],
      outcome: 'The application enables users to plan trips more effectively by providing accurate budget estimates and travel information in a single, easy-to-use platform.'
    }
  }), []);

  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);

  const selectedProjectDetails = selectedProject ? projectDetails[selectedProject.title] : null;

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
                  <p className="text-[10px] uppercase tracking-[0.25em] font-black opacity-30 mb-2">
                    {project.type}
                  </p>
                  <p className={`text-[10px] uppercase tracking-[0.25em] font-black opacity-30 ${isDarkMode ? 'text-white/25' : 'text-slate-500'}`}>
                    {project.duration}
                  </p>
                </div>

                <p className="opacity-50 text-base leading-relaxed mb-10 line-clamp-3 font-medium">
                  {project.desc}
                </p>

                <div className="mt-auto flex items-center justify-between border-t border-current/5 pt-8">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
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
                  </button>
                </div>
              </div>

              {/* Bottom Project Shadow Glow - Grayscale */}
              <div className={`absolute -bottom-20 -left-20 w-40 h-40 ${isDarkMode ? 'bg-white' : 'bg-black'} opacity-0 group-hover:opacity-10 blur-[80px] transition-opacity duration-700`}></div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && selectedProjectDetails && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8">
          <button
            type="button"
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
            aria-label="Close project details"
          />

          <div className={`relative z-10 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] border shadow-[0_40px_120px_rgba(0,0,0,0.45)] ${
            isDarkMode ? 'bg-[#0f0f0f] border-white/10 text-white' : 'bg-white border-black/10 text-slate-900'
          }`}>
            <div className="p-8 md:p-10 border-b border-current/10 flex items-start justify-between gap-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.35em] font-black opacity-40 mb-4">Project Details</p>
                <h3 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">{selectedProjectDetails.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-xl ${
                        isDarkMode ? 'bg-white/5 text-white/70 border border-white/10' : 'bg-black/5 text-black/60 border border-black/10'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className={`w-11 h-11 rounded-full flex items-center justify-center border transition-all shrink-0 ${
                  isDarkMode ? 'border-white/10 bg-white/5 hover:bg-white/10' : 'border-black/10 bg-black/5 hover:bg-black/10'
                }`}
                aria-label="Close dialog"
              >
                <span className="text-2xl leading-none">×</span>
              </button>
            </div>

            <div className="p-8 md:p-10 space-y-10 text-base md:text-lg leading-relaxed">
              <div>
                <h4 className="text-sm font-black uppercase tracking-[0.3em] opacity-40 mb-4">Project Overview</h4>
                <p className={isDarkMode ? 'text-white/75' : 'text-slate-700'}>{selectedProjectDetails.overview}</p>
              </div>

              <div>
                <h4 className="text-sm font-black uppercase tracking-[0.3em] opacity-40 mb-4">Problem Statement</h4>
                <p className={isDarkMode ? 'text-white/75' : 'text-slate-700'}>{selectedProjectDetails.problemStatement}</p>
              </div>

              <div>
                <h4 className="text-sm font-black uppercase tracking-[0.3em] opacity-40 mb-4">Key Features</h4>
                <ul className="grid md:grid-cols-2 gap-3">
                  {selectedProjectDetails.keyFeatures.map((feature) => (
                    <li
                      key={feature}
                      className={`rounded-2xl px-4 py-3 border ${isDarkMode ? 'border-white/10 bg-white/5 text-white/80' : 'border-black/10 bg-black/5 text-slate-700'}`}
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-black uppercase tracking-[0.3em] opacity-40 mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-3">
                  {selectedProjectDetails.technologiesUsed.map((tech) => (
                    <span
                      key={tech}
                      className={`px-4 py-2 rounded-full border text-sm font-semibold ${isDarkMode ? 'border-white/10 bg-white/5 text-white/80' : 'border-black/10 bg-black/5 text-slate-700'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-black uppercase tracking-[0.3em] opacity-40 mb-4">My Role</h4>
                <ul className="space-y-3">
                  {selectedProjectDetails.myRole.map((item) => (
                    <li key={item} className={`flex gap-3 ${isDarkMode ? 'text-white/75' : 'text-slate-700'}`}>
                      <span className={`mt-2 h-2 w-2 rounded-full shrink-0 ${isDarkMode ? 'bg-white' : 'bg-black'}`}></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-black uppercase tracking-[0.3em] opacity-40 mb-4">Outcome</h4>
                <p className={isDarkMode ? 'text-white/75' : 'text-slate-700'}>{selectedProjectDetails.outcome}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
