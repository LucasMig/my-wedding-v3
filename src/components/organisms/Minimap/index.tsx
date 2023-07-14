import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import './styles.scss';
import { WEDDING_COORDS } from '@/shared/constants';

const leafletLayers = {
  mapnik: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
  de: 'https://tile.openstreetmap.de/{z}/{x}/{y}.png',
  hot: 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
};

const Minimap = () => {
  const [lat, lng] = WEDDING_COORDS;

  return (
    <section className="minimap__container">
      <MapContainer id="minimap" center={[lat, lng]} zoom={15}>
        <TileLayer url={leafletLayers.de} />
        <Marker position={[lat, lng]}>
          <Popup autoClose={false}>
            <div>
              <h2>Nosso casamento</h2>
              <p>Chácara Nosso Cantinho</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </section>
  );
};

export default Minimap;
