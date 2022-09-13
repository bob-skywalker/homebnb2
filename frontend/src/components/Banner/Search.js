import React, { useState } from 'react'
import './Search.css'
import { DateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import { Button } from '@mui/material'
import { Router, useHistory } from 'react-router-dom'

//date range component
const Search = () => {
  const[startDate,setStartDate] = useState(new Date());
  const[endDate, setEndDate] = useState(new Date());
  const history = useHistory();


  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key:'selection',
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <div className='search'>
        <DateRangePicker
        ranges={[selectionRange]}
        minDate = {new Date()}
        onChange={handleSelect}/>
        <h2>
            Number of guests
            <PeopleOutlineIcon/>
        </h2>
        <input min={0}
        defaultValue={2}
        type="number"
        />
        <Button variant='outlined' onClick={()=> history.push('/search')}>Search</Button>
    </div>
  )
}

export default Search
