import React, { useContext, useEffect } from 'react'
import { DashBoardStyleDiv } from './DashboardStyle'
import TicketBook from '../ticket/TicketBook'
import contextStore from '../../context/contextFile'

const DashboardSection = () => {
  const {userTickets,getUserTickets} = useContext(contextStore)
  useEffect(()=>{
    getUserTickets(localStorage.getItem('token'))
    console.log(userTickets)
  },[])

  return (
    <DashBoardStyleDiv>
        <h1>Dashboard</h1>
        <h3>Welcome {localStorage.getItem('username')}!</h3>

        <div className="buy-new">
            <TicketBook/>
        </div>

        <div className='user-tickets'>
            <h2>Tickets History</h2>
            
            <div className="tickets">

                {userTickets.length === 0 && <span>No ticket found</span>}
                {userTickets.length > 0 &&
                  userTickets.map((val,ind)=>(
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
    </DashBoardStyleDiv>
  )
}

export default DashboardSection