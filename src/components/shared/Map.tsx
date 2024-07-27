// components/MapPicker.tsx

import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix the default icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const LocationMarker = ({
  setLocation,
}: {
  setLocation: (latlng: L.LatLng) => void;
}) => {
  useMapEvents({
    click(e) {
      setLocation(e.latlng);
    },
  });

  return null;
};

const MapPicker = ({
  onLocationSelect,
}: {
  onLocationSelect: (latlng: L.LatLng) => void;
}) => {
  const [location, setLocation] = useState<L.LatLng | null>(null);
  const [center, setCenter] = useState<L.LatLng>(
    new L.LatLng(-6.2945589, 106.7849192)
  );

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log({ latitude, longitude });
          setCenter(new L.LatLng(latitude, longitude));
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }, []);

  return (
    <MapContainer
      center={center}
      zoom={20}
      style={{ height: "300px", width: "100%", zIndex: "100" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {location && <Marker position={location} />}
      <LocationMarker
        setLocation={(latlng: L.LatLng) => {
          setLocation(latlng);
          onLocationSelect(latlng);
        }}
      />
    </MapContainer>
  );
};

export default MapPicker;
