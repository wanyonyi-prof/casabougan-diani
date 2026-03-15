import React from 'react';

const Location: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl text-center mb-4">Location</h2>
        <p className="text-center text-gray-600 mb-12">Find us in paradise</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="bg-palm-light/30 p-6 rounded-2xl">
              <h3 className="text-2xl mb-4">Casabougan Apartments Diani</h3>
              <address className="not-italic text-gray-600 space-y-2">
                <p className="flex items-start">
                  <i className="fas fa-map-pin text-palm mt-1 mr-3"></i>
                  Diani Beach Road<br />
                  Mombasa, Kenya
                </p>
                <p className="flex items-center">
                  <i className="fas fa-phone text-palm mr-3"></i>
                  +254 711 237 539
                </p>
                <p className="flex items-center">
                  <i className="fas fa-envelope text-palm mr-3"></i>
                  info@casabougan.com
                </p>
              </address>
              
              <div className="mt-6 space-y-2">
                <h4 className="font-semibold">Getting Here:</h4>
                <p className="text-sm text-gray-600">
                  • 5-minute walk to Diani Beach<br />
                  • 2 km from Ukunda Airstrip<br />
                  • 30 km from Mombasa city center
                </p>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2 h-[400px] rounded-2xl overflow-hidden">
            <iframe
              title="Diani Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.800583527615!2d39.5857!3d-4.2847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMTcnMDQuOSJTIDM5wrAzNScwOC41IkU!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;