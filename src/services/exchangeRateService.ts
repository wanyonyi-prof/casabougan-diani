import axios from 'axios';

interface CBKResponse {
  rates: {
    USD: number;
  };
  date: string;
}

export const fetchExchangeRate = async (): Promise<number> => {
  try {
    // Using a free API (you can replace with CBK API when available)
    const response = await axios.get('https://api.exchangerate-api.com/v4/latest/KES');
    return response.data.rates.USD;
  } catch (error) {
    console.error('Error fetching exchange rate:', error);
    // Fallback rate if API fails
    return 0.0077; // Approximately 130 KES = 1 USD
  }
};

// Simulated CBK API for demonstration
export const fetchCBKRate = async (): Promise<number> => {
  // This would be the actual CBK API endpoint
  // For now, we'll simulate with a realistic rate
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(0.0077); // 1 KES = 0.0077 USD
    }, 500);
  });
};