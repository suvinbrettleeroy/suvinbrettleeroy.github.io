
import React, { useEffect, useState } from 'react';

const Hero: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-32 pb-16 overflow-hidden relative">
      {/* Subtle Background Detail - Clean & Monochrome */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className={`absolute top-[10%] left-[5%] w-[1px] h-[80%] bg-gradient-to-b from-transparent via-${isDarkMode ? 'white' : 'black'}/20 to-transparent`}></div>
        <div className={`absolute top-[20%] right-[10%] w-[1px] h-[60%] bg-gradient-to-b from-transparent via-${isDarkMode ? 'white' : 'black'}/10 to-transparent`}></div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full relative z-10">
        <div className={`space-y-12 transition-all duration-1000 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="space-y-2">
            <h2 className={`text-4xl md:text-5xl font-medium tracking-tight ${isDarkMode ? 'text-white/60' : 'text-slate-500'}`}>
              Hi, I'm
            </h2>
            <h1 className={`text-7xl md:text-8xl lg:text-9xl font-black leading-[1.1] tracking-tighter text-glow ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Suvin <br className="hidden md:block" />
              Brettlee Roy B
            </h1>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-center gap-5">
               <div className={`w-1.5 h-14 ${isDarkMode ? 'bg-white' : 'bg-black'} rounded-full pulse-glow`}></div>
               <p className="text-2xl md:text-4xl font-bold tracking-tight opacity-90 max-w-2xl">
                Data Analyst | Machine Learning Engineer | Full Stack Engineer
              </p>
            </div>
            
            <p className="text-xl md:text-2xl italic opacity-50 max-w-xl leading-relaxed font-light">
              "Exploring data analytics, machine learning, and full stack development to transform insights into intelligent solutions."
            </p>
            
            <div className="flex flex-wrap gap-5 pt-4">
              <a 
                href="#about" 
                onClick={(e) => handleScrollTo(e, 'about')}
                className={`px-12 py-5 rounded-full font-black uppercase tracking-[0.15em] text-sm transition-all hover:scale-105 hover:brightness-110 shadow-lg flex items-center justify-center min-w-[200px] ${isDarkMode ? 'bg-white text-black' : 'bg-black text-white'}`}
              >
                About me
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleScrollTo(e, 'contact')}
                className={`px-12 py-5 rounded-full border-2 font-black uppercase tracking-[0.15em] text-sm transition-all hover:scale-105 flex items-center justify-center min-w-[200px] ${
                  isDarkMode ? 'border-white text-white hover:bg-white hover:text-black' : 'border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white'
                }`}
              >
                Get In Touch
              </a>
              <a 
                href="/Suvin-Resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className={`px-12 py-5 rounded-full border font-black uppercase tracking-[0.15em] text-sm transition-all hover:scale-105 flex items-center justify-center min-w-[200px] backdrop-blur-md ${
                  isDarkMode ? 'border-white/10 bg-white/5 text-white hover:bg-white/10' : 'border-slate-900/20 bg-slate-900/5 text-slate-900 hover:bg-slate-900/10'
                }`}
              >
                Resume
              </a>
            </div>
          </div>
        </div>

        <div className={`flex justify-center transition-all duration-1000 delay-300 ${visible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
          <div className="relative float-animation">
            {/* Monochrome Animated Glow Rings */}
            <div className={`absolute inset-[-30px] rounded-full border ${isDarkMode ? 'border-white/10' : 'border-black/10'} animate-[spin_25s_linear_infinite]`}></div>
            <div className={`absolute inset-[-15px] rounded-full border ${isDarkMode ? 'border-white/5' : 'border-black/5'} animate-[spin_15s_linear_infinite_reverse]`}></div>
            <div className={`absolute -inset-10 ${isDarkMode ? 'bg-white/5' : 'bg-black/5'} blur-3xl rounded-full animate-pulse`}></div>
            
            <div className={`relative aspect-square w-80 h-80 md:w-[500px] md:h-[500px] rounded-full overflow-hidden border-[6px] pulse-glow ${isDarkMode ? 'border-white/10' : 'border-black/10'} shadow-2xl group`}>
              <img
                src="/Suv2.jpeg"
                alt="Suvin Brettlee Roy B"
                className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-[2.5s] ease-out grayscale contrast-125 brightness-75 hover:grayscale-0 hover:contrast-100 hover:brightness-100"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${isDarkMode ? 'from-black/50' : 'from-white/50'} via-transparent to-transparent opacity-30 group-hover:opacity-0 transition-opacity duration-700`}></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30">
        <span className="text-[10px] font-black uppercase tracking-[0.3em]">Scroll</span>
        <div className={`w-[1px] h-12 bg-gradient-to-b ${isDarkMode ? 'from-white' : 'from-black'} to-transparent`}></div>
      </div>
    </section>
  );
};

export default Hero;
