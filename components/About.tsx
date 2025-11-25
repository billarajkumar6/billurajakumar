import React from 'react';
import { ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-black border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 md:order-1 relative">
            <div className="aspect-[3/4] w-full max-w-sm mx-auto md:ml-0 overflow-hidden relative grayscale border border-white/10">
                 <img 
                    src="DSC04860.jpg" 
                    alt="Billu Rajakumar Profile" 
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                 <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white text-lg font-semibold">Billu Rajakumar</p>
                    <p className="text-white/60 text-xs uppercase tracking-widest">Advocate & Media Strategist</p>
                 </div>
            </div>
            {/* Decoration */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-white/30 hidden md:block"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-white/30 hidden md:block"></div>
          </div>

          <div className="order-1 md:order-2 space-y-8">
            <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
              Professional <br/>
              <span className="text-white/50 font-thin">Summary.</span>
            </h2>
            
            <div className="space-y-6 text-white/80 font-light text-lg leading-relaxed">
              <p>
                Aspiring solicitor and BBA.LLB student with <strong className="text-white font-semibold">First Class academic record</strong> (completed 3rd year) and recent legal internship experience in India.
              </p>
              <p>
                Seeking a temporary Paralegal/Legal Assistant role in Preston, UK. Bringing <strong className="text-white font-semibold">12 years of professional background</strong> in the media industry as a writer, director, and editor, with proven expertise in research, drafting, project management, and client communication.
              </p>
              <p>
                Relocating to Preston in <strong className="text-white font-semibold">November 2025</strong> (spouse is a UK Permanent Resident) and eager to gain practical UK legal exposure while completing law studies.
              </p>
            </div>

            <div className="pt-4">
               <div className="flex items-center gap-4 text-white/60 text-sm uppercase tracking-widest">
                  <span className="w-8 h-[1px] bg-white/40"></span>
                  <span>Based in Hyderabad • Relocating to Preston</span>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;