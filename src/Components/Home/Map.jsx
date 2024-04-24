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
import { useCallback, useEffect, useMemo, useState } from "react";
import markerIconarchialogy from "../../assets/img/mapIconSvg/archialogy.svg";
import markerIconPng from "../../assets/img/coin (4) 1.svg";
import markerIcongroup from "../../assets/img/mapIconSvg/group.svg";
import markerIconmanuscript from "../../assets/img/mapIconSvg/manuscript.svg";
import markerIconcoin from "../../assets/img/mapIconSvg/coin.svg";
import markerIconinscriptions from "../../assets/img/mapIconSvg/inscriptions.svg";
import markerIcondocuments from "../../assets/img/mapIconSvg/documents.svg";
import markerIconart from "../../assets/img/mapIconSvg/art.svg";
import markerIconarxiv from "../../assets/img/mapIconSvg/arxiv.svg";
import markerIconpress from "../../assets/img/mapIconSvg/press.svg";
const leftBarTypeList = {
  archialogy: markerIconarchialogy,
  group: markerIcongroup,
  manuscript: markerIconmanuscript,
  coin: markerIconcoin,
  inscriptions: markerIconinscriptions,
  documents: markerIcondocuments,
  art: markerIconart,
  arxiv: markerIconarxiv,
  press: markerIconpress,
};
export default function Map() {
  const position = [41.304987, 69.283384];
  const position1 = [41.488801, 69.5857077];
  const [num, setNum] = useState(0);
  const [leftBarType, setLeftBarType] = useState(markerIconPng);
  const cordinat = [
    [
      {
        id: 1,
        lan: [41.304987, 69.283384],
        title: "Tarix ddsdf",
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
  const markerIcon = useCallback(() => {
    return new L.Icon({
      iconUrl: leftBarType,
      iconRetinaUrl: leftBarType,
      popupAnchor: [-0, -0],
      iconSize: [32, 45],
    });
  }, [leftBarType]);

  const setMarker = (type) => {
    setLeftBarType(type);
  };
  return (
    <div className="map-full">
      <motion.ul className="map-menu">
        <motion.li
          className={`map-item ${
            leftBarType == leftBarTypeList.archialogy ? " active" : ""
          }`}
          whileHover={{ x: 20 }}
          onClick={() => setMarker(leftBarTypeList.archialogy)}
        >
          <Link className="map-link">
            <button>
              <TbBuildingCastle />
              <span className="hover-toltip">Arxealogiya</span>
            </button>{" "}
            <span> Arxealogiya</span>
          </Link>
        </motion.li>
        <motion.li
          className="map-item"
          whileHover={{ x: 20 }}
          onClick={() => setMarker(leftBarTypeList.group)}
        >
          <Link className="map-link">
            {" "}
            <button>
              <HiUserGroup />
              <span className="hover-toltip">Xalq og'zaki ijodi</span>
            </button>{" "}
            <span> Xalq og'zaki ijodi</span>
          </Link>
        </motion.li>
        <motion.li
          className={`map-item ${
            leftBarType == leftBarTypeList.manuscript ? " active" : ""
          }`}
          whileHover={{ x: 20 }}
          onClick={() => setMarker(leftBarTypeList.manuscript)}
        >
          <Link className="map-link">
            {" "}
            <button>
              <MdOutlineHistoryEdu />
              <span className="hover-toltip">Qo'lyozmalar</span>
            </button>{" "}
            <span> Qo'lyozmalar</span>
          </Link>
        </motion.li>
        <motion.li
          className="map-item"
          whileHover={{ x: 20 }}
          onClick={() => setMarker(leftBarTypeList.coin)}
        >
          <Link className="map-link">
            <button>
              <GiTwoCoins />
              <span className="hover-toltip">Tangalar</span>
            </button>{" "}
            <span> Tangalar</span>
          </Link>
        </motion.li>
        <motion.li
          className="map-item"
          whileHover={{ x: 20 }}
          onClick={() => setMarker(leftBarTypeList.inscriptions)}
        >
          <Link className="map-link">
            {" "}
            <button>
              <RiFilePaper2Line />
              <span className="hover-toltip">Bitiklar</span>
            </button>{" "}
            <span> Bitiklar</span>
          </Link>
        </motion.li>

        <motion.li
          className="map-item"
          whileHover={{ x: 20 }}
          onClick={() => setMarker(leftBarTypeList.documents)}
        >
          <Link className="map-link">
            {" "}
            <button>
              <LiaBoxOpenSolid />
              <span className="hover-toltip">Tarixiy hujatla</span>
            </button>{" "}
            <span> Tarixiy hujatlar</span>
          </Link>
        </motion.li>

        <motion.li
          className="map-item"
          whileHover={{ x: 20 }}
          onClick={() => setMarker(leftBarTypeList.art)}
        >
          <Link className="map-link">
            {" "}
            <button>
              {" "}
              <GiStamper />
              <span className="hover-toltip">San'at asarlari</span>
            </button>
            <span> San'at asarlari</span>
          </Link>
        </motion.li>
        <motion.li
          className="map-item"
          whileHover={{ x: 20 }}
          onClick={() => setMarker(leftBarTypeList.arxiv)}
        >
          <Link className="map-link">
            {" "}
            <button>
              <CiInboxIn />
              <span className="hover-toltip">Arxiv jamg'armalari</span>
            </button>{" "}
            <span>Arxiv jamg'armalari</span>
          </Link>
        </motion.li>
        <motion.li
          className="map-item"
          whileHover={{ x: 20 }}
          onClick={() => setMarker(leftBarTypeList.press)}
        >
          <Link className="map-link">
            {" "}
            <button>
              <ImNewspaper />
              <span className="hover-toltip">Matbuot</span>
            </button>{" "}
            <span> Matbuot</span>
          </Link>
        </motion.li>
        <motion.li className="map-item" whileHover={{ x: 20 }}>
          <Link className="map-link">
            {" "}
            <button>
              <FaPhotoFilm />
              <span className="hover-toltip">Foto va video manbalar</span>
            </button>
            <span> Foto va video manbalar</span>
          </Link>
        </motion.li>
      </motion.ul>

      <MapContainer
        key={leftBarType}
        className="map"
        center={position}
        center2={position1}
        zoom={3}
        // style={{ height: "600px", width: "100%" }}
        attributionControl={false}
      >
        <TileLayer
          // url="https://tile.jawg.io/jawg-dark/{z}/{x}/{y}.png?lang=ru&access-token=cP6rLK4nDH9gYDmHudFvIbWeHcS6fi4LrsXRV03tZ55CV16hlgRiOPMbGejtGuXm"
          url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png?lang=ru"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <GeoJSON
          data={geojsonData}
          style={style}
          onEachFeature={onEachFeature}
        />
        {cordinat[num]?.map((e) => (
          <Marker
            key={e.id + num + leftBarType}
            position={e.lan}
            icon={markerIcon()}
          >
            {console.log(markerIcon())}
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
