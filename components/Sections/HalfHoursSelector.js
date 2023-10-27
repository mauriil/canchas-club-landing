import React, { useEffect, useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const HalfHourTimeSelector = ({ startTime, endTime, onStartTimeChange, onEndTimeChange, fromHour, toHour }) => {
  const [halfHourOptions, setHalfHourOptions] = useState([]);

  useEffect(() => {
    generateHalfHourOptions();
  }, [fromHour, toHour]);

  const generateHalfHourOptions = () => {
    const options = [];
    let currentHour = fromHour;
    while (currentHour <= toHour) {
      options.push(currentHour);
      const [hour, minutes] = currentHour.split(':');
      const nextMinutes = parseInt(minutes, 10) + 30;
      if (nextMinutes === 60) {
        const nextHour = (parseInt(hour, 10) + 1).toString().padStart(2, '0');
        currentHour = `${nextHour}:00`;
      } else {
        const nextMinutesStr = nextMinutes.toString().padStart(2, '0');
        currentHour = `${hour}:${nextMinutesStr}`;
      }
    }
    setHalfHourOptions(options);
  };

  return (
    <>
      <FormControl sx={{ mb: 2, mt: 2, width: '50%' }}>
        <InputLabel>Desde</InputLabel>
        <Select value={startTime} onChange={onStartTimeChange}>
          {halfHourOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ mb: 2, mt: 2, width: '50%' }}>
        <InputLabel>Hasta</InputLabel>
        <Select value={endTime} onChange={onEndTimeChange}>
          {halfHourOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default HalfHourTimeSelector;
