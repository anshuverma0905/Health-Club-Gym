import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import { FAQS } from '../data';

export default function FAQs() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative bg-[#050505] py-20 overflow-hidden border-t border-white/10">
      <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-red-600/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title Grid */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-red-500 bg-red-600/10 border border-red-600/30 px-3 py-1">
            INTELLIGENT COMMON QUERY HELP
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            Frequently Asked <span className="text-red-500">Queries</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Quickly resolve doubts regarding our morning timings, beginner enrollment plans, lockers, personal trainers, or vehicle parking spots.
          </p>
        </div>

        {/* Accordions Stack list */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-white/10 bg-[#0a0a0a] hover:bg-[#0f0f0f] hover:border-red-500/20 transition-all duration-300"
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left focus:outline-none cursor-pointer group"
                >
                  <span className="font-bold text-sm sm:text-base text-white group-hover:text-red-400 transition-colors uppercase tracking-wide">
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 h-8 w-8 rounded-full bg-[#050505]/80 border border-white/5 flex items-center justify-center text-neutral-400 group-hover:text-white transition-all transform duration-300 ${isOpen ? 'rotate-180 bg-red-600/10 text-red-500 border border-red-500/20' : ''}`}>
                    <ChevronDown className="h-4.5 w-4.5" />
                  </div>
                </button>

                {/* Collapsible Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 md:px-6 md:pb-7 text-xs sm:text-sm text-neutral-400 border-t border-white/10 pt-4 leading-relaxed space-y-2">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Custom Trainer availability panel */}
        <div className="mt-12 text-center rounded-2xl bg-[#0a0a0a] border border-white/10 p-6">
          <p className="text-xs sm:text-sm text-neutral-400">
            ❓ <strong className="text-white">Have a physical health query not listed here?</strong> Just ping us on live WhatsApp support or type in the callback form. We'll answer directly!
          </p>
        </div>

      </div>
    </section>
  );
}
