import React from 'react';
import { motion } from 'motion/react';
import { Shield, Cpu, LayoutGrid, UserCheck, Droplets, PiggyBank, Heart } from 'lucide-react';
import { BENEFITS } from '../data';

// Custom card icon renderer to avoid unsafe dynamic strings
function BenefitIcon({ name }: { name: string }) {
  const css = "h-6 w-6 text-red-500";
  switch (name) {
    case 'ShieldAlert':
      return <Shield className={css} />;
    case 'Cpu':
      return <Cpu className={css} />;
    case 'Grid':
      return <LayoutGrid className={css} />;
    case 'UserCheck':
      return <UserCheck className={css} />;
    case 'Droplets':
      return <Droplets className={css} />;
    case 'PiggyBank':
      return <PiggyBank className={css} />;
    default:
      return <Heart className={css} />;
  }
}

export default function WhyChooseUs() {
  return (
    <section id="why-choose" className="relative bg-[#050505] py-20 overflow-hidden border-t border-white/10">
      {/* Visual background gradient lights */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-red-600/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-red-500 bg-red-600/10 border border-red-600/30 px-3 py-1">
            OUR ULTIMATE PILLARS
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            Why Ballia Athletes Choose <span className="text-red-500">Health Club</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            We bridge the gap between premium fitness standards and community accessibility. When you step into our facility at Krishi Bhawan, you step into a system designed for high physical results.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {BENEFITS.map((benefit, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 md:p-8 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-xl hover:shadow-red-600/5 transition-all duration-300"
            >
              {/* Backglow accent */}
              <div className="absolute inset-x-0 bottom-0 h-1 rounded-b-2xl bg-gradient-to-r from-red-600 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Icon Shield */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600/10 border border-red-500/10 mb-6 group-hover:bg-red-500/20 transition-colors">
                <BenefitIcon name={benefit.icon} />
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white uppercase tracking-wide group-hover:text-red-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              {/* Diagonal accent line inside */}
              <div className="absolute top-4 right-4 text-neutral-800 font-sans font-black select-none pointer-events-none group-hover:text-neutral-700/60 transition-colors">
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic callout panel */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-[#0a0a0a] backdrop-blur-md border border-white/10 rounded-2xl px-6 py-4.5 max-w-2xl">
            <p className="text-xs sm:text-sm text-neutral-300">
              ⚡ <strong>Did you know?</strong> We sanitise all heavy bars, dumbbell handles, cable rings, and benches <strong>three times daily</strong>. Your safety is as precious as your muscle building journey.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
