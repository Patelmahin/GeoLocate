import "./styles.css";
import { useState } from "react";

export default function App() {
  const [position, setPosition] = useState({});
  const [count, setCount] = useState(0);
  const { lat, lng } = position;
  function getLocation() {
    setCount((count) => count + 1);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) =>
        setPosition({ lat: pos.coords.latitude, lng: pos.coords.longitude })
      );
    }
  }
  return (
    <div className="App">
      <button onClick={() => getLocation()}>Get my location</button>
      <div className="gps">
        Your GPS location:{" "}
        <a href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}>
          {lat}
          {lng}
        </a>
      </div>
      <div className="count">Your requested position:{count}</div>
    </div>
  );
}
