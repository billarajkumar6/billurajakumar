import React from 'react';
import { GraduationCap, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-black border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-semibold text-white mb-20 text-center">Education</h2>
        
        <div className="relative border-l border-white/10 ml-4 md:ml-1/2 space-y-16">
            {/* Degree 1 */}
            <div className="relative pl-12 md:pl-0">
                <div className="md:absolute md:-left-[24rem] md:w-80 md:text-right md:pr-12 mb-4 md:mb-0">
                    <span className="text-white font-semibold text-2xl block">2027</span>
                    <span className="text-white/50 text-xs tracking-widest uppercase font-light">Expected Graduation</span>
                </div>
                
                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-white rounded-full"></div>
                
                <div className="group">
                    <h3 className="text-2xl font-semibold text-white mb-2">BBA.LLB</h3>
                    <p className="text-xl text-white/70 font-light mb-4">Mahatma Gandhi Law College, Osmania University</p>
                    <div className="flex flex-wrap gap-6 text-xs text-white/50 mb-6 uppercase tracking-widest font-semibold">
                        <span className="flex items-center gap-2"><MapPin size={12}/> Hyderabad, India</span>
                        <span className="flex items-center gap-2 text-white"><GraduationCap size={12}/> Grade A (First Class)</span>
                    </div>
                    <p className="text-white/60 font-thin leading-relaxed max-w-lg">
                        Specializing in Contract Law, Company Law, and Legal Drafting. 
                        Maintained consistent academic excellence across 6 semesters.
                    </p>
                </div>
            </div>

            {/* Degree 2 */}
            <div className="relative pl-12 md:pl-0">
                <div className="md:absolute md:-left-[24rem] md:w-80 md:text-right md:pr-12 mb-4 md:mb-0">
                    <span className="text-white/50 font-semibold text-2xl block">2011</span>
                </div>
                
                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-white/20 rounded-full group-hover:bg-white transition-colors"></div>
                
                <div className="opacity-60 hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-2xl font-semibold text-white mb-2">Bachelor's Degree in Visual Effects</h3>
                    <p className="text-xl text-white/70 font-light mb-4">International Academy of Computer Graphics</p>
                     <div className="flex gap-4 text-xs text-white/50 mb-4 uppercase tracking-widest font-semibold">
                        <span className="flex items-center gap-2"><MapPin size={12}/> Hyderabad, India</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Education;