// src/components/CustomTimePicker/CustomTimePicker.js
"use client"; // Mark as a client component since it uses React hooks

import React from 'react';
import { Select } from 'antd';
import moment from 'moment';

const { Option } = Select;

const CustomTimePicker = ({
  value,
  onChange,
  startTime = '09:00',
  endTime = '23:00',
  reservedTimes = [],
}) => {
  const times = generateTimeIntervals(30, startTime, endTime);

  function generateTimeIntervals(interval, start, end) {
    const times = [];
    const [startHour, startMinute] = start.split(':').map(Number);
    const [endHour, endMinute] = end.split(':').map(Number);

    const startTimeInMinutes = startHour * 60 + startMinute;
    const endTimeInMinutes = endHour * 60 + endMinute;

    for (let i = startTimeInMinutes; i <= endTimeInMinutes; i += interval) {
      const hours = Math.floor(i / 60);
      const minutes = i % 60;
      times.push(`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`);
    }
    return times;
  }

  const handleChange = (time) => {
    onChange(moment(time, 'HH:mm'));
  };

  return (
    <Select
      value={value ? value.format('HH:mm') : undefined}
      onChange={handleChange}
      style={{ width: '100%' }}
      placeholder="Select a time"
    >
      {times.map((time, index) => (
        <Option
          key={index}
          value={time}
          disabled={reservedTimes.includes(time)}
          style={{ textAlign: 'center' }}
        >
          {time}
        </Option>
      ))}
    </Select>
  );
};

export default CustomTimePicker;
