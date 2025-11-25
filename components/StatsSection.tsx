import React, { useState, useEffect, useRef } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell, CartesianGrid } from 'recharts';
import { Briefcase, Award } from 'lucide-react';

const skillsData = [
  { subject: 'Legal Research', A: 90, fullMark: 100 },
  { subject: 'Drafting', A: 85, fullMark: 100 },
  { subject: 'Client Mgmt', A: 95, fullMark: 100 },
  { subject: 'Case Analysis', A: 80, fullMark: 100 },
  { subject: 'Communication', A: 98, fullMark: 100 },
  { subject: 'Project Mgmt', A: 92, fullMark: 100 },
];

const academicData = [
  { name: 'Sem 1', score: 82 },
  { name: 'Sem 2', score: 84 },
  { name: 'Sem 3', score: 80 },
  { name: 'Sem 4', score: 85 },
  { name: 'Sem 5', score: 83 },
  { name: 'Sem 6', score: 86 },
];

const StatsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24 bg-black border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-4 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight">
              Data Driven <br/> <span className="text-white/50 font-thin">Excellence.</span>
            </h2>
            <p className="text-white/70 font-thin text-lg mb-8 leading-relaxed">
              Visualizing the intersection of extensive media leadership and emerging legal expertise. 
              Consistently achieving First Class grades while managing complex professional responsibilities.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                <Briefcase className="text-white" size={24} />
                <div>
                  <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Professional Synergy</h4>
                  <p className="text-white/50 text-xs font-light">Soft skills + Hard legal capabilities</p>
                </div>
              </div>
              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                <Award className="text-white" size={24} />
                <div>
                  <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Academic Record</h4>
                  <p className="text-white/50 text-xs font-light">Consistent First Class Performance</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Radar Chart - Skills */}
            <div className="bg-transparent border border-white/10 p-6 rounded-none flex flex-col">
              <h3 className="text-xs font-semibold text-white/60 mb-6 uppercase tracking-widest text-center">Competency Matrix</h3>
              <div className="h-[300px] w-full flex-grow">
                {isVisible && (
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart key={`radar-${isVisible}`} cx="50%" cy="50%" outerRadius="60%" data={skillsData}>
                      <PolarGrid stroke="rgba(255,255,255,0.2)" />
                      <PolarAngleAxis 
                          dataKey="subject" 
                          tick={{ fill: 'rgba(255,255,255,0.8)', fontSize: 11, fontFamily: 'Poppins', textTransform: 'uppercase', fontWeight: 600 }} 
                      />
                      <Radar
                        name="Skills"
                        dataKey="A"
                        stroke="#fff"
                        strokeWidth={1.5}
                        fill="#fff"
                        fillOpacity={0.15}
                        isAnimationActive={true}
                        animationDuration={1500}
                        animationEasing="ease-out"
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                )}
              </div>
            </div>

            {/* Bar Chart - Academics */}
            <div className="bg-transparent border border-white/10 p-6 rounded-none flex flex-col">
              <h3 className="text-xs font-semibold text-white/60 mb-6 uppercase tracking-widest text-center">BBA.LLB Grades</h3>
              <div className="h-[300px] w-full flex-grow">
                {isVisible && (
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart key={`bar-${isVisible}`} data={academicData} margin={{ top: 20, right: 20, bottom: 20, left: -20 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
                      <XAxis 
                          dataKey="name" 
                          stroke="rgba(255,255,255,0.3)" 
                          tick={{fill: 'rgba(255,255,255,0.7)', fontSize: 10, fontFamily: 'Poppins'}} 
                          tickLine={false}
                          axisLine={{ stroke: 'rgba(255,255,255,0.2)' }}
                      />
                      <YAxis 
                          stroke="rgba(255,255,255,0.3)" 
                          tick={{fill: 'rgba(255,255,255,0.7)', fontSize: 10, fontFamily: 'Poppins'}} 
                          domain={[0, 100]} 
                          tickLine={false}
                          axisLine={false}
                      />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#000', borderColor: 'rgba(255,255,255,0.2)', color: '#fff', fontFamily: 'Poppins' }} 
                        itemStyle={{ color: '#fff' }}
                        cursor={{fill: 'rgba(255,255,255,0.1)'}}
                      />
                      <Bar dataKey="score" animationDuration={2000} animationBegin={0} isAnimationActive={true}>
                        {academicData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={index === academicData.length - 1 ? '#fff' : 'rgba(255,255,255,0.3)'} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatsSection;