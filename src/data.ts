import { Trainer, MembershipPlan, Review, FAQ, Facility, GalleryItem } from './types';

export const GYM_DETAILS = {
  name: "Health Club Gym",
  tagline: "Transform Your Body, Transform Your Life",
  rating: 4.7,
  reviewsCount: 34,
  location: "Kunwar Singh Chauraha, Ballia, Uttar Pradesh 277001",
  landmark: "Krishi Bhawan",
  phone: "+91 94512 34567",
  whatsapp: "+919451234567",
  email: "info@healthclubgymballia.com",
  openingHours: {
    weekdays: "5:00 AM - 10:00 AM & 4:00 PM - 9:00 PM",
    sunday: "6:00 AM - 10:00 AM"
  },
  category: "Fitness Center & Gym"
};

export const FACILITIES: Facility[] = [
  {
    id: "strength-training",
    title: "Strength Training",
    description: "Equipped with heavy-duty power racks, Olympic plates, and a complete line of premium dumbbells from 2.5kg to 50kg for intense muscle building.",
    iconName: "Dumbbell",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "cardio-zone",
    title: "Cardio Zone",
    description: "Multiple high-grade treadmills, spin bikes, and elliptical trainers to burn off stubborn fat and boost your cardiovascular stamina.",
    iconName: "Activity",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "weight-loss",
    title: "Weight Loss Programs",
    description: "Result-oriented structural plans integrating High-Intensity Interval Training (HIIT) with tailored caloric deficit diet guidelines.",
    iconName: "TrendingDown",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "muscle-building",
    title: "Muscle Building",
    description: "Highly focused training focusing on hypertrophy, custom routines, progressive overload tracker, and accurate macro coaching.",
    iconName: "Award",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "personal-training",
    title: "Personal Training",
    description: "Get dedicated 1-on-1 attention from our certified coaches to perfect form, maintain accountability, and accelerate results.",
    iconName: "Users",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "functional-training",
    title: "Functional Training",
    description: "Enhance daily movement habits, flexibility, core strength, and physical balance through kettlebells, battle ropes, and resistance bands.",
    iconName: "Sparkles",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "fitness-assessment",
    title: "Fitness Assessment",
    description: "Periodic analysis tracking Body Mass Index (BMI), fat percentage, skeletal muscle weight, and custom physical flexibility diagnostics.",
    iconName: "ClipboardCheck",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800"
  }
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: "plan-monthly",
    name: "Monthly Plan",
    price: "₹1,200",
    rawPrice: 1200,
    duration: "1 Month",
    tagline: "Great choice for temporary visitors & beginners in Ballia.",
    perks: [
      "Full Gym Floor Access",
      "Free Cardio Zone Access",
      "Modern Equipment Usage",
      "Lockers & Shower Access",
      "General Trainer Guidance",
      "High-Speed Wi-Fi"
    ],
    popular: false
  },
  {
    id: "plan-quarterly",
    name: "Quarterly Plan",
    price: "₹3,200",
    rawPrice: 3200,
    duration: "3 Months",
    tagline: "Perfect duration to start building habits and seeing changes.",
    perks: [
      "All perks of Monthly Plan",
      "2 One-on-One personal sessions",
      "Customized Aerobics/HIIT classes",
      "Custom Workout & Routine Chart",
      "Basic Nutritional advice",
      "Save ₹400 over monthly option"
    ],
    popular: false
  },
  {
    id: "plan-yearly",
    name: "Annual Plan",
    price: "₹10,000",
    rawPrice: 10000,
    duration: "12 Months",
    tagline: "Ultimate lifestyle transformation package. Best Value!",
    perks: [
      "All perks of Half-Yearly Plan",
      "Unlimited Nutrition counselor visits",
      "Free Health Club Premium Gym T-Shirt & Shaker",
      "Guaranteed progress tracking review monthly",
      "Free membership Freeze/Sabbatical up to 30 days",
      "Save ₹4,400 over monthly option"
    ],
    popular: true
  },
  {
    id: "plan-half-yearly",
    name: "Half-Yearly Plan",
    price: "₹5,800",
    rawPrice: 5800,
    duration: "6 Months",
    tagline: "Highly recommended for consistent weight loss & body transitions.",
    perks: [
      "All perks of Quarterly Plan",
      "1 Interactive Body Composition Analysis",
      "Detailed Caloric Diet & Macro Chart",
      "Specialized Strength & Conditioning coaching",
      "Priority equipment booking slots",
      "Save ₹1,400 over monthly option"
    ],
    popular: false
  }
];

