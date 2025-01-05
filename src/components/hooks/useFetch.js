// src/components/hooks/useFetch.js
"use client"; // Ensure the hook is client-side

import { useState, useEffect } from 'react';

const useFetch = (url, params = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; // Prevent state updates on unmounted components

    const fetchData = async () => {
      try {
        const queryString = new URLSearchParams(params).toString();
        const fullUrl = queryString ? `${url}?${queryString}` : url;

        const response = await fetch(fullUrl, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const fetchedData = await response.json();
        if (isMounted) {
          setData(fetchedData);
        }
      } catch (error) {
        if (isMounted) {
          setError(error);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false; // Cleanup on unmount
    };
  }, [url, params]); // Fetch only when `url` or `params` change

  return { data, loading, error };
};

export default useFetch;
