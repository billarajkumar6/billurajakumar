import React from 'react';
import { FileText, ArrowUpRight } from 'lucide-react';

const CertificatePreview: React.FC = () => {
  return (
    <section className="py-12 bg-black border-y border-white/10">
        <div className="max-w-5xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-12">
                <div className="w-full md:w-64 h-40 bg-transparent border border-white/10 flex flex-col items-center justify-center gap-4 group cursor-pointer hover:bg-white hover:border-white transition-all duration-300">
                    <FileText size={32} className="text-white/50 group-hover:text-black transition-colors" />
                    <span className="text-xs text-white/50 font-semibold uppercase tracking-widest group-hover:text-black transition-colors">View Certificate</span>
                </div>
                
                <div className="flex-1 space-y-4">
                    <div className="flex items-start justify-between">
                         <h3 className="text-lg font-semibold text-white uppercase tracking-widest">Internship Verified</h3>
                         <ArrowUpRight className="text-white/50" />
                    </div>
                    <div className="w-12 h-px bg-white"></div>
                    <p className="text-white/70 font-light text-lg leading-relaxed italic opacity-80">
                        "The candidate ably assisted in various legal matters... conducted extensive legal research... drafting legal notices... diligence and enthusiasm reflect the makings of a fine legal professional."
                    </p>
                    <p className="text-white/50 text-xs uppercase tracking-widest font-semibold pt-2">
                        — Advocate Kadiyam Parameshwer | July 2025
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default CertificatePreview;