export const TRAINERS: Trainer[] = [
  {
    id: "trainer-vikram",
    name: "Coach Vikram Singh",
    role: "Head Strength Coach & Nutritionist",
    experience: "8+ Years Experience",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&q=80&w=600",
    specialties: ["Powerlifting", "Hypertrophy Coaching", "Calorie Architecture"],
    bio: "Certified by Gold's Gym Fitness Academy. Coach Vikram has successfully transformed 500+ local citizens in Ballia using state-of-the-art progressive overload templates and personalized food charts."
  },
  {
    id: "trainer-priya",
    name: "Coach Priya Mishra",
    role: "HIIT & Fat Loss Specialist",
    experience: "5+ Years Experience",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&q=80&w=600",
    specialties: ["Cardio Conditioning", "Aerobic Workouts", "Flexibility Dynamics"],
    bio: "M.Sc. in Sports Science and Certified Functional Trainer. Priya specializes in designing fun, high-energy conditioning routines that boost your base metabolic rate and tone lean muscles fast."
  },
  {
    id: "trainer-amit",
    name: "Coach Amit Sharma",
    role: "Advanced Bodybuilding & Conditioning Trainer",
    experience: "6+ Years Experience",
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a25f1?auto=format&fit=crop&q=80&w=600",
    specialties: ["Contest Prep", "Kinz-rehab", "Advanced hypertrophy"],
    bio: "Former State Bodybuilding Silver Medalist. Amit loves helping people overcome plateaus through specialized dropset, rest-pause systems, and orthopedic joint safety alignment techniques."
  }
];

export const REVIEWS: Review[] = [
  {
    id: "review-1",
    name: "Rohit R. Verma",
    rating: 5,
    role: "Member for 8 Months",
    text: "I've been a member for several months and I'm impressed with the facilities and staff. The equipment is well-maintained and trainers are friendly. Cleanliness is top tier in Krishi Bhawan, and there is ample parking space outside Kunwar Singh Chauraha.",
    date: "2 weeks ago",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "review-2",
    name: "Komal Pandey",
    rating: 5,
    role: "Member for 4 Months",
    text: "Joining Health Club Gym has been one of the best decisions for my fitness journey. Great atmosphere and excellent facilities. Coach Priya Mishra has helped me reduce 8 kg of body fat, and the cardio workout area feels extremely motivating and supportive.",
    date: "1 month ago",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "review-3",
    name: "Aditya Pratap Singh",
    rating: 5,
    role: "Member for 1+ Year",
    text: "Really great gym with cooperative trainers and plenty of workout space. They have heavy weights for bodybuilding and are always clean. Best fitness club in Ballia city overall on location, pocket-friendly membership price points, and premium environment.",
    date: "3 weeks ago",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: "gallery-trans-1",
    title: "Abhishek's 12-Week Transformation",
    beforeImage: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=600",
    afterImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600",
    type: "transformation",
    caption: "Lost 14kg fat & Gained Significant Strength under Head Coach Vikram's strict macros protocol."
  },
  {
    id: "gallery-trans-2",
    title: "Nancy's Core Toning Journey",
    beforeImage: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=600",
    afterImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=600",
    type: "transformation",
    caption: "Reduced 10cm waistline and achieved high athletic flexibility within 16 weeks of functional workout sets."
  },
  {
    id: "gallery-gym-1",
    title: "Dumbbell Rack & Free Weight Zone",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
    type: "workout",
    caption: "Our highly organized free weights corner containing world-class raw cast iron and rubberized dumbbells."
  },
  {
    id: "gallery-gym-2",
    title: "Premium Mechanical Cable Stations",
    image: "https://images.unsplash.com/photo-1540206276907-fbd1599b4241?auto=format&fit=crop&q=80&w=800",
    type: "workout",
    caption: "Latest biomechanic cable pulleys to isolate and sculpt your chest, back, biceps, and shoulders safely."
  },
  {
    id: "gallery-gym-3",
    title: "HIIT & Cardio Treadmill Section",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800",
    type: "workout",
    caption: "Sleek cardiorespiratory zone overlooking the main street, rigged with sound dampening impact floor mats."
  },
  {
    id: "gallery-gym-4",
    title: "Deadlift & Powerlifting Platform",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800",
    type: "workout",
    caption: "Dual-layer rubber platform for heavy squats, deadlifts, and overhead presses to prevent joint shocks."
  }
];

