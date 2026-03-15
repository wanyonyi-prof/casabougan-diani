import React from 'react';
import { ApartmentType } from '../../types';
import { useExchangeRate } from '../../hooks/useExchangeRate';

const apartments: ApartmentType[] = [
  {
    id: 'studio',
    name: 'Studio Suite',
    description: 'Ideal for solo travelers or couples',
    priceKES: 2500,
    image: '/gallery/studio.jpg',
    capacity: '2 adults'
  },
  {
    id: '1bed',
    name: '1 Bedroom Apartment',
    description: 'Spacious and comfortable',
    priceKES: 3500,
    image: '/gallery/1bedroom.jpg',
    capacity: '3 adults'
  },
  {
    id: '2bed',
    name: '2 Bedroom Apartment',
    description: 'Perfect for families',
    priceKES: 4500,
    image: '/gallery/2bedroom.jpg',
    capacity: '5 adults'
  }
];

interface Props {
  onSelectApartment: (apartmentId: string) => void;
}

const ApartmentTypes: React.FC<Props> = ({ onSelectApartment }) => {
  const { convertToUSD } = useExchangeRate();

  return (
    <section id="apartments" className="py-20 bg-sand">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl text-center mb-4">Our Apartments</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Choose from our selection of luxurious beachfront accommodations
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apartments.map((apt) => (
            <div key={apt.id} className="card group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={apt.image} 
                  alt={apt.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl mb-2">{apt.name}</h3>
                <p className="text-gray-600 mb-4">{apt.description}</p>
                <p className="text-sm text-gray-500 mb-2">
                  <i className="fas fa-users mr-2"></i> {apt.capacity}
                </p>
                <div className="mb-4">
                  <p className="text-2xl font-semibold text-palm">
                    KES {apt.priceKES.toLocaleString()}
                    <span className="text-sm font-normal text-gray-500 ml-2">/night</span>
                  </p>
                  <p className="text-sm text-gray-500">
                    ≈ USD {convertToUSD(apt.priceKES)}
                  </p>
                </div>
                <button
                  onClick={() => onSelectApartment(apt.id)}
                  className="btn-outline w-full"
                >
                  Select Apartment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApartmentTypes;