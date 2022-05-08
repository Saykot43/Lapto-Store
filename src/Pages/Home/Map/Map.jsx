import React from 'react';
import { MapContainer, TileLayer, Popup , Marker } from 'react-leaflet'

const Map = () => {
    return (
        <div>
            <h1>Map</h1>
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
        </div>
    );
};

export default Map;