import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Columns, Dumbbell, Sparkles } from 'lucide-react';
import { GALLERY } from '../data';

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<'all' | 'transformations' | 'workouts'>('all');
  
  // States for the interactive slider
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 to 100)
  const isDragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1 || isDragging.current) {
      handleMove(e.clientX);
    }
  };

  const filterItems = () => {
    if (activeTab === 'transformations') {
      return GALLERY.filter(i => i.type === 'transformation');
    }
    if (activeTab === 'workouts') {
      return GALLERY.filter(i => i.type === 'workout');
    }
    return GALLERY;
  };

  return (
    <section id="gallery" className="relative bg-[#050505] py-20 md:py-32 overflow-hidden border-t border-white/10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-red-600/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-red-500 bg-red-600/10 border border-red-600/30 px-3 py-1">
            REAL PHYSICAL PROOF
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            Transformation <span className="text-red-500">Gallery</span> & Gym Floor
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Witness the outcome of scientific coaching and regular workout routines. Drag the interactive before/after slider to check physical toning details.
          </p>
        </div>

        {/* 1. Interactive Before & After Slider Card */}
        <div className="max-w-2xl mx-auto mb-20">
          <h3 className="text-center text-xs uppercase font-extrabold tracking-widest text-neutral-400 font-mono mb-4 flex items-center justify-center gap-1.5">
            <Sparkles className="h-4 w-4 text-red-500" />
            Wipe to Inspect Abhishek's 12-Week Transformation
          </h3>

          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onMouseDown={() => { isDragging.current = true; }}
            onMouseUp={() => { isDragging.current = false; }}
            onMouseLeave={() => { isDragging.current = false; }}
            className="relative overflow-hidden aspect-video w-full rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl select-none cursor-ew-resize"
          >
            {/* Before Stage (Always beneath, at 100% width) */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=900"
                alt="Before fat-loss physical status"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover grayscale brightness-90"
              />
              <div className="absolute bottom-4 left-4 bg-black/75 px-3 py-1.5 rounded-md border border-neutral-800 text-[10px] font-black text-neutral-400 uppercase tracking-widest">
                Before Toning
              </div>
            </div>

            {/* After Stage (Positioned absolutely with responsive clip paths) */}
            <div
              className="absolute inset-0 z-10 overflow-hidden pointer-events-none"
              style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            >
              <img
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=900"
                alt="After athlete transformation level"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 right-4 bg-red-600 px-3 py-1.5 rounded-md text-[10px] font-black text-white uppercase tracking-widest">
                After 12 Weeks
              </div>
            </div>

            {/* Slider separating bar */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-red-600 z-20 cursor-ew-resize flex items-center justify-center"
              style={{ left: `${sliderPosition}%` }}
              onMouseDown={(e) => { e.preventDefault(); isDragging.current = true; }}
            >
              <div className="absolute h-8 w-8 rounded-full bg-white border border-red-600 shadow-lg flex items-center justify-center text-red-600">
                <Columns className="h-4 w-4 transform rotate-90" />
              </div>
            </div>
          </div>
          <p className="text-center text-[11px] text-neutral-500 italic mt-3">
            💡 Touch and drag the circle handle left/right to reveal the dramatic 14kg body transition.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex justify-center gap-3 mb-10">
          {[
            { id: 'all', label: 'All Photos' },
            { id: 'transformations', label: 'Transformations' },
            { id: 'workouts', label: 'Gym Floor & Equipment' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === tab.id
                  ? 'bg-red-600 text-white'
                  : 'bg-[#0a0a0a] text-neutral-400 border border-white/10 hover:text-white hover:bg-[#141414]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Curated Grid Display of Gallery Items */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterItems().map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] aspect-[4/3]"
            >
              <img
                src={item.type === 'transformation' ? item.afterImage : item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Bottom linear dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-85" />

              {/* Content overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-left space-y-1 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <span className="text-[9px] font-bold text-red-500 uppercase tracking-widest bg-red-600/10 border border-red-600/30 rounded-full px-2 py-0.5">
                  {item.type}
                </span>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider pt-1 truncate">
                  {item.title}
                </h4>
                <p className="text-[11px] text-neutral-400 leading-normal line-clamp-2 max-w-sm">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
