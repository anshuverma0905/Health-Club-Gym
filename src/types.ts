export interface Trainer {
  id: string;
  name: string;
  role: string;
  experience: string;
  image: string;
  specialties: string[];
  bio: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  price: string;
  rawPrice: number;
  duration: string;
  perks: string[];
  popular: boolean;
  tagline: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  role: string;
  date: string;
  avatar: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  iconName: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  beforeImage?: string;
  afterImage?: string;
  image?: string;
  type: 'transformation' | 'workout';
  caption: string;
}

export interface LeadSubmission {
  id: string;
  name: string;
  phone: string;
  email?: string;
  type: 'free-trial' | 'membership' | 'contact';
  planId?: string;
  message?: string;
  createdAt: string;
}
