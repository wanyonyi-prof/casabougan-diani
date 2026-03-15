import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    '/images/hero/hero1.jpg',
    '/images/hero/hero2.jpg',
    '/images/hero/hero3.jpg',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [slides.length]);

  const scrollToBooking = () => {
    document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section relative h-screen max-h-[800px] min-h-[600px] overflow-hidden">
      {/* Slideshow */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
            ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide})` }}
          >
            <div className="absolute inset-0 bg-black/30" />
          </div>
        </div>
      ))}
      
      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center text-white">
        <div className="max-w-4xl px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-serif mb-4 text-white">
            Casabougan Apartments Diani
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Experience Diani's Premier Boutique Accommodation
          </p>
          <button
            onClick={scrollToBooking}
            className="btn-primary text-lg px-10 py-4"
          >
            Book Now
          </button>
        </div>
      </div>
      
      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300
              ${index === currentSlide ? 'w-8 bg-white' : 'bg-white/50'}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;