"use client"; // Required for hooks

import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const useApi = (initialUrl, initialOptions = {}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState(initialUrl);
  const [options, setOptions] = useState(initialOptions);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios(url, options);
      setData(response.data);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [url, options]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, error, loading, setUrl, setOptions };
};

export default useApi;
