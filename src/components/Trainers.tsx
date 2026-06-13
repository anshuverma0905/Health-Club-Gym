import React from 'react';
import { motion } from 'motion/react';
import { Award, Briefcase, ChevronRight, MessageSquare, ShieldAlert, Sparkles, Star } from 'lucide-react';
import { Trainer } from '../types';
import { TRAINERS, GYM_DETAILS } from '../data';

interface TrainersProps {
  onContactClick: () => void;
}

export default function Trainers({ onContactClick }: TrainersProps) {
  return (
    <section id="trainers" className="relative bg-[#050505] py-20 overflow-hidden border-t border-white/10">
      {/* Visual glowing point */}
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-red-600/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-red-500 bg-red-600/10 border border-red-600/30 px-3 py-1">
            REAL ELITE EXPERTS
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            Meet Your Expert <span className="text-red-500">Coaches</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Train under certified physical educators, master diet planners, and competitors who have successfully logged thousands of transformation tickets in Uttar Pradesh.
          </p>
        </div>

        {/* Coaches Grid */}
        <div className="grid md:grid-cols-3 gap-8 pt-4">
          {TRAINERS.map((trainer, coachIdx) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: coachIdx * 0.15, duration: 0.6 }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a] flex flex-col justify-between hover:border-red-500/30 hover:shadow-xl hover:shadow-red-600/5 transition-all duration-300"
            >
              {/* Photo top section */}
              <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900">
                
                {/* Image */}
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark gradient mapping over photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />

                {/* Overlap Badge: Years of Experience */}
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-neutral-800 rounded-lg px-3 py-1.5 text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                  <Briefcase className="h-3.5 w-3.5 text-red-500" />
                  <span>{trainer.experience}</span>
                </div>

                {/* Content aligned at the bottom of the photo */}
                <div className="absolute bottom-4 left-4 right-4 space-y-1">
                  <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight">
                    {trainer.name}
                  </h3>
                  <p className="text-xs font-bold text-red-500 uppercase tracking-widest">
                    {trainer.role}
                  </p>
                </div>
              </div>

              {/* Bio & Specialty bottom section */}
              <div className="p-6 space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  
                  {/* Bio String */}
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed italic">
                    "{trainer.bio}"
                  </p>

                  <div className="h-[1px] bg-neutral-900" />

                  {/* Specialties Pills */}
                  <div className="space-y-2">
                    <p className="text-[10px] uppercase font-bold tracking-wider text-neutral-500 font-mono">
                      Specialty Fields:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {trainer.specialties.map((spec, specIdx) => (
                        <span
                          key={specIdx}
                          className="bg-neutral-900 border border-neutral-850 px-2.5 py-1 rounded-md text-[10px] font-semibold text-neutral-300"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA Action inside card */}
                <button
                  onClick={onContactClick}
                  className="w-full mt-6 group flex items-center justify-center gap-1 bg-[#141414] py-3 rounded-xl border border-white/10 text-xs font-bold text-neutral-300 hover:text-white hover:bg-[#1a1a1a] hover:border-red-500/25 transition-all"
                >
                  <span>Request Custom Schedule</span>
                  <ChevronRight className="h-4 w-4 text-red-500 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Dynamic bottom banner offering personal assistance */}
        <div className="mt-16 bg-gradient-to-r from-[#0a0a0a] to-[#141414] rounded-2xl p-6 md:p-8 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="text-white font-extrabold text-lg uppercase tracking-wide flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="h-5 w-5 text-red-500" />
              Not sure which trainer is ideal for you?
            </h4>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-2xl">
              Describe your body frame, physical pain points (if any), activity levels, and custom timing slots. We'll map you with the ideal coach in Krishi Bhawan on call!
            </p>
          </div>
          <button
            onClick={onContactClick}
            className="flex-shrink-0 bg-red-600 hover:bg-red-500 text-white text-xs font-extrabold uppercase px-6 py-3.5 rounded-xl tracking-wider shadow-lg shadow-red-600/15"
          >
            Get Free Consultation
          </button>
        </div>

      </div>
    </section>
  );
}
