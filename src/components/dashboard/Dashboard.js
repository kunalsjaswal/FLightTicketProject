import React, { useContext, useEffect } from 'react'
import contextStore from '../../context/contextFile'
import Component1 from '../home_component_1/component_1';
import SearchTicketPage from '../SearchTicket/SearchTicketPage';
import TrendigCities from '../cities/TrendigCities';
import Footer from '../footer/Footer';
import { useNavigate } from 'react-router-dom';
import DashboardSection from './DashboardSection';

const Dashboard = () => {

    const {getUserApi,loginDetails,userData} = useContext(contextStore);
    const navigate= useNavigate();

    useEffect(()=>{
        if(localStorage.getItem('token')){
            getUserApi(loginDetails.id)
        }else{
            navigate('/home');
        }
    },[])

  return (
    <div>
        <Component1/>
        <SearchTicketPage/>
        <DashboardSection/>
        <TrendigCities/>
        <Footer/>
    </div>
  )
}

export default Dashboard