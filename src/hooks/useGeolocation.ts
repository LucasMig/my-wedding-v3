import { useEffect, useState } from 'react';

const useGeolocation = () => {
  const [location, setLocation] = useState<GeolocationPosition | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string | null>(null);

  const getGeolocation = async () => {
    return await new Promise<GeolocationPosition>((resolve, reject) => {
      setIsLoading(true);

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve(position);
          },
          (error) => {
            reject(error.message);
          },
        );
      } else {
        reject(new Error('Geolocation is not supported by this browser.'));
      }
    });
  };

  useEffect(() => {
    getGeolocation()
      .then((position) => {
        setLocation(position);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(error);
        setIsLoading(false);
      });
  }, []);

  return { location, isLoading, isError };
};

export default useGeolocation;
