import { useState } from 'react';

interface ApiResponse<T> {
  data: T | null;
  error: string | null;
  isLoading: boolean;
}

export function useApi<T>() {
  const [state, setState] = useState<ApiResponse<T>>({
    data: null,
    error: null,
    isLoading: false,
  });

  const fetchData = async (url: string, options: RequestInit = {}) => {
    setState({ ...state, isLoading: true });
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('API request failed');
      }
      const data = await response.json();
      setState({ data, error: null, isLoading: false });
      return data;
    } catch (error) {
      setState({ data: null, error: error.message, isLoading: false });
    }
  };

  return { ...state, fetchData };
}