export interface ApartmentType {
  id: string;
  name: string;
  description: string;
  priceKES: number;
  image: string;
  capacity: string;
}

export interface Room {
  number: string;
  type: string;
  capacity: string;
  floor: 'ground' | 'first';
}

export interface BookingDetails {
  checkIn: Date | null;
  checkOut: Date | null;
  fullName: string;
  email: string;
  country: string;
  adults: number;
  children: number;
  apartmentType: string;
  specialRequests: string;
}

export interface ExchangeRate {
  KES_TO_USD: number;
  lastUpdated: Date;
}

export interface BookingSummary {
  apartmentType: string;
  nights: number;
  pricePerNightKES: number;
  totalKES: number;
  totalUSD: number;
}