import React from 'react';
import { Mail, Phone, ArrowRight } from 'lucide-react';

const ContactFooter: React.FC = () => {
  return (
    <footer id="contact" className="bg-black pt-32 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
            <div>
                <h2 className="text-6xl md:text-8xl font-semibold text-white mb-8 leading-none tracking-tighter">
                    Let's <br/> Work.
                </h2>
                <p className="text-white/70 font-thin text-xl max-w-md border-l border-white/20 pl-6">
                    Relocating to Preston, UK in Nov 2025. <br />
                    Available for temporary or entry-level paralegal/legal assistant roles.
                </p>
            </div>
            
            <div className="flex flex-col justify-center space-y-6">
                 <a href="mailto:billarajkumar6@gmail.com" className="group flex items-center justify-between border-b border-white/10 pb-6 hover:border-white transition-colors">
                    <span className="flex items-center gap-4 text-white/60 group-hover:text-white transition-colors">
                        <Mail size={20} />
                        <span className="text-xl font-light">billarajkumar6@gmail.com</span>
                    </span>
                    <ArrowRight className="text-white/40 group-hover:text-white group-hover:-rotate-45 transition-all duration-300" />
                 </a>
                 
                 <a href="tel:+919573668915" className="group flex items-center justify-between border-b border-white/10 pb-6 hover:border-white transition-colors">
                    <span className="flex items-center gap-4 text-white/60 group-hover:text-white transition-colors">
                        <Phone size={20} />
                        <span className="text-xl font-light">+91-9573668915</span>
                    </span>
                    <ArrowRight className="text-white/40 group-hover:text-white group-hover:-rotate-45 transition-all duration-300" />
                 </a>

                 <div className="pt-8">
                    <button className="bg-white text-black px-8 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-white/90 transition-colors w-full md:w-auto">
                        Download Full Resume
                    </button>
                 </div>
            </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-white/40 text-xs font-semibold uppercase tracking-widest pt-8 border-t border-white/10">
          <p>&copy; 2025 Billu Rajakumar.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
             <a 
                href="https://www.linkedin.com/in/rajkumar-billa-7a979871/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white cursor-pointer transition-colors"
             >
                LinkedIn
             </a>
             <a 
                href="https://drive.google.com/drive/folders/1bkl_zDt8AKuH4wdlgobjJUBu9HBJGHU6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white cursor-pointer transition-colors"
             >
                Portfolio
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;