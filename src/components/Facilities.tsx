import React from 'react';
import { motion } from 'motion/react';
import { Dumbbell, Activity, TrendingDown, Award, Users, Sparkles, ClipboardCheck, ArrowUpRight } from 'lucide-react';
import { FACILITIES } from '../data';

function FacilityIcon({ name }: { name: string }) {
  const css = "h-5 w-5 text-red-500";
  switch (name) {
    case 'Dumbbell':
      return <Dumbbell className={css} />;
    case 'Activity':
      return <Activity className={css} />;
    case 'TrendingDown':
      return <TrendingDown className={css} />;
    case 'Award':
      return <Award className={css} />;
    case 'Users':
      return <Users className={css} />;
    case 'Sparkles':
      return <Sparkles className={css} />;
    case 'ClipboardCheck':
      return <ClipboardCheck className={css} />;
    default:
      return <Dumbbell className={css} />;
  }
}

interface FacilitiesProps {
  onTrialClick: () => void;
}

export default function Facilities({ onTrialClick }: FacilitiesProps) {
  return (
    <section id="facilities" className="relative bg-[#050505] py-20 md:py-32 overflow-hidden border-t border-white/10">
      <div className="absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-red-600/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Section */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-red-500 bg-red-600/10 border border-red-600/30 px-3 py-1">
              FITNESS PROGRAMS & ZONES
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
              Our Premium Gym <span className="text-red-500">Facilities</span>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Explore custom fitness zones packed with world-class multi-angle machinery, free weights, heavy cardio decks, and highly scientific body assessment logs.
            </p>
          </div>
          <button
            onClick={onTrialClick}
            className="flex-shrink-0 group flex items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-[#0a0a0a] px-5 py-3 text-xs font-bold text-neutral-300 hover:text-white hover:border-red-500/30 transition-all"
          >
            <span>Request Facility Tour</span>
            <ArrowUpRight className="h-4 w-4 text-red-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Facilities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {FACILITIES.map((fac) => (
            <div
              key={fac.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 aspect-[4/5] hover:border-red-500/30 hover:shadow-xl hover:shadow-red-600/5 transition-all duration-300 cursor-pointer"
              onClick={onTrialClick}
            >
              {/* Cover Image in background */}
              <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20 group-hover:scale-105 group-hover:opacity-25 transition-all duration-700"
                style={{ backgroundImage: `url(${fac.image})` }}
              />

              {/* Cover gradient overlay */}
              <div className="absolute inset-0 z-0 bg-gradient-to-t from-neutral-950 via-neutral-950/90 to-transparent" />

              {/* Top Bar content */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-600/10 border border-red-500/20 group-hover:bg-red-500 group-hover:text-white transition-colors">
                  <FacilityIcon name={fac.iconName} />
                </div>
                <span className="text-[10px] text-neutral-600 group-hover:text-red-500 transition-colors uppercase tracking-widest font-extrabold font-mono">
                  Active
                </span>
              </div>

              {/* Bottom Body text content */}
              <div className="relative z-10 mt-16 space-y-3">
                <h3 className="text-lg font-bold text-white uppercase tracking-wide group-hover:text-red-400 transition-colors">
                  {fac.title}
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed line-clamp-4">
                  {fac.description}
                </p>
                <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Register Free Slot</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