export const FAQS: FAQ[] = [
  {
    id: "faq-1",
    question: "What are the timings of Health Club Gym?",
    answer: "We are open 6 days a week! Monday to Saturday, our timings contain two slots: morning 5:00 AM to 10:00 AM, and evening 4:00 PM to 9:00 PM. On Sundays, we are open in the morning from 6:00 AM to 10:00 AM for light conditioning and open workouts."
  },
  {
    id: "faq-2",
    question: "Do you provide personal training options?",
    answer: "Yes, absolutely! We offer highly popular 1-on-1 personal training packages. Our certified trainers (Vikram, Priya, Amit) will map out customized workout charts, analyze body progress metrics weekly, check your performance form, and plan dietary macro charts."
  },
  {
    id: "faq-3",
    question: "Are your programs friendly for absolute beginners?",
    answer: "Definitely! Over 60% of our members started as complete beginners. Our staff provides a detailed physical onboarding session, explaining safe usage of all selectorized machinery and teaching primary lifts with zero joint stress."
  },
  {
    id: "faq-4",
    question: "What membership plans are currently available?",
    answer: "We offer highly cost-effective packages tailored for everyone: Monthly (₹1,200), Quarterly (₹3,200), Half-Yearly (₹5,800), and our best-value Annual Plan (₹10,000). All plans grant access to the complete cardio zone, free weight lockers, and hot showers."
  },
  {
    id: "faq-5",
    question: "Is there proper car and bike parking space available?",
    answer: "Yes! Health Club Gym is located in Krishi Bhawan, Kunwar Singh Chauraha, Ballia, Uttar Pradesh which has a spacious, secure campus. We have free designated parking slots for both motorbikes and cars with active guard presence."
  }
];

export const BENEFITS = [
  {
    title: "Certified Trainers",
    description: "Highly qualified fitness professionals with years of competitive and academic sports health experience.",
    icon: "ShieldAlert"
  },
  {
    title: "Modern Equipment",
    description: "Imported mechanical cable pulleys, robust dual racks, and modern ergonomic treadmills.",
    icon: "Cpu"
  },
  {
    title: "Spacious Workout Area",
    description: "Generous ceiling heights, state-of-the-art impact absorbing platforms, and fresh layout maps.",
    icon: "Grid"
  },
  {
    title: "Personalized Guidance",
    description: "Every member receives a tailored physical split chart matching their personal muscle ratio and medical history.",
    icon: "UserCheck"
  },
  {
    title: "Hygiene & Safety",
    description: "Strict double sanitization protocols, clean locker rooms, fresh water dispensers, and complete ventilation.",
    icon: "Droplets"
  },
  {
    title: "Affordable Plans",
    description: "Unbeatable high-end amenities in Ballia, Uttar Pradesh at very pocket-friendly prices starting at ₹1,200.",
    icon: "PiggyBank"
  }
];
