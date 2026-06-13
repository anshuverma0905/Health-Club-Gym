import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, MessageSquare, Mail, Clock, Sparkles, Building, ArrowUpRight, Send, CheckCircle2 } from 'lucide-react';
import { LeadDashboard } from './Modals';
import { GYM_DETAILS } from '../data';
import { LeadSubmission } from '../types';

interface ContactProps {
  onSuccessSubmit: (lead: LeadSubmission) => void;
  refreshTrigger: number;
}

export default function Contact({ onSuccessSubmit, refreshTrigger }: ContactProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setStatus('error');
      return;
    }

    const newLead: LeadSubmission = {
      id: `lead_${Date.now()}`,
      name: name.trim(),
      phone: phone.trim(),
      type: 'contact',
      message: message.trim() || undefined,
      createdAt: new Date().toISOString()
    };

    // Save lead list to localStorage
    const stored = localStorage.getItem('gym_leads');
    const list: LeadSubmission[] = stored ? JSON.parse(stored) : [];
    list.unshift(newLead);
    localStorage.setItem('gym_leads', JSON.stringify(list));

    setStatus('success');
    onSuccessSubmit(newLead);

    // Reset fields
    setName('');
    setPhone('');
    setMessage('');

    setTimeout(() => {
      setStatus('idle');
    }, 4000);
  };

  return (
    <section id="contact" className="relative bg-[#050505] py-20 md:py-32 overflow-hidden border-t border-white/10">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title Grid */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-red-500 bg-red-600/10 border border-red-600/30 px-3 py-1">
            GET IN TOUCH INSTANTLY
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            Coaching Desk & <span className="text-red-500">Location</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Ready to break limits? Visit Krishi Bhawan, ping our personal trainers on WhatsApp, or type your callback details below to instantly reserve your physical slot.
          </p>
        </div>

        {/* Contact Info grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Card left: Map + Contact parameters */}
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 md:p-8 space-y-6">
              <h3 className="text-xl font-bold text-white uppercase tracking-wider">
                Physical Coordinates
              </h3>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="h-10 w-10 flex-shrink-0 rounded-xl bg-red-600/10 text-red-500 flex items-center justify-center border border-red-500/20">
                    <Building className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Campus Location</h4>
                    <p className="text-white font-bold text-sm mt-0.5">{GYM_DETAILS.landmark}</p>
                    <p className="text-xs text-neutral-400 mt-0.5">Kunwar Singh Chauraha, Ballia, Uttar Pradesh 277001</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-10 w-10 flex-shrink-0 rounded-xl bg-red-600/10 text-red-500 flex items-center justify-center border border-red-500/20">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Opening Timings</h4>
                    <p className="text-white font-semibold text-sm mt-0.5">Weekdays: {GYM_DETAILS.openingHours.weekdays}</p>
                    <p className="text-xs text-neutral-400 mt-0.5">Sundays: {GYM_DETAILS.openingHours.sunday} (Conditioning only)</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-10 w-10 flex-shrink-0 rounded-xl bg-red-600/10 text-red-500 flex items-center justify-center border border-red-500/20">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Desk Hotline</h4>
                    <a href={`tel:${GYM_DETAILS.phone}`} className="text-white hover:text-red-400 font-bold text-sm mt-0.5 block">
                      {GYM_DETAILS.phone}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-10 w-10 flex-shrink-0 rounded-xl bg-red-600/10 text-red-500 flex items-center justify-center border border-red-500/20">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Email Address</h4>
                    <a href={`mailto:${GYM_DETAILS.email}`} className="text-neutral-300 hover:text-white text-xs mt-0.5 block truncate">
                      {GYM_DETAILS.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct call Action bars */}
              <div className="grid grid-cols-2 gap-3 pt-4">
                <a
                  href={`tel:${GYM_DETAILS.phone}`}
                  className="flex items-center justify-center gap-1.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs py-3.5 transition-colors shadow-lg shadow-red-600/10"
                >
                  <Phone className="h-4 w-4" />
                  <span>Call Desk</span>
                </a>
                <a
                  href={`https://wa.me/${GYM_DETAILS.whatsapp.replace('+', '')}?text=Hi%20Health%20Club%20Gym%20Ballia!%20I'm%20curious%20about%20your%20membership%25plans.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-3.5 transition-colors shadow-lg shadow-emerald-600/10"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Google Map Panel Frame */}
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a] aspect-video shadow-2xl relative group">
              <iframe
                title="Health Club Gym Maps Location Ballia"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.314271424683!2d84.14815467527632!3d25.760207077353956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992fc0e6f6cb38d%3A0xe5a3c631980be1ff!2sKunwar%20Singh%20Chauraha!5e0!3m2!1sen!2sin!4v1718290000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(110%) opacity(80%)" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-3 right-3 bg-black/85 backdrop-blur-md rounded-lg px-2.5 py-1 text-[10px] text-white font-bold tracking-widest uppercase border border-white/10">
                BALLIA ROAD MAP
              </div>
            </div>
          </div>

          {/* CARD Right: Form inputs */}
          <div className="lg:col-span-7 space-y-8">
            <div className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 md:p-8 space-y-6">
              
              <div className="space-y-1.5">
                <h3 className="text-xl font-bold text-white uppercase tracking-wider flex items-center gap-1">
                  <Sparkles className="h-4.5 w-4.5 text-red-500" />
                  Request Callback In 15 Mins
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm">
                  We maintain a floor manager to guide local visitors. Let us know how we can reach you.
                </p>
              </div>

              {/* Status responses wrapper */}
              {status === 'success' && (
                <div className="rounded-xl bg-emerald-950/60 border border-emerald-500/40 p-4 flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white text-sm">Inquiry Received</h4>
                    <p className="text-neutral-300 text-xs mt-0.5">Your ticket was published and logged directly. We will dial your number shortly.</p>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="rounded-xl bg-red-950/60 border border-red-500/40 p-4 text-xs font-semibold text-red-500">
                  ❌ Form validation error. Name and WhatsApp fields cannot stay blank.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase font-bold tracking-wider text-neutral-400 mb-1">
                      Your First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Priyanshu"
                      required
                      className="w-full rounded-lg border border-white/10 bg-[#050505] px-4 py-2.5 text-xs text-white placeholder-neutral-500 transition-colors focus:border-red-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-bold tracking-wider text-neutral-400 mb-1">
                      Your Mobile Phone <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-xs text-neutral-500 font-bold">
                        +91
                      </span>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="70805 12345"
                        maxLength={15}
                        required
                        className="w-full rounded-lg border border-white/10 bg-[#050505] pl-11 pr-3 py-2.5 text-xs text-white placeholder-neutral-500 transition-colors focus:border-red-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-wider text-neutral-400 mb-1">
                    Describe Workout Goals or Current Injuries
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe if you want muscle bulking, extreme weight loss, general stamina fitness assessments inside Krishi Bhawan..."
                    className="w-full resize-none rounded-lg border border-white/10 bg-[#050505] px-4 py-3 text-xs text-white placeholder-neutral-500 transition-colors focus:border-red-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-2 rounded-xl bg-red-600 hover:bg-red-500 py-3.5 px-6 text-xs font-bold text-white tracking-wide shadow-lg shadow-red-600/10 transition-colors"
                >
                  <Send className="h-4 w-4 text-red-100 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  <span>Send Inquiry Slot Ticket</span>
                </button>
              </form>
            </div>

            {/* Render submission dashboard/logs ledger live */}
            <LeadDashboard onClose={() => {}} onRefreshTrigger={refreshTrigger} />
          </div>

        </div>
      </div>
    </section>
  );
}
