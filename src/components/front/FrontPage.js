import React, { useContext } from 'react'
import runwayImg from '../../img/runway-1.png'
import planeImg from '../../img/plane1.png'
import { FrontPageDiv } from './FrontStyle'
import { useNavigate } from 'react-router-dom';
import contextStore from '../../context/contextFile';

function FrontPage() {
  const {loginDetails}= useContext(contextStore)

  const navigate = useNavigate();

  setInterval(()=>{
    if(localStorage.getItem('token')){
      navigate('/dashboard',{replace:true});
    }else if(localStorage.getItem('adminId')){
      navigate('/adminPage',{replace:true});
    }else{
      navigate('/home',{replace:true});
    }
  },3300)
  
  return (
    <FrontPageDiv>
      <div className="anim-circle">
        <img src={runwayImg} className='clouds-1' alt="clouds" />
        <img src={planeImg} className='flight-1' alt="plane" />

      </div>
    </FrontPageDiv>
  )
}

export default FrontPage