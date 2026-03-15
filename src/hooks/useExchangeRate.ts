import { useState, useEffect } from 'react';
import { fetchExchangeRate } from '../services/exchangeRateService';

export const useExchangeRate = () => {
  const [rate, setRate] = useState<number>(0.0077); // Default fallback
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getRate = async () => {
      try {
        setLoading(true);
        const newRate = await fetchExchangeRate();
        setRate(newRate);
        setError(null);
      } catch (err) {
        setError('Failed to fetch exchange rate');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getRate();
    // Refresh every 6 hours
    const interval = setInterval(getRate, 6 * 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const convertToUSD = (kesAmount: number): number => {
    return Number((kesAmount * rate).toFixed(2));
  };

  return { rate, loading, error, convertToUSD };
};