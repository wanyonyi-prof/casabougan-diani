import React, { useEffect } from 'react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  onNext?: () => void;
  onPrev?: () => void;
  hasNext?: boolean;
  hasPrev?: boolean;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  onNext,
  onPrev,
  hasNext,
  hasPrev
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
      if (e.key === 'ArrowRight' && onNext) {
        onNext();
      }
      if (e.key === 'ArrowLeft' && onPrev) {
        onPrev();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset'; // Restore scrolling
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        className="absolute top-4 right-4 text-white text-4xl hover:text-palm-light transition-colors z-10"
        onClick={onClose}
        aria-label="Close"
      >
        <i className="fas fa-times"></i>
      </button>
      
      {/* Previous button */}
      {hasPrev && onPrev && (
        <button
          className="absolute left-4 text-white text-4xl hover:text-palm-light transition-colors z-10"
          onClick={(e) => { 
            e.stopPropagation(); 
            onPrev(); 
          }}
          aria-label="Previous image"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
      )}
      
      {/* Image */}
      <img
        src={imageSrc}
        alt="Gallery preview"
        className="max-h-[90vh] max-w-[90vw] object-contain"
        onClick={(e) => e.stopPropagation()}
      />
      
      {/* Next button */}
      {hasNext && onNext && (
        <button
          className="absolute right-4 text-white text-4xl hover:text-palm-light transition-colors z-10"
          onClick={(e) => { 
            e.stopPropagation(); 
            onNext(); 
          }}
          aria-label="Next image"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      )}
      
      {/* Image counter */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full text-sm">
        {hasPrev && hasNext && (
          <span>
            {hasPrev && '←'} Image {hasNext && '→'}
          </span>
        )}
      </div>
    </div>
  );
};

export default ImageModal;