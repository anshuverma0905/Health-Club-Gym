import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, MessageSquare } from 'lucide-react';
import { GYM_DETAILS } from '../data';

export default function WhatsAppFloating() {
  const messageText = encodeURIComponent("Hi Health Club Gym Ballia! I saw your premium website and wanted some details regarding timing slots and enrollment tickets.");

  return (
    <div className="fixed bottom-6 right-6 z-40 group select-none pointer-events-auto">
      {/* Floating Prompt on hover */}
      <div className="absolute right-14 top-1/2 -translate-y-1/2 bg-black/90 text-white text-[11px] font-bold uppercase tracking-wider py-1.5 px-3 rounded-lg border border-neutral-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        🟢 Live WhatsApp Support
      </div>

      <a
        href={`https://wa.me/${GYM_DETAILS.whatsapp.replace('+', '')}?text=${messageText}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 shadow-xl shadow-emerald-500/20 text-white transition-all duration-300 hover:scale-110 hover:bg-emerald-500 hover:rotate-12"
        aria-label="Contact Gym on WhatsApp"
      >
        {/* Pulsing breathing outer ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-600/40 animate-ping opacity-75" />

        <MessageSquare className="h-6 w-6 relative z-10 fill-white" />
      </a>
    </div>
  );
}
