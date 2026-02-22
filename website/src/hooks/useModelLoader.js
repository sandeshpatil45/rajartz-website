import { useState, useEffect } from 'react';

export const useModelLoader = (modelKey) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!modelKey) return;

    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [modelKey]);

  return { loaded };
};
