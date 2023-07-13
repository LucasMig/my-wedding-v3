import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { scrollToTop } from '@/utils/helpers';

const useScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    scrollToTop();
  }, [location.pathname]);
};

export default useScrollToTop;
