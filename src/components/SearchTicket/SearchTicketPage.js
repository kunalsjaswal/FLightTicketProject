import React, { useContext, useEffect, useState } from 'react'
import { SearchTicketDiv } from './SearchTicketStyle'
import { Alert, Button, FormControl, FormControlLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material'
import FlightIcon from '@mui/icons-material/Flight';
import SearchIcon from '@mui/icons-material/Search';
import contextStore from '../../context/contextFile';



const SearchTicketPage = () => {

  const {allTickets,getAllTickets} = useContext(contextStore)

  const [flag, setFlag] = useState(false)

  // serach ticket data 
  const [tripType, setTripType] = useState("")
  const [planeType, setPlaneType] = useState("")
  const [travellers, setTravellers] = useState(1)
  const [fromCity, setFromCity] = useState("")
  const [toCity, setToCity] = useState("")

  const [searchError, setSearchError] = useState(false)

  const onSearchHandler=async()=>{
    if(fromCity.length===0){
      setSearchError(true)
      setFlag(false)

    }else{
      setSearchError(false)
      setFlag(true)
      getAllTickets();
    }
  }

  return (
    <SearchTicketDiv id='shift-1'>
      <div className="box-1">
        <h1 >Search Tickets</h1>
        <h3>Compare and Book flight tickets with ease</h3>
      
        <div className="box-2">

            <div className="radios">
              <FormControl >
                <RadioGroup
                  row
                  aria-labeledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                  value={tripType}
                  onChange={ev=>setTripType(ev.target.value)}
                >
                  <FormControlLabel value="oneway" control={<Radio style={{color:"black"}} />} label="One way" />
                  <FormControlLabel value="roundtrip" control={<Radio style={{color:"black"}}/>} label="Round trip" />
                </RadioGroup>
              </FormControl>

              {/* plane type  */}
              <FormControl variant="outlined" size="small" style={{width:"15%",marginLeft:'2%'}}>
                <InputLabel id="demo-simple-select-label">Plane Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={planeType}
                  label="Plane Type"
                  onChange={ev=>setPlaneType(ev.target.value)}
                >
                  <MenuItem value={"Air Asia"}>Air Asia</MenuItem>
                  <MenuItem value={"Air India"}>Air India</MenuItem>
                  <MenuItem value={"Go First"}>Go First</MenuItem>
                  <MenuItem value={"IndiGo"}>IndiGo</MenuItem>
                  <MenuItem value={"Vistara"}>Vistara</MenuItem>
                </Select>
              </FormControl>

              {/* total members */}
              <TextField
                size='small'
                id="outlined-number"
                label="Travellers"
                type="number"
                value={travellers}
                onChange={ev=>setTravellers(ev.target.value)}
                InputLabelProps={{shrink: true,}}
                InputProps={{ inputProps: { min: 1, max: 6} }}
                style={{marginLeft:"2%",width:"15%"}}
              />

            </div>

            <div className="selects" style={{marginTop:"2%"}}>
              <FormControl style={{width:"30%"}}>
                  <InputLabel id="demo-simple-select-label">Where From</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Where From"
                    value={fromCity}
                    onChange={ev=>setFromCity(ev.target.value)}
                  >
                    <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
                    <MenuItem value={"Delhi"}>Delhi</MenuItem>
                    <MenuItem value={"Bangaluru"}>Bangaluru</MenuItem>
                    <MenuItem value={"Chandigarh"}>Chandigarh</MenuItem>
                    <MenuItem value={"Srinagar"}>Srinagar</MenuItem>
                    <MenuItem value={"Chennai"}>Chennai</MenuItem>
                  </Select>
                </FormControl>
                
            <FlightIcon fontSize='large' style={{ transform:"rotate(90deg)", margin:"1%"}}/>

                <FormControl style={{width:"30%"}}>
                  <InputLabel id="demo-simple-select-label">Where To</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Where To"
                    value={toCity}
                    onChange={ev=>setToCity(ev.target.value)}
                  >
                    <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
                    <MenuItem value={"Delhi"}>Delhi</MenuItem>
                    <MenuItem value={"Bangaluru"}>Bangaluru</MenuItem>
                    <MenuItem value={"Chandigarh"}>Chandigarh</MenuItem>
                    <MenuItem value={"Srinagar"}>Srinagar</MenuItem>
                    <MenuItem value={"Chennai"}>Chennai</MenuItem>
                  </Select>
                </FormControl>
                
                <label className='date-label'>Date</label>
                <input type="date" />
            </div>

            {
              searchError &&
              <Alert severity="error" style={{width:"27%",margin:"auto",marginTop:"1%"}}>Fill all Fields</Alert>
            }
            <Button variant="contained" color="error" className='button-search' startIcon={<SearchIcon />} onClick={onSearchHandler}>Search Ticket</Button>
            
        </div>
            
            {/* show all tickets  */}
            {flag &&
                <div className='user-tickets'>
                  <h2>Available Tickets</h2>
                    <div className="tickets">

                        {allTickets.length === 0 && <span>No ticket found</span>}
                        {allTickets.length > 0 &&
                          allTickets.map((val,ind)=>(
                            <div className='ticket-card'>
                              
                              <div className="dest">
                                <h2>{val.source}</h2>
                                <h3>To</h3>
                                <h2>{val.destination}</h2>
                              </div>

                              <div className="rest">
                                <h5>plane type: {val.plane}</h5>
                                <h5>Trip type: {val.trip}</h5>
                                <h5>plane type: {val.plane}</h5>
                              </div>

                              <div className="cost">
                                  <h5>Date: {val.date}</h5>
                                  <h5>Price: Rs. {val.price}</h5>
                              </div>

                            </div>
                          ))
                        }
                        
                    </div>
              </div>
            }


      </div>

    </SearchTicketDiv>
  )
}

export default SearchTicketPage