import { MapContainer, Marker, Popup, TileLayer, GeoJSON } from "react-leaflet";
import geojsonData from "../Home/data/map/countries.json";
import { motion } from "framer-motion";
import { TbBuildingCastle } from "react-icons/tb";
import { HiUserGroup } from "react-icons/hi2";
import { MdOutlineHistoryEdu } from "react-icons/md";
import { GiStamper, GiTwoCoins } from "react-icons/gi";
import { RiFilePaper2Line } from "react-icons/ri";
import { LiaBoxOpenSolid } from "react-icons/lia";
import { CiInboxIn } from "react-icons/ci";
import { ImNewspaper } from "react-icons/im";
import { FaPhotoFilm } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";
import markerIconSVG from "../../assets/marker.svg";
import imgicon from '../../../img/photo_2_2024-04-05_16-22-21.jpg'
export default function Map() {
  const position = [41.304987, 69.283384];
  const position1 = [41.488801, 69.5857077];

  const [num, setNum] = useState(0);

  const cordinat = [
    [
      {
        id: 1,
        lan: [41.304987, 69.283384],
        title: "Tarix unversityfdsfsdfdsfdsfdfdfdsfsdfdsfsdfdsfdsfdfsd",
        title2: "arix unversityfdsfsdfdsfdsfdfdfdsfsdfdsfsdfdsfdsfdfsd",
      },
      { id: 2, lan: [41.488801, 69.5857077], title: "Chirchiq unversity" },
    ],
    [
      { id: 1, lan: [39.654403, 66.975837], title: "Smarqand unversity" },
      { id: 2, lan: [40.10306, 65.373973], title: "Navoiy unversity" },
    ],
    [
      { id: 1, lan: [41.000444, 69.301236], title: "Tuyabo'g'iz" },
      { id: 2, lan: [41.044758, 69.354838], title: "To'y tepa" },
    ],
    [
      { id: 1, lan: [39.654403, 66.975837], title: "Smarqand unversity" },
      { id: 2, lan: [40.10306, 65.373973], title: "Navoiy unversity" },
    ],
    [
      { id: 3, lan: [41.177084, 69.223716], title: "Ota masjidi" },
      { id: 4, lan: [41.345579, 69.207417], title: "Beruniy" },
    ],
    [
      { id: 3, lan: [41.361278, 69.395646], title: "Ota masjidi" },
      { id: 4, lan: [41.388757, 69.45762], title: "Beruniy" },
    ],
    [
      { id: 3, lan: [41.439714, 69.361677], title: "Ota masjidi" },
      { id: 4, lan: [41.430995, 69.490318], title: "Beruniy" },
    ],
  ];

  console.log(cordinat);

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
      color: "blue",
      dashArray: "3",
      fillOpacity: 0.7,
    };
  };
  // console.log(data);
  const highlightFeature = (e) => {
    const layer = e.target;

    layer.setStyle({
      weight: 5,
      color: "#fff",
      dashArray: "",
      fillOpacity: 0.7,
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
      layer.bringToFront();
    }
  };
  // const markers = L.markerClusterGroup({ showCoverageOnHover: false });

  // const markerIcon = new L.icon({
  //   iconUrl: markerIconSVG,
  //   iconSize: [30, 30],
  // });
  // const marker = L.marker([lat, lng], { icon: markerIcon }) // Corrected to pass coordinates as an array
  //   .bindTooltip("New map")
  //   .bindPopup(
  //     `<h5 className="gx-text-center">New map</h5>
  //   <table className="gx-table">
  //   <tr><td>Project Name</td>
  //   </table>`
  //   );
  // markers.addLayer(marker);
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
  const markerIcon = new L.Icon({
    iconUrl: markerIconSVG,
    iconRetinaUrl: markerIconSVG,
    popupAnchor: [-0, -0],
    iconSize: [32, 45],
  });
  const markerIcon2 = new L.Icon({
    iconUrl: imgicon,
    iconRetinaUrl: imgicon,
    popupAnchor: [-0, -0],
    iconSize: [32, 45],
  })

  return (
    <div className="map-full">
      <motion.ul className="map-menu">
        <motion.li
          className="map-item"
          whileHover={{ x: 55 }}
          onClick={() => setNum(0)}
        >
          <Link className="map-link">
            {" "}
            <div>
              <TbBuildingCastle />
            </div>{" "}
            <span> Arxealogiya</span>
          </Link>
        </motion.li>
        <motion.li
          className="map-item"
          whileHover={{ x: 55 }}
          onClick={() => setNum(5)}
        >
          <Link className="map-link">
            {" "}
            <div>
              <HiUserGroup />
            </div>{" "}
            <span> Xalq og'zaki ijodi</span>
          </Link>
        </motion.li>
        <motion.li
          className="map-item"
          whileHover={{ x: 55 }}
          onClick={() => setNum(2)}
        >
          <Link className="map-link">
            {" "}
            <div>
              <MdOutlineHistoryEdu />
            </div>{" "}
            <span> Qo'lyozmalar</span>
          </Link>
        </motion.li>
        <motion.li
          className="map-item"
          whileHover={{ x: 55 }}
          onClick={() => setNum(3)}
        >
          <Link className="map-link">
            {" "}
            <div>
              <GiTwoCoins />
            </div>{" "}
            <span> Tangalar</span>
          </Link>
        </motion.li>
        <motion.li
          className="map-item"
          whileHover={{ x: 55 }}
          onClick={() => setNum(4)}
        >
          <Link className="map-link">
            {" "}
            <div>
              <RiFilePaper2Line />
            </div>{" "}
            <span> Bitiklar</span>
          </Link>
        </motion.li>

        <motion.li
          className="map-item"
          whileHover={{ x: 55 }}
          onClick={() => setNum(5)}
        >
          <Link className="map-link">
            {" "}
            <div>
              <LiaBoxOpenSolid />
            </div>{" "}
            <span> Tarixiy hujatlar</span>
          </Link>
        </motion.li>

        <motion.li
          className="map-item"
          whileHover={{ x: 55 }}
          onClick={() => setNum(6)}
        >
          <Link className="map-link">
            {" "}
            <div>
              {" "}
              <GiStamper />
            </div>
            <span> San'at asarlari</span>
          </Link>
        </motion.li>
        <motion.li className="map-item" whileHover={{ x: 55 }}>
          <Link className="map-link">
            {" "}
            <div>
              <CiInboxIn />
            </div>{" "}
            <span>Arxiv jamg'armalari</span>
          </Link>
        </motion.li>
        <motion.li className="map-item" whileHover={{ x: 55 }}>
          <Link className="map-link">
            {" "}
            <div>
              <ImNewspaper />
            </div>{" "}
            <span> Matbuot</span>
          </Link>
        </motion.li>
        <motion.li className="map-item" whileHover={{ x: 55 }}>
          <Link className="map-link">
            {" "}
            <div>
              <FaPhotoFilm />
            </div>
            <span> Foto va video manbalar</span>
          </Link>
        </motion.li>
      </motion.ul>

      <MapContainer
        className="map"
        center={position}
        center2={position1}
        zoom={3}
        // style={{ height: "600px", width: "100%" }}
        attributionControl={false}
      >
        <TileLayer
          url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png?lang=ru"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <GeoJSON
          data={geojsonData}
          style={style}
          onEachFeature={onEachFeature}
        />
        {cordinat[num]?.map((e) => (
          <Marker key={e.id} position={e.lan} icon={markerIcon}>
            <Popup className="popapa">
              {e.title} <br /> {e.title2}
              <button className="popapa-btn">Batafsil</button>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
