import React from 'react'
import { Routes,Route } from 'react-router-dom'
import FrontPage from '../front/FrontPage'
import HomePage from '../home/HomePage'
import Dashboard from '../dashboard/Dashboard'
import AdminPage from '../admin/AdminPage'

const RoutesPage = () => {

  return (
    <Routes>
        <Route  path='/' element={<FrontPage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/adminPage' element={<AdminPage/>}/>
    </Routes>
  )
}

export default RoutesPage