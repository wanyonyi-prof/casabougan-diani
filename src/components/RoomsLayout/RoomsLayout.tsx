import React from 'react';
import { Room } from '../../types';

const rooms: Room[] = [
  ...Array.from({ length: 8 }, (_, i) => ({
    number: `G${i + 1}`,
    type: i % 2 === 0 ? 'Studio' : '1 Bedroom',
    capacity: i % 2 === 0 ? '2 guests' : '3 guests',
    floor: 'ground' as const
  })),
  ...Array.from({ length: 8 }, (_, i) => ({
    number: `F${i + 1}`,
    type: i % 3 === 0 ? '2 Bedroom' : i % 3 === 1 ? '1 Bedroom' : 'Studio',
    capacity: i % 3 === 0 ? '5 guests' : i % 3 === 1 ? '3 guests' : '2 guests',
    floor: 'first' as const
  }))
];

const RoomsLayout: React.FC = () => {
  return (
    <section id="rooms" className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl text-center mb-4">Room Layout</h2>
        <p className="text-center text-gray-600 mb-12">Explore our thoughtfully designed spaces</p>
        
        {/* Ground Floor */}
        <div className="mb-12">
          <h3 className="text-2xl mb-6 pb-2 border-b border-palm/20">Ground Floor · Rooms 1–8</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {rooms.filter(r => r.floor === 'ground').map(room => (
              <div key={room.number} className="bg-palm-light/20 p-4 rounded-xl text-center hover:shadow-md transition-shadow">
                <div className="text-lg font-serif text-palm mb-1">{room.number}</div>
                <div className="font-medium">{room.type}</div>
                <div className="text-sm text-gray-500 mt-1">
                  <i className="fas fa-user mr-1"></i> {room.capacity}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* First Floor */}
        <div>
          <h3 className="text-2xl mb-6 pb-2 border-b border-palm/20">First Floor · Rooms 9–16</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {rooms.filter(r => r.floor === 'first').map(room => (
              <div key={room.number} className="bg-palm-light/20 p-4 rounded-xl text-center hover:shadow-md transition-shadow">
                <div className="text-lg font-serif text-palm mb-1">{room.number}</div>
                <div className="font-medium">{room.type}</div>
                <div className="text-sm text-gray-500 mt-1">
                  <i className="fas fa-user mr-1"></i> {room.capacity}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomsLayout;