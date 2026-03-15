export const calculateNights = (checkIn: Date | null, checkOut: Date | null): number => {
  if (!checkIn || !checkOut) return 0;
  
  const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return diffDays > 0 ? diffDays : 0;
};

export const formatDate = (date: Date | null): string => {
  if (!date) return '';
  return date.toLocaleDateString('en-KE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};