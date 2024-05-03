import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";

export default function ReactDatePicker() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <div style={{ display: "flex", gap: 5 }}>
        <FaCalendarAlt />
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat={"MM/DD/YYYY"}
        ></DatePicker>
      </div>
    </>
  );
}
