import React, { useContext, useEffect } from 'react'
import logo from '../../img/favicon.png'
import gif1 from '../../img/flight_TakeOff.gif'
import boardImg from '../../img/board2.gif'
import { HomePageDiv } from './HomePageStyle'
import { HashLink as Link } from 'react-router-hash-link'


const Component1 = () => {

  
  const handleLogout=()=>{
    localStorage.removeItem('token')
  }

  return (
    <HomePageDiv data-aos="fade">
        
        <div className='runway'>
            {/* website name and logo  */}
            <h1>
                <img src={logo} alt="logo" />
                <span>Sky view</span>
            </h1>

            {/* 1st page image / animation  */}
            <img src={gif1} alt="runway" />

            {/* right part including - img , checkticket, login   */}
            <div className='right-part'>
                <img src={boardImg} alt="board" />

                <Link to="#shift-1">
                  <div className="buttons check-ticket">color - transparent</div>
                </Link>
                {
                  !localStorage.getItem('token') && 
                  <Link to="#shift-2">
                    <div className="buttons login-signup">color - transparent</div>
                  </Link>
                }
                {
                  localStorage.getItem('token') && 
                  <Link to="/home">
                    <div className="buttons logout" onClick={handleLogout}>color - transparent</div>
                  </Link>
                }
                <Link to="#shift-3">
                <div className="buttons explore">color - transparent</div>
                </Link>

            </div>
        </div>

    </HomePageDiv>
  )
}

export default Component1