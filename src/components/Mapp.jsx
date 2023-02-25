
import "mapbox-gl/dist/mapbox-gl.css";
import Map, {
  Marker,
  NavigationControl,
  Popup,
  FullscreenControl,
  GeolocateControl,
} from "react-map-gl";
import { useState } from "react";
function Mapp() {
  const [lng, setLng] = useState(54.37585762735543);
  const [lat, setLat] = useState(24.45677614934833);

  return (
    <div className=' h-screen bg-[#1F2833]'>
    <div  style={{marginLeft:'500px'}}>
    {console.log('pk.eyJ1IjoiamFoYW5zaGFoIiwiYSI6ImNsZWs4MTNqbjBpdXAzcm40c3Y2cHV0amUifQ.n8ByygX2Hj0IL1MmYa2Fkw')}
      <h1 className='text-white text-2xl' style={{marginBottom:'20px',marginLeft:'120px'}}>Your registered location</h1>
      <Map
        mapboxAccessToken={'pk.eyJ1IjoiamFoYW5zaGFoIiwiYSI6ImNsZWs4MTNqbjBpdXAzcm40c3Y2cHV0amUifQ.n8ByygX2Hj0IL1MmYa2Fkw'}
        style={{
          width: "500px",
          height: "500px",
          borderRadius: "15px",
          border: "2px solid red",
        }}
        initialViewState={{
          longitude: lng,
          latitude: lat,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Marker longitude={lng} latitude={lat} />
        <NavigationControl position="bottom-right" />
        <FullscreenControl />

        <GeolocateControl />
      </Map>
    </div>
    </div>
  );
}

export default Mapp;