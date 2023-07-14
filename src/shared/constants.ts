export const ONE_SECOND = 1000;
export const ONE_MINUTE = 60 * ONE_SECOND;
export const ONE_HOUR = 60 * ONE_MINUTE;
export const ONE_DAY = 24 * ONE_HOUR;

export const WEDDING_DATE = 'Dec 17, 2023 15:00:00';

export const WEDDING_COORDS = [-23.540964, -46.079376];

export const MEDIA_QUERIES = {
  mobile: 320,
  tablet: 768,
  laptop: 1025,
  desktop: 1281,
  infinity: 1440,
} as const;

export const LEAFLET_LAYERS = {
  mapnik: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
  de: 'https://tile.openstreetmap.de/{z}/{x}/{y}.png',
  hot: 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
};
