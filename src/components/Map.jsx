import { useEffect } from 'react';
// leaflet
import L from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { locationIcon } from '../data/Icons';
import { MAP_API_KEY } from '../data/Data';

// This component handles map position updates
const MapUpdater = ({ center }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center);
  }, [center, map]);
  return null;
};

// Main Map Component
const Map = ({ mapPosition }) => {
  // Customize location icon in leatflet map
  const customIcon = new L.Icon({
    iconUrl: locationIcon,
    iconSize: [24, 34], // size of the icon
    iconAnchor: [23, 42], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -42], // point from which the popup should open relative to the iconAnchor
  });

  return (
    <MapContainer
      className='w-full h-full'
      center={mapPosition}
      zoom={13}
      scrollWheelZoom={false}
      zoomControl={false}
      style={{ height: '100%', width: '100%' }}
    >
      <MapUpdater center={mapPosition} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        // url='https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
        url={`https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=${MAP_API_KEY}`}
      />
      <Marker position={mapPosition} icon={customIcon}>
        <Popup>IP Location</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
