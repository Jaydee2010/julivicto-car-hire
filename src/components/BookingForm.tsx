import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { VEHICLES } from '../data';
import { Booking } from '../types';
import { CheckCircle2, Calendar, Shield, HelpCircle, FileText, Send, Clock, Trash2 } from 'lucide-react';

interface BookingFormProps {
  preselectedVehicle: string;
}

export default function BookingForm({ preselectedVehicle }: BookingFormProps) {
  // Booking Form State
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [preferredVehicle, setPreferredVehicle] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [message, setMessage] = useState('');

  // App UI State
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [localBookings, setLocalBookings] = useState<Booking[]>([]);
  const [showHistory, setShowHistory] = useState(false);

  // Auto-select preselected vehicle when prop changes
  useEffect(() => {
    if (preselectedVehicle) {
      setPreferredVehicle(preselectedVehicle);
      // Smooth scroll to form container
      const container = document.getElementById('booking');
      if (container) {
        container.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [preselectedVehicle]);

  // Load bookings from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem('julivicto_bookings');
    if (saved) {
      try {
        setLocalBookings(JSON.parse(saved));
      } catch (e) {
        console.error('Error parsing saved bookings:', e);
      }
    }
  }, []);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!phone.trim()) newErrors.phone = 'Phone number is required';
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Valid email is required';
    if (!pickupDate) newErrors.pickupDate = 'Pickup date is required';
    if (!returnDate) newErrors.returnDate = 'Return date is required';
    if (!preferredVehicle) newErrors.preferredVehicle = 'Please select a vehicle';
    if (!pickupLocation.trim()) newErrors.pickupLocation = 'Pickup location is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Create Booking Object
    const newBooking: Booking = {
      id: `bk-${Date.now()}`,
      fullName,
      phone,
      email,
      pickupDate,
      returnDate,
      preferredVehicle,
      pickupLocation,
      message,
      status: 'Pending',
      createdAt: new Date().toLocaleDateString('en-NG', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    const updatedBookings = [newBooking, ...localBookings];
    setLocalBookings(updatedBookings);
    localStorage.setItem('julivicto_bookings', JSON.stringify(updatedBookings));

    setIsSubmitted(true);
  };

  const handleResetForm = () => {
    setFullName('');
    setPhone('');
    setEmail('');
    setPickupDate('');
    setReturnDate('');
    setPickupLocation('');
    setMessage('');
    setIsSubmitted(false);
  };

  const handleDeleteBooking = (id: string) => {
    const updated = localBookings.filter((bk) => bk.id !== id);
    setLocalBookings(updated);
    localStorage.setItem('julivicto_bookings', JSON.stringify(updated));
  };

  return (
    <section id="booking" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Context details */}
          <div className="lg:col-span-4 space-y-6">
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-gold-400 bg-gold-400/10 px-3.5 py-1.5 rounded-full inline-block">
              Reservation Desk
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Book Your Executive Ride
            </h2>
            <p className="font-sans text-sm text-slate-400 leading-relaxed">
              Complete this reservation form and our Maitama-based car dispatch officers will prepare your custom vehicle and contact you within 15 minutes to confirm booking details.
            </p>

            <div className="space-y-4 pt-6">
              <div className="flex items-center space-x-3 bg-slate-900 border border-white/5 p-4 rounded-xl">
                <Clock className="w-5 h-5 text-gold-400" />
                <div>
                  <h4 className="font-display font-semibold text-sm text-white">Rapid Dispatch</h4>
                  <p className="font-sans text-xs text-slate-400">Confirmation call in 15 minutes</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-slate-900 border border-white/5 p-4 rounded-xl">
                <Shield className="w-5 h-5 text-gold-400" />
                <div>
                  <h4 className="font-display font-semibold text-sm text-white">Fully Secured Data</h4>
                  <p className="font-sans text-xs text-slate-400">Encrypted client booking records</p>
                </div>
              </div>
            </div>

            {/* Local booking history button if any exist */}
            {localBookings.length > 0 && (
              <div className="pt-6">
                <button
                  id="view-bookings-history-toggle"
                  onClick={() => setShowHistory(!showHistory)}
                  className="w-full py-3 px-4 rounded-xl border border-white/10 hover:border-gold-400/30 text-slate-300 hover:text-white font-display text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer bg-slate-900 flex items-center justify-center space-x-2"
                >
                  <FileText className="w-4 h-4 text-gold-400" />
                  <span>{showHistory ? 'Hide My Bookings' : `View My Bookings (${localBookings.length})`}</span>
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Dynamic Form Block */}
          <div className="lg:col-span-8 bg-slate-900 border border-white/10 p-6 sm:p-10 rounded-2xl shadow-2xl">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="booking-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label className="block font-display font-semibold text-xs text-slate-300 uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        id="booking-fullname"
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g., Joshua David"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-white placeholder-slate-600 focus:outline-none focus:border-gold-400 transition-colors ${
                          errors.fullName ? 'border-red-500' : 'border-white/10'
                        }`}
                      />
                      {errors.fullName && <p className="text-red-500 text-xs mt-1 font-sans">{errors.fullName}</p>}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block font-display font-semibold text-xs text-slate-300 uppercase tracking-wider mb-2">
                        Phone Number *
                      </label>
                      <input
                        id="booking-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g., 0706 066 6882"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-white placeholder-slate-600 focus:outline-none focus:border-gold-400 transition-colors ${
                          errors.phone ? 'border-red-500' : 'border-white/10'
                        }`}
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1 font-sans">{errors.phone}</p>}
                    </div>

                    {/* Email Address */}
                    <div>
                      <label className="block font-display font-semibold text-xs text-slate-300 uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        id="booking-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g., mail@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-white placeholder-slate-600 focus:outline-none focus:border-gold-400 transition-colors ${
                          errors.email ? 'border-red-500' : 'border-white/10'
                        }`}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1 font-sans">{errors.email}</p>}
                    </div>

                    {/* Preferred Vehicle */}
                    <div>
                      <label className="block font-display font-semibold text-xs text-slate-300 uppercase tracking-wider mb-2">
                        Preferred Vehicle *
                      </label>
                      <select
                        id="booking-vehicle"
                        value={preferredVehicle}
                        onChange={(e) => setPreferredVehicle(e.target.value)}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-white focus:outline-none focus:border-gold-400 transition-colors appearance-none ${
                          errors.preferredVehicle ? 'border-red-500' : 'border-white/10'
                        }`}
                      >
                        <option value="">Select a vehicle from our fleet...</option>
                        {VEHICLES.map((vehicle) => (
                          <option key={vehicle.id} value={vehicle.name}>
                            {vehicle.name} ({vehicle.priceDaily}/Day)
                          </option>
                        ))}
                      </select>
                      {errors.preferredVehicle && <p className="text-red-500 text-xs mt-1 font-sans">{errors.preferredVehicle}</p>}
                    </div>

                    {/* Pickup Date */}
                    <div>
                      <label className="block font-display font-semibold text-xs text-slate-300 uppercase tracking-wider mb-2">
                        Pickup Date *
                      </label>
                      <input
                        id="booking-pickup-date"
                        type="date"
                        value={pickupDate}
                        onChange={(e) => setPickupDate(e.target.value)}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-white focus:outline-none focus:border-gold-400 transition-colors ${
                          errors.pickupDate ? 'border-red-500' : 'border-white/10'
                        }`}
                      />
                      {errors.pickupDate && <p className="text-red-500 text-xs mt-1 font-sans">{errors.pickupDate}</p>}
                    </div>

                    {/* Return Date */}
                    <div>
                      <label className="block font-display font-semibold text-xs text-slate-300 uppercase tracking-wider mb-2">
                        Return Date *
                      </label>
                      <input
                        id="booking-return-date"
                        type="date"
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-white focus:outline-none focus:border-gold-400 transition-colors ${
                          errors.returnDate ? 'border-red-500' : 'border-white/10'
                        }`}
                      />
                      {errors.returnDate && <p className="text-red-500 text-xs mt-1 font-sans">{errors.returnDate}</p>}
                    </div>
                  </div>

                  {/* Pickup Location */}
                  <div>
                    <label className="block font-display font-semibold text-xs text-slate-300 uppercase tracking-wider mb-2">
                      Pickup Location / Address *
                    </label>
                    <input
                      id="booking-pickup-location"
                      type="text"
                      value={pickupLocation}
                      onChange={(e) => setPickupLocation(e.target.value)}
                      placeholder="e.g., Nnamdi Azikiwe International Airport or 1 Aguiyi Ironsi St, Maitama"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-white placeholder-slate-600 focus:outline-none focus:border-gold-400 transition-colors ${
                        errors.pickupLocation ? 'border-red-500' : 'border-white/10'
                      }`}
                    />
                    {errors.pickupLocation && <p className="text-red-500 text-xs mt-1 font-sans">{errors.pickupLocation}</p>}
                  </div>

                  {/* Additional Message */}
                  <div>
                    <label className="block font-display font-semibold text-xs text-slate-300 uppercase tracking-wider mb-2">
                      Additional Requests or Special Message
                    </label>
                    <textarea
                      id="booking-message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Specify if you require self-drive, armed escort driver, airport meet-and-greet, or custom route itinerary."
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-gold-400 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    id="booking-submit-btn"
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-slate-950 font-display font-bold text-sm uppercase tracking-widest shadow-lg shadow-gold-500/10 hover:shadow-gold-500/25 hover:scale-[1.01] transition-all flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Reservation Request</span>
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="booking-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-12 space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-gold-400/10 text-gold-400 flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-10 h-10 stroke-[2]" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-2xl text-white">Booking Request Logged!</h3>
                    <p className="font-sans text-sm text-slate-400 mt-2 max-w-md mx-auto">
                      Excellent, {fullName}! Your request for the <strong className="text-white">{preferredVehicle}</strong> has been saved. A logistics manager will phone you in 15 minutes to confirm details.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
                    <button
                      id="booking-new-btn"
                      onClick={handleResetForm}
                      className="px-6 py-3 rounded-xl bg-slate-950 border border-white/10 hover:border-gold-400/30 text-white font-display font-bold text-xs uppercase tracking-wider cursor-pointer"
                    >
                      Book Another Vehicle
                    </button>
                    <a
                      id="booking-whatsapp-confirm"
                      href={`https://wa.me/2347060666882?text=Hello%20Julivicto%20Logistics%20Car%20Hire%20and%20Rental%20Services%2C%20I%20have%20just%20submitted%20a%20booking%20enquiry%20for%20the%20${encodeURIComponent(
                        preferredVehicle
                      )}%20for%20pickup%20on%20${encodeURIComponent(pickupDate)}.%20Please%20confirm%20availability.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl bg-green-600 hover:bg-green-500 text-white font-display font-bold text-xs uppercase tracking-wider shadow-md hover:scale-[1.02] transition-transform flex items-center space-x-2"
                    >
                      <span>Confirm via WhatsApp</span>
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Dynamic Booking History Panel */}
        <AnimatePresence>
          {showHistory && localBookings.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-12 bg-slate-900 border border-white/5 rounded-2xl p-6 sm:p-8 shadow-inner overflow-hidden"
            >
              <h3 className="font-display font-bold text-lg text-white mb-6 flex items-center space-x-2">
                <FileText className="w-5 h-5 text-gold-400" />
                <span>My Active Bookings</span>
              </h3>

              <div className="space-y-4">
                {localBookings.map((bk) => (
                  <div
                    key={bk.id}
                    className="bg-slate-950 border border-white/5 p-5 rounded-xl flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover:border-gold-400/20 transition-all duration-300"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center space-x-3">
                        <span className="font-display font-bold text-base text-white">{bk.preferredVehicle}</span>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-gold-400/10 text-gold-400 border border-gold-400/20 uppercase tracking-widest">
                          {bk.status}
                        </span>
                      </div>
                      <p className="font-sans text-xs text-slate-400">
                        Date: <span className="text-white">{bk.pickupDate}</span> to <span className="text-white">{bk.returnDate}</span>
                      </p>
                      <p className="font-sans text-xs text-slate-400">
                        Pickup Location: <span className="text-white">{bk.pickupLocation}</span>
                      </p>
                      <p className="font-sans text-[10px] text-slate-500 font-mono mt-1">Submitted: {bk.createdAt}</p>
                    </div>

                    <div className="flex items-center space-x-3">
                      <a
                        href={`https://wa.me/2347060666882?text=Hello%20Julivicto%20Logistics%2C%20I%20would%20like%20to%20follow%20up%20on%20my%20booking%20ID%20${bk.id}%20for%20the%20${encodeURIComponent(bk.preferredVehicle)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg bg-slate-900 border border-white/10 hover:border-gold-400/30 text-slate-300 hover:text-white font-display text-xs font-semibold uppercase tracking-wider transition-colors"
                      >
                        Follow Up
                      </a>
                      <button
                        onClick={() => handleDeleteBooking(bk.id)}
                        className="p-2 rounded-lg bg-slate-900 border border-white/10 hover:border-red-500/30 text-slate-500 hover:text-red-400 transition-colors cursor-pointer"
                        title="Delete booking log"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
