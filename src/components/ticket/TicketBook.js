import React, { useContext, useState } from 'react'
import { TicketBookDiv } from './TicketBookStyle'
import ticketImg from '../../img/ticket.png'
import AOS from 'aos';
import contextStore from '../../context/contextFile';

const TicketBook = () => {

  const {userTickets,setUserTickets} = useContext(contextStore);

  const [ticketData, setticketData] = useState({
    name:"",
    flight:"",
    date:"",
    source:"",
    destination:""
  })

  const onBookHandler=async()=>{
    const response = await fetch(`http://localhost:5000/skyview/buyTicket/${localStorage.getItem('token')}`,{
      method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify({source:ticketData.source,destination:ticketData.destination,price:570,date:ticketData.date,plane:ticketData.flight,trip:"round",seats:5})
    });

    const json = await response.json();
    setUserTickets(userTickets.concat(json))
    setticketData({
      name:"",
      flight:"",
      date:"",
      source:"",
      destination:""
    })

  }

  return (


    <TicketBookDiv>
       <h1>Book Your Ticket Now!</h1>

       <img src={ticketImg} className='ticket-book'  alt="ticket" />

       <div className="ticket-form" >
            <div className="f-1">
                <input type="text" value={ticketData.name} onChange={ev=>setticketData({...ticketData,name:ev.target.value})}/>
                <input type="text" value={ticketData.flight} onChange={ev=>setticketData({...ticketData,flight:ev.target.value})}/>
                <input type="date" value={ticketData.date} onChange={ev=>setticketData({...ticketData,date:ev.target.value})}/>
            </div>
            <div className="f-2">
                <input type="text" value={ticketData.source} onChange={ev=>setticketData({...ticketData,source:ev.target.value})}/>
                <input type="text" style={{marginLeft:"22%"}} value={ticketData.destination} onChange={ev=>setticketData({...ticketData,destination:ev.target.value})}/>
            </div>

            <div className="reflect">
              <div className="r-name">{ticketData.name}</div>
              <div className="r-flight">{ticketData.flight}</div>
              <div className="r-date">{ticketData.date}</div>
              <div className="r-from">
                {
                  ticketData.source.length>0 &&
                  <div>{ticketData.source} To {ticketData.destination}</div>
                }

              </div>
            </div>

            <button onClick={onBookHandler}>Book Ticket</button>
       </div>
    </TicketBookDiv>
  )
}

export default TicketBook