import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X, CheckCircle, Phone, Sparkles, Trophy, Calendar, ClipboardList } from 'lucide-react';
import { MembershipPlan, LeadSubmission } from '../types';
import { GYM_DETAILS } from '../data';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitSuccess?: (lead: LeadSubmission) => void;
  type: 'free-trial' | 'membership' | 'contact';
  selectedPlan?: MembershipPlan | null;
  allPlans?: MembershipPlan[];
}

export function RegistrationModal({ isOpen, onClose, onSubmitSuccess, type, selectedPlan, allPlans = [] }: ModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [planId, setPlanId] = useState(selectedPlan?.id || allPlans[0]?.id || '');
  const [preferredDate, setPreferredDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Sync selectedPlan changes
  useEffect(() => {
    if (selectedPlan) {
      setPlanId(selectedPlan.id);
    } else if (allPlans.length > 0 && !planId) {
      setPlanId(allPlans[0].id);
    }
  }, [selectedPlan, allPlans]);

  // Clean form state on close
  useEffect(() => {
    if (!isOpen) {
      setIsSuccess(false);
      setErrorMsg('');
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setErrorMsg('Please provide both your Name and Contact Phone Number.');
      return;
    }

    // Basic dynamic Indian phone validation (starts with 6-9, 10 digits)
    const cleanPhone = phone.replace(/[\s-()]/g, '');
    if (cleanPhone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit Indian Mobile Phone Number.');
      return;
    }

    const newLead: LeadSubmission = {
      id: `lead_${Date.now()}`,
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim() || undefined,
      type,
      planId: type === 'membership' ? planId : undefined,
      message: type === 'free-trial' ? `Preferred Date: ${preferredDate}` : message.trim() || undefined,
      createdAt: new Date().toISOString()
    };

    // Save lead list to localStorage
    const stored = localStorage.getItem('gym_leads');
    const list: LeadSubmission[] = stored ? JSON.parse(stored) : [];
    list.unshift(newLead);
    localStorage.setItem('gym_leads', JSON.stringify(list));

    setIsSuccess(true);
    if (onSubmitSuccess) {
      onSubmitSuccess(newLead);
    }

    // Clear state
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
  };

  const chosenPlanObj = allPlans.find(p => p.id === planId);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-2xl text-white"
          >
            {/* Top red header accent */}
            <div className="h-1.5 w-full bg-gradient-to-r from-red-600 via-orange-500 to-red-600" />

            {/* Close Button */}
            <button
              onClick={onClose}
              id={`close-btn-${type}`}
              className="absolute top-4 right-4 rounded-full border border-white/10 bg-[#050505] p-1.5 text-neutral-400 transition-colors hover:bg-[#141414] hover:text-white"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="p-6 md:p-8">
              {!isSuccess ? (
                <>
                  <div className="mb-6">
                    <span className="inline-flex items-center gap-1.5 bg-red-600/10 border border-red-600/30 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-red-500">
                      {type === 'free-trial' ? (
                        <>
                          <Calendar className="h-3.5 w-3.5" />
                          1-Day Free Pass
                        </>
                      ) : type === 'membership' ? (
                        <>
                          <Trophy className="h-3.5 w-3.5" />
                          Membership Enrollment
                        </>
                      ) : (
                        <>
                          <Phone className="h-3.5 w-3.5" />
                          Instant Callback Request
                        </>
                      )}
                    </span>
                    <h3 className="mt-3 font-sans text-2xl font-bold tracking-tight text-white md:text-3xl">
                      {type === 'free-trial' && "Claim Your Free Workout"}
                      {type === 'membership' && "Reserve Your Spot Today"}
                      {type === 'contact' && "Speak with a Fitness Trainer"}
                    </h3>
                    <p className="mt-1.5 text-sm text-neutral-400">
                      {type === 'free-trial' && "Experience our world-class gym in Ballia. No payment required."}
                      {type === 'membership' && "Transform your body with premier fitness equipment."}
                      {type === 'contact' && "Enter your number and Coach Vikram or Priya will call back soon."}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {errorMsg && (
                      <div className="rounded-lg bg-red-950/60 border border-red-500/40 p-3 text-xs font-medium text-red-400">
                        {errorMsg}
                      </div>
                    )}

                    <div>
                      <label className="block text-xs font-semibold tracking-wider uppercase text-neutral-400 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Rahul Mishra"
                        required
                        className="w-full rounded-lg border border-white/10 bg-[#050505] px-4 py-2.5 text-sm text-white placeholder-neutral-500 transition-colors focus:border-red-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold tracking-wider uppercase text-neutral-400 mb-1">
                        WhatsApp / Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-sm font-semibold text-neutral-500">
                          +91
                        </span>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="98765 43210"
                          maxLength={15}
                          required
                          className="w-full rounded-lg border border-white/10 bg-[#050505] py-2.5 pl-12 pr-4 text-sm text-white placeholder-neutral-500 transition-colors focus:border-red-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold tracking-wider uppercase text-neutral-400 mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="rahul@example.com"
                        className="w-full rounded-lg border border-white/10 bg-[#050505] px-4 py-2.5 text-sm text-white placeholder-neutral-500 transition-colors focus:border-red-500 focus:outline-none"
                      />
                    </div>

                    {type === 'membership' && allPlans.length > 0 && (
                      <div>
                        <label className="block text-xs font-semibold tracking-wider uppercase text-neutral-400 mb-1">
                          Select Membership Package
                        </label>
                        <select
                          value={planId}
                          onChange={(e) => setPlanId(e.target.value)}
                          className="w-full rounded-lg border border-white/10 bg-[#050505] px-4 py-2.5 text-sm text-white transition-colors focus:border-red-500 focus:outline-none cursor-pointer"
                        >
                          {allPlans.map((p) => (
                            <option key={p.id} value={p.id}>
                              {p.name} - {p.price} ({p.duration})
                            </option>
                          ))}
                        </select>
                        {chosenPlanObj && (
                          <div className="mt-2 text-xs text-neutral-400 italic">
                            💡 Includes: {chosenPlanObj.perks.slice(0, 3).join(', ')}...
                          </div>
                        )}
                      </div>
                    )}

                    {type === 'free-trial' && (
                      <div>
                        <label className="block text-xs font-semibold tracking-wider uppercase text-neutral-400 mb-1">
                          Preferred Day of Visit <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="date"
                          value={preferredDate}
                          onChange={(e) => setPreferredDate(e.target.value)}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full rounded-lg border border-white/10 bg-[#050505] px-4 py-2.5 text-sm text-white transition-colors focus:border-red-500 focus:outline-none cursor-pointer"
                        />
                      </div>
                    )}

                    {type === 'contact' && (
                      <div>
                        <label className="block text-xs font-semibold tracking-wider uppercase text-neutral-400 mb-1">
                          Your Fitness Goal / Message
                        </label>
                        <textarea
                          rows={2}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="e.g. Weight loss, muscle building, general health..."
                          className="w-full resize-none rounded-lg border border-white/10 bg-[#050505] px-4 py-2 text-sm text-white placeholder-neutral-500 transition-colors focus:border-red-500 focus:outline-none"
                        />
                      </div>
                    )}

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="group w-full flex items-center justify-center gap-2 rounded-lg bg-red-600 px-5 py-3 font-semibold text-white tracking-wide shadow-lg shadow-red-600/20 transition-all duration-300 hover:bg-red-500 hover:shadow-red-500/30"
                      >
                        <Sparkles className="h-4 w-4 text-red-100 transition-transform group-hover:scale-125" />
                        {type === 'free-trial' && "Book My Free Workout Now"}
                        {type === 'membership' && "Confirm My Enrollment Ticket"}
                        {type === 'contact' && "Submit Callback Request"}
                      </button>
                    </div>

                    <p className="text-center text-[10px] text-neutral-500">
                      🔒 Your safety is prioritized. No credit card required. We will process your response under compliance.
                    </p>
                  </form>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', damping: 10, stiffness: 100 }}
                  >
                    <CheckCircle className="h-16 w-16 text-emerald-500" />
                  </motion.div>
                  <h3 className="mt-5 text-2xl font-bold text-white">Booking Confirmed!</h3>
                  <p className="mt-2 max-w-sm text-sm text-neutral-300">
                    Congratulations, <strong className="text-red-500">{name || 'Athlete'}</strong>! We successfully registered your interest for <span className="font-semibold">{type === 'membership' ? (chosenPlanObj?.name || 'membership') : '1-day trial'}</span> at <strong className="text-red-500">Kunwar Singh Chauraha, Ballia</strong>.
                  </p>

                  <div className="mt-6 rounded-xl bg-[#050505] p-4 border border-white/10 text-left w-full">
                    <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-bold">Your Entry Ticket</span>
                    <div className="mt-1.5 grid grid-cols-2 gap-y-2 text-xs">
                      <div><span className="text-neutral-400">Visitor/Member:</span></div>
                      <div className="text-right text-white font-medium">{phone}</div>
                      <div><span className="text-neutral-400">Class Type:</span></div>
                      <div className="text-right text-red-400 font-medium capitalize">{type.replace('-', ' ')}</div>
                      {type === 'membership' && chosenPlanObj && (
                        <>
                          <div><span className="text-neutral-400">Package Chosen:</span></div>
                          <div className="text-right text-emerald-400 font-bold">{chosenPlanObj.price}</div>
                        </>
                      )}
                      {type === 'free-trial' && (
                        <>
                          <div><span className="text-neutral-400">Valid Date:</span></div>
                          <div className="text-right text-emerald-400 font-bold">{preferredDate}</div>
                        </>
                      )}
                    </div>
                  </div>

                  <p className="mt-6 text-xs text-neutral-400">
                    📞 Our coaching desk is actively preparing your slot. Show this confirmation ticket or text at Krishi Bhawan, and our trainers will guide you!
                  </p>

                  <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full">
                    <button
                      onClick={onClose}
                      className="flex-1 rounded-lg border border-white/10 bg-[#050505] py-2.5 text-xs font-semibold text-neutral-300 transition-colors hover:bg-[#141414] hover:text-white"
                    >
                      Dismiss Ticket
                    </button>
                    <a
                      href={`https://wa.me/${GYM_DETAILS.whatsapp.replace('+', '')}?text=Hi%20Health%20Club%20Gym%20Ballia!%20I%20just%20booked%20my%20slot%20(${type})%20online.%20See%20you%20soon!`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 py-2.5 text-xs font-bold text-white transition-all shadow-lg shadow-emerald-600/10"
                    >
                      <span>Ping on WhatsApp</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

interface LeadDashboardProps {
  onClose: () => void;
  onRefreshTrigger?: number;
}

export function LeadDashboard({ onClose, onRefreshTrigger }: LeadDashboardProps) {
  const [leads, setLeads] = useState<LeadSubmission[]>([]);

  const loadLeads = () => {
    const stored = localStorage.getItem('gym_leads');
    if (stored) {
      setLeads(JSON.parse(stored));
    } else {
      setLeads([]);
    }
  };

  useEffect(() => {
    loadLeads();
  }, [onRefreshTrigger]);

  const handleDelete = (id: string) => {
    const fresh = leads.filter(l => l.id !== id);
    localStorage.setItem('gym_leads', JSON.stringify(fresh));
    setLeads(fresh);
  };

  const handleClearAll = () => {
    if (window.confirm("Do you want to clear your local demo submission logs?")) {
      localStorage.removeItem('gym_leads');
      setLeads([]);
    }
  };

  return (
    <div className="border border-white/10 rounded-2xl bg-[#0a0a0a] p-6 shadow-xl">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-red-600/20 text-red-500 flex items-center justify-center">
            <ClipboardList className="h-4.5 w-4.5" />
          </div>
          <div>
            <h4 className="font-bold text-white text-base">Your Booking Submissions</h4>
            <p className="text-xs text-neutral-500">Demo leads tracker (saved in browser localstorage)</p>
          </div>
        </div>
        {leads.length > 0 && (
          <button
            onClick={handleClearAll}
            className="text-xs text-neutral-500 hover:text-red-400 underline transition-colors"
          >
            Clear Ledger
          </button>
        )}
      </div>

      <div className="mt-4 max-h-[300px] overflow-y-auto space-y-3 pr-2 scrollbar-thin">
        {leads.length === 0 ? (
          <div className="py-8 text-center text-xs text-neutral-500 italic bg-[#050505]/60 rounded-xl border border-dashed border-white/10">
            No active registrations submitted yet. Click any "Join Now" or "Free Trial" button above to register!
          </div>
        ) : (
          leads.map((l) => (
            <div key={l.id} className="relative rounded-xl bg-[#050505] border border-white/10 p-4 hover:border-red-500/30 transition-all group">
              <button
                onClick={() => handleDelete(l.id)}
                className="absolute top-3 right-3 text-neutral-500 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                title="Delete Entry"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="flex items-center gap-2 mb-1.5">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  l.type === 'free-trial' ? 'bg-amber-500/15 text-amber-400' :
                  l.type === 'membership' ? 'bg-emerald-500/15 text-emerald-400' :
                  'bg-sky-500/15 text-sky-400'
                } uppercase tracking-wider`}>
                  {l.type.replace('-', ' ')}
                </span>
                <span className="text-[10px] text-neutral-500">
                  {new Date(l.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
              <p className="text-sm font-bold text-white">{l.name}</p>
              <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-neutral-400">
                <span className="flex items-center gap-1">📞 {l.phone}</span>
                {l.email && <span className="flex items-center gap-1">✉️ {l.email}</span>}
              </div>
              {l.message && (
                <p className="mt-2 text-xs italic bg-[#0a0a0a]/40 p-2 rounded border border-white/10 text-neutral-300">
                  "{l.message}"
                </p>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
