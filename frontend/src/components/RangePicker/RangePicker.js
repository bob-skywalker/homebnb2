import React, { useEffect, useState } from 'react'
import './RangePicker.css'
import { DateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { Box, Button, TextField } from '@mui/material'
import { PeopleOutline } from '@material-ui/icons'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import { useHistory, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getListing } from '../../store/listings'


const RangePicker = () => {
  const {listingId} = useParams();
  const[startDate, setStartDate] = useState(new Date())
  const[endDate, setEndDate] = useState(new Date())
  const history = useHistory()
  const listing = useSelector(getListing(listingId))
  const [dateRange,setDateRanges] = useState(0);
  // const [selectionRanges, setSelectionRanges] = useState({
  //   startDate: startDate,
  //   endDate: endDate,
  //   key: 'selection'
  // })


  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };

  // useEffect(()=>{
  //   setSelectionRanges(selectionRange)
  // },[selectionRange])

  function handleSelect(ranges){
    let days
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
    days = (selectionRange.endDate.getTime() - selectionRange.startDate.getTime()) / 86400000
    // console.log(selectionRange)
    // console.log(days)

    setDateRanges(days)
  }


  // console.log(dateRange)


  return (
    <>
      <div className='range-picker'>
            <DateRangePicker
            className='rp'
            ranges={[selectionRange]}
            onChange={handleSelect}
            minDate = {new Date()}
            />
            {/* {console.log((selectionRange.endDate.getTime()-selectionRange.startDate.getTime()) / 86400000)} */}
            <h2>
              Number of guests
              <PeopleOutlineIcon/>
            </h2>
            <input
            defaultValue={2}
            type='number'
            />
            <Button variant='outlined' onClick={()=> history.pushState('/search')}>Reserve</Button>
            <div className='price-calculator'>
              <p className='warning'>You won't be charged yet</p>
              <div className='price-sums'>
                <h3>{`$${listing.price}/night`}</h3>
                <h3 >${listing.price * dateRange}</h3>
              </div>
              <div></div>
            </div>
      </div>
    </>
  )
}

export default RangePicker
