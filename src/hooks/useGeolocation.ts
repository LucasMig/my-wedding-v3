import { useEffect, useState } from 'react';

const useGeolocation = () => {
  const [location, setLocation] = useState<GeolocationPosition | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string | null>(null);

  const getGeolocation = (
    successCallback: (position: GeolocationPosition) => void,
    errorCallback: (error: GeolocationPositionError) => void,
  ) => {
    setIsLoading(true);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setIsLoading(false);
          successCallback(position);
        },
        (error) => {
          setIsLoading(false);
          errorCallback(error);
        },
      );
    } else {
      setIsLoading(false);
      setIsError('Geolocation is not supported by this browser.');
    }
  };

  useEffect(() => {
    getGeolocation(
      (position) => {
        setLocation(position);
      },
      (error) => {
        setIsError(error.message);
      },
    );
  }, []);

  return { location, isLoading, isError };
};

export default useGeolocation;
