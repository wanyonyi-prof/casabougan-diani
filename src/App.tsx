import React, { useState } from 'react';
import Hero from './components/Hero/Hero';
import ApartmentTypes from './components/ApartmentTypes/ApartmentTypes';
import BookingForm from './components/BookingForm/BookingForm';
import RoomsLayout from './components/RoomsLayout/RoomsLayout';
import Gallery from './components/Gallery/Gallery';
import Location from './components/Location/Location';
import Contact from './components/Contact/Contact';
import BookingModal from './components/BookingModal/BookingModal';
import { BookingDetails } from './types';
import { calculateNights } from './utils/dateUtils';
import emailjs from '@emailjs/browser';

// Initialize EmailJS (you'll need to sign up and get your keys)
emailjs.init('YOUR_PUBLIC_KEY');

function App() {
  const [showModal, setShowModal] = useState(false);
  const [bookingDetails, setBookingDetails] = useState<BookingDetails | null>(null);
  const [totalPrice, setTotalPrice] = useState({ kes: 0, usd: 0 });
  const [nights, setNights] = useState(0);

  const apartmentPrices = {
    'studio': 2500,
    '1bed': 3500,
    '2bed': 4500
  };

  const handleBookingConfirm = (details: BookingDetails) => {
    const nightsCount = calculateNights(details.checkIn, details.checkOut);
    const price = apartmentPrices[details.apartmentType as keyof typeof apartmentPrices];
    const totalKES = price * nightsCount;
    
    // Simulate USD conversion (in real app, use the exchange rate hook)
    const totalUSD = Number((totalKES * 0.0077).toFixed(2));
    
    setBookingDetails(details);
    setTotalPrice({ kes: totalKES, usd: totalUSD });
    setNights(nightsCount);
    setShowModal(true);

    // Simulate email sending (replace with actual EmailJS)
    console.log('Booking confirmed:', { details, totalKES, totalUSD });
    
    // Example EmailJS implementation (uncomment and configure)
    /*
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
      to_email: details.email,
      name: details.fullName,
      check_in: details.checkIn?.toLocaleDateString(),
      check_out: details.checkOut?.toLocaleDateString(),
      total: `KES ${totalKES} (USD ${totalUSD})`
    });
    */
  };

  const handleSelectApartment = (apartmentId: string) => {
    document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
    // You could also update the form's apartment selection here
  };

  return (
    <div className="App">
      <header className="absolute top-0 left-0 right-0 z-10 bg-transparent text-white">
        <div className="container-custom py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl md:text-3xl text-white">Casabougan</h1>
              <p className="text-sm text-white/80">Apartments Diani</p>
            </div>
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                <li><a href="#apartments" className="hover:text-palm-light transition">Apartments</a></li>
                <li><a href="#rooms" className="hover:text-palm-light transition">Rooms</a></li>
                <li><a href="#gallery" className="hover:text-palm-light transition">Gallery</a></li>
                <li><a href="#location" className="hover:text-palm-light transition">Location</a></li>
                <li><a href="#contact" className="hover:text-palm-light transition">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <ApartmentTypes onSelectApartment={handleSelectApartment} />
        <BookingForm onBookingConfirm={handleBookingConfirm} />
        <RoomsLayout />
        <Gallery />
        <Location />
        <Contact />
      </main>

      {bookingDetails && (
        <BookingModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          bookingDetails={bookingDetails}
          totalKES={totalPrice.kes}
          totalUSD={totalPrice.usd}
          nights={nights}
        />
      )}

      <footer className="bg-palm-dark text-white/80 py-8">
        <div className="container-custom text-center">
          <p>© 2026 Casabougan Apartments Diani. All rights reserved.</p>
          <p className="text-sm mt-2">Diani Beach Road, Mombasa, Kenya</p>
        </div>
      </footer>
    </div>
  );
}

export default App;