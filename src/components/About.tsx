import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Dumbbell, Sparkles, MapPin, Compass } from 'lucide-react';
import { GYM_DETAILS } from '../data';

export default function About() {
  const points = [
    {
      title: "Spacious 4,000+ Sq. Ft. Arena",
      desc: "Ample room for group aerobic flows, Olympic squats, free dumbbell motion, and functional warmups without elbow congestion.",
      icon: Compass
    },
    {
      title: "Premium Mechanical Pulley Racks",
      desc: "Top notch mechanical cable systems and biomechanically calibrated selectorized machinery to safeguard joints during lifts.",
      icon: Dumbbell
    },
    {
      title: "Cooperative Certified Trainers",
      desc: "Friendly coaches are always on the floor to spot you, correct posture errors, and tailor structural split routines.",
      icon: ShieldCheck
    }
  ];

  return (
    <section id="about" className="relative bg-[#050505] py-20 md:py-32 overflow-hidden border-t border-white/10">
      <div className="absolute inset-0 bg-radial-gradient from-red-950/20 via-transparent to-transparent opacity-70 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Visual Showcase Media column (Left) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              
              {/* Retro decorative framing border */}
              <div className="absolute -inset-3 rounded-2xl border border-red-600/10 pointer-events-none" />

              {/* Main atmospheric gym photo */}
              <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 aspect-[4/5] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1540206276907-fbd1599b4241?auto=format&fit=crop&q=80&w=1000"
                  alt="Health Club Gym spacious floor Ballia"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                
                {/* Visual badge superimposed */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/85 backdrop-blur-md rounded-xl p-4 border border-neutral-800">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4.5 w-4.5 text-red-500 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-white uppercase tracking-wider">{GYM_DETAILS.landmark}</p>
                      <p className="text-[10px] text-neutral-400">Kunwar Singh Chauraha, Ballia, UP</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Backing structural red outline card */}
              <div className="absolute -bottom-6 -left-6 h-48 w-48 rounded-2xl bg-gradient-to-tr from-red-600/10 to-transparent -z-10 blur-xl pointer-events-none" />
            </div>
          </div>

          {/* Copy description column (Right) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-red-950/40 border border-red-500/25 px-3 py-1 text-xs font-bold uppercase tracking-wider text-red-500">
                <Sparkles className="h-3 w-3" />
                ESTABLISHED SINCE 1999
              </span>
              <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
                Welcome to <br className="hidden sm:inline" />
                <span className="text-red-500">Health Club Gym</span> Ballia
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                Health Club Gym is Ballia's trusted elite fitness center dedicated to producing real transformations. Located in the safe and prestigious state campus of <strong className="text-white">Krishi Bhawan</strong> at Kunwar Singh Chauraha, we provide a spacious, clean, and motivating environment for everyday athletes.
              </p>
            </div>

            {/* List items */}
            <div className="space-y-6">
              {points.map((pt, idx) => {
                const IconComp = pt.icon;
                return (
                  <div key={idx} className="flex gap-4 p-4 rounded-xl transition-all hover:bg-[#0a0a0a] hover:border-white/10 border border-transparent">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-red-600/10 border border-red-500/20 text-red-500">
                      <IconComp className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-white font-bold text-base uppercase tracking-wide">{pt.title}</h4>
                      <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">{pt.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="rounded-xl bg-gradient-to-r from-red-950/20 to-[#0a0a0a] p-4.5 border border-white/10">
              <p className="text-xs text-neutral-300">
                ⭐ <strong className="text-white">Owner's Word:</strong> "We created Health Club to answer Ballia's demand for a clean, highly secure fitness zone with high-grade machinery and certified coaching support."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
