import React, { useContext, useEffect } from 'react'
import { DashBoardStyleDiv } from './DashboardStyle'
import contextStore from '../../context/contextFile'
import InfoIcon from '@mui/icons-material/Info';
import FlightIcon from '@mui/icons-material/Flight';


const DashboardSection = () => {
  const {userTickets,getUserTickets} = useContext(contextStore)
  useEffect(()=>{
    getUserTickets(localStorage.getItem('token'))
    console.log(userTickets)
  },[])

  const showInfoHandler=(indx)=>{
    document.getElementById(`info-section-${indx}`).style.display= "block";
  }

  const hideInfoHandler=(indx)=>{
    document.getElementById(`info-section-${indx}`).style.display= "none";

  }

  return (
    <DashBoardStyleDiv>
        <h1>Dashboard</h1>
        <h3>Welcome {localStorage.getItem('username')}!</h3>


        <div className='user-tickets'>
            <h2>Tickets History</h2>
            
            <div className="tickets">

              {userTickets.length === 0 && 
                  <div className="no-ticket-card">
                    No Ticket Found 
                    <div className="circle"></div>
                  </div>
              }
                {userTickets.length > 0 &&
                  
                  userTickets.map((val,indx)=>(
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
                            Seats : {val.seats}
                            <br />
                            Plane : {val.plane}
                            <br />
                            Trip &nbsp;: {val.trip}
                        </div>
                        <h3>{val.source}</h3>
                        <FlightIcon fontSize='large' style={{ transform:"rotate(90deg)", margin:"1%"}}/>
                        <h3>{val.destination}</h3>
                        
                        <h2>Price : Rs {val.price}</h2>
                    </div>
                  ))
                }
                
                
            </div>
        </div>
    </DashBoardStyleDiv>
  )
}

export default DashboardSection