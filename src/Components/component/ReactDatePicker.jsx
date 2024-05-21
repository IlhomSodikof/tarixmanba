import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";


export default function ReactDatePicker() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [hijriList, setHijriList] = useState({ year: "", day: "", month: "" });

  useEffect(() => {
    // setInterval(() => setTime(new Date()), 1000);
    const manth = new Intl.DateTimeFormat("en-TN-u-ca-islamic", {
      day: "numeric",
      month: "numeric",
      weekday: "long",
      year: "numeric",
    }).format(new Date(`${selectedDate.getFullYear()}/${selectedDate.getMonth() + 1}/${selectedDate.getDate()}`))
    // console.log("hijjjjjjjjjjj", manth);
    // console.log(manth.split(" ")[1].slice(0, 2));
    console.log(`${selectedDate.getFullYear()}/${selectedDate.getMonth() + 1}/${selectedDate.getDate()}`);

    switch (manth.split(" ")[1].slice(0, 2)) {
      case "1/":
        setHijriList({
          year: `${manth.split("/")[2].slice(0, 4)} yil`,
          day: `${manth.split("/")[1]}`,
          month: `Muharram`,
        });
        break;
      case "2/":
        setHijriList({
          year: `${manth.split("/")[2].slice(0, 4)} yil`,
          day: `${manth.split("/")[1]}`,
          month: `Safar`,
        });
        break;
      case "3/":
        setHijriList({
          year: `${manth.split("/")[2].slice(0, 4)} yil`,
          day: `${manth.split("/")[1]}`,
          month: `Rabiul Avval`,
        });
        break;
      case "4/":
        setHijriList({
          year: `${manth.split("/")[2].slice(0, 4)} yil`,
          day: `${manth.split("/")[1]}`,
          month: `Raius Soniy`,
        });
        break;
      case "5/":
        setHijriList({
          year: `${manth.split("/")[2].slice(0, 4)} yil`,
          day: `${manth.split("/")[1]}`,
          month: `Jumodul Avval`,
        });
        break;
      case "6/":
        setHijriList({
          year: `${manth.split("/")[2].slice(0, 4)} yil`,
          day: `${manth.split("/")[1]}`,
          month: `Jumodus Soniy`,
        });
        break;
      case "7/":
        setHijriList({
          year: `${manth.split("/")[2].slice(0, 4)} yil`,
          day: `${manth.split("/")[1]}`,
          month: `Rajab`,
        });
        break;
      case "8/":
        setHijriList({
          year: `${manth.split("/")[2].slice(0, 4)} yil`,
          day: `${manth.split("/")[1]}`,
          month: `Sha'bon`,
        });
        break;
      case "9/":
        setHijriList({
          year: `${manth.split("/")[2].slice(0, 4)} yil`,
          day: `${manth.split("/")[1]}`,
          month: `Ramazon`,
        });
        break;
      case "10":
        setHijriList({
          year: `${manth.split("/")[2].slice(0, 4)} yil`,
          day: `${manth.split("/")[1]}`,
          month: `Shavvol`,
        });
        break;

      case "11":
        setHijriList({
          year: `${manth.split("/")[2].slice(0, 4)} yil`,
          day: `${manth.split("/")[1]}`,
          month: `Zulqa'da`,
        });
        // console.log(hijriList);
        break;

      case "12":
        setHijriList({
          year: `${manth.split("/")[2].slice(0, 4)} yil`,
          day: `${manth.split("/")[1]}`,
          month: `Zulhijja`,
        });
        break;
    }
  }, [selectedDate]);
  return (
    <>
      <div className="live_clendar_item">
        <FaCalendarAlt />
        <DatePicker
          selected={selectedDate}
          onChange={(e) => setSelectedDate(e)}
          dateFormat={"dd-MM-yyyy"}
        />
        {/* {console.log();} */}
        <div>{`${hijriList.year} ${hijriList.day} ${hijriList.month}`}</div>
      </div>
    </>
  );
}
