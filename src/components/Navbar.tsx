import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Dumbbell, Phone, Sparkles } from 'lucide-react';
import { GYM_DETAILS } from '../data';

interface NavbarProps {
  onJoinClick: () => void;
  onTrialClick: () => void;
}

export default function Navbar({ onJoinClick, onTrialClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll listeners
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section highlight
      const sections = ['home', 'about', 'why-choose', 'facilities', 'plans', 'trainers', 'gallery', 'faq', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Benefits', href: '#why-choose', id: 'why-choose' },
    { name: 'Facilities', href: '#facilities', id: 'facilities' },
    { name: 'Plans', href: '#plans', id: 'plans' },
    { name: 'Coaches', href: '#trainers', id: 'trainers' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#050505]/95 backdrop-blur-md border-b border-white/10 py-3.5 shadow-lg shadow-black/60'
            : 'bg-gradient-to-b from-black/90 to-transparent py-5.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="flex items-center gap-2.5 group"
            >
              <div className="relative flex h-8 w-8 items-center justify-center bg-red-600 rounded-sm rotate-45 transition-all duration-300 group-hover:bg-red-700 group-hover:rotate-[90deg] shadow-lg shadow-red-600/10">
                <div className="-rotate-45 font-sans font-black text-xs text-white">HG</div>
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-lg font-extrabold tracking-tight text-white uppercase sm:text-xl">
                  Health Club <span className="text-red-500">Gym</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-neutral-400">
                  Ballia • UP
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative px-3 py-1.5 text-xs xl:text-sm font-semibold tracking-wide transition-colors ${
                    activeSection === link.id
                      ? 'text-white'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {link.name}
                  {activeSection === link.id && (
                    <motion.span
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-red-600 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </nav>

            {/* CTA Actions */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${GYM_DETAILS.phone}`}
                className="flex items-center gap-2 px-3 py-2 text-xs font-bold text-neutral-300 hover:text-white transition-colors"
                title="Call Gym Desk"
              >
                <Phone className="h-4 w-4 text-red-500 animate-pulse" />
                <span className="hidden md:inline">{GYM_DETAILS.phone}</span>
              </a>

              <button
                onClick={onTrialClick}
                className="rounded-lg border border-neutral-800 bg-neutral-900/60 px-4 py-2 text-xs font-bold text-neutral-300 transition-colors hover:border-red-500/20 hover:bg-neutral-800"
              >
                Free Trial
              </button>

              <button
                onClick={onJoinClick}
                className="group flex items-center gap-1.5 rounded-lg bg-red-600 px-4.5 py-2 text-xs font-bold text-white shadow-lg shadow-red-600/10 transition-all hover:bg-red-500 hover:shadow-red-500/30"
              >
                <Sparkles className="h-3.5 w-3.5" />
                <span>Join Now</span>
              </button>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden rounded-lg bg-neutral-900 border border-neutral-800 p-2 text-neutral-400 hover:text-white transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/80 lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-[300px] border-l border-white/10 bg-[#050505] p-6 flex flex-col justify-between shadow-2xl lg:hidden"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-6">
                  <div className="flex items-center gap-2 bg-[#050505]">
                    <Dumbbell className="h-5 w-5 text-red-500" />
                    <span className="font-extrabold text-white text-base tracking-tight uppercase">Health Club</span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-full border border-neutral-800 p-1.5 text-neutral-400 hover:text-white"
                  >
                    <X className="h-4.5 w-4.5" />
                  </button>
                </div>

                <nav className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`flex items-center py-2.5 px-4 rounded-xl text-sm font-semibold tracking-wide transition-all ${
                        activeSection === link.id
                          ? 'bg-red-500/10 border-l-2 border-red-500 text-red-500 pl-4'
                          : 'text-neutral-400 hover:bg-neutral-900 pl-3'
                      }`}
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="border-t border-neutral-900 pt-6 space-y-3">
                <a
                  href={`tel:${GYM_DETAILS.phone}`}
                  className="flex items-center justify-center gap-2 rounded-xl bg-neutral-950 border border-neutral-800 py-3 text-xs font-bold text-neutral-300"
                >
                  <Phone className="h-4 w-4 text-red-500" />
                  {GYM_DETAILS.phone}
                </a>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onTrialClick();
                    }}
                    className="rounded-xl border border-neutral-800 bg-neutral-900/60 py-3 text-xs font-bold text-white"
                  >
                    Free Trial
                  </button>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onJoinClick();
                    }}
                    className="rounded-xl bg-red-600 py-3 text-xs font-extrabold text-white"
                  >
                    Join Gym
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
