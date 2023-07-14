import { MEDIA_QUERIES } from '@/shared/constants';

export const debounce = (callback: () => void, delay: number) => {
  let timeout: ReturnType<typeof setTimeout>;

  return (...args: any) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback.apply(null, args);
    }, delay);
  };
};

export const createScreenWidthObject = (width: number) => {
  return {
    isMobile: width < MEDIA_QUERIES.tablet,
    isTablet: width >= MEDIA_QUERIES.tablet && width < MEDIA_QUERIES.desktop,
    isDesktop: width >= MEDIA_QUERIES.desktop,
  };
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export const scrollToAnchor = (rawAnchor: string) => {
  const anchor = rawAnchor.startsWith('#')
    ? rawAnchor.split('#')[1]
    : rawAnchor;

  const element = document.getElementById(anchor);

  element?.scrollIntoView({
    behavior: 'smooth',
  });
};
