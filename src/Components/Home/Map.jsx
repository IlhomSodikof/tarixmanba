import { MapContainer, Marker, Popup, TileLayer, GeoJSON } from "react-leaflet";
import geojsonData from '../Home/data/map/countries.json'
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
      color: "#fff",
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
    <div className="map-full">


      <motion.ul className="map-menu">
        <motion.li className="dorop-item" whileHover={{ x: 15, opacity: 0.5 }} >
          <Link className='nav-drop-link'> <TbBuildingCastle /><span> Arxealogiya</span></Link>
        </motion.li>
        <motion.li className="dorop-item" whileHover={{ x: 15, opacity: 0.5 }} >
          <Link className='nav-drop-link'><HiUserGroup /> <span> Xalq og'zaki ijodi</span></Link>
        </motion.li>
        <motion.li className="dorop-item" whileHover={{ x: 15, opacity: 0.5 }} >
          <Link className='nav-drop-link'><MdOutlineHistoryEdu /> <span> Qo'lyozmalar</span></Link>
        </motion.li>
        <motion.li className="dorop-item" whileHover={{ x: 15, opacity: 0.5 }} >
          <Link className='nav-drop-link'><GiTwoCoins /> <span> Tangalar</span></Link>
        </motion.li>
        <motion.li className="dorop-item" whileHover={{ x: 15, opacity: 0.5 }} >
          <Link className='nav-drop-link'><RiFilePaper2Line /> <span> Bitiklar</span></Link>
        </motion.li>

        <motion.li className="dorop-item" whileHover={{ x: 15, opacity: 0.5 }} >
          <Link className='nav-drop-link'>< LiaBoxOpenSolid /> <span> Tarixiy hujatlar</span></Link>
        </motion.li>

        <motion.li className="dorop-item" whileHover={{ x: 15, opacity: 0.5 }} >
          <Link className='nav-drop-link'> <GiStamper /><span> San'at asarlari</span></Link>
        </motion.li>
        <motion.li className="dorop-item" whileHover={{ x: 15, opacity: 0.5 }} >
          <Link className='nav-drop-link'><CiInboxIn /> <span>Arxiv jamg'armalari</span></Link>
        </motion.li>
        <motion.li className="dorop-item" whileHover={{ x: 15, opacity: 0.5 }} >
          <Link className='nav-drop-link'> <ImNewspaper /><span>  Matbuot</span></Link>
        </motion.li>
        <motion.li className="dorop-item" whileHover={{ x: 15, opacity: 0.5 }} >
          <Link className='nav-drop-link'><FaPhotoFilm /><span>  Foto va video manbalar</span></Link>
        </motion.li>
      </motion.ul>

      <MapContainer
        className="map"
        center={position}
        zoom={1}
        // style={{ height: "600px", width: "100%" }}
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
    </div>
  );
}
