export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface Tour {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
}

export interface Vehicle {
  id: string;
  name: string;
  type: string;
  capacity: string;
  features: string[];
  image: string;
}

export interface Translation {
  nav: NavItem[];
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    whatsapp: string;
  };
  services: {
    title: string;
    list: Service[];
  };
  tours: {
    title: string;
    list: Tour[];
  };
  fleet: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    list: Vehicle[];
  };
  booking: {
    title: string;
    fields: {
      date: string;
      time: string;
      pickup: string;
      destination: string;
      passengers: string;
      serviceType: string;
    };
    submit: string;
  };
  whyUs: {
    title: string;
    reasons: string[];
  };
  testimonials: {
    title: string;
    list: Testimonial[];
  };
  footer: {
    tagline: string;
    contact: string;
    rights: string;
  };
  gallery: {
    title: string;
    images: string[];
  };
}
