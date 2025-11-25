import React, { useState } from 'react';
import { Briefcase, Video, Scale, ArrowRight } from 'lucide-react';
import { ExperienceItem } from '../types';

const experiences: ExperienceItem[] = [
  {
    id: 'legal-1',
    role: 'Legal Intern',
    company: 'Advocate Kadiyam Parameshwer',
    location: 'Hyderabad, India',
    period: 'July 2025',
    type: 'legal',
    description: [
      'Assisted in legal research, case law analysis, and client brief preparation.',
      'Drafted notices, agreements, and case summaries under supervision.',
      'Observed civil and corporate law procedures including title disputes and IPR.',
      'Engaged in client counseling sessions and appellate litigation workflows.'
    ]
  },
  {
    id: 'media-1',
    role: 'Sr. Video Editor & Post-Production Head',
    company: 'Various Companies',
    location: 'Hyderabad, India',
    period: '2012 – 2025',
    type: 'media',
    description: [
      'Managed teams, deadlines, and sensitive client projects for major brands (DBS, IKEA, Volkswagen, Shell, G20 Summit).',
      'Drafted scripts, briefs, and presentations, developing strong legal writing and communication skills.',
      'Coordinated contracts, agreements, and content clearances with stakeholders.',
      'Oversaw compliance in media content, ensuring alignment with regulations.'
    ]
  }
];

const ExperienceTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'legal' | 'media'>('legal');

  return (
    <section id="experience" className="py-24 relative bg-black">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 pb-4 border-b border-white/10">
          <div>
             <h2 className="text-3xl md:text-5xl font-semibold text-white mb-2">Experience</h2>
             <p className="text-white/50 font-thin text-lg">The transition from Creative Director to Legal Advocate.</p>
          </div>
          
          <div className="flex gap-0 mt-8 md:mt-0 border border-white/10 p-1">
            <button
              onClick={() => setActiveTab('legal')}
              className={`px-8 py-3 text-xs font-semibold uppercase tracking-widest transition-all duration-300 flex items-center gap-3 ${
                activeTab === 'legal' 
                  ? 'bg-white text-black' 
                  : 'bg-transparent text-white/50 hover:text-white'
              }`}
            >
              <Scale size={14} />
              Legal
            </button>
            <button
              onClick={() => setActiveTab('media')}
              className={`px-8 py-3 text-xs font-semibold uppercase tracking-widest transition-all duration-300 flex items-center gap-3 ${
                activeTab === 'media' 
                  ? 'bg-white text-black' 
                  : 'bg-transparent text-white/50 hover:text-white'
              }`}
            >
              <Video size={14} />
              Media
            </button>
          </div>
        </div>

        <div className="min-h-[400px]">
          {experiences
            .filter(exp => exp.type === activeTab)
            .map(exp => (
              <div 
                key={exp.id} 
                className="group animate-fade-in-up"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  <div className="md:col-span-4">
                     <p className="text-3xl font-light text-white mb-2 leading-tight">{exp.company}</p>
                     <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-6">{exp.period} • {exp.location}</p>
                     <div className="inline-block px-3 py-1 border border-white text-white text-xs font-semibold uppercase">
                        {exp.role}
                     </div>
                  </div>

                  <div className="md:col-span-8 border-l border-white/10 pl-8 md:pl-12 py-2">
                    <div className="space-y-6">
                      {exp.description.map((item, idx) => (
                        <div key={idx} className="flex gap-6 items-start">
                          <ArrowRight size={16} className="text-white mt-1 shrink-0 opacity-50" />
                          <p className="text-white/80 font-thin leading-relaxed text-lg">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTabs;