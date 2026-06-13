import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, PlusCircle, Sparkles, Check, CheckCircle2 } from 'lucide-react';
import { Review } from '../types';
import { REVIEWS } from '../data';

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>(REVIEWS);
  const [showForm, setShowForm] = useState(false);
  
  // Form State
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [text, setText] = useState('');
  const [role, setRole] = useState('New Member');
  const [isSuccess, setIsSuccess] = useState(false);

  // Load local reviews
  useEffect(() => {
    const stored = localStorage.getItem('gym_reviews');
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as Review[];
        setReviews([...parsed, ...REVIEWS]);
      } catch (e) {
        // Fallback safely
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;

    const newReview: Review = {
      id: `review_${Date.now()}`,
      name: name.trim(),
      rating,
      role: role.trim() || 'Gym Enthusiast',
      text: text.trim(),
      date: 'Just now',
      avatar: `https://images.unsplash.com/photo-${1535700000000 + Math.floor(Math.random() * 900005)}?auto=format&fit=crop&q=80&w=150`
    };

    // Save
    const stored = localStorage.getItem('gym_reviews');
    const existing: Review[] = stored ? JSON.parse(stored) : [];
    const updated = [newReview, ...existing];
    localStorage.setItem('gym_reviews', JSON.stringify(updated));

    // Update state
    setReviews([newReview, ...reviews]);
    setIsSuccess(true);
    
    // Clear fields
    setName('');
    setText('');
    setRating(5);
    setRole('New Member');

    setTimeout(() => {
      setIsSuccess(false);
      setShowForm(false);
    }, 2000);
  };

  return (
    <section id="reviews" className="relative bg-[#050505] py-20 overflow-hidden border-t border-white/10">
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 h-96 w-96 rounded-full bg-red-600/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title Grid */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-red-500 bg-red-600/10 border border-red-600/30 px-3 py-1">
              GENUINE MEMBER TESTIMONIALS
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
              Loved by <span className="text-red-500">Ballia's</span> Fitness Community
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              We operate under an outstanding 4.7 ★ Average Google Maps rating. Listen to testimonies from actual physical candidates who built healthier, stronger routines here.
            </p>
          </div>

          <button
            onClick={() => setShowForm(!showForm)}
            className="flex-shrink-0 group flex items-center justify-center gap-2 rounded-xl bg-[#0a0a0a] hover:bg-[#141414] px-5 py-3 border border-white/10 text-xs font-bold text-neutral-200 transition-colors"
          >
            <PlusCircle className="h-4.5 w-4.5 text-red-500" />
            <span>Write A Gym Review</span>
          </button>
        </div>

        {/* Dynamic review submission form inside */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden mb-12"
            >
              <div className="max-w-2xl mx-auto rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 md:p-8 shadow-xl">
                {isSuccess ? (
                  <div className="flex flex-col items-center justify-center text-center py-6">
                    <CheckCircle2 className="h-12 w-12 text-emerald-500 animate-bounce" />
                    <h4 className="mt-3 text-lg font-bold text-white uppercase tracking-wider">Review Submitted!</h4>
                    <p className="text-neutral-400 text-xs mt-1">Thank you. Your feedback is displayed instantly on the board.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="text-white font-bold text-base uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="h-4.5 w-4.5 text-red-500" />
                      Share Your Transformation Feedback
                    </h3>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] uppercase font-bold tracking-wider text-neutral-400 mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Ramesh Kumar"
                          required
                          className="w-full rounded-lg border border-white/10 bg-[#050505] px-3 py-2 text-xs text-white placeholder-neutral-500 transition-colors focus:border-red-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase font-bold tracking-wider text-neutral-400 mb-1">
                          Tag / Role Description
                        </label>
                        <input
                          type="text"
                          value={role}
                          onChange={(e) => setRole(e.target.value)}
                          placeholder="e.g. Member for 6 Months"
                          className="w-full rounded-lg border border-white/10 bg-[#050505] px-3 py-2 text-xs text-white placeholder-neutral-500 transition-colors focus:border-red-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-[10px] uppercase font-bold tracking-wider text-neutral-400">
                        Gym Rating
                      </label>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setRating(star)}
                            className="text-neutral-600 hover:text-yellow-400 transition-colors"
                          >
                            <Star
                              className={`h-5 w-5 ${
                                star <= rating ? 'fill-yellow-400 text-yellow-400' : ''
                              }`}
                            />
                          </button>
                        ))}
                        <span className="text-xs font-bold text-neutral-400 ml-2 font-mono">
                          {rating} / 5 stars
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase font-bold tracking-wider text-neutral-400 mb-1">
                        Explain Your Experience
                      </label>
                      <textarea
                        rows={3}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="State what you think of our spacious floor, dumbbells selection, or coordinate trainers at Kunwar Singh Chauraha..."
                        required
                        className="w-full resize-none rounded-lg border border-white/10 bg-[#050505] px-3 py-2 text-xs text-white placeholder-neutral-500 transition-colors focus:border-red-500 focus:outline-none"
                      />
                    </div>

                    <div className="flex justify-end gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setShowForm(false)}
                        className="rounded-lg bg-[#050505] px-4 py-2 border border-white/10 text-xs font-medium text-neutral-400 hover:text-white"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="rounded-lg bg-red-600 hover:bg-red-500 px-5 py-2 text-xs font-extrabold text-white tracking-wider"
                      >
                        Publish Review Now
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Testimonials Review Feed */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 pt-4">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="relative rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 md:p-8 flex flex-col justify-between hover:border-red-500/30 hover:shadow-lg transition-all duration-300"
            >
              {/* Quote mark layout decor */}
              <Quote className="absolute right-6 top-6 h-10 w-10 text-white/5" />

              <div className="space-y-5">
                {/* Visual Rating Row */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < rev.rating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-neutral-800'
                      }`}
                    />
                  ))}
                </div>

                {/* Review Text block */}
                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed italic z-10 relative">
                  "{rev.text}"
                </p>
              </div>

              {/* User Bio Footer */}
              <div className="mt-6 flex items-center gap-3.5 border-t border-neutral-900/80 pt-4">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  referrerPolicy="no-referrer"
                  className="h-10 w-10 rounded-full border border-neutral-800 object-cover bg-neutral-900"
                />
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-white truncate uppercase tracking-wide">
                    {rev.name}
                  </h4>
                  <div className="flex items-center gap-1 text-[10px] text-neutral-500 font-mono mt-0.5">
                    <span>{rev.role}</span>
                    <span>•</span>
                    <span className="text-red-500">{rev.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
