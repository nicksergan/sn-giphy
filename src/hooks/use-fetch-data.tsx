import { useCallback, useState } from 'react';
import { GifData } from '../types/gif-data.ts';
import { GiphyDto } from '../types/giphy-dto.ts';

export const useFetchData = () => {
  const [data, setData] = useState<GifData[]>([]);
  const [fetched, setFetched] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(async (url: string) => {
    setLoading(true);
    setFetched(false);
    setError(null);

    try {
      const response = await fetch(url);
      const result: GiphyDto = await response.json();

      if (!response.ok) {
        throw new Error(result?.meta?.msg || 'Something went wrong');
      }

      setData(result.data);
      setFetched(true);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : 'Unexpected error occurred';
      setError(message);
      setData([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const clearData= () => {
    setLoading(false);
    setFetched(false);
    setError(null);
    setData([]);
  };

  return {
    data,
    error,
    loading,
    fetched,
    fetchData,
    clearData,
  };
};
