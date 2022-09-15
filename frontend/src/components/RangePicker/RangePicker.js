import React, { useState } from 'react'
import './RangePicker.css'
import { DateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { Box, TextField } from '@mui/material'


const RangePicker = () => {
  const[startDate, setStartDate] = useState(new Date())
  const[endDate, setEndDate] = useState(new Date())

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };

  function handleSelect(ranges){
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  console.log(selectionRange)

  return (
    <div className='range-picker'>
        <DateRangePicker
        className='rp'
        ranges={[selectionRange]}
        onChange={handleSelect}
        minDate = {new Date()}
        />
    </div>
  )
}

export default RangePicker
