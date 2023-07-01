import React, { useContext, useEffect, useState } from 'react'
import { SearchTicketDiv } from './SearchTicketStyle'
import { Alert, Button, FormControl, FormControlLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material'
import FlightIcon from '@mui/icons-material/Flight';
import SearchIcon from '@mui/icons-material/Search';
import contextStore from '../../context/contextFile';
import { server_api } from '../api';



const SearchTicketPage = () => {

  const {allTickets,getAllTickets,userTickets,setUserTickets} = useContext(contextStore)

  const [flag, setFlag] = useState(false)

  // serach ticket purpose 
  const [fromCity, setFromCity] = useState("")
  const [toCity, setToCity] = useState("")

  const [searchError, setSearchError] = useState(false)

  const [localTickets, setLocalTickets] = useState([])

  const onSearchHandler=async()=>{
    if(fromCity.length===0 || toCity.length === 0){
      setSearchError(true)
      setFlag(false)

    }else{
      setSearchError(false)
      setFlag(true)
      getAllTickets();
      setLocalTickets(allTickets.filter(val=>(val.source === fromCity && val.destination === toCity)))
    }
  }


  // booking ticket purpose 
  const [seats, setSeats] = useState(0)

  const onBookHandler=async(src,dstn,price,date,plane,trip)=>{
    const response = await fetch(`${server_api}/buyTicket/${localStorage.getItem('token')}`,{
      method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify({source:src,username:localStorage.getItem('username'),destination:dstn,price:price*seats,date:date,plane:plane,trip:trip,seats:seats})
    });

    const json = await response.json();
    setUserTickets(userTickets.concat(json))
    setSeats(0)

  }

  return (
    <SearchTicketDiv id='shift-1'>
      <div className="box-1">
        <h1 >Search Tickets</h1>
        <h3>Compare and Book flight tickets with ease</h3>
      
        <div className="box-2">

          <div className="selects">
              <FormControl style={{width:"45%"}}>
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

                <FormControl style={{width:"45%"}}>
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

                        {localTickets.length === 0 && 
                          <div className="no-ticket-card">
                            No Ticket Found 
                            <div className="circle"></div>
                          </div>
                        }
                        {localTickets.length > 0 &&
                          localTickets.map((val,ind)=>(
                            <div className='ticket-card'>
                              <div className="circle"></div>
                              <div className="dest">
                                <h2>{val.source}</h2>
                                <h3 style={{color:"black"}}>To</h3>
                                <h2>{val.destination}</h2>
                              </div>

                              <div className="rest">
                                <h5>plane type: {val.plane}</h5>
                                <h5>Trip type: {val.trip}</h5>
                                <h5>Seats: {val.seats}</h5>
                                <h5>Date: {val.date.substr(0,10)}</h5>
                                <h5>Price: Rs. {val.price}</h5>
                              </div>
                              {localStorage.getItem("token") && 
                                <div style={{ marginTop:"5%"}}>
                                  <label >Enter Seats </label>
                                  <input type="number" value={seats} onChange={ev=>setSeats(ev.target.value)} style={{border:"1px solid black", borderRadius:"3px", padding:"2%"}}/>
                                </div>
                              }
                              <br />
                              {localStorage.getItem("token")?
                              <button 
                                onClick={()=>onBookHandler(val.source, val.destination,val.price,val.date,val.plane,val.trip)}
                              >Book Now</button>:
                              <button>Login to Book</button>
                              }
                              
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