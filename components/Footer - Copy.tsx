
import React from 'react';

const Footer: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const bgColor = isDarkMode ? 'bg-[#111111]' : 'bg-slate-900';
  const textColor = 'text-white';

  return (
    <footer className={`pt-20 pb-12 px-6 ${bgColor} ${textColor}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 border-b border-white/10 pb-16 mb-12">
          
          {/* Monochrome Logo Section */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center font-black text-xl border border-white/20">S</div>
            <span className="text-2xl font-bold tracking-tight">Suvin Brettlee Roy B</span>
          </div>

          {/* Nav Links */}
          <nav>
            <ul className="flex flex-wrap justify-center gap-6 md:gap-8">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-sm font-medium opacity-60 hover:opacity-100 transition-opacity">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Copyright */}
          <div className="text-sm opacity-60">
            Copyright © {new Date().getFullYear()} Suvin.
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="text-center">
          <p className="text-sm opacity-60 flex items-center justify-center gap-1">
            Developed with <span className="opacity-40">intention</span> by <span className="font-bold underline underline-offset-4">Suvin Brettlee Roy B</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
