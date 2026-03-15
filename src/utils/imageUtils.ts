// Image path utility to manage all image references

export const IMAGE_PATHS = {
  hero: {
    hero1: '/images/hero/hero1.jpg',
    hero2: '/images/hero/hero2.jpg',
    hero3: '/images/hero/hero3.jpg',
  },
  apartments: {
    studio: '/images/apartments/studio.jpg',
    oneBedroom: '/images/apartments/1bedroom.jpg',
    twoBedroom: '/images/apartments/2bedroom.jpg',
  },
  gallery: [
    '/gallery/room1.jpg',
    '/gallery/room2.jpg',
    '/gallery/pool.jpg',
    '/gallery/garden.jpg',
    '/gallery/beach.jpg',
    '/gallery/lounge.jpg',
    '/gallery/exterior.jpg',
    '/gallery/sunset.jpg',
    '/gallery/breakfast.jpg',
    '/gallery/dining.jpg',
  ],
  videos: {
    tour: '/videos/apartment-tour.mp4',
    pool: '/videos/pool-tour.mp4',
    beach: '/videos/beach-access.mp4',
  },
  icons: {
    logo: '/images/icons/logo.svg',
    favicon: '/favicon.ico',
    beach: '/images/icons/beach-icon.svg',
    pool: '/images/icons/pool-icon.svg',
    wifi: '/images/icons/wifi-icon.svg',
    parking: '/images/icons/parking-icon.svg',
    ac: '/images/icons/ac-icon.svg',
    breakfast: '/images/icons/breakfast-icon.svg',
  }
} as const;

// Helper function to get image path with fallback
export const getImagePath = (
  path: string, 
  fallback: string = '/images/placeholder.jpg'
): string => {
  // You could add logic here to check if image exists
  // For now, return the path
  return path;
};

// Generate image paths for gallery
export const getGalleryImages = (count: number = 10): string[] => {
  return IMAGE_PATHS.gallery.slice(0, count);
};