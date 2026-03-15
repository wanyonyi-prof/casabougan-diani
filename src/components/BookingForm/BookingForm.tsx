import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { BookingDetails } from '../../types';
import BookingSummary from '../BookingSummary/BookingSummary';
import { useExchangeRate } from '../../hooks/useExchangeRate';
import { calculateNights } from '../../utils/dateUtils';

interface Props {
  onBookingConfirm: (details: BookingDetails) => void;
}

const countries = [
  'Kenya', 'United States', 'United Kingdom', 'Canada', 'Germany',
  'France', 'Italy', 'Spain', 'Netherlands', 'Sweden', 'Norway',
  'Denmark', 'Switzerland', 'Australia', 'New Zealand', 'South Africa',
  'Uganda', 'Tanzania', 'Rwanda', 'Ethiopia', 'Nigeria', 'Ghana'
];

const apartmentPrices = {
  'studio': 2500,
  '1bed': 3500,
  '2bed': 4500
};

const BookingForm: React.FC<Props> = ({ onBookingConfirm }) => {
  const [formData, setFormData] = useState<BookingDetails>({
    checkIn: null,
    checkOut: null,
    fullName: '',
    email: '',
    country: 'Kenya',
    adults: 2,
    children: 0,
    apartmentType: 'studio',
    specialRequests: ''
  });

  const { convertToUSD } = useExchangeRate();
  const [nights, setNights] = useState(0);
  const [totalKES, setTotalKES] = useState(0);

  useEffect(() => {
    const nightsCount = calculateNights(formData.checkIn, formData.checkOut);
    setNights(nightsCount);
    
    const price = apartmentPrices[formData.apartmentType as keyof typeof apartmentPrices];
    setTotalKES(price * nightsCount);
  }, [formData.checkIn, formData.checkOut, formData.apartmentType]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onBookingConfirm(formData);
  };

  return (
    <section id="booking-form" className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl text-center mb-12">Book Your Stay</h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Check-in Date
                  </label>
                  <DatePicker
                    selected={formData.checkIn}
                    onChange={(date) => setFormData({...formData, checkIn: date})}
                    selectsStart
                    startDate={formData.checkIn}
                    endDate={formData.checkOut}
                    minDate={new Date()}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-palm focus:border-palm"
                    placeholderText="Select check-in date"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Check-out Date
                  </label>
                  <DatePicker
                    selected={formData.checkOut}
                    onChange={(date) => setFormData({...formData, checkOut: date})}
                    selectsEnd
                    startDate={formData.checkIn}
                    endDate={formData.checkOut}
                    minDate={formData.checkIn || new Date()}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-palm focus:border-palm"
                    placeholderText="Select check-out date"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-palm focus:border-palm"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-palm focus:border-palm"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Country
                  </label>
                  <select
                    value={formData.country}
                    onChange={(e) => setFormData({...formData, country: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-palm focus:border-palm"
                  >
                    {countries.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Adults
                  </label>
                  <select
                    value={formData.adults}
                    onChange={(e) => setFormData({...formData, adults: parseInt(e.target.value)})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-palm focus:border-palm"
                  >
                    {[1,2,3,4,5,6].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Children
                  </label>
                  <select
                    value={formData.children}
                    onChange={(e) => setFormData({...formData, children: parseInt(e.target.value)})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-palm focus:border-palm"
                  >
                    {[0,1,2,3,4].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Apartment Type
                </label>
                <select
                  value={formData.apartmentType}
                  onChange={(e) => setFormData({...formData, apartmentType: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-palm focus:border-palm"
                >
                  <option value="studio">Studio Suite - KES 2,500/night</option>
                  <option value="1bed">1 Bedroom - KES 3,500/night</option>
                  <option value="2bed">2 Bedroom - KES 4,500/night</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Requests
                </label>
                <textarea
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({...formData, specialRequests: e.target.value})}
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-palm focus:border-palm"
                  placeholder="Any special requirements?"
                />
              </div>
            </form>
          </div>

          <div>
            <BookingSummary
              nights={nights}
              apartmentType={formData.apartmentType}
              pricePerNight={apartmentPrices[formData.apartmentType as keyof typeof apartmentPrices]}
              totalKES={totalKES}
              totalUSD={convertToUSD(totalKES)}
            />
            
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn-primary w-full mt-4"
            >
              CONFIRM BOOKING
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;