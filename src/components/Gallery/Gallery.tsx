import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import ImageModal from './ImageModal/ImageModal';


const images = [
  '/images/gallery/room1.jpg',
  '/images/gallery/room2.jpg',
  '/images/gallery/pool.jpg',
  '/images/gallery/garden.jpg',
  '/images/gallery/beach.jpg',
  '/images/gallery/lounge.jpg'
];

const Gallery: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [imageErrors, setImageErrors] = useState<boolean[]>(new Array(images.length).fill(false));

  // Debug function to check images
  useEffect(() => {
    console.log('Gallery images paths:', images);
    images.forEach((img, index) => {
      const imgElement = new Image();
      imgElement.onload = () => console.log(`✅ Image ${index} loaded:`, img);
      imgElement.onerror = () => {
        console.error(`❌ Image ${index} failed to load:`, img);
        setImageErrors(prev => {
          const newErrors = [...prev];
          newErrors[index] = true;
          return newErrors;
        });
      };
      imgElement.src = img;
    });
  }, []);

  const handleNext = () => {
    setPhotoIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setPhotoIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery" className="py-20 bg-sand">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl text-center mb-4">Gallery</h2>
        <p className="text-center text-gray-600 mb-12">Experience the beauty of Casabougan</p>
        
        
        {/* Video Section */}
        <div className="mb-12">
          <div className="aspect-video bg-black rounded-2xl overflow-hidden relative">
            {!showVideo ? (
              <div 
                className="w-full h-full bg-cover bg-center cursor-pointer relative group"
                style={{ backgroundImage: 'url(/images/gallery/pool.jpg)' }} // ✅ Fixed path
                onClick={() => setShowVideo(true)}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition flex items-center justify-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                    <i className="fas fa-play text-palm text-3xl ml-1"></i>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 text-white bg-black/50 px-3 py-1 rounded-full text-sm">
                  Watch Video Tour
                </div>
              </div>
            ) : (
              <div className="relative w-full h-full">
                <ReactPlayer
                  url="/videos/apartment-tour.mp4"
                  width="100%"
                  height="100%"
                  controls
                  playing
                  onEnded={() => setShowVideo(false)}
                />
                <button
                  onClick={() => setShowVideo(false)}
                  className="absolute top-4 right-4 bg-black/50 text-white w-10 h-10 rounded-full hover:bg-black/70 transition z-10"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
            )}
          </div>
          <p className="text-center mt-2 text-gray-500">
            {showVideo ? 'Now playing: Apartment tour' : 'Click to watch video tour'}
          </p>
        </div>
        
        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="aspect-square cursor-pointer overflow-hidden rounded-xl group relative"
              onClick={() => {
                setPhotoIndex(index);
                setIsOpen(true);
              }}
            >
              {imageErrors[index] ? (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                  <div className="text-center">
                    <i className="fas fa-image text-3xl mb-2"></i>
                    <p className="text-xs">Image not found</p>
                    <p className="text-xs mt-1">{img}</p>
                  </div>
                </div>
              ) : (
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={() => {
                    setImageErrors(prev => {
                      const newErrors = [...prev];
                      newErrors[index] = true;
                      return newErrors;
                    });
                  }}
                />
              )}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition flex items-center justify-center opacity-0 group-hover:opacity-100">
                <i className="fas fa-search-plus text-white text-2xl"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Image Modal */}
      {!imageErrors[photoIndex] && (
        <ImageModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          imageSrc={images[photoIndex]}
          onNext={handleNext}
          onPrev={handlePrev}
          hasNext={true}
          hasPrev={true}
        />
      )}
    </section>
  );
};

export default Gallery;