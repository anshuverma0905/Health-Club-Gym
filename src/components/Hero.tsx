import React from 'react';
import { motion } from 'motion/react';
import { Dumbbell, Flame, Sparkles, Star } from 'lucide-react';
import { GYM_DETAILS } from '../data';

interface HeroProps {
  onJoinClick: () => void;
  onTrialClick: () => void;
}

export default function Hero({ onJoinClick, onTrialClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505] pt-20"
    >
      {/* Background Image with elegant Zoom Animation */}
      <motion.div
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.35 }}
        transition={{ duration: 1.8, ease: 'easeOut' }}
        className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center bg-no-repeat"
      />

      {/* Radial overlay for premium dark focus */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#050505]/95 via-transparent to-[#050505]/70" />

      {/* Elegant Dark background accents from Design HTML */}
      <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
         <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 75% 25%, rgba(220, 38, 38, 0.45) 0%, transparent 65%)' }} />
         <div className="w-full h-full" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #111 0, #111 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px' }} />
      </div>

      {/* Grid Pattern Accent */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_100%,transparent_100%)] opacity-20" />

      {/* Hero Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <div className="flex flex-col items-center justify-center space-y-6">
          
          {/* Tagline / Rating Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-2 bg-[#0a0a0a]/90 border border-white/10 rounded-full px-4.5 py-1.5 shadow-lg shadow-black/50"
          >
            <span className="flex h-2 w-2 rounded-full bg-red-600 animate-pulse" />
            <Flame className="h-3.5 w-3.5 text-red-500" />
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-neutral-200">
              Premium Fitness Destination
            </span>
            <div className="h-3 w-[1px] bg-white/10" />
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span className="text-[10px] md:text-xs font-extrabold text-white">4.7 ★</span>
              <span className="text-[9px] text-neutral-400 font-medium">({GYM_DETAILS.reviewsCount} reviews)</span>
            </div>
          </motion.div>

          {/* Headline string */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="max-w-4xl space-y-4"
          >
            <h1 className="font-sans text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white uppercase leading-[0.9]">
              Build Strength. <br />
              <span className="text-transparent text-stroke-white text-white/90">
                Boost
              </span> Confidence.
            </h1>

            <p className="max-w-2xl mx-auto mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-neutral-300 font-medium leading-relaxed">
              Join Ballia's premier luxury fitness club situated in <span className="text-white font-bold underline decoration-red-500 decoration-2 underline-offset-4">Krishi Bhawan</span>, Kunwar Singh Chauraha. Engineered for premium physique transformations.
            </p>
          </motion.div>

          {/* Core CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-6"
          >
            <button
              onClick={onJoinClick}
              className="group relative w-full sm:w-52 flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-4 font-bold text-white tracking-wide shadow-xl shadow-red-600/20 hover:shadow-red-500/30 transition-all duration-300 hover:bg-red-500 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Sparkles className="h-4.5 w-4.5 text-red-200 transition-transform group-hover:scale-125" />
              <span>Join Now</span>
              <span className="absolute -inset-1 rounded-xl bg-gradient-to-r from-red-600 to-orange-500 opacity-20 blur group-hover:opacity-35 transition-opacity" />
            </button>

            <button
              onClick={onTrialClick}
              className="w-full sm:w-52 flex items-center justify-center gap-1.5 rounded-xl border border-neutral-700 bg-neutral-900/60 backdrop-blur-sm px-6 py-4 font-bold text-neutral-200 transition-all duration-300 hover:text-white hover:bg-neutral-800 hover:border-neutral-500 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>1-Day Free Trial</span>
              <Dumbbell className="h-4 w-4 text-red-500 ml-1" />
            </button>
          </motion.div>

          {/* Quick Metrics stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="w-full max-w-3xl grid grid-cols-3 gap-4 pt-10 md:pt-16 border-t border-white/10 text-center"
          >
            <div className="flex flex-col">
              <span className="font-sans text-2xl sm:text-4xl font-extrabold text-white">4000+</span>
              <span className="text-[10px] md:text-xs text-neutral-500 uppercase tracking-widest font-bold mt-1">SQ. FT. AREA</span>
            </div>
            <div className="flex flex-col border-x border-white/10">
              <span className="font-sans text-2xl sm:text-4xl font-extrabold text-red-500">30+</span>
              <span className="text-[10px] md:text-xs text-neutral-500 uppercase tracking-widest font-bold mt-1">MODULE STATIONS</span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-2xl sm:text-4xl font-extrabold text-white">4.7 ★</span>
              <span className="text-[10px] md:text-xs text-neutral-500 uppercase tracking-widest font-bold mt-1">MEMBER TRUST</span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Decorative side spotlight glow */}
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-red-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-red-900/5 blur-[120px] pointer-events-none" />
    </section>
  );
}
