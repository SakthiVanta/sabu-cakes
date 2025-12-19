// Site-wide data types
export interface SiteData {
  brand: string;
  tagline: string;
  owner: {
    name: string;
    age: number;
    role: string;
    description: string;
  };
  location: {
    address: string;
    city: string;
    state: string;
    area: string;
    mapUrl: string;
  };
  contact: {
    phone: string;
    whatsapp: string;
    email: string;
  };
  hours: {
    weekdays: string;
    weekends: string;
    closed?: string;
  };
  social: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
}

// Cake product type
export interface Cake {
  id: string;
  slug: string;
  name: string;
  description: string;
  detailedDescription: string;
  price: {
    half_kg: number;
    one_kg: number;
    two_kg: number;
  };
  tags: string[];
  category: string;
  ingredients: string[];
  allergens: string[];
  imageUrl: string;
  available: boolean;
  featured: boolean;
  customizable: boolean;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

// SEO metadata type
export interface SEOData {
  [page: string]: {
    title: string;
    description: string;
    keywords: string[];
    openGraph?: {
      title: string;
      description: string;
      image: string;
    };
  };
}

// CTA configuration
export interface CTAConfig {
  primary: CTAButton;
  secondary: CTAButton;
  floating: CTAButton;
  whatsapp: WhatsAppCTA;
}

export interface CTAButton {
  label: string;
  action: "modal" | "whatsapp" | "call";
  modalType?: "order" | "contact" | "custom";
  icon?: string;
}

export interface WhatsAppCTA {
  label: string;
  message: string;
  icon: string;
}

// Form schema types
export interface FormSchema {
  [formName: string]: {
    title: string;
    description?: string;
    fields: FormField[];
    submitLabel: string;
  };
}

export interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "select" | "checkbox" | "radio";
  placeholder?: string;
  required: boolean;
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
  };
  options?: Array<{ value: string; label: string }>;
  source?: string; // Reference to data source for dynamic options
}

// Testimonial type
export interface Testimonial {
  id: string;
  customerName: string;
  rating: number;
  date: string;
  cakeOrdered: string;
  review: string;
  location?: string;
}

// About page data
export interface AboutData {
  title: string;
  sections: Array<{
    heading: string;
    content: string;
    imageUrl?: string;
  }>;
  values: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  journey: Array<{
    year: string;
    milestone: string;
  }>;
}

// Hero section data
export interface HeroData {
  headline: string;
  subheadline: string;
  ctaButtons: Array<{
    label: string;
    action: string;
    variant: "primary" | "secondary" | "outline";
  }>;
  backgroundGradient: string;
  features: string[];
}

// FAQ type
export interface FAQ {
  id: string;
  category: string;
  question: string;
  answer: string;
}

// Footer data
export interface FooterData {
  sections: Array<{
    title: string;
    links: Array<{
      label: string;
      url: string;
    }>;
  }>;
  copyright: string;
  newsletter: {
    title: string;
    placeholder: string;
    buttonLabel: string;
  };
}

// Services data
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}
