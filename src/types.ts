export interface Vehicle {
  id: string;
  name: string;
  type: string; // e.g. 'Luxury SUV', 'Executive Sedan', etc.
  category: 'SUV' | 'Sedan' | 'Luxury' | 'Economy' | 'Van';
  categories: ('SUV' | 'Sedan' | 'Luxury' | 'Economy' | 'Van')[];
  image: string;
  seats: number;
  transmission: 'Automatic' | 'Manual';
  ac: boolean;
  price: string; // e.g. '₦4,000,000'
  priceDaily?: string; // backwards compatibility
  availability: string; // e.g. 'Ready for Dispatch', 'Available for Booking'
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  stars: number;
  comment: string;
  author: string;
  location: string;
}

export interface Booking {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  pickupDate: string;
  returnDate: string;
  preferredVehicle: string;
  pickupLocation: string;
  message: string;
  status: 'Pending' | 'Confirmed' | 'Completed';
  createdAt: string;
}
