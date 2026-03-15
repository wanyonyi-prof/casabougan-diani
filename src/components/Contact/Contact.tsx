import React from 'react';

const Contact: React.FC = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/254711237539', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-palm text-white">
      <div className="container-custom text-center">
        <h2 className="text-4xl md:text-5xl text-center mb-4 text-white">Contact Us</h2>
        <p className="text-white/90 mb-12">We're here to help with any inquiries</p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
          <div className="flex items-center gap-3">
            <i className="fas fa-phone text-2xl"></i>
            <span className="text-xl">+254 711 237 539</span>
          </div>
          <div className="flex items-center gap-3">
            <i className="fas fa-envelope text-2xl"></i>
            <span className="text-xl">info@casabougan.com</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn bg-white text-palm hover:bg-palm-light">
            <i className="fas fa-phone-alt mr-2"></i>
            Call Us
          </button>
          <button 
            onClick={handleWhatsApp}
            className="btn bg-green-500 hover:bg-green-600"
          >
            <i className="fab fa-whatsapp mr-2"></i>
            WhatsApp Booking
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;