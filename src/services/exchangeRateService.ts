import axios from 'axios';

export const fetchExchangeRate = async (): Promise<number> => {
  try {
    const response = await axios.get('https://api.exchangerate-api.com/v4/latest/KES');
    return response.data.rates.USD;
  } catch (error) {
    console.error('Error fetching exchange rate:', error);
    return 0.0077;
  }
};

// Simulated CBK API for demonstration
export const fetchCBKRate = async (): Promise<number> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(0.0077);
    }, 500);
  });
};