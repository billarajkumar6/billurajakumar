import React from 'react';
import { Download, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
          <div className="inline-block border-l border-white pl-4">
            <span className="text-white text-xs font-semibold tracking-[0.3em] uppercase block mb-1">Relocating to UK</span>
            <span className="text-white/60 text-xs font-thin tracking-widest uppercase">December 2025</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-semibold leading-tight text-white tracking-tight">
            MEDIA <br />
            <span className="font-thin text-4xl md:text-6xl text-white/50 block my-2">TRANSFORMED TO</span>
            LEGAL.
          </h1>
          
          <p className="text-lg font-thin text-white/70 max-w-xl leading-relaxed border-l border-white/20 pl-6">
            Aspiring Solicitor & BBA.LLB Student. <br/>
            <strong className="text-white font-semibold">First Class Record.</strong> <br/>
            Merging 12 years of executive media leadership with rigorous legal advocacy.
          </p>

          <div className="flex flex-wrap gap-6 pt-8">
            <a 
              href="https://i.postimg.cc/8csMjpb3/DSC04860.jpg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-10 py-4 bg-white text-black text-xs font-semibold uppercase tracking-[0.2em] hover:bg-white/90 transition-colors text-center"
            >
              Portfolio
            </a>
            <button className="px-10 py-4 border border-white/40 text-white text-xs font-semibold uppercase tracking-[0.2em] hover:border-white hover:bg-white hover:text-black transition-all flex items-center gap-3">
              CV <Download size={14} />
            </button>
          </div>
        </div>

        {/* Image Content */}
        <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end relative mt-10 lg:mt-0">
          <div className="relative w-72 h-72 md:w-[28rem] md:h-[28rem]">
            
            {/* Animated Orbit Rings - Behind Image */}
            {/* Ring 1: Slow continuous line */}
            <div className="absolute inset-[-40px] border border-white/10 rounded-full animate-spin-slow opacity-60 z-0 pointer-events-none">
               <div className="absolute top-1/2 -right-1 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
            </div>
            
            {/* Ring 2: Dashed reverse spin */}
             <div className="absolute inset-[-20px] border border-dashed border-white/10 rounded-full animate-spin-reverse-slow opacity-40 z-0 pointer-events-none"></div>

            {/* Ring 3: Inner delicate ring */}
             <div className="absolute inset-[-60px] border-[0.5px] border-white/5 rounded-full opacity-30 z-0 pointer-events-none"></div>

            {/* Main Image Frame - Circular */}
            <div className="relative w-full h-full rounded-full border border-white/20 overflow-hidden z-20 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
              <img 
                src="https://drive.google.com/file/d/1BiWee4VZI9xwr28kzz_NyMftinxQ2vs0/view?usp=drive_link"
                alt="Billu Rajakumar" 
                loading="eager"
                className="w-full h-full object-cover object-top hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/30 animate-pulse">
        <ArrowDown size={24} strokeWidth={1} />
      </div>
    </section>
  );
};

export default Hero;