export type Faq = {
  question: string;
  answer: string;
};

export type Region = {
  slug: string;
  city: string;
  state: string;
  stateCode: string;
  heroImage: string;
  imageAlt: string;
  imagePrompt: string;
  title: string;
  description: string;
  serviceAreaNote: string;
  localSignals: string[];
  acceptedCategories: string[];
  donationRecyclingNote: string;
  commonScenarios: string[];
  faqs: Faq[];
  bookingTracking: {
    campaign: string;
    region: string;
  };
  approved: boolean;
};

export type JunkItem = {
  slug: string;
  name: string;
  title: string;
  description: string;
  heroImage: string;
  imageAlt: string;
  bookingIntent: string;
  prepNotes: string[];
  faqs: Faq[];
};
