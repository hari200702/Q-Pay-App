import { useState, useCallback } from 'react';
import axios from 'axios';
import { useAppContext } from '../context/AppContext';

const useApi = () => {
  const { setLoading, setError } = useAppContext();
  const [data, setData] = useState(null);

  const fetchData = useCallback(async (url, options = {}) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await axios({
        url,
        ...options
      });
      setData(response.data);
      return response.data;
    } catch (err) {
      setError(err.message || 'Something went wrong');
      throw err;
    } finally {
      setLoading(false);
    }
  }, [setLoading, setError]);

  return { data, fetchData };
};

export default useApi;