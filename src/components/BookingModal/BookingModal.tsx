import React from 'react';
import { BookingDetails } from '../../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  bookingDetails: BookingDetails;
  totalKES: number;
  totalUSD: number;
  nights: number;
}

const BookingModal: React.FC<Props> = ({
  isOpen,
  onClose,
  bookingDetails,
  totalKES,
  totalUSD,
  nights
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full p-8 animate-slide-up">
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-3xl">Booking Confirmed!</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <i className="fas fa-times text-2xl"></i>
          </button>
        </div>
        
        <div className="space-y-4">
          <p className="text-gray-600">
            Thank you for choosing Casabougan Apartments. Your booking has been received.
          </p>
          
          <div className="bg-palm-light/30 p-4 rounded-xl space-y-2">
            <h4 className="font-semibold text-lg">Booking Summary</h4>
            <p><span className="text-gray-600">Name:</span> {bookingDetails.fullName}</p>
            <p><span className="text-gray-600">Email:</span> {bookingDetails.email}</p>
            <p><span className="text-gray-600">Check-in:</span> {bookingDetails.checkIn?.toLocaleDateString()}</p>
            <p><span className="text-gray-600">Check-out:</span> {bookingDetails.checkOut?.toLocaleDateString()}</p>
            <p><span className="text-gray-600">Nights:</span> {nights}</p>
            <p><span className="text-gray-600">Total:</span> KES {totalKES.toLocaleString()} (USD {totalUSD})</p>
          </div>
          
          <p className="text-sm text-gray-500">
            A confirmation email has been sent to {bookingDetails.email}
          </p>
        </div>
        
        <button
          onClick={onClose}
          className="btn-primary w-full mt-6"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default BookingModal;