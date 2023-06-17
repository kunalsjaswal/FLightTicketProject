import React, { useEffect, useState } from 'react'
import Component1 from '../home_component_1/component_1'
import LoginPage from '../login/LoginPage'
import SearchTicketPage from '../SearchTicket/SearchTicketPage'
import TrendigCities from '../cities/TrendigCities'
import Footer from '../footer/Footer'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  console.log("errro")

  // const navigate = useNavigate()
  // useEffect(()=>{
  //   if(localStorage.getItem('token')){
  //     navigate('/dashboard',{replace:true})
  //   }
  // },[])

  return (
    <>
      <Component1/>
      <SearchTicketPage/>
      <LoginPage/>
      <TrendigCities/>
      <Footer/>
    </>
  )
}

export default HomePage