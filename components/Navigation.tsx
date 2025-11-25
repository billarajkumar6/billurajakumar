import React, { useState, useEffect } from 'react';
import { Scale, FileText, Briefcase } from 'lucide-react';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
    scrolled ? 'bg-black border-white/10 py-4' : 'bg-transparent border-transparent py-8'
  }`;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-4 cursor-pointer group" onClick={() => scrollTo('hero')}>
          <div className="w-10 h-10 border border-white bg-black flex items-center justify-center group-hover:bg-white transition-colors duration-300">
            <span className="font-semibold text-white text-lg group-hover:text-black transition-colors">B</span>
          </div>
          <span className="font-thin tracking-[0.2em] text-sm text-white uppercase group-hover:tracking-[0.25em] transition-all">Billu Rajakumar</span>
        </div>

        <div className="hidden md:flex gap-10 items-center">
          <NavItem icon={<Briefcase size={14} />} label="Experience" onClick={() => scrollTo('experience')} />
          <NavItem icon={<FileText size={14} />} label="Education" onClick={() => scrollTo('education')} />
          <NavItem icon={<Scale size={14} />} label="Skills" onClick={() => scrollTo('skills')} />
          <button 
            onClick={() => scrollTo('contact')}
            className="px-6 py-2 bg-white text-black text-xs font-semibold uppercase tracking-widest hover:bg-white/90 transition-colors"
          >
             Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

const NavItem: React.FC<{ icon: React.ReactNode; label: string; onClick: () => void }> = ({ icon, label, onClick }) => (
  <button 
    onClick={onClick} 
    className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors font-medium"
  >
    {label}
  </button>
);

export default Navigation;