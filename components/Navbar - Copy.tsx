
import React, { useState } from 'react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme, activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'My Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'My Projects', id: 'projects' },
    { name: 'Get In Touch', id: 'contact' },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/suvinbrettleeroy?tab=repositories',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/suvin-brettlee-roy-b-6670b9314/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    }
  ];

  const bgColor = isDarkMode ? 'bg-[#000000]/80' : 'bg-white/80';
  const borderColor = isDarkMode ? 'border-white/10' : 'border-black/5';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b ${bgColor} ${borderColor} transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <div className={`text-2xl font-black tracking-tighter ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
          Suvin <span className={`${isDarkMode ? 'text-white/40' : 'text-slate-400'}`}>Brettlee Roy B</span>
        </div>
        
        {/* Navigation & Actions */}
        <div className="flex items-center gap-8">
          {/* Desktop Nav Links */}
          <nav className="hidden lg:block">
            <ul className="flex gap-8">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`text-xs font-black uppercase tracking-[0.2em] transition-all hover:opacity-100 ${
                      activeSection === link.id ? 'opacity-100' : 'opacity-40'
                    } ${isDarkMode ? 'text-white' : 'text-slate-900'}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Icons - Top Right Access */}
          <div className="flex items-center gap-3 pl-8 border-l border-current/10">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  isDarkMode 
                  ? 'bg-white/5 text-white/60 hover:text-white hover:bg-white/20' 
                  : 'bg-slate-100 text-slate-500 hover:text-black hover:bg-black/10'
                }`}
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`ml-2 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                isDarkMode 
                ? 'bg-white/5 text-white hover:bg-white/10' 
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
              title="Toggle Theme"
            >
              {isDarkMode ? '○' : '●'}
            </button>

            {/* Mobile Menu Trigger */}
            <button 
              className={`lg:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                isDarkMode ? 'bg-white/5 text-white' : 'bg-slate-100 text-slate-900'
              }`} 
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div className={`lg:hidden absolute top-24 left-0 right-0 p-8 transition-all duration-500 transform origin-top ${
        isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
      } ${isDarkMode ? 'bg-[#000000]' : 'bg-white'} border-b ${borderColor} shadow-2xl`}>
        <ul className="space-y-6">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setIsOpen(false)}
                className={`block text-2xl font-black tracking-tighter hover:opacity-100 transition-colors ${
                  activeSection === link.id ? 'opacity-100' : 'opacity-40'
                } ${isDarkMode ? 'text-white' : 'text-slate-900'}`}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="pt-6 border-t border-current/5 flex justify-between items-center">
            <span className="text-xs font-black uppercase tracking-widest opacity-30">Connect</span>
            <div className="flex gap-4">
               {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg ${isDarkMode ? 'bg-white text-black' : 'bg-black text-white'}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
