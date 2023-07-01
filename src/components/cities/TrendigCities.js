import React from 'react'
import { TrendDiv } from './TrendingStyle'
import bang from '../../img/cities/bangalurur.jpg'
import chd from '../../img/cities/chd.jpg'
import chen from '../../img/cities/chennai.jpg'
import delhi from '../../img/cities/delhi.jpg'
import mumb from '../../img/cities/mumbai.jpg'
import sri from '../../img/cities/srinagar.jpg'

const TrendigCities = () => {
    const cities_list=[bang,chd,chen,delhi,mumb,sri];
    const text1 = "Flights from Delhi International Airport 18 Jun - 25 Jun · Round trip"
  return (
    <TrendDiv id="shift-3">
        <h1>Trending Cities</h1>
        <h3>Book flights to a destination popular with travellers from india</h3>
        
        <div className="image-items">
            <div  data-aos="fade-left">
                <img src={cities_list[0]} alt="city" />
                <p>Bangaluru <br /> {text1}</p>
            </div>
            <div  data-aos="fade-left">
                <img src={cities_list[1]} alt="city" />
                <p>Chandigarh <br /> {text1}</p>
            </div>
            <div  data-aos="fade-left">
                <img src={cities_list[2]} alt="city" />
                <p>Chennai <br /> {text1}</p>
            </div>
            <div  data-aos="fade-right">
                <img src={cities_list[3]} alt="city" />
                <p>Delhi <br /> {text1}</p>
            </div>
            <div  data-aos="fade-right">
                <img src={cities_list[4]} alt="city" />
                <p>Mumbai <br /> {text1}</p>
            </div>
            <div  data-aos="fade-right">
                <img src={cities_list[5]} alt="city" />
                <p>Srinagar <br /> {text1}</p>
            </div>
        </div>
    </TrendDiv>
  )
}

export default TrendigCities