"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface DatePickerProps {
  value: string,
  onChange: (date: string) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ value, onChange }) => {
  const today = new Date();

  const [showCalendar, setShowCalendar] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const ref = useRef<HTMLDivElement | null>(null);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Sync prop value
  useEffect(() => {
    if (value) {
      setSelectedDate(value ? new Date(value) : null);
    }
  }, [value]);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setShowCalendar(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const displayDate = selectedDate
    ? `${selectedDate.getDate()} ${months[selectedDate.getMonth()]} ${selectedDate.getFullYear()}`
    : "Choose Date";

  const toggleCalendar = () => setShowCalendar(!showCalendar);

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  };

  const getDaysInMonth = () => {
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const days = [];
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let i = 0; i < firstDay; i++) {
      days.push({ date: null, isDisabled: true });
    }

    for (let d = 1; d <= lastDay.getDate(); d++) {
      const current = new Date(currentYear, currentMonth, d);

      days.push({
        date: current,
        isDisabled: current < today,
        isSelected:
          selectedDate &&
          current.toDateString() === selectedDate.toDateString(),
      });
    }

    return days;
  };

  const selectDate = (day: any) => {
    if (day.isDisabled || !day.date) return;

    setSelectedDate(day.date);
    onChange(day.date.toISOString().split("T")[0]);
    setShowCalendar(false);
  };

  return (
    <div ref={ref} className="relative inline-block w-full">
      <span className="w-full text-black text-xs text-right flex items-right justify-end">
        {displayDate}
      </span>
      {/* Calendar */}
      <div className="my-2 bg-white p-4 w-full">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <button
            type="button"
            onClick={prevMonth}
            className="p-2 hover:bg-gray-100 rounded"
          >
            <FaChevronLeft />
          </button>

          <div className="font-semibold text-[#00008B]">
            {months[currentMonth]} {currentYear}
          </div>

          <button
            type="button"
            onClick={nextMonth}
            className="p-2 hover:bg-gray-100 rounded"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Days */}
        <div className="grid grid-cols-7 text-center text-xs text-gray-900">
          {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
            <div key={d}>{d}</div>
          ))}
        </div>

        {/* Dates */}
        <div className="grid grid-cols-7 gap-1 mt-2">
          {getDaysInMonth().map((day, index) => (
            <div
              key={index}
              onClick={() => selectDate(day)}
              className={`p-2 text-center rounded text-sm cursor-pointer
                  ${day.isSelected ? "bg-[#00008B] text-white" : ""}
                  ${day.isDisabled ? "text-gray-300 cursor-not-allowed" : "hover:bg-[#00008B]/50 hover:text-white text-gray-600"}
                `}
            >
              {day.date && day.date.getDate()}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DatePicker
