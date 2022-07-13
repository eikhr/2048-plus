import { useEffect } from 'react';

const useKeydownListener = (listener: (e: KeyboardEvent) => void) => {
  useEffect(() => {
    const listenerFn = listener;
    window.addEventListener('keydown', listenerFn);
    return () => {
      window.removeEventListener('keydown', listenerFn);
    };
  }, [listener]);
};

export default useKeydownListener;
