import React from 'react';

interface Props {
  nights: number;
  apartmentType: string;
  pricePerNight: number;
  totalKES: number;
  totalUSD: number;
}

const apartmentNames = {
  'studio': 'Studio Suite',
  '1bed': '1 Bedroom Apartment',
  '2bed': '2 Bedroom Apartment'
};

const BookingSummary: React.FC<Props> = ({
  nights,
  apartmentType,
  pricePerNight,
  totalKES,
  totalUSD
}) => {
  return (
    <div className="bg-palm-light/30 p-6 rounded-2xl">
      <h3 className="text-2xl mb-4">Booking Summary</h3>
      
      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">Apartment:</span>
          <span className="font-medium">{apartmentNames[apartmentType as keyof typeof apartmentNames]}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">Number of nights:</span>
          <span className="font-medium">{nights}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">Price per night:</span>
          <span className="font-medium">KES {pricePerNight.toLocaleString()}</span>
        </div>
        
        <div className="border-t border-palm/20 my-3 pt-3">
          <div className="flex justify-between text-lg">
            <span className="font-semibold">Total:</span>
            <div className="text-right">
              <div className="font-semibold text-palm">
                KES {totalKES.toLocaleString()}
              </div>
              <div className="text-sm text-gray-500">
                USD {totalUSD}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;