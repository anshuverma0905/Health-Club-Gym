import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Flame, HelpCircle, Info, Sparkles, Star } from 'lucide-react';
import { MembershipPlan } from '../types';
import { MEMBERSHIP_PLANS } from '../data';

interface PlansProps {
  onPlanSelect: (plan: MembershipPlan) => void;
}

export default function Plans({ onPlanSelect }: PlansProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="plans" className="relative bg-[#050505] py-20 md:py-32 overflow-hidden border-t border-white/10">
      {/* Decorative backdrop glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-red-600/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title Information */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-red-500 bg-red-600/10 border border-red-600/30 px-3 py-1">
            AFFORDABLE MEMBERSHIP PASSES
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            Flexible & Honest <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-white to-red-500">Pricing</span> Plans
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            No hidden administration fees and absolute transparent terms. Select a physical routine plan that coordinates with your current lifestyle goals.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 items-stretch pt-6">
          {MEMBERSHIP_PLANS.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-b from-[#0a0a0a] to-red-950/20 border-2 border-red-600 shadow-xl shadow-red-500/10'
                  : 'bg-[#0a0a0a] border border-white/10 shadow-md shadow-black'
              }`}
            >
              {/* Most Popular Label on top of highlighted plan */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-red-600 text-white rounded-full px-4 py-1.5 text-[10px] font-black uppercase tracking-widest shadow-lg shadow-red-600/30">
                  <Flame className="h-3 w-3 fill-white" />
                  <span>MOST POPULAR</span>
                </div>
              )}

              {/* Title & Tagline details */}
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-widest font-mono text-neutral-400 font-extrabold">
                  {plan.duration} access
                </span>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 pt-1">
                  <span className="text-4xl md:text-5xl font-black text-white">{plan.price}</span>
                  <span className="text-xs text-neutral-500 font-medium font-mono">/ total</span>
                </div>
                <p className="text-xs text-neutral-400 min-h-[32px] italic leading-relaxed">
                  💡 {plan.tagline}
                </p>
                <div className="h-[1px] bg-white/10 border-dashed border-t border-white/5 w-full" />
              </div>

              {/* Perks / Benefits inside */}
              <div className="mt-6 mb-8 flex-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-4 font-mono">
                  What's Included:
                </p>
                <ul className="space-y-3.5">
                  {plan.perks.map((perk, perkIdx) => (
                    <li key={perkIdx} className="flex items-start gap-2 text-xs text-neutral-300">
                      <Check className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Subscription CTA trigger button */}
              <button
                onClick={() => onPlanSelect(plan)}
                className={`w-full flex items-center justify-center gap-1.5 rounded-xl py-3.5 px-4 text-xs font-bold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/20 hover:bg-red-500 hover:shadow-red-500/30'
                    : 'bg-[#141414] text-neutral-300 border border-white/10 hover:bg-[#1a1a1a] hover:text-white'
                }`}
              >
                <Sparkles className="h-3.5 w-3.5" />
                <span>Join & Start Today</span>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Small comparative notification helper */}
        <div className="mt-12 text-center flex flex-col md:flex-row items-center justify-center gap-3 bg-[#0a0a0a] p-4 border border-white/10 max-w-4xl mx-auto rounded-xl">
          <Info className="h-5 w-5 text-red-500 flex-shrink-0" />
          <p className="text-xs text-neutral-400 text-left leading-relaxed">
            🎓 <strong className="text-white">Note for Ballia Residents:</strong> We support physical suspension of membership packages without charge. If you need to travel outside Ballia, just inform Coach Vikram Singh at Krishi Bhawan 48 hours early, and we'll pause your plan.
          </p>
        </div>

      </div>
    </section>
  );
}
