import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AdminStyleDiv } from './AdminStyle'
import FlightIcon from '@mui/icons-material/Flight';
import { FormControl, InputLabel, MenuItem, OutlinedInput, Select, TextField } from '@mui/material'
import icon from '../../img/favicon.png'
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import contextStore from '../../context/contextFile';
import InfoIcon from '@mui/icons-material/Info';

import { server_api } from '../api';


const AdminPage = () => {
  const {getAllTickets, allTickets, setallTickets, allBoughTickets,allBoughtTick} = useContext(contextStore)
  useEffect(()=>{
    getAllTickets()
    allBoughtTick()
    
  },[])

  const navigate = useNavigate()
  const [fromCity, setFromCity] = useState("")
  const [toCity, setToCity] = useState("")
  const [planeType, setPlaneType] = useState("")
  const [tripType, setTripType] = useState("")
  const [price, setPrice] = useState("")
  const [seats, setSeats] = useState("")
  const [date, setDate] = useState()


  useEffect(()=>{
      if(localStorage.getItem('adminId')){
      }else{
        navigate('/home');
      }
  },[])

  const showInfoHandler=(indx)=>{
    document.getElementById(`info-section-${indx}`).style.display= "block";
  }

  const hideInfoHandler=(indx)=>{
    document.getElementById(`info-section-${indx}`).style.display= "none";

  }

  const addTickethandler=async(ev)=>{
    ev.preventDefault()

    const response = await fetch(`${server_api}/addTicket`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body: JSON.stringify({source:fromCity, destination: toCity, plane:planeType, price:price, date:date,trip:tripType,seats:seats})
    })

    const json = await response.json()
    setallTickets(allTickets.concat(json))


    setFromCity("")
    setToCity("")
    setPlaneType("")
    setTripType("")
    setPrice("")
    setSeats("")
    setDate("")
  }


  const onLogoutHandler=()=>{
    localStorage.removeItem('adminId')
    navigate('/home', {replace:true});
  }

  const deleteTicketHandler=async(id)=>{

    const response = await fetch(`${server_api}/deleteTicket/${id}`,{
      method:"DELETE",
      headers:{
        "Content-Type":"application/json",
      },
    })
    const json = await response.json()
    setallTickets(allTickets.filter(val=> val._id!==id))
  }

  return (
    <AdminStyleDiv>
        <section className='admin-nav' data-aos="fade-in">
          <h2>
            <img src={icon} alt="icon" />
            skyView
          </h2>
          <button onClick={onLogoutHandler}>Logout</button>
        </section>

        <section className="add-ticket" data-aos="zoom-in">
          <h2>Add a Ticket</h2>

          <div className="circle"></div>

          <hr /> <br />

          <FormControl style={{width:"90%"}}>
            <InputLabel id="demo-simple-select-label" style={{color:"white"}}>Where From</InputLabel>
            <Select
              sx={{
                color: "white",
                '.MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(255, 255, 255, 0.885)',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgb(255, 255, 255)',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(238, 237, 238, 0.853)',
                },
                '.MuiSvgIcon-root ': {
                  fill: "white !important",
                }
              }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Where From"
              value={fromCity}
              onChange={ev=>setFromCity(ev.target.value)}
              style={{color:"white"}}
            >
              <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
              <MenuItem value={"Delhi"}>Delhi</MenuItem>
              <MenuItem value={"Bangaluru"}>Bangaluru</MenuItem>
              <MenuItem value={"Chandigarh"}>Chandigarh</MenuItem>
              <MenuItem value={"Srinagar"}>Srinagar</MenuItem>
              <MenuItem value={"Chennai"}>Chennai</MenuItem>
            </Select>
          </FormControl>
          <br />
          <FlightIcon fontSize='large' style={{ transform:"rotate(90deg)", margin:"1%"}}/>
          <br />
          <FormControl style={{width:"90%"}} color='success'>
            <InputLabel id="demo-simple-select-label" style={{color:"white"}}>Where To</InputLabel>
            <Select
              sx={{
                color: "white",
                '.MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(255, 255, 255, 0.885)',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgb(255, 255, 255)',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(238, 237, 238, 0.853)',
                },
                '.MuiSvgIcon-root ': {
                  fill: "white !important",
                }
              }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Where To"
              value={toCity}
              onChange={ev=>setToCity(ev.target.value)}
              style={{color:"white"}}
            >
              <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
              <MenuItem value={"Delhi"}>Delhi</MenuItem>
              <MenuItem value={"Bangaluru"}>Bangaluru</MenuItem>
              <MenuItem value={"Chandigarh"}>Chandigarh</MenuItem>
              <MenuItem value={"Srinagar"}>Srinagar</MenuItem>
              <MenuItem value={"Chennai"}>Chennai</MenuItem>
            </Select>
          </FormControl>

          <br />
              
          <section className="others">
            <label>Price </label>   
            <input type="text" 
              className='price' 
              placeholder='5000'
              value={price}
              onChange={ev=>setPrice(ev.target.value)}
              />
            
            <label>Plane</label>
            <FormControl variant="outlined" 
              size="small" 
              style={{width:"66.5%", marginBottom:"3%"}}>
                <InputLabel id="demo-simple-select-label"
                  sx={{color: "white",}}>Type</InputLabel>
               
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={planeType}
                  label="type"
                  onChange={ev=>setPlaneType(ev.target.value)}
                  sx={{
                    color: "white",
                    '.MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(255, 255, 255, 0.885)',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgb(255, 255, 255)',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(238, 237, 238, 0.853)',
                    },
                    '.MuiSvgIcon-root ': {
                      fill: "white !important",
                    }
                  }}
                >
                  <MenuItem value={"Air Asia"}>Air Asia</MenuItem>
                  <MenuItem value={"Air India"}>Air India</MenuItem>
                  <MenuItem value={"Go First"}>Go First</MenuItem>
                  <MenuItem value={"IndiGo"}>IndiGo</MenuItem>
                  <MenuItem value={"Vistara"}>Vistara</MenuItem>
                </Select>
            </FormControl>

            <label>Date</label>
            <input type="date"
             className='price' 
             value={date} 
             onChange={ev=> setDate(ev.target.value)}
             />

            <label>Seats </label>   
            <input type="text"
             className='price' 
             placeholder='120'
             value={seats}
             onChange={ev=>setSeats(ev.target.value)}
             />

            <label>Trip</label>
            <FormControl variant="outlined" size="small" style={{width:"66.5%", marginBottom:"3%"}}>
                <InputLabel id="demo-simple-select-label"
                  sx={{color: "white",}}>select</InputLabel>
               
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={tripType}
                  label="select"
                  onChange={ev=>setTripType(ev.target.value)}
                  sx={{
                    color: "white",
                    '.MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(255, 255, 255, 0.885)',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgb(255, 255, 255)',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(238, 237, 238, 0.853)',
                    },
                    '.MuiSvgIcon-root ': {
                      fill: "white !important",
                    }
                  }}
                >
                  <MenuItem value={"Round"}>Round</MenuItem>
                  <MenuItem value={"One way"}>One way</MenuItem>
                 
                </Select>
            </FormControl>
          </section>
          

          <br />
          <button onClick={addTickethandler}>Add Ticket</button>


        </section>

        <section className='avail-tickets'>
          <h2>Tickets Available</h2>

          <section className="map-tickets">
            {allTickets.length === 0 && 
                <div className="no-ticket-card">
                  No Ticket Found 
                  <div className="circle"></div>
                </div>
            }
            
            {allTickets.map((val,indx)=>(
              <div className="ticket-card" data-aos="fade-left" key={indx}>
                  <InfoIcon 
                   className='info-icon' 
                   fontSize='medium' 
                   onMouseEnter={()=>showInfoHandler(indx)}
                   onMouseLeave={()=>hideInfoHandler(indx)}
                   />
                  <div id={`info-section-${indx}`} class="info-section" data-aos="fade">
                      Date  &nbsp;: {val.date.substr(0,10)}
                      <br />
                      Price : Rs {val.price}
                      <br />
                      Seats : {val.seats}
                      <br />
                      Plane : {val.plane}
                      <br />
                      Trip &nbsp;: {val.trip}
                  </div>
                  <h3>{val.source}</h3>
                  <FlightIcon fontSize='large' style={{ transform:"rotate(90deg)", margin:"1%"}}/>
                  <h3>{val.destination}</h3>
                  <DeleteSweepIcon onClick={()=>deleteTicketHandler(val._id)} className='dlt-icon' fontSize='large'/>
              </div>
            ))}
            
          </section>

        </section>


        <section className="ticket-buy">
          <h2>Tickets Purchased History</h2>

          <section className="map-tickets">

          {allBoughTickets.length === 0 && 
                <div className="no-ticket-card card-2">
                  No Ticket Found 
                  <div className="circle"></div>
                </div>
            }
            
            {allBoughTickets.map((val,indx)=>(
              <div className="ticket-card" data-aos="fade-left" key={indx}>
                  <h3>{val.source}</h3>
                  <FlightIcon fontSize='large' style={{ transform:"rotate(90deg)", margin:"1%"}}/>
                  <h3>{val.destination}</h3>
                  <CheckCircleIcon className='dlt-icon' style={{color:"green"}} fontSize='large'/>

                  <h4>
                    Name  &nbsp;: {val.username} <br />
                    Date  &nbsp;: {val.date.substr(0,10)}
                    <br />
                    Price : Rs {val.price}
                    <br />
                    Seats : {val.seats}
                    <br />
                    Plane : {val.plane}
                    <br />
                    Trip &nbsp;: {val.trip}
                  </h4>
              </div>
            ))}
            
          </section>

        </section>

    </AdminStyleDiv>
  )
}

export default AdminPage