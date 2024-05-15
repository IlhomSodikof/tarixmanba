import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";


export default function ReactDatePicker() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <>
      <div style={{ display: "flex", gap: 5 }}>
        <FaCalendarAlt />
        <DatePicker
          selected={selectedDate}
          // onChange={(e) => setSelectedDate(e)}
          dateFormat={"dd/MM/yyyy"}
        />

      </div>
    </>
  );
}
