import { Vehicle, Service, Feature, Testimonial } from './types';
import lexusImg from './assets/images/lexus_rx_350_1782757105062.jpg';
import pradoImg from './assets/images/toyota_prado_1782757076892.jpg';
import mercedesImg from './assets/images/mercedes_e_class_1782757090850.jpg';
import hiaceImg from './assets/images/toyota_hiace_bus_1782757121250.jpg';

export const VEHICLES: Vehicle[] = [
  {
    id: 'lamborghini-urus',
    name: 'Lamborghini Urus',
    type: 'Super Luxury Exotic SUV',
    category: 'Luxury',
    categories: ['Luxury', 'SUV'],
    image: '/assets/aistudio/ChatGPT_Image_Nov_8__2026__03_14_15_AM_9970da25.jpg',
    seats: 5,
    transmission: 'Automatic',
    ac: true,
    price: '₦4,000,000',
    priceDaily: '₦4,000,000',
    availability: 'Available for Immediate Dispatch',
    description: 'Commanding twin-turbo V8 Italian Super SUV finished in signature Giallo Auge yellow. Unrivalled exotic road presence, dynamic poise, and high-performance prestige in Abuja.'
  },
  {
    id: 'rolls-royce-ghost',
    name: 'Rolls-Royce Ghost',
    type: 'Ultra-Luxury Executive Saloon',
    category: 'Luxury',
    categories: ['Luxury', 'Sedan'],
    image: '/assets/aistudio/ChatGPT_Image_Nov_8__2026__03_26_20_AM_19e67add.jpg',
    seats: 5,
    transmission: 'Automatic',
    ac: true,
    price: '₦4,000,000',
    priceDaily: '₦4,000,000',
    availability: 'Available for Immediate Dispatch',
    description: 'The pinnacle of bespoke British automotive opulence. Featuring signature two-tone finish, whisper-quiet cabin acoustics, starlight headliner, and effortless chauffeur prestige.'
  },
  {
    id: 'mercedes-benz-g-class',
    name: 'Mercedes-Benz G-Class',
    type: 'Luxury Executive SUV',
    category: 'SUV',
    categories: ['Luxury', 'SUV'],
    image: '/assets/aistudio/ChatGPT_Image_Nov_8__2026__03_26_08_AM_eb8e7a3d.jpg',
    seats: 5,
    transmission: 'Automatic',
    ac: true,
    price: '₦1,500,000',
    priceDaily: '₦1,500,000',
    availability: 'Available for Immediate Dispatch',
    description: 'The iconic G-Wagon in striking matte black with aggressive bull-bar styling. Masterclass in robust luxury, sovereign off-road heritage, and elite VIP status.'
  },
  {
    id: 'toyota-land-cruiser',
    name: 'Toyota Land Cruiser',
    type: 'Flagship Executive VIP SUV',
    category: 'SUV',
    categories: ['Luxury', 'SUV'],
    image: '/assets/aistudio/ChatGPT_Image_Nov_8__2026__03_27_03_AM_ce0b1f6e.jpg',
    seats: 7,
    transmission: 'Automatic',
    ac: true,
    price: '₦1,700,000',
    priceDaily: '₦1,700,000',
    availability: 'Available for Immediate Dispatch',
    description: 'Abuja’s most trusted VIP motorcade flagship SUV in deep gloss black. Unmatched bulletproof reliability, sovereign road presence, and expansive luxury.'
  },
  {
    id: 'lexus-lx-570',
    name: 'Lexus LX 570',
    type: 'Flagship Luxury SUV',
    category: 'SUV',
    categories: ['Luxury', 'SUV'],
    image: '/assets/aistudio/ChatGPT_Image_Nov_8__2026__04_48_47_AM_f41ce798.jpg',
    seats: 7,
    transmission: 'Automatic',
    ac: true,
    price: '₦1,500,000',
    priceDaily: '₦1,500,000',
    availability: 'Available for Immediate Dispatch',
    description: 'Commanding V8 flagship luxury SUV boasting the iconic spindle grille, sumptuous hand-stitched leather cabin, hydraulic adaptive suspension, and sovereign VIP escort stature.'
  },
  {
    id: 'mercedes-benz-s-class',
    name: 'Mercedes-Benz S-Class',
    type: 'Executive Luxury Sedan',
    category: 'Sedan',
    categories: ['Luxury', 'Sedan'],
    image: '/assets/aistudio/ChatGPT_Image_Nov_8__2026__03_27_46_AM_a3d26b88.jpg',
    seats: 5,
    transmission: 'Automatic',
    ac: true,
    price: '₦250,000',
    priceDaily: '₦250,000',
    availability: 'Available for Immediate Dispatch',
    description: 'The global benchmark for full-size luxury sedans. Equipped with intelligent 4MATIC drive, executive rear passenger comfort, and refined German styling.'
  },
  {
    id: 'toyota-land-cruiser-prado',
    name: 'Toyota Land Cruiser Prado',
    type: 'Executive 4x4 SUV',
    category: 'SUV',
    categories: ['SUV'],
    image: '/assets/aistudio/ChatGPT_Image_Nov_8__2026__04_49_15_AM_3f697f22.jpg',
    seats: 7,
    transmission: 'Automatic',
    ac: true,
    price: '₦150,000',
    priceDaily: '₦150,000',
    availability: 'Available for Immediate Dispatch',
    description: 'Muscular full-size 4WD luxury SUV in gloss black. Built for effortless command of Abuja expressways, diplomatic convoys, rugged terrain excursions, and commanding road presence.'
  },
  {
    id: 'mercedes-benz-sprinter-3500-xd',
    name: 'Mercedes-Benz Sprinter 3500 XD',
    type: 'VIP Executive Jet-Van',
    category: 'Luxury',
    categories: ['Luxury', 'Van'],
    image: '/assets/aistudio/ChatGPT_Image_Nov_8__2026__04_48_16_AM_6568d5c2.jpg',
    seats: 10,
    transmission: 'Automatic',
    ac: true,
    price: '₦1,500,000',
    priceDaily: '₦1,500,000',
    availability: 'Available for Immediate Dispatch',
    description: 'Ultra-luxury custom executive coach finished in jet black with dual-zone climate control, captain lounge seating, privacy partition, and prestige road dominance for VIP dignitaries and state motorcades.'
  },
  {
    id: 'toyota-granvia-luxury-van',
    name: 'Toyota Granvia Luxury Van',
    type: 'VIP Executive MPV',
    category: 'Luxury',
    categories: ['Luxury', 'Van'],
    image: '/assets/aistudio/ChatGPT_Image_Nov_8__2026__04_48_23_AM_542cdbc9.jpg',
    seats: 6,
    transmission: 'Automatic',
    ac: true,
    price: '₦1,000,000',
    priceDaily: '₦1,000,000',
    availability: 'Available for Immediate Dispatch',
    description: 'Top-tier luxury MPV featuring massive chrome grille styling, power Ottoman captain recliners, dual sliding power doors, and ultra-quiet cabin refinement for first-class executive transit.'
  },
  {
    id: 'mercedes-benz-v-class',
    name: 'Mercedes-Benz V-Class',
    type: 'Executive VIP MPV / Van',
    category: 'Van',
    categories: ['Van', 'Luxury'],
    image: '/assets/aistudio/ChatGPT_Image_Nov_8__2026__03_26_33_AM_6b4cdf7b.jpg',
    seats: 7,
    transmission: 'Automatic',
    ac: true,
    price: '₦1,000,000',
    priceDaily: '₦1,000,000',
    availability: 'Available for Immediate Dispatch',
    description: 'First-class corporate shuttle van with generous passenger room, executive conference-style leather seating, and premier airport transfer comfort.'
  },
  {
    id: 'mercedes-benz-vito',
    name: 'Mercedes-Benz Vito',
    type: 'Executive Shuttle MPV',
    category: 'Luxury',
    categories: ['Luxury', 'Van'],
    image: '/assets/aistudio/ChatGPT_Image_Nov_8__2026__04_48_39_AM_4ab0c88a.jpg',
    seats: 8,
    transmission: 'Automatic',
    ac: true,
    price: '₦1,000,000',
    priceDaily: '₦1,000,000',
    availability: 'Available for Immediate Dispatch',
    description: 'Premium Mercedes-Benz Tourer finished in deep obsidian black. Designed for high-comfort executive passenger transfers, corporate board delegations, and bespoke private travel.'
  },
  {
    id: 'toyota-camry',
    name: 'Toyota Camry',
    type: 'Executive Mid-Size Sedan',
    category: 'Sedan',
    categories: ['Sedan'],
    image: '/assets/aistudio/ChatGPT_Image_Nov_8__2026__04_48_30_AM_b72e47e9.jpg',
    seats: 5,
    transmission: 'Automatic',
    ac: true,
    price: '₦130,000',
    priceDaily: '₦130,000',
    availability: 'Available for Immediate Dispatch',
    description: 'Distinguished executive sedan in deep royal blue. Offers plush ergonomics, whisper-quiet cabin ride, advanced safety suite, and effortless manoeuvrability for Abuja business appointments.'
  },
  {
    id: 'toyota-corolla',
    name: 'Toyota Corolla',
    type: 'Compact Executive Sedan',
    category: 'Sedan',
    categories: ['Sedan', 'Economy'],
    image: '/assets/aistudio/ChatGPT_Image_Nov_8__2026__04_48_57_AM_84d76ae4.jpg',
    seats: 5,
    transmission: 'Automatic',
    ac: true,
    price: '₦100,000',
    priceDaily: '₦100,000',
    availability: 'Available for Immediate Dispatch',
    description: 'Impeccable silver executive sedan providing reliable comfort, chilled dual climate conditioning, modern infotainment, and economic urban mobility throughout the Federal Capital Territory.'
  },
  {
    id: 'toyota-hiace-van',
    name: 'Toyota Hiace Van',
    type: 'Executive High-Roof Van',
    category: 'Van',
    categories: ['Van'],
    image: '/assets/aistudio/ChatGPT_Image_Nov_8__2026__04_48_08_AM_2b325985.jpg',
    seats: 14,
    transmission: 'Manual',
    ac: true,
    price: '₦150,000',
    priceDaily: '₦150,000',
    availability: 'Available for Immediate Dispatch',
    description: 'High-roof 14-seater executive commuter van in pristine white. Exceptional air conditioning, elevated luggage capacity, and trusted reliability for corporate groups, delegations, and airport transit across Abuja.'
  },
  {
    id: 'toyota-coaster-bus',
    name: 'Toyota Coaster Bus',
    type: 'Executive Passenger Midibus',
    category: 'Van',
    categories: ['Van'],
    image: '/assets/aistudio/ChatGPT_Image_Nov_8__2026__04_49_25_AM_da175530.jpg',
    seats: 30,
    transmission: 'Manual',
    ac: true,
    price: '₦200,000',
    priceDaily: '₦200,000',
    availability: 'Available for Immediate Dispatch',
    description: 'High-capacity 30-passenger executive midibus with dual air conditioning, reclining passenger seating, tinted privacy glazing, and high-volume luggage storage for large group logistics.'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'luxury-rentals',
    title: 'Luxury Car Rentals',
    description: 'Experience prestige and uncompromising comfort with our elite fleet of luxury SUVs, executive sedans, and exotic supercars.',
    iconName: 'Key'
  },
  {
    id: 'chauffeur-services',
    title: 'Executive Chauffeur Services',
    description: 'Travel with complete peace of mind guided by discreet, professionally trained, and security-vetted executive chauffeurs.',
    iconName: 'UserCheck'
  },
  {
    id: 'corporate-leasing',
    title: 'Corporate Vehicle Leasing',
    description: 'Bespoke fleet management packages tailored for corporate entities, diplomatic organizations, and multinational executives.',
    iconName: 'Briefcase'
  },
  {
    id: 'airport-transfers',
    title: 'Airport Transfers',
    description: 'Punctual, seamless pick-ups and drop-offs to and from Nnamdi Azikiwe International Airport with optional VIP tarmac escort.',
    iconName: 'PlaneTakeoff'
  },
  {
    id: 'long-term-leasing',
    title: 'Long-Term Car Leasing',
    description: 'Flexible, cost-effective monthly and annual vehicle lease contracts with comprehensive preventative maintenance included.',
    iconName: 'CalendarRange'
  },
  {
    id: 'special-occasions',
    title: 'Special Occasion Transportation',
    description: 'Make a timeless statement at high-profile galas, luxury weddings, and VIP private events with coordinated luxury convoys.',
    iconName: 'Heart'
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
