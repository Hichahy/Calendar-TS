import React, { MouseEvent, useState } from "react";
import { Weekday, Date } from "../../types";
import { Weekdays } from "../configs/Weekdays";
import { MonthDates } from "../configs/MonthDays";
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';

export const Calendar: React.FC<{}> = ({}) => {
  const [selectedDate, setSelectedDate] = useState<string | null>();

  const handleChange = (e: MouseEvent<HTMLButtonElement>) => {
    setSelectedDate(e.currentTarget.getAttribute("value"));
  };

  const generateDates = (date: number, index: number) => {
    let selectedDateNumber: number = selectedDate ? parseInt(selectedDate) : 0;
    for (let i = 0; i < 7; i++) {
      return (
        <button key={index}
          className={`date ${date == 18 ? "today" : ""} ${date == selectedDateNumber ? "selected" : ""}`}
          value={date}
          onClick={handleChange}
        >
          <p>{date}</p>
        </button>
      );
    }
  };

  const generateWeeks = (dates: Array<Date>) => {
    let daysInWeek = 7;
    let tempArray = [];

    for (let i = 0; i < dates.length; i += daysInWeek) {
      tempArray.push(dates.slice(i, i + daysInWeek));
    }
    return tempArray;
  };

  return (
    <div className="calendar-container">
      <div className="datepicker-container">
        <ArrowLeftOutlinedIcon fontSize="large" color="disabled"/>
        <span>February 2022</span>
        <ArrowRightOutlinedIcon fontSize="large" color="disabled"/>
      </div>
      <div className="weekdays-container">
        {Weekdays.map((day,index) => (
          <div key={index} className="week-day">{day}</div>
        ))}
      </div>
      <div className="calendar">
        {generateWeeks(MonthDates).map((week ,index) => (
          <div key={index} className="week">
            {week.map((day, index) => generateDates(day.day, index))}
          </div>
        ))}
      </div>
    </div>
  );
};
