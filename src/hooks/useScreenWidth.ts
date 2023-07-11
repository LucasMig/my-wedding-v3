import { createScreenWidthObject, debounce } from '@/utils/helpers';
import { useEffect, useState } from 'react';

const useScreenWidth = () => {
  const currentWidth = window.innerWidth;
  const [width, setWidth] = useState(currentWidth);
  const [screenSize, setScreenSize] = useState(
    createScreenWidthObject(currentWidth),
  );
  const [isResizing, setIsResizing] = useState(false);

  const handleResize = () => {
    setIsResizing(true);

    debounce(() => {
      const updatedWidth = window.innerWidth;
      setWidth(updatedWidth);

      const currentSize = createScreenWidthObject(updatedWidth);
      setScreenSize(currentSize);

      setIsResizing(false);
    }, 500)();
  };

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { ...screenSize, width, isResizing };
};

export default useScreenWidth;
