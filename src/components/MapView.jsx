import { useEffect, useState } from "react";
import API from "../services/api";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

export default function MapView() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    API.get("/projects")
    .then((res) => {
        setProjects(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <MapContainer
      center={[7.3775, 3.9470]}
      zoom={13}
      style={{
        height: "500px",
        width: "100%",
      }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {projects.map((project) => (
        <Marker
          key={project.id}
          position={[
            project.location.coordinates[1],
            project.location.coordinates[0],
          ]}
        >
          <Popup>
            <strong>{project.name}</strong>
            <br />
            {project.description}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}