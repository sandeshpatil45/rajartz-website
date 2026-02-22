import { useEffect, useState } from 'react';

export const use3DLoader = (assets = []) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (assets.length === 0) {
      setTimeout(() => setLoading(false), 1000);
      setProgress(100);
      return;
    }

    let loadedCount = 0;
    const totalAssets = assets.length;
    const timers = [];

    const updateProgress = () => {
      loadedCount++;
      setProgress((loadedCount / totalAssets) * 100);

      if (loadedCount === totalAssets) {
        const t = setTimeout(() => setLoading(false), 500);
        timers.push(t);
      }
    };

    // Simulate asset loading
    assets.forEach((_, index) => {
      const t = setTimeout(updateProgress, (index + 1) * 400);
      timers.push(t);
    });

    return () => {
      timers.forEach(clearTimeout);
      setLoading(false);
    };
  }, [assets]);

  return { loading, progress };
};
