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
import { useState } from "react";
export default function Map() {
  const position = [41.304987, 69.283384];
  const position1 = [41.488801, 69.5857077];

  const [num, setNum] = useState(0)



  const cordinat = [
    [
      { id: 1, lan: [41.304987, 69.283384], title: "Tarix unversityfdsfsdfdsfdsfdfdfdsfsdfdsfsdfdsfdsfdfsd", title2: "arix unversityfdsfsdfdsfdsfdfdfdsfsdfdsfsdfdsfdsfdfsd" },
      { id: 2, lan: [41.488801, 69.5857077], title: "Chirchiq unversity" },
      { id: 3, lan: [38.841450, 65.789686], title: "Qishloq unver" },
      { id: 4, lan: [41.568854, 64.202113], title: "matem unversity" },

    ],
    [
      { id: 1, lan: [39.654403, 66.975837], title: "Smarqand unversity" },
      { id: 2, lan: [40.103060, 65.373973], title: "Navoiy unversity" },

    ],

  ]

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
        <motion.li className="map-item" whileHover={{ x: 15, opacity: 0.5 }} onClick={() => setNum(0)} >
          <Link className='map-link'> <TbBuildingCastle /><span> Arxealogiya</span></Link>
        </motion.li>
        <motion.li className="map-item" whileHover={{ x: 15, opacity: 0.5 }} onClick={() => setNum(1)} >
          <Link className='map-link'><HiUserGroup /> <span> Xalq og'zaki ijodi</span></Link>
        </motion.li>
        <motion.li className="map-item" whileHover={{ x: 15, opacity: 0.5 }} >
          <Link className='map-link'><MdOutlineHistoryEdu /> <span> Qo'lyozmalar</span></Link>
        </motion.li>
        <motion.li className="map-item" whileHover={{ x: 15, opacity: 0.5 }} >
          <Link className='map-link'><GiTwoCoins /> <span> Tangalar</span></Link>
        </motion.li>
        <motion.li className="map-item" whileHover={{ x: 15, opacity: 0.5 }} >
          <Link className='map-link'><RiFilePaper2Line /> <span> Bitiklar</span></Link>
        </motion.li>

        <motion.li className="map-item" whileHover={{ x: 15, opacity: 0.5 }} >
          <Link className='map-link'>< LiaBoxOpenSolid /> <span> Tarixiy hujatlar</span></Link>
        </motion.li>

        <motion.li className="map-item" whileHover={{ x: 15, opacity: 0.5 }} >
          <Link className='map-link'> <GiStamper /><span> San'at asarlari</span></Link>
        </motion.li>
        <motion.li className="map-item" whileHover={{ x: 15, opacity: 0.5 }} >
          <Link className='map-link'><CiInboxIn /> <span>Arxiv jamg'armalari</span></Link>
        </motion.li>
        <motion.li className="map-item" whileHover={{ x: 15, opacity: 0.5 }} >
          <Link className='map-link'> <ImNewspaper /><span>  Matbuot</span></Link>
        </motion.li>
        <motion.li className="map-item" whileHover={{ x: 15, opacity: 0.5 }} >
          <Link className='map-link'><FaPhotoFilm /><span>  Foto va video manbalar</span></Link>
        </motion.li>
      </motion.ul>

      <MapContainer
        className="map"
        center={position}
        center2={position1}

        zoom={5}
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
        {cordinat[num]?.map((e) => (

          <Marker key={e.id} position={e.lan}>
            <Popup className="popapa">
              {e.title} <br /> {e.title2}
            </Popup>
          </Marker>
        ))
        }
        {/* <Marker position={position1}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <Marker position={position}>
          <Popup>
            Nodirning  yashash manzili: <br /> Yerning a***
          </Popup>
        </Marker> */}
      </MapContainer>
    </div>
  );
}
