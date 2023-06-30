import React from 'react'
import { FooterDiv } from './FooterStyle'
import logo from '../../img/favicon.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
<FooterDiv>
        <img src={logo} alt="logo" />
        <h2>Sky view</h2>
        <h4>join with us on</h4>
        <div className="connections">
            <FacebookIcon fontSize='large' style={{marginRight:"1%"}}/>
            <TwitterIcon fontSize='large' style={{marginRight:"1%"}}/>
            <EmailIcon fontSize='large' style={{marginRight:"1%"}}/>
            <InstagramIcon fontSize='large'/>
        </div>

    </FooterDiv>
  )
}

export default Footer