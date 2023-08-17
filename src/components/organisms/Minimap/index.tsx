import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './styles.scss';
import { LEAFLET_LAYERS, WEDDING_COORDS } from '@/shared/constants';
import Button from '@/components/atoms/Button';
import useGeolocation from '@/hooks/useGeolocation';
import { useEffect, useState } from 'react';

const Minimap = () => {
  const [mapsLink, setMapsLink] = useState('');
  const [lat, lng] = WEDDING_COORDS;
  const { location, isLoading, isError } = useGeolocation();

  useEffect(() => {
    if (!isLoading && !isError && location) {
      const { latitude: userLat, longitude: userLng } = location.coords;
      const link = `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${lat},${lng}`;

      setMapsLink(link);
    }

    if (!isLoading && isError) {
      const link = `https://www.google.com/maps?q=${lat},${lng}`;
      setMapsLink(link);
    }
  }, [isLoading]);

  const handleButtonClick = () => {
    window.open(mapsLink, '_blank');
  };

  return (
    <section className="map__container">
      <MapContainer id="map" center={[lat, lng]} zoom={15}>
        <TileLayer url={LEAFLET_LAYERS.de} />
        <Marker position={[lat, lng]}>
          <Popup autoClose={false}>
            <div>
              <h2>Chácara Nosso Cantinho</h2>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
      <Button
        type="button"
        onClick={handleButtonClick}
        styleClass={isLoading ? 'disabled' : ''}
      >
        {isLoading ? 'Carregando...' : isError ? 'Ver no Maps' : 'Traçar rota'}
      </Button>
    </section>
  );
};

export default Minimap;
