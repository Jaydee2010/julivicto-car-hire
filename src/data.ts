import { Vehicle, Service, Feature, Testimonial } from './types';

export const VEHICLES: Vehicle[] = [
  {
    id: 'toyota-corolla',
    name: 'Toyota Corolla',
    type: 'Sedan',
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80&w=600',
    seats: 5,
    transmission: 'Automatic',
    ac: true,
    priceDaily: '₦45,000',
    description: 'Compact, efficient, and highly dependable. Ideal for city driving and daily commutes around Abuja.'
  },
  {
    id: 'toyota-camry',
    name: 'Toyota Camry',
    type: 'Executive Sedan',
    image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&q=80&w=600',
    seats: 5,
    transmission: 'Automatic',
    ac: true,
    priceDaily: '₦60,000',
    description: 'A blend of comfort and style. Equipped with executive seating and premium entertainment features.'
  },
  {
    id: 'lexus-rx-350',
    name: 'Lexus RX 350',
    type: 'Luxury Crossover',
    image: '/src/assets/images/lexus_rx_350_1782757105062.jpg',
    seats: 5,
    transmission: 'Automatic',
    ac: true,
    priceDaily: '₦120,000',
    description: 'Prestige crossover combining high-end luxury interiors with absolute driving sophistication.'
  },
  {
    id: 'toyota-prado',
    name: 'Toyota Prado',
    type: 'Luxury SUV',
    image: '/src/assets/images/toyota_prado_1782757076892.jpg',
    seats: 7,
    transmission: 'Automatic',
    ac: true,
    priceDaily: '₦180,000',
    description: 'Executive SUV commanding a powerful road presence. Perfect for business trips, official delegations, and rough terrain.'
  },
  {
    id: 'mercedes-benz-e-class',
    name: 'Mercedes-Benz E-Class',
    type: 'Luxury Sedan',
    image: '/src/assets/images/mercedes_e_class_1782757090850.jpg',
    seats: 5,
    transmission: 'Automatic',
    ac: true,
    priceDaily: '₦150,000',
    description: 'The epitome of corporate elegance and European sophistication. Preferred for high-profile executive transport.'
  },
  {
    id: 'toyota-hiace-bus',
    name: 'Toyota Hiace Bus',
    type: 'Executive Shuttle',
    image: '/src/assets/images/toyota_hiace_bus_1782757121250.jpg',
    seats: 14,
    transmission: 'Manual',
    ac: true,
    priceDaily: '₦100,000',
    description: 'Spacious, air-conditioned, and fully optimized for crew logistics, wedding parties, and group tours.'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'self-drive',
    title: 'Self-Drive Car Hire',
    description: 'Enjoy the freedom and flexibility of driving yourself with our selection of pristine, reliable sedans and SUVs.',
    iconName: 'Key'
  },
  {
    id: 'chauffeur',
    title: 'Chauffeur Services',
    description: 'Sit back and relax while our highly trained, vetted, and security-conscious drivers navigate Abuja\'s roads.',
    iconName: 'UserCheck'
  },
  {
    id: 'corporate-leasing',
    title: 'Corporate Car Leasing',
    description: 'Customized fleet solutions designed for corporate entities, diplomatic missions, and non-profit organizations.',
    iconName: 'Briefcase'
  },
  {
    id: 'airport-transfer',
    title: 'Airport Transfers',
    description: 'Punctual, executive pick-ups and drop-offs to and from Nnamdi Azikiwe International Airport, Abuja.',
    iconName: 'PlaneTakeoff'
  },
  {
    id: 'wedding-transport',
    title: 'Wedding Transportation',
    description: 'Add elegance to your special day with coordinated luxury convoys featuring pristine luxury sedans and SUVs.',
    iconName: 'Heart'
  },
  {
    id: 'long-term',
    title: 'Long-Term Vehicle Leasing',
    description: 'Affordable long-term lease options spanning months or years, complete with full maintenance support.',
    iconName: 'CalendarRange'
  }
];

export const FEATURES: Feature[] = [
  {
    id: 'reliable',
    title: 'Reliable & Trustworthy Service',
    description: 'Your safety, absolute punctuality, and comfort are our foundational business pillars.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'affordable',
    title: 'Affordable Pricing',
    description: 'Highly competitive and fully transparent pricing structures with absolutely no hidden charges.',
    iconName: 'DollarSign'
  },
  {
    id: 'executive',
    title: 'Executive Vehicles',
    description: 'A premium, late-model fleet maintained to the absolute highest mechanical and aesthetic standards.',
    iconName: 'Award'
  },
  {
    id: 'flexible',
    title: 'Flexible Rental Plans',
    description: 'Tailored rental plans (daily, weekly, or monthly) custom-designed around your unique logistics schedule.',
    iconName: 'Sliders'
  },
  {
    id: 'drivers',
    title: 'Professional Drivers',
    description: 'Highly experienced, discreet, and polite chauffeurs with intimate knowledge of Abuja and nationwide highways.',
    iconName: 'Users'
  },
  {
    id: 'booking',
    title: 'Fast & Easy Booking',
    description: 'Seamless booking interface accompanied by prompt confirmations and custom WhatsApp client support.',
    iconName: 'Zap'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    stars: 5,
    comment: 'Very reliable and trustworthy.',
    author: 'Joshua David',
    location: 'Garki, Abuja'
  },
  {
    id: 'test-2',
    stars: 5,
    comment: 'The airport pickup was seamless. The driver was on time, professional, and the Lexus RX was spotless. Will definitely use Julivicto Logistics again!',
    author: 'Amina Bello',
    location: 'Maitama, Abuja'
  },
  {
    id: 'test-3',
    stars: 5,
    comment: 'We leased three Toyota Hiace buses for our corporate event in Abuja. Outstanding logistics coordination and professional service throughout.',
    author: 'Chinedu Okafor',
    location: 'Wuse II, Abuja'
  }
];
