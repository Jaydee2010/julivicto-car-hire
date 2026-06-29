export interface Vehicle {
  id: string;
  name: string;
  type: string; // 'Sedan' | 'SUV' | 'Luxury' | 'Bus' | etc.
  image: string;
  seats: number;
  transmission: 'Automatic' | 'Manual';
  ac: boolean;
  priceDaily: string; // placeholder text or formatted price e.g., '₦60,000' or 'Contact for Pricing'
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
