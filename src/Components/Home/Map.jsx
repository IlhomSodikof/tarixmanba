import { MapContainer, Marker, Popup, TileLayer, GeoJSON } from "react-leaflet";
import geojsonData from '../Home/data/map/countries.json'
import { motion } from "framer-motion";
export default function Map() {
  const position = [41.381166, 64.5735819];

  const getColor = (value) => {
    return value > 100
      ? "#800026"
      : value > 50
        ? "#BD0026"
        : value > 20
          ? "#E31A1C"
          : value > 10
            ? "#FC4E2A"
            : "#FFEDA0";
  };

  const style = (feature) => {
    // Assuming your GeoJSON properties have a "value" property
    const value = feature.properties.value;

    return {
      fillColor: getColor(value),
      weight: 2,
      opacity: 1,
      color: "white",
      dashArray: "3",
      fillOpacity: 0.7,
    };
  };
  // console.log(data);
  const highlightFeature = (e) => {
    const layer = e.target;

    layer.setStyle({
      weight: 5,
      color: "#666",
      dashArray: "",
      fillOpacity: 0.7,
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
      layer.bringToFront();
    }
  };

  const resetHighlight = (e) => {
    const layer = e.target;

    layer.setStyle({
      weight: 2,
      color: "white",
      dashArray: "3",
      fillOpacity: 0.7,
    });
  };

  const zoomToFeature = (e) => {
    const map = e.target._map;
    onChangeRegion(e.target.feature?.id);
    map.fitBounds(e.target.getBounds());
  };

  const onEachFeature = (feature, layer) => {
    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
      click: zoomToFeature,
    });
  };
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <MapContainer
        className="map"
        center={position}
        zoom={6}
        style={{ height: "600px", width: "100%" }}
        attributionControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <GeoJSON
          data={geojsonData}
          style={style}
          onEachFeature={onEachFeature}
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </motion.div>
  );
}
