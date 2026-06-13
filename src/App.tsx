import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Facilities from './components/Facilities';
import Plans from './components/Plans';
import Trainers from './components/Trainers';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import FAQs from './components/FAQs';
import Contact from './components/Contact';
import WhatsAppFloating from './components/WhatsAppFloating';
import { RegistrationModal } from './components/Modals';
import { MembershipPlan } from './types';
import { MEMBERSHIP_PLANS, GYM_DETAILS } from './data';
import { Dumbbell, Instagram, Facebook, Youtube, Share2, MapPin, Phone, Mail } from 'lucide-react';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'free-trial' | 'membership' | 'contact'>('free-trial');
  const [selectedPlan, setSelectedPlan] = useState<MembershipPlan | null>(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const openModal = (type: 'free-trial' | 'membership' | 'contact', plan: MembershipPlan | null = null) => {
    setModalType(type);
    setSelectedPlan(plan);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedPlan(null);
  };

  const handleLeadSuccess = () => {
    // Increment tracker to refresh LeadDashboard logs
    setRefreshTrigger(prev => prev + 1);
  };

  const footerQuickLinks = [
    { name: 'Introduction', href: '#about' },
    { name: 'Key Benefits', href: '#why-choose' },
    { name: 'Facilities & Zones', href: '#facilities' },
    { name: 'Membership Rates', href: '#plans' },
    { name: 'Coaching Roster', href: '#trainers' },
    { name: 'Transformation Gallery', href: '#gallery' },
    { name: 'Frequently Asked', href: '#faq' },
  ];

  const handleFooterLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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
    <div className="bg-[#050505] text-neutral-100 font-sans min-h-screen selection:bg-red-600 selection:text-white scroll-smooth leading-normal">
      
      {/* 1. Header Navigation bar */}
      <Navbar
        onJoinClick={() => openModal('membership')}
        onTrialClick={() => openModal('free-trial')}
      />

      {/* 2. Hero Landing zone */}
      <Hero
        onJoinClick={() => openModal('membership')}
        onTrialClick={() => openModal('free-trial')}
      />

      {/* 3. About local description */}
      <About />

      {/* 4. Why Choose Us pillars review */}
      <WhyChooseUs />

      {/* 5. Gym facilities programs */}
      <Facilities onTrialClick={() => openModal('free-trial')} />

      {/* 6. Pricing Packages Grid */}
      <Plans onPlanSelect={(plan) => openModal('membership', plan)} />

      {/* 7. Trainer Coach Roster */}
      <Trainers onContactClick={() => openModal('contact')} />

      {/* 8. Verified Testimonials Feed */}
      <Reviews />

      {/* 9. Interactive Transformation Slider */}
      <Gallery />

      {/* 10. Frequently Asked Questions accordion */}
      <FAQs />

      {/* 11. Maps & Contact Desk Forms with submissions logging */}
      <Contact
        onSuccessSubmit={handleLeadSuccess}
        refreshTrigger={refreshTrigger}
      />

      {/* 12. Footer with navigation index and socials branding */}
      <footer className="bg-[#050505] text-neutral-400 py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14">
            
            {/* Column 1: Brand details */}
            <div className="md:col-span-5 space-y-5">
              <a href="#home" className="flex items-center gap-2 group">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-600">
                  <Dumbbell className="h-5 w-5 text-white" />
                </div>
                <span className="font-sans text-xl font-extrabold tracking-tight text-white uppercase">
                  Health Club <span className="text-red-500">Gym</span>
                </span>
              </a>
              <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed max-w-sm">
                Established as the gold standard of hypertrophy, lean fat loss, and custom body transitions in Ballia. Situated securely inside Krishi Bhawan campus, Kunwar Singh Chauraha.
              </p>
              
              {/* Social Handles */}
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full border border-neutral-850 bg-neutral-950 flex items-center justify-center text-neutral-400 hover:text-red-500 hover:border-red-500/20 transition-all"
                  aria-label="Instagram Handle"
                >
                  <Instagram className="h-4.5 w-4.5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full border border-neutral-850 bg-neutral-950 flex items-center justify-center text-neutral-400 hover:text-red-500 hover:border-red-500/20 transition-all"
                  aria-label="Facebook Handle"
                >
                  <Facebook className="h-4.5 w-4.5" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full border border-neutral-850 bg-neutral-950 flex items-center justify-center text-neutral-400 hover:text-red-500 hover:border-red-500/20 transition-all"
                  aria-label="YouTube Handle"
                >
                  <Youtube className="h-4.5 w-4.5 animate-pulse" />
                </a>
              </div>
            </div>

            {/* Column 2: Quick navigation menu list */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="text-white font-extrabold text-sm uppercase tracking-wider font-mono">
                Brand Directory
              </h4>
              <ul className="space-y-2.5">
                {footerQuickLinks.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href={link.href}
                      onClick={(e) => handleFooterLinkClick(e, link.href)}
                      className="text-xs hover:text-white hover:underline transition-all"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Location details */}
            <div className="md:col-span-4 space-y-4">
              <h4 className="text-white font-extrabold text-sm uppercase tracking-wider font-mono">
                Physical Desk
              </h4>
              <div className="space-y-3 mt-1.5 text-xs">
                <p className="flex items-start gap-2.5 leading-relaxed">
                  <MapPin className="h-4.5 w-4.5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>
                    Krishi Bhawan, Kunwar Singh Chauraha, <br />
                    Ballia, Uttar Pradesh 277001
                  </span>
                </p>
                <p className="flex items-center gap-2.5">
                  <Phone className="h-4.5 w-4.5 text-red-500 flex-shrink-0" />
                  <a href={`tel:${GYM_DETAILS.phone}`} className="hover:text-white transition-colors font-semibold">
                    {GYM_DETAILS.phone}
                  </a>
                </p>
                <p className="flex items-center gap-2.5">
                  <Mail className="h-4.5 w-4.5 text-red-500 flex-shrink-0" />
                  <a href={`mailto:${GYM_DETAILS.email}`} className="hover:text-white transition-colors truncate">
                    {GYM_DETAILS.email}
                  </a>
                </p>
              </div>
            </div>

          </div>

          <div className="border-t border-neutral-900 mt-14 pt-8 text-center flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-600">
            <p>
              Copyright © 2026 {GYM_DETAILS.name}. All Rights Reserved.
            </p>
            <p className="flex items-center gap-1">
              <span>Made with premium fitness standards in Ballia, Uttar Pradesh</span>
            </p>
          </div>
        </div>
      </footer>

      {/* 13. Dynamic modal registry ticket overlays */}
      <RegistrationModal
        isOpen={modalOpen}
        onClose={closeModal}
        type={modalType}
        selectedPlan={selectedPlan}
        allPlans={MEMBERSHIP_PLANS}
        onSubmitSuccess={handleLeadSuccess}
      />

      {/* 14. Pulsing Floating WhatsApp button */}
      <WhatsAppFloating />

    </div>
  );
}
