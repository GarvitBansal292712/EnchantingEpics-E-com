// addToCartMessage
import { useState, useEffect } from 'react';

export const useTemporaryMessage = (initialMessage = '', delay = 3000) => {
  const [message, setMessage] = useState(initialMessage);

  useEffect(() => {
    let timer;
    if (message) {
      timer = setTimeout(() => {
        setMessage('');
      }, delay);
    }
    return () => clearTimeout(timer);
  }, [message, delay]);

  return [message, setMessage];
};

export default useTemporaryMessage